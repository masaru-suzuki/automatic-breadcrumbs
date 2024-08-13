import { getShopNameById } from '@/constants/favoriteShop';
import { getUserNameById } from '@/constants/user';

type GenerateDynamicLabelArg = {
  title: string;
  params: Record<string, string>;
};

/**
 * 動的なタイトル文字列内のプレースホルダーを、指定されたパラメータの値で置換する関数
 *
 * @param title - プレースホルダーを含む動的なタイトル文字列 (例: "${userId}の詳細画面")
 * @param params - プレースホルダーに対応する値を持つオブジェクト (例: { userId: "tomiz" })
 * @returns プレースホルダーが指定されたパラメータの値で置換されたタイトル文字列
 *
 * @example
 * const title = "${userId}の詳細画面";
 * const params = { userId: "tomiz" };
 * const result = generateDynamicLabel({ title, params });
 * console.log(result); // "tomizの詳細画面"
 */
export const generateDynamicLabel = ({
  title,
  params,
}: GenerateDynamicLabelArg): string => {
  // paramsのキーに基づいてカスタムラベルを設定
  const customizedParams = { ...params };

  if (params.userId) {
    const userName = getUserNameById(params.userId);
    if (userName) {
      customizedParams.userId = userName;
    }
  }

  if (params.favoriteShopId) {
    const shopName = getShopNameById(params.favoriteShopId);
    if (shopName) {
      customizedParams.favoriteShopId = shopName;
    }
  }

  // NOTE: 比較のため、あえて企業に関しては、IDをそのまま表示

  return title.replace(/\${(.*?)}/g, (_, key) => customizedParams[key] || '');
};
