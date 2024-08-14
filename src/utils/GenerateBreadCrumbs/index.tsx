import { getLabelFromSegment } from './getLabelFromSegment';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

export type Breadcrumb = {
  label: string;
  href: string;
};

type GenerateBreadCrumbsArgs = {
  pathname: string;
  params?: Params;
};

/**
 * 現在のURLパスに基づいて、パンくずリストを生成する関数
 *
 * @param pathname - 現在のページのURLパス。例: "/end-users/tomiz/setting"
 * @param params - 動的ルートのパラメータを含むオブジェクト。例: { userId: "tomiz" }
 * @returns パンくずリストを表すBreadcrumbオブジェクトの配列。各オブジェクトはラベルとそのリンクを持つ
 *
 * @example
 * const pathname = "/end-users/tomiz/setting";
 * const params = { userId: "tomiz" };
 * const breadcrumbs = generateBreadCrumbs({ pathname, params });
 * console.log(breadcrumbs);
 * // 出力:
 * // [
 * //   { label: "エンドユーザー一覧", href: "/end-users" },
 * //   { label: "tomizの詳細画面", href: "/end-users/tomiz" },
 * //   { label: "設定", href: "/end-users/tomiz/setting" }
 * // ]
 */

export const generateBreadCrumbs = ({
  pathname,
  params = {},
}: GenerateBreadCrumbsArgs): Breadcrumb[] => {
  const segments = pathname.split('/').filter(Boolean); // パス名をセグメントに分解
  const breadcrumbs: Breadcrumb[] = [];
  let accumulatedPath = '';

  segments.forEach((segment, index) => {
    const pathSegments = segments.slice(0, index + 1);

    accumulatedPath += `/${segment}`;
    const label = getLabelFromSegment(pathSegments, params);
    breadcrumbs.push({
      label,
      href: accumulatedPath,
    });
  });

  return breadcrumbs;
};
