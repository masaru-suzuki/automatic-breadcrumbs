export type SiteMap = {
  title: string;
  path: string;
  dynamic: boolean;
  children?: SiteMap[];
};

export const siteMap: SiteMap[] = [
  {
    title: 'エンドユーザー一覧',
    path: 'end-users',
    dynamic: false,
    children: [
      {
        title: '${userId}の詳細画面',
        path: 'userId',
        dynamic: true,
        children: [
          {
            title: '設定',
            path: 'setting',
            dynamic: false,
          },
        ],
      },
    ],
  },
  {
    title: '顧客一覧',
    path: 'customers',
    dynamic: false,
    children: [
      {
        title: '顧客詳細',
        path: 'customerId',
        dynamic: true,
        children: [
          {
            title: '設定',
            path: 'settings',
            dynamic: false,
          },
        ],
      },
    ],
  },
  {
    title: '${companyId}の企業詳細',
    path: 'companyId',
    dynamic: true,
  },
  /*
   * NGパターン
   * {
   *   title: 'companyId（static）',
   *   path: 'companyId',
   *   dynamic: false,
   * },
   */
  {
    title: '企業情報',
    path: 'company',
    dynamic: false,
    children: [
      {
        path: 'history',
        title: '沿革',
        dynamic: false,
      },
      {
        path: 'officers',
        title: '役員',
        dynamic: false,
      },
    ],
  },
];
