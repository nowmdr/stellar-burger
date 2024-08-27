import { FC } from 'react';
import { AppHeaderUI } from '@ui';
import { useSelector } from '../../services/store';
import { userData } from '../../services/user-slice';
export const AppHeader: FC = () => {
  const user = useSelector(userData);
  return <AppHeaderUI userName={user?.name} />;
};
