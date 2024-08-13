'use client';

import { PageHeader } from '@/components/PageHeader';
import { generateBreadCrumbs } from '@/utils/GenerateBreadCrumbs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const userIdList = ['1', '2', '3', '4', '5'];

export default function Page() {
  const pathname = usePathname();
  const breadcrumbs = generateBreadCrumbs({ pathname });

  return (
    <>
      <PageHeader breadcrumbs={breadcrumbs} />
      <div className="p-2 grid gap-8 content-start">
        <div>ユーザー一覧ページコンテンツ</div>
        <div className="grid gap-2">
          {userIdList.map((userId) => (
            <Link href={`/end-users/${userId}`} key={userId}>
              ユーザー: {userId} の管理画面
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
