import { useBreadcrumbsContext } from '@/context/BreadcrumbsContext';
import { Breadcrumb, generateBreadCrumbs } from '@/utils/GenerateBreadCrumbs';
import { useParams, usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * useBreadcrumbs カスタムフック
 * パンくずリストを生成し、BreadcrumbsContextに設定します。
 *
 * @param customBreadcrumbs - カスタムパンくずリストを手動で指定する場合に使用。指定がない場合は自動生成される。
 */
export const useBreadcrumbs = (customBreadcrumbs?: Breadcrumb[]): void => {
  const pathname = usePathname();
  const params = useParams();

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
