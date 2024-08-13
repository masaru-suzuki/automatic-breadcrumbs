'use client';

import { PageHeader } from '@/components/PageHeader';
import { generateBreadCrumbs } from '@/utils/GenerateBreadCrumbs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Page() {
  const pathname = usePathname();
  const breadcrumbs = generateBreadCrumbs({ pathname });

  return (
    <>
      <PageHeader breadcrumbs={breadcrumbs} />
      <div className="p-2 grid gap-8 content-start">
        <div>企業TOPページコンテンツ</div>
        <div className="grid gap-2">
          <Link href="/company/history">沿革</Link>
          <Link href="/company/officers">役員</Link>
          <Link href="/">TOP</Link>
        </div>
      </div>
    </>
  );
}
