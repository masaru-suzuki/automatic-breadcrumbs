import { companyList } from '@/constants/company';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="grid gap-4">
      <h1 className="">home</h1>
      <div className="p-2 grid gap-8 content-start">
        <h2 className="text-2xl font-bold">カスタムパンクズ</h2>
        <p>
          <Link href="/customBreadcrumbs">カスタムパンクズページ</Link>
        </p>
        <hr />
        <h2 className="text-2xl font-bold">動的コンテンツ</h2>
        <p className="font-bold text-lg">
          パンクズのラベル置き換えロジックあり
        </p>
        <Link href="/end-users">エンドユーザー一覧</Link>
        <p className="font-bold text-lg mt-8">
          パンクズのラベル置き換えロジックなし
        </p>
        {companyList.map((company) => {
          const { companyId, label } = company;
          return (
            <div key={companyId}>
              <Link href={`/company/${companyId}`}>{label}</Link>
            </div>
          );
        })}
        <hr />
        <h2 className="text-2xl font-bold">静的コンテンツ（下層ページ有り）</h2>
        <p>
          <Link href="/company">企業情報</Link>
        </p>
      </div>
    </div>
  );
}
