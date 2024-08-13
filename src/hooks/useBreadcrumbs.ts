import { useBreadcrumbsContext } from '@/context/BreadcrumbsContext';
import { Breadcrumb, generateBreadCrumbs } from '@/utils/GenerateBreadCrumbs';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export const useBreadcrumbs = (
  params?: Record<string, string>,
  customBreadcrumbs?: Breadcrumb[]
) => {
  const pathname = usePathname();
  const { setBreadcrumbs } = useBreadcrumbsContext();

  useEffect(() => {
    if (customBreadcrumbs && customBreadcrumbs.length > 0) {
      setBreadcrumbs(customBreadcrumbs);
    } else {
      const breadcrumbs = generateBreadCrumbs({ pathname, params });
      setBreadcrumbs(breadcrumbs);
    }
  }, [pathname, params, setBreadcrumbs]);
};
