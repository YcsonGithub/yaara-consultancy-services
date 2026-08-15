/**
 * Renders a JSON-LD structured-data script tag.
 *
 * Usage:
 *   import { organizationSchema } from "@/lib/schema";
 *   import { JsonLd } from "@/components/site/json-ld";
 *   <JsonLd data={organizationSchema()} />
 */
export function JsonLd({ data }: { data: object | null | undefined }) {
  if (!data) return null;
  return (
    <script
      type="application/ld+json"
      // Structured data is generated server-side from our own constants —
      // never from user input — so dangerouslySetInnerHTML is safe here.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
