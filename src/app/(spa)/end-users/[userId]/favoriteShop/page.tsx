'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';
import { generateBreadCrumbs } from '@/utils/GenerateBreadCrumbs';
import { userList } from '@/constants/user';
import { favoriteShopList } from '@/constants/favoriteShop';

type Props = {
  params: {
    userId: string;
  };
};
export default function Page({ params }: Props) {
  const { userId } = params;
  const pathname = usePathname();
  const breadcrumbs = generateBreadCrumbs({ pathname, params });
  const userName = userList.find((user) => user.userId === userId)?.name;

  return (
    <>
      <PageHeader breadcrumbs={breadcrumbs} />
      <div className="p-2 grid gap-8 content-start">
        <div>お気に入り店舗一覧ページコンテンツ</div>
        <hr />
        <Link href={`/end-users/${breadcrumbs[breadcrumbs.length - 1]?.label}`}>
          ユーザー管理画面
        </Link>
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
    </>
  );
}
