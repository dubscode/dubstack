import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label='Breadcrumb' className='mb-8'>
      <ol className='flex items-center gap-2 text-sm text-muted-foreground'>
        {items.map((item, index) => (
          <li key={item.label} className='flex items-center gap-2'>
            {index > 0 && <ChevronRight className='h-4 w-4' />}
            {item.href ? (
              <Link
                href={item.href}
                className='transition-colors hover:text-foreground'
              >
                {item.label}
              </Link>
            ) : (
              <span className='text-foreground'>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
