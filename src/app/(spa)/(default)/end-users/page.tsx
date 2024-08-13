'use client';

import { userList } from '@/constants/user';
import { useBreadcrumbs } from '@/hooks/useBreadcrumbs';
import Link from 'next/link';

export default function Page() {
  useBreadcrumbs({});

  return (
    <div className="p-2 grid gap-8 content-start">
      <div>ユーザー一覧ページコンテンツ</div>
      <Link href="/">TOP</Link>
      <hr />
      <div className="grid gap-2">
        {userList.map((user) => {
          const { userId, name } = user;
          return (
            <Link href={`/end-users/${userId}`} key={userId}>
              ユーザー: {name} の管理画面
            </Link>
          );
        })}
      </div>
    </div>
  );
}
