import { Preloader } from '@ui';
import { FeedUI } from '@ui-pages';
import { TOrder } from '@utils-types';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector, RootState } from '../../services/store';
import { fetchFeeds } from '../../services/feed-slice';
import { allOrders } from '../../services/feed-slice';

export const Feed: FC = () => {
  const dispatch = useDispatch();
  /** TODO: ошибка при использовании селектора allOrders из среза feed  */
  const allOrders: TOrder[] = useSelector(
    (state: RootState) => state.feed.data.orders
    // allOrders
  );
  const isLoading: boolean = useSelector(
    (state: RootState) => state.feed.loading
  );

  useEffect(() => {
    dispatch(fetchFeeds());
  }, [dispatch]);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <FeedUI orders={allOrders} handleGetFeeds={() => dispatch(fetchFeeds())} />
  );
};
