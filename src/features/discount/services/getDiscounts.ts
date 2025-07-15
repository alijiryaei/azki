import request from '../../../services/axios';

type DiscountsModel = {
  id: number;
  title: string;
}[];
export const getDiscounts = async () => {
  const {data}: {data: DiscountsModel} = await request.get(
    'product/third/third-discounts',
  );

  return data;
};
