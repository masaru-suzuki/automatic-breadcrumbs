import Link from 'next/link';

const companyList = [
  { companyId: 'tomiz', label: '富澤商店' },
  { companyId: 'sapporo', label: 'サッポロビール' },
  { companyId: 'suntory', label: 'サントリー' },
];

export default function Page() {
  return (
    <div className="grid gap-4">
      <h1 className="">home</h1>
      <div className="p-2 grid gap-8 content-start">
        <p>
          <Link href="/end-users">エンドユーザー一覧</Link>
        </p>
        <p>
          <Link href="/providers">プロバイダ設定</Link>
        </p>
        {companyList.map((company) => {
          const { companyId, label } = company;
          return (
            <div key={companyId}>
              <Link href={`/${companyId}`}>{label}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
