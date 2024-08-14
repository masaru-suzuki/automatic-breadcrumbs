import { useBreadcrumbsContext } from '@/context/BreadcrumbsContext';
import { Breadcrumb, generateBreadCrumbs } from '@/utils/GenerateBreadCrumbs';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

type UseBreadcrumbsArg = {
  params?: Record<string, string>;
  customBreadcrumbs?: Breadcrumb[];
};

/**
 * useBreadcrumbs カスタムフック
 *
 * このフックは、現在のURLパスとオプションのカスタムパンくずリストを使用して
 * パンくずリストを生成し、BreadcrumbsContextに設定します。
 *
 * @param params - URLパスに含まれる動的ルートパラメータを含むオブジェクト (例: { userId: "1" })
 * @param customBreadcrumbs - カスタムパンくずリストを手動で指定する場合に使用。指定がない場合は自動生成される。
 */
export const useBreadcrumbs = ({
  params,
  customBreadcrumbs,
}: UseBreadcrumbsArg): void => {
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
