import {useQuery} from '@tanstack/react-query';
import {getDiscounts} from '../services/getDiscounts';

export const useDiscountsData = () => {
  const {data} = useQuery({
    queryKey: ['discounts'],
    queryFn: getDiscounts,
  });

  const discountsData = data?.map(discount => discount.title);

  return {
    discountsData,
  };
};
