import { ProfileOrdersUI } from '@ui-pages';
import { TOrder } from '@utils-types';
import { FC } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from '../../services/store';
import {
  loading,
  userOrders,
  getUserOrders
} from '../../services/slices/userSlice/userSlice';
import { Preloader } from '@ui';

export const ProfileOrders: FC = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(loading);
  const orders: TOrder[] = useSelector(userOrders);
  useEffect(() => {
    dispatch(getUserOrders());
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return <ProfileOrdersUI orders={orders} />;
};
