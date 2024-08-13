'use client';

import { useBreadcrumbs } from '@/hooks/useBreadcrumbs';
import Link from 'next/link';

export default function Page() {
  useBreadcrumbs({});

  return (
    <div className="p-2 grid gap-8 content-start">
      <div>沿革ページコンテンツ</div>
      <div className="grid gap-2">
        <Link href="/company/officers">役員</Link>
        <Link href="/company">企業TOP</Link>
      </div>
    </div>
  );
}
