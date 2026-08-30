FROM node:20-slim AS builder
WORKDIR /app

# Prisma / esbuild need openssl and ca-certificates at build time
RUN apt-get update -y \
    && apt-get install -y --no-install-recommends openssl ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Install pnpm (v10 to match the lockfile generated with pnpm 10)
RUN npm install -g pnpm@10

# Cache dependencies layer
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

# Copy the rest of the source
COPY . .

# Generate the Prisma client and build Next.js
RUN npx prisma generate
ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm build

# ---------- runtime ----------
FROM node:20-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=8080

RUN apt-get update -y \
    && apt-get install -y --no-install-recommends openssl ca-certificates \
    && rm -rf /var/lib/apt/lists/*

COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml ./
COPY --from=builder /app/pnpm-workspace.yaml ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/next.config.mjs ./
RUN mkdir -p public

EXPOSE 8080
# Zeabur injects PORT and HOST; bind to 0.0.0.0 so the health check can reach it.
# Use the local next binary so we never depend on a global pnpm at runtime.
CMD ["sh", "-c", "exec node_modules/.bin/next start -p ${PORT:-8080} -H 0.0.0.0"]
