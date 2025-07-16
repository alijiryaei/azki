import {useAppContext} from '../../../../providers/userAppProvider';

export const DataSummary = () => {
  const {data} = useAppContext();
  return (
    <div dir="rtl" className="space-y-4">
      <h1 className="mb-6 text-center text-xl font-bold text-gray-800">
        خلاصه اطلاعات وارد شده
      </h1>
      <div className="flex w-full items-center justify-between">
        <h3 className="text-base font-bold">بیمه:</h3>
        <p className="text-base font-normal">{data.insuranceType}</p>
      </div>
      <div className="flex w-full items-center justify-between">
        <h3 className="text-base font-bold">خودرو:</h3>
        <p className="text-base font-normal">
          {data.vehicle.vehicleType} {data.vehicle.vehicleUsage}
        </p>
      </div>
      <div className="flex w-full items-center justify-between">
        <h3 className="text-base font-bold">شرکت بیمه:</h3>
        <p className="text-base font-normal">{data.insuranceCompany}</p>
      </div>
      <div className="flex w-full items-center justify-between">
        <h3 className="text-base font-bold">تخفیف راننده:</h3>
        <p className="text-base font-normal">{data.discount.driverDiscount}</p>
      </div>
      <div className="flex w-full items-center justify-between">
        <h3 className="text-base font-bold">تخفیف ثالث:</h3>
        <p className="text-base font-normal">
          {data.discount.thirdPartyDiscount}
        </p>
      </div>
    </div>
  );
};
