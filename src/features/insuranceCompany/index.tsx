import {Controller} from 'react-hook-form';
import {useCompaniesData} from './hooks/useCompaniesData';
import {useInsuranceCompanyForm} from './hooks/useInsuranceCompanyForm';
import {Select} from '../../components/ui/select';
import {useNavigate} from 'react-router';
import {Button} from '../../components/ui/button';

export const InsuranceCompany = () => {
  const navigate = useNavigate();
  const {control, errors, handleSubmit} = useInsuranceCompanyForm();
  const {insuranceCompaniesData} = useCompaniesData();
  return (
    <div className="w-full">
      <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">
        بیمه شخص ثالث
      </h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(() => null)}>
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
    </div>
  );
};
