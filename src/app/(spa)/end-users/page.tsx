'use client';

import { PageHeader } from '@/components/PageHeader';
import { userList } from '@/constants/user';
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
        <div>ユーザー一覧ページコンテンツ</div>
        <Link href="/">TOP</Link>
        <hr />
        <div className="grid gap-2">
          {userList.map((user) => {
            const { userId, name } = user;
            return (
              <Link href={`/end-users/${userId}`} key={userId}>
                ユーザー: {name} の管理画面
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
