'use client';

import { PageHeader } from '@/components/PageHeader';
import { userList } from '@/constants/user';
import { generateBreadCrumbs } from '@/utils/GenerateBreadCrumbs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Params = {
  params: {
    userId: string;
  };
};
export default function Page({ params }: Params) {
  const { userId } = params;
  const pathname = usePathname();
  const breadcrumbs = generateBreadCrumbs({ pathname, params });
  const userName = userList.find((user) => user.userId === userId)?.name;
  return (
    <>
      <PageHeader breadcrumbs={breadcrumbs} />
      <div className="p-2 grid gap-8 content-start">
        <div>ユーザー:{userName}の管理画面コンテンツ</div>
        <Link href={`/end-users/${userId}/setting`}>詳細設定画面</Link>
        <Link href="/end-users">ユーザー一覧</Link>
      </div>
    </>
  );
}
