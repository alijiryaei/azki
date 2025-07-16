import {Insurances} from '../features/insurances';

export const InsurancesPage = () => {
  return (
    <div className="h-full max-w-md ">
      <h1 className="mb-6 text-center text-2xl font-bold text-gray-800 md:text-right">
        انتخاب بیمه
      </h1>
      <Insurances />
    </div>
  );
};
