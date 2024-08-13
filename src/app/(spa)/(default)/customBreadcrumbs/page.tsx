'use client';

import { useBreadcrumbs } from '@/hooks/useBreadcrumbs';
import Link from 'next/link';

export default function Page() {
  const customBreadcrumbs = [
    {
      label: 'カスタムパンクズ1',
      href: '/',
    },
    {
      label: 'エンドユーザー',
      href: '/end-users',
    },
    {
      label: 'カスタムパンクズを実装2',
      href: '/customBreadcrumbs',
    },
  ];
  useBreadcrumbs(undefined, customBreadcrumbs);

  return (
    <div className="p-2 grid gap-8 content-start">
      <div>カスタムパンクズページコンテンツ</div>
      <div className="grid gap-2">
        <Link href="/">TOP</Link>
      </div>
    </div>
  );
}
