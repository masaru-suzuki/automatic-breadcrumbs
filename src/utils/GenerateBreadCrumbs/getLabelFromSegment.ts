import { siteMap } from '@/constants/site';
import { findSegmentInSiteMap } from './findSegmentInSiteMap';
import { generateDynamicLabel } from './generateDynamicLabel';

/**
 * パスのセグメントに基づいて、適切なラベルを取得する関数
 *
 * @param segments - 現在のパスをスラッシュで分割したセグメントの配列
 * @param params - 動的ルートのパラメータを含むオブジェクト
 * @returns 該当するセグメントのラベル文字列。動的セグメントの場合は、paramsの値で置換されたラベル
 *
 * @example
 * const segments = ['end-users', 'tomiz', 'setting'];
 * const params = { userId: "tomiz" };
 * const label = getLabelFromSegment(segments, params);
 * console.log(label); // "tomizの詳細画面"
 */
export const getLabelFromSegment = (
  segments: string[],
  params: Record<string, string>
): string => {
  const matchedSegment = findSegmentInSiteMap(segments, siteMap);

  if (!matchedSegment) {
    throw new Error('No matching segment found in siteMap');
  }

  if (matchedSegment.dynamic) {
    return generateDynamicLabel({ title: matchedSegment.title, params });
  }

  return matchedSegment.title;
};
