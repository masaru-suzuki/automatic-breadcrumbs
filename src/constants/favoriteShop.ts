export const favoriteShopList = [
  {
    favoriteShopId: 'shop-100',
    label: 'オイシックス',
  },
  {
    favoriteShopId: 'shop-200',
    label: '銀のさら',
  },
  {
    favoriteShopId: 'shop-300',
    label: '八代目儀兵衛',
  },
];

export const getShopNameById = (favoriteShopId: string): string | undefined => {
  const user = favoriteShopList.find(
    (shop) => shop.favoriteShopId === favoriteShopId
  );
  return user?.label;
};
