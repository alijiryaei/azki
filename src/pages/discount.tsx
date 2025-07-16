import {Discount} from '@/features/discount';

export const DiscountPage = () => {
  return (
    <div className="w-full">
      <h1 className="mb-6 text-center text-2xl font-bold text-gray-800 md:text-right">
        بیمه شخص ثالث
      </h1>
      <Discount />
    </div>
  );
};
