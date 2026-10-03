# SEO operations guide

## Environment variables

Set these in the deployment environment (or `.env.local` for local testing):

- `NEXT_PUBLIC_SITE_URL` — production site URL. The application currently defaults to the verified production URL.
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — optional GA4 measurement ID. The legacy `NEXT_PUBLIC_GA4_ID` remains supported.
- `NEXT_PUBLIC_GTM_ID` — optional Google Tag Manager container ID.
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` — optional Google Search Console HTML verification token. The legacy `NEXT_PUBLIC_GSC_VERIFICATION` remains supported.

Never commit `.env.local`, credentials, or personal analytics data.

## Search Console and analytics setup

1. Verify the domain in Google Search Console using the DNS or HTML method.
2. If using HTML verification, put the token in `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` and redeploy.
3. Create a GA4 property and add its measurement ID to `NEXT_PUBLIC_GA_MEASUREMENT_ID`, then redeploy.
4. Configure consent-aware tags in GTM if `NEXT_PUBLIC_GTM_ID` is used.
5. Submit `https://www.yaaraconsultancyservices.com/sitemap.xml` in Search Console.

The code does not claim that any external property or verification is complete.

## Technical SEO maintenance

- Keep public page metadata and canonicals unique.
- Add only canonical, public URLs to `src/app/sitemap.ts`.
- Update the sitemap's meaningful `lastModified` values when content really changes.
- Keep business contact details in `src/lib/site.ts`; reuse them in visible UI and schema.
- Validate JSON-LD in Google's Rich Results Test after schema changes.
- Use official government sources when updating compliance-calendar dates.

## Redirects and content workflow

When a public URL must change, add a permanent redirect in `next.config.ts`, update internal links, metadata, and the sitemap in the same change. Publish useful, reviewed explainers rather than thin keyword pages.

## Deployment checklist

- Run `npm run lint`, `npm run typecheck`, and `npm run build`.
- Check `/robots.txt` and `/sitemap.xml` in production.
- Check rendered title, description, canonical, OG tags, and JSON-LD on key routes.
- Test phone, WhatsApp, email, and consultation conversion events after analytics consent.
- Confirm forms, navigation, 404 behavior, and mobile layouts still work.
