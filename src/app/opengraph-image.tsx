import { createOgImage } from "@/lib/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return createOgImage({ tagline: "Daily counseling & mental health industry news" });
}
