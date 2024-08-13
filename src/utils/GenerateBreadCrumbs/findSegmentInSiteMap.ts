import { type SiteMap } from '@/app/constants/site';

/**
 * パスのセグメントに基づいて、対応するサイトマップエントリを再帰的に検索する関数
 *
 * @param segments - 現在のパスをスラッシュで分割したセグメントの配列
 * @param currentSiteMap - 現在探索中のサイトマップ配列
 * @returns 一致するセグメントのSiteMapオブジェクト、または該当するものがない場合はundefined
 *
 * @example
 * const segments = ['end-users', 'tomiz', 'setting'];
 * const siteMap = [
 *   {
 *     title: 'エンドユーザー一覧',
 *     path: 'end-users',
 *     dynamic: false,
 *     children: [
 *       {
 *         title: '${userId}の詳細画面',
 *         path: 'userId',
 *         dynamic: true,
 *         children: [
 *           {
 *             title: '設定',
 *             path: 'setting',
 *             dynamic: false,
 *           },
 *         ],
 *       },
 *     ],
 *   },
 * ];
 * const matchedSegment = findSegmentInSiteMap(segments, siteMap);
 * console.log(matchedSegment);
 * // 出力:
 * // { title: "設定", path: "setting", dynamic: false }
 */
export const findSegmentInSiteMap = (
  segments: string[],
  currentSiteMap: SiteMap[]
): SiteMap | undefined => {
  if (segments.length === 0) return undefined;

  const [currentSegment, ...restSegments] = segments;
  const matchedSegment = currentSiteMap.find(
    (item) => item.path === currentSegment || item.dynamic
  );

  if (restSegments.length === 0 || !matchedSegment) {
    return matchedSegment;
  }

  return findSegmentInSiteMap(restSegments, matchedSegment.children || []);
};
