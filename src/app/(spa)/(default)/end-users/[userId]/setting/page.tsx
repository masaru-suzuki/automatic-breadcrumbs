'use client';

import Link from 'next/link';
import { getUserNameById } from '@/constants/user';
import { useBreadcrumbs } from '@/hooks/useBreadcrumbs';

type Props = {
  params: {
    userId: string;
  };
};
export default function Page({ params }: Props) {
  const { userId } = params;
  useBreadcrumbs(params);
  const userName = getUserNameById(userId);

  return (
    <div className="p-2 grid gap-8 content-start">
      <div>ユーザー: {userName} の詳細設定コンテンツ</div>
      <Link href={`/end-users/${userId}`}>{userName}の詳細画面</Link>
      <Link href="/end-users">エンドユーザー一覧</Link>
    </div>
  );
}
