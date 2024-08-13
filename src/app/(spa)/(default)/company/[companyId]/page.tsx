'use client';

import Link from 'next/link';
import { useBreadcrumbs } from '@/hooks/useBreadcrumbs';

type Props = {
  params: {
    companyId: string;
  };
};
export default function Page({ params }: Props) {
  useBreadcrumbs(params);
  const companyId = params.companyId;

  return (
    <div className="p-2 grid gap-8 content-start">
      <div>企業ID:{companyId}のコンテンツ</div>
      <Link href="/company">企業TOP</Link>
      <Link href="/">TOP</Link>
    </div>
  );
}
