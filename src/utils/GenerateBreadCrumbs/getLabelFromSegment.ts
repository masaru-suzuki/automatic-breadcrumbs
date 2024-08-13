import { siteMap } from '@/app/constants/site';
import { findSegmentInSiteMap } from './findSegmentInSiteMap';

// セグメントごとに適切なラベルを取得する関数
export const getLabelFromSegment = (
  segments: string[],
  params: Record<string, string>
) => {
  const matchedSegment = findSegmentInSiteMap(segments, siteMap);

  if (!matchedSegment) {
    return segments[segments.length - 1]; // 該当するセグメントがない場合は、セグメント名をそのまま使用
  }

  return matchedSegment.dynamic && params[matchedSegment.path]
    ? params[matchedSegment.path]
    : matchedSegment.title;
};
