import {InsuranceCard} from './components/insuranceCard';
import {useInsurances} from './hooks/useInsurances';

export const Insurances = () => {
  const {handleInsuranceClick} = useInsurances();
  return (
    <div className="flex w-full flex-row-reverse gap-4">
      <InsuranceCard onClick={handleInsuranceClick} title="شخص ثالث" />
      <InsuranceCard
        onClick={handleInsuranceClick}
        title="بدنه"
        isActive={false}
      />
    </div>
  );
};
