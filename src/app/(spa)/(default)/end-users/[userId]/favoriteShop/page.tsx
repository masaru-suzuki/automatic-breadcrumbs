'use client';

import Link from 'next/link';
import { favoriteShopList } from '@/constants/favoriteShop';
import { useBreadcrumbs } from '@/hooks/useBreadcrumbs';
import { getUserNameById } from '@/constants/user';

type Props = {
  params: {
    userId: string;
  };
};
export default function Page({ params }: Props) {
  useBreadcrumbs();

  const { userId } = params;
  const userName = getUserNameById(userId);

  return (
    <div className="p-2 grid gap-8 content-start">
      <div>お気に入り店舗一覧ページコンテンツ</div>
      <hr />
      <Link href={`/end-users/${userId}`}>{userName}の詳細画面</Link>
      <Link href="/end-users">エンドユーザー一覧</Link>
      <hr />
      <h2>dynamic route（{userName}のお気に入り店舗一覧）</h2>
      <div className="grid gap-4">
        {favoriteShopList.map((shop) => {
          const { favoriteShopId, label } = shop;
          return (
            <div key={favoriteShopId}>
              <Link
                href={`/end-users/${userId}/favoriteShop/${favoriteShopId}`}
              >
                {label}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
