import {InsuranceCard} from './components/insuranceCard';
import {useInsurances} from './hooks/useInsurances';

export const Insurances = () => {
  const {handleInsuranceClick} = useInsurances();
  return (
    <div className="h-full max-w-md ">
      <h1 className="mb-6 text-right text-2xl font-bold text-gray-800">
        انتخاب بیمه
      </h1>
      <div className="flex w-full flex-row-reverse gap-4 px-4">
        <InsuranceCard onClick={handleInsuranceClick} title="شخص ثالث" />
        <InsuranceCard
          onClick={handleInsuranceClick}
          title="بدنه"
          isActive={false}
        />
      </div>
    </div>
  );
};
