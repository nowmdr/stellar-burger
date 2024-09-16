import { FC } from 'react';
import { AppHeaderUI } from '@ui';
import { useSelector } from '../../services/store';
import { userData } from '../../services/slices/userSlice/userSlice';
export const AppHeader: FC = () => {
  const user = useSelector(userData);
  return <AppHeaderUI userName={user?.name} />;
};
