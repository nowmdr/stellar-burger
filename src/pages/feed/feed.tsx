import { Preloader } from '@ui';
import { FeedUI } from '@ui-pages';
import { TOrder } from '@utils-types';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from '../../services/store';
import { fetchFeeds, allOrders, loading } from '../../services/feed-slice';

export const Feed: FC = () => {
  const dispatch = useDispatch();
  const Orders: TOrder[] = useSelector(allOrders);
  const isLoading: boolean = useSelector(loading);

  useEffect(() => {
    dispatch(fetchFeeds());
  }, [dispatch]);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <FeedUI orders={Orders} handleGetFeeds={() => dispatch(fetchFeeds())} />
  );
};
