'use client';

import { favoriteShopList } from '@/constants/favoriteShop';
import { getUserNameById } from '@/constants/user';
import { useBreadcrumbs } from '@/hooks/useBreadcrumbs';
import Link from 'next/link';

type Params = {
  params: {
    userId: string;
  };
};
export default function Page({ params }: Params) {
  useBreadcrumbs(params);
  const { userId } = params;

  const userName = getUserNameById(userId);
  return (
    <div className="p-2 grid gap-8 content-start">
      <div>ユーザー:{userName}の管理画面コンテンツ</div>
      <Link href={`/end-users/${userId}/setting`}>詳細設定画面</Link>
      <Link href={`/end-users/${userId}/favoriteShop`}>
        {userName}のお気に入り店舗
      </Link>
      <Link href="/end-users">ユーザー一覧</Link>
      <Link href="/">TOP</Link>
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
  );
}
