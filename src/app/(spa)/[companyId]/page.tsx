'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';
import { generateBreadCrumbs } from '@/utils/GenerateBreadCrumbs';

type Props = {
  params: {
    companyId: string;
  };
};
export default function Page({ params }: Props) {
  const pathname = usePathname();
  const breadcrumbs = generateBreadCrumbs({ pathname, params });
  const companyId = params.companyId;

  return (
    <>
      <PageHeader breadcrumbs={breadcrumbs} />
      <div className="p-2 grid gap-8 content-start">
        <div>企業ID:{companyId}のコンテンツ</div>
        <Link href="/">TOP</Link>
      </div>
    </>
  );
}
