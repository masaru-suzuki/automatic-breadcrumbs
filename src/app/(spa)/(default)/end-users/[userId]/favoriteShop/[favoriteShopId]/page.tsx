'use client';

import { favoriteShopList } from '@/constants/favoriteShop';
import { userList } from '@/constants/user';
import { useBreadcrumbs } from '@/hooks/useBreadcrumbs';

type Params = {
  params: {
    userId: string;
    favoriteShopId: string;
  };
};
export default function Page({ params }: Params) {
  useBreadcrumbs(params);
  const { userId, favoriteShopId } = params;
  const userName = userList.find((user) => user.userId === userId)?.name;
  const shopName = favoriteShopList.find(
    (shop) => shop.favoriteShopId === favoriteShopId
  )?.label;

  return (
    <div className="p-2 grid gap-8 content-start">
      <div>
        ユーザー: {userName} のお気に入り店舗 （{shopName}）の詳細コンテンツ
      </div>
      <dl className="flex gap-4">
        <dt>電話番号:</dt>
        <dd>
          <a href="tel:+">000-0000-0000</a>
        </dd>
      </dl>
      <dl className="flex gap-4">
        <dt>住所:</dt>
        <dd>仙台市青葉区国分町1丁目1-1</dd>
      </dl>
    </div>
  );
}
