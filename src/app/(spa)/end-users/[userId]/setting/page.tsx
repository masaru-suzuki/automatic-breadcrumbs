'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';
import { siteMap, type SiteMapNode } from '@/app/constants/site';
import { generateBreadCrumbs } from '@/utils/GenerateBreadCrumbs';

type Props = {
  params: {
    userId: string;
  };
};
export default function Page({ params }: Props) {
  console.log(params);

  const pathname = usePathname();
  const breadcrumbs = generateBreadCrumbs({ pathname, params });
  // console.log(breadcrumbs);

  return (
    <>
      <PageHeader
        // title={`ユーザー: ${
        //   breadcrumbs[breadcrumbs.length - 1]?.title
        // }の詳細設定`}
        breadcrumbs={breadcrumbs}
      />
      <div className="p-2 grid gap-8 content-start">
        <div>
          ユーザー:{breadcrumbs[breadcrumbs.length - 1]?.title}
          の詳細設定コンテンツ
        </div>
        <Link href={`/end-users/${breadcrumbs[breadcrumbs.length - 1]?.title}`}>
          ユーザー管理画面
        </Link>
        <Link href="/end-users">エンドユーザー一覧</Link>
      </div>
    </>
  );
}
