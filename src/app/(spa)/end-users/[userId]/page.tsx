'use client';

import { PageHeader } from '@/components/PageHeader';
import { favoriteShopList } from '@/constants/favoriteShop';
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
        <Link href={`/end-users/${userId}/favoriteShop`}>
          {userName}のお気に入り店舗
        </Link>
        <Link href="/end-users">ユーザー一覧</Link>
        <hr />
        <h2>dynamic route（{userName}のお気に入り店舗）</h2>
        <div className="grid gap-4">
          {favoriteShopList.map((shop) => {
            const { favoriteShopId, label } = shop;
            return (
              <Link
                href={`/end-users/${userId}/favoriteShop/${favoriteShopId}`}
                key={`${userId}-${favoriteShopId}`}
              >
                お気に入り店舗: {label}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
