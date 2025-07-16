import {Controller} from 'react-hook-form';
import {useDiscountsForm} from './hooks/useDiscountsForm';
import {Select} from '@/components/ui/select';
import {useDiscountsData} from './hooks/useDiscountsData';
import {Button} from '@/components/ui/button';
import Modal from '@/components/ui/modal';
import {DataSummary} from './components/dataSummary';

export const Discount = () => {
  const {
    control,
    errors,
    handleSubmit,
    handleShowModal,
    isModalOpen,
    onSubmit,
  } = useDiscountsForm();
  const {discountsData} = useDiscountsData();
  return (
    <>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
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
      <Modal isOpen={isModalOpen} onClose={handleShowModal}>
        <DataSummary />
      </Modal>
    </>
  );
};
