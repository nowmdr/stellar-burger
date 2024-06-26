import { useSelector, useDispatch } from '../../services/store';

import styles from './constructor-page.module.css';
import { RootState } from '../../services/store';
import { fetchIngredients } from '../../services/ingredients-slice';
import { BurgerIngredients } from '../../components';
import { BurgerConstructor } from '../../components';
import { Preloader } from '../../components/ui';
import { FC, useEffect } from 'react';

export const ConstructorPage: FC = () => {
  /** TODO: взять переменную из стора */
  const isIngredientsLoading = false;
  const dispatch = useDispatch();
  // const tracks = useSelector<RootState>((state) => state);
  const { data, loading } = useSelector(
    (state: RootState) => state.ingredientsSlice
  );

  // const data = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchIngredients());
    // console.log('fetchData');
    console.log(data);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <main className={styles.containerMain}>
          <h1
            className={`${styles.title} text text_type_main-large mt-10 mb-5 pl-5`}
          >
            Соберите бургер
          </h1>
          <div className={`${styles.main} pl-5 pr-5`}>
            <BurgerIngredients />
            <BurgerConstructor />
          </div>
        </main>
      )}
    </>
  );
};
