export const userList = [
  {
    userId: 'user-1',
    name: '玉ねぎ',
  },
  {
    userId: 'user-2',
    name: 'なす',
  },
  {
    userId: 'user-3',
    name: 'きゅうり',
  },
  {
    userId: 'user-4',
    name: 'トマト',
  },
  {
    userId: 'user-5',
    name: 'ピーマン',
  },
];

export const getUserNameById = (userId: string): string | undefined => {
  const user = userList.find((user) => user.userId === userId);
  return user?.name;
};
