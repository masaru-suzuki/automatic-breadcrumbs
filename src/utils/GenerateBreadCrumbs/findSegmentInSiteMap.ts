import { type SiteMap } from '@/app/constants/site';

// セグメントに対応するラベルを取得する関数
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
