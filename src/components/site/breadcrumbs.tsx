import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type BreadcrumbItem = { name: string; path: string };

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-7">
      <ol className="flex flex-wrap items-center gap-1.5 font-sans text-[0.78rem] text-muted-foreground">
        {items.map((item, index) => (
          <li key={`${item.path}-${item.name}`} className="inline-flex items-center gap-1.5">
            {index > 0 && <ChevronRight aria-hidden="true" className="h-3.5 w-3.5" />}
            {index === items.length - 1 ? (
              <span aria-current="page" className="text-ink">{item.name}</span>
            ) : (
              <Link href={item.path} className="hover:text-ink hover:underline hover:underline-offset-2">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
