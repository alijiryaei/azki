import {Controller} from 'react-hook-form';
import {useDiscountsForm} from './hooks/useDiscountsForm';
import {Select} from '../../components/ui/select';
import {useDiscountsData} from './hooks/useDiscountsData';
import {Button} from '../../components/ui/button';

export const Discount = () => {
  const {control, errors, handleSubmit} = useDiscountsForm();
  const {discountsData} = useDiscountsData();
  return (
    <div className="w-full">
      <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">
        بیمه شخص ثالث
      </h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(() => null)}>
        <Controller
          name="thirdParty"
          control={control}
          rules={{
            required: 'انتخاب درصد تخفیف شخص ثالث الزامی است',
          }}
          render={({field}) => {
            return (
              <Select
                label="درصد تخفیف شخص ثالث"
                error={!!errors.thirdParty}
                errorText={errors.thirdParty?.message}
                options={discountsData!}
                {...field}
              />
            );
          }}
        />
        <Controller
          name="driver"
          control={control}
          rules={{
            required: 'انتخاب درصد تخفیف حوادث راننده الزامی است',
          }}
          render={({field}) => {
            return (
              <Select
                label="درصد تخفیف حوادث راننده"
                error={!!errors.driver}
                errorText={errors.driver?.message}
                options={discountsData!}
                {...field}
              />
            );
          }}
        />
        <div className="flex w-full justify-center md:justify-start">
          <Button type="submit">مرحله بعد</Button>
        </div>
      </form>
    </div>
  );
};
