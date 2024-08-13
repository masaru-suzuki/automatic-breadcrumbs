import { useBreadcrumbsContext } from '@/context/BreadcrumbsContext';
import Link from 'next/link';

/**
 * ページヘッダー
 * @param title ページタイトル
 * @param breadcrumbs パンくずリスト
 * NOTE: ディレクトリ表とパンクズが連動していることを前提としている
 */
export const PageHeader = () => {
  const { breadcrumbs } = useBreadcrumbsContext();
  const lastBreadcrumb = breadcrumbs[breadcrumbs.length - 1];

  if (breadcrumbs.length <= 0) return null;

  return (
    <div>
      <nav aria-label="breadcrumbs" className="p-3 bg-blue-800">
        <ol className="flex gap-2 leading-none">
          {breadcrumbs.length > 1 &&
            breadcrumbs.slice(0, -1).map((breadcrumb, index) => (
              <li key={index}>
                <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
                {breadcrumbs.length - 2 !== index && <span>{' >'}</span>}
              </li>
            ))}
          <li>
            {breadcrumbs.length > 1 && <span>{' >'}</span>}
            <span>{lastBreadcrumb.label}</span>
          </li>
        </ol>
      </nav>
      <h1 className="text-2xl font-bold tracking-wider px-3 py-10 bg-green-900">
        {lastBreadcrumb.label}
      </h1>
    </div>
  );
};
