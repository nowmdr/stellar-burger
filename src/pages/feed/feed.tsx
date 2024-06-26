import { Preloader } from '@ui';
import { FeedUI } from '@ui-pages';
import { TOrder } from '@utils-types';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from '../../services/store';
import { fetchFeeds } from '../../services/feed-slice';
import { RootState } from '../../services/store';

export const Feed: FC = () => {
  const dispatch = useDispatch();
  const { data: orders, loading } = useSelector(
    (state: RootState) => state.feedsSlice
  );

  /** TODO: взять переменную из стора */
  useEffect(() => {
    dispatch(fetchFeeds());
  }, [dispatch]);

  if (loading) {
    return <Preloader />;
  }

  return (
    <FeedUI
      orders={orders.orders}
      handleGetFeeds={() => dispatch(fetchFeeds())}
    />
  );
};
