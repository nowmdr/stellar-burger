import { FC } from 'react';
import { Preloader } from '../ui/preloader';
import { useParams } from 'react-router-dom';
import { IngredientDetailsUI } from '../ui/ingredient-details';
import { useSelector, RootState } from '../../services/store';

export const IngredientDetails: FC = () => {
  const { id } = useParams();
  const allIngredients = useSelector(
    (state: RootState) => state.ingredients.data
  );
  const ingredientData = allIngredients.find((item) => item._id === id);

  if (!ingredientData) {
    return <Preloader />;
  }

  return <IngredientDetailsUI ingredientData={ingredientData} />;
};
