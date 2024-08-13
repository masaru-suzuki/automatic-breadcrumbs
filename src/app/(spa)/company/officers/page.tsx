'use client';

import { PageHeader } from '@/components/PageHeader';
import { generateBreadCrumbs } from '@/utils/GenerateBreadCrumbs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Page() {
  // const pathname = usePathname();
  // const breadcrumbs = generateBreadCrumbs({ pathname });
  const breadcrumbs = [
    {
      label: '企業情報',
      href: '/company',
    },
    {
      label: '役員',
      href: '/company/officers',
    },
  ];

  return (
    <>
      <PageHeader breadcrumbs={breadcrumbs} />
      <div className="p-2 grid gap-8 content-start">
        <div>役員ページコンテンツ</div>
        <div className="grid gap-2">
          <Link href="/company/history">沿革</Link>
          <Link href="/company">企業TOP</Link>
        </div>
      </div>
    </>
  );
}
