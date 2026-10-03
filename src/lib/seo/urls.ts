import { SITE } from "@/lib/site";

/** Build a production canonical URL from an internal pathname. */
export function canonicalUrl(pathname = "/"): string {
  const path = pathname === "/" ? "/" : `/${pathname.replace(/^\/+|\/+$/g, "")}`;
  return new URL(path, SITE.url).toString();
}
