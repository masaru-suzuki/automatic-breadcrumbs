import { useBreadcrumbsContext } from '@/context/BreadcrumbsContext';
import { generateBreadCrumbs } from '@/utils/GenerateBreadCrumbs';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export const useBreadcrumbs = (params?: Record<string, string>) => {
  const pathname = usePathname();
  const { setBreadcrumbs } = useBreadcrumbsContext();

  useEffect(() => {
    const breadcrumbs = generateBreadCrumbs({ pathname, params });
    setBreadcrumbs(breadcrumbs);
  }, [pathname, params, setBreadcrumbs]);
};
