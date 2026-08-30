import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SignJWT, jwtVerify } from "jose";

export const SESSION_COOKIE = "cn_session";
const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

type SessionPayload = {
  sub: string;
  email: string;
  role: string;
};

function secretKey() {
  const key = process.env.AUTH_SECRET;
  if (!key) {
    throw new Error("AUTH_SECRET is not set");
  }
  return new TextEncoder().encode(key);
}

export async function signSession(payload: SessionPayload): Promise<string> {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_MAX_AGE}s`)
    .sign(secretKey());
}

export async function verifySession(token: string): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, secretKey());
    return payload as unknown as SessionPayload;
  } catch {
    return null;
  }
}

// --- Server Component helpers ---

export async function getSession(): Promise<SessionPayload | null> {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  if (!token) return null;
  return verifySession(token);
}

export async function requireAdmin(): Promise<SessionPayload> {
  const session = await getSession();
  if (!session) {
    redirect("/admin/login");
  }
  return session;
}

export function sessionCookieName() {
  return SESSION_COOKIE;
}

export function sessionMaxAge() {
  return SESSION_MAX_AGE;
}
