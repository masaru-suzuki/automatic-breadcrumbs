import { Breadcrumb } from '@/utils/GenerateBreadCrumbs';
import { createContext, useContext, useState, ReactNode } from 'react';

type BreadcrumbsContextType = {
  breadcrumbs: Breadcrumb[];
  setBreadcrumbs: (breadcrumbs: Breadcrumb[]) => void;
};

const BreadcrumbsContext = createContext<BreadcrumbsContextType | undefined>(
  undefined
);

export const useBreadcrumbsContext = () => {
  const context = useContext(BreadcrumbsContext);
  if (!context) {
    throw new Error(
      'BreadcrumbsProviderが設定されていません。BreadcrumbsProviderで囲ってください。'
    );
  }
  return context;
};

export const BreadcrumbsProvider = ({ children }: { children: ReactNode }) => {
  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>([]);

  return (
    <BreadcrumbsContext.Provider value={{ breadcrumbs, setBreadcrumbs }}>
      {children}
    </BreadcrumbsContext.Provider>
  );
};
