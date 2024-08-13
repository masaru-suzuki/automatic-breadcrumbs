'use client';

import { PageHeader } from '@/components/PageHeader';
import { favoriteShopList } from '@/constants/favoriteShop';
import { userList } from '@/constants/user';
import { generateBreadCrumbs } from '@/utils/GenerateBreadCrumbs';
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
  const shopName = favoriteShopList.find(
    (shop) => shop.favoriteShopId === favoriteShopId
  )?.label;

  return (
    <>
      <PageHeader breadcrumbs={breadcrumbs} />
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
    </>
  );
}
