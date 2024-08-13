'use client';

import { BreadcrumbsProvider } from '@/context/BreadcrumbsContext';
import { PageHeader } from '@/components/PageHeader';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  /* NOTE: SPAの下層ページはPageHeaderとコンテンツ部分が必ず入る前提 */
  return (
    <BreadcrumbsProvider>
      <div className="grid grid-rows-[max-content_1fr]">
        <PageHeader />
        {children}
      </div>
    </BreadcrumbsProvider>
  );
}
1;
