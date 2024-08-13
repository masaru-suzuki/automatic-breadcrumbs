'use client';

import { PageHeader } from '@/components/PageHeader';
import { userList } from '@/constants/user';
import { generateBreadCrumbs } from '@/utils/GenerateBreadCrumbs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Params = {
  params: {
    userId: string;
    favoriteShopId: string;
  };
};
export default function Page({ params }: Params) {
  const { userId, favoriteShopId } = params;
  const pathname = usePathname();
  const breadcrumbs = generateBreadCrumbs({ pathname, params });
  const userName = userList.find((user) => user.userId === userId)?.name;

  return (
    <>
      <PageHeader breadcrumbs={breadcrumbs} />
      <div className="p-2 grid gap-8 content-start">
        <Link href={`/end-users/${userId}`}>
          ユーザー: {userName} の管理画面
        </Link>
      </div>
    </>
  );
}
