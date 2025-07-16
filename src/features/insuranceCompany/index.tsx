import {Controller} from 'react-hook-form';
import {useCompaniesData} from './hooks/useCompaniesData';
import {useInsuranceCompanyForm} from './hooks/useInsuranceCompanyForm';
import {Select} from '@/components/ui/select';
import {useNavigate} from 'react-router';
import {Button} from '@/components/ui/button';

export const InsuranceCompany = () => {
  const navigate = useNavigate();
  const {control, errors, handleSubmit, onSubmit} =
    useInsuranceCompanyForm(navigate);
  const {insuranceCompaniesData} = useCompaniesData();
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="company"
        control={control}
        rules={{
          required: 'انتخاب شرکت بیمه‌گر قبلی الزامی است',
        }}
        render={({field}) => {
          return (
            <Select
              label="شرکت بیمه‌گر قبلی"
              error={!!errors.company}
              errorText={errors.company?.message}
              options={insuranceCompaniesData!}
              {...field}
            />
          );
        }}
      />
      <div className="flex w-full justify-between">
        <Button type="submit" variant="outlined">
          مرحله بعد
        </Button>
        <Button onClick={() => navigate(-1)} variant="outlined">
          مرحله قبل
        </Button>
      </div>
    </form>
  );
};
