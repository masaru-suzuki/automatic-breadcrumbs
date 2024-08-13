import { siteMap, type SiteMap } from '@/app/constants/site';
import { getLabelFromSegment } from './getLabelFromSegment';

export type Breadcrumb = {
  label: string;
  href: string;
};

type GenerateBreadCrumbsArgs = {
  pathname: string;
  params?: Record<string, string>;
};

// パンくずリストを生成するメイン関数
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
