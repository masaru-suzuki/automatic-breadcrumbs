import { siteMap } from '@/app/constants/site';
import { findSegmentInSiteMap } from './findSegmentInSiteMap';
import { generateDynamicLabel } from './generateDynamicLabel';
export const getLabelFromSegment = (
  segments: string[],
  params: Record<string, string>
) => {
  const matchedSegment = findSegmentInSiteMap(segments, siteMap);

  if (!matchedSegment) {
    return segments[segments.length - 1]; // 該当するセグメントがない場合は、セグメント名をそのまま使用
  }

  if (matchedSegment.dynamic) {
    return generateDynamicLabel({ title: matchedSegment.title, params });
  }

  return matchedSegment.title;
};
