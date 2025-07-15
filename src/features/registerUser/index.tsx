import {Controller} from 'react-hook-form';
import Input from '../../components/ui/input';
import {useRegisterForm} from './hooks/useRegisterForm';

export const RegisterUser = () => {
  const {control, errors, handleSubmit, onSubmit} = useRegisterForm();
  return (
    <div className="flex min-h-screen w-full justify-center px-4 pt-5 font-sans">
      <div className="w-full max-w-md rounded-xl p-8">
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">
          ثبت نام
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <Controller
            control={control}
            name="firstName"
            rules={{
              required: 'نام  الزامیست',
              pattern: {
                value: /^[\u0600-\u06FF\u067E\u0686\u0698\u06AF\u06A9\u06CC]+$/,
                message: 'نام باید فارسی باشد',
              },
            }}
            render={({field}) => (
              <Input
                placeholder="نام"
                error={!!errors.firstName}
                errorText={errors.firstName?.message}
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="lastName"
            rules={{
              required: 'نام خانوادگی الزامیست',
              pattern: {
                value: /^[\u0600-\u06FF\u067E\u0686\u0698\u06AF\u06A9\u06CC]+$/,
                message: 'نام خانوادگی باید فارسی باشد',
              },
            }}
            render={({field}) => (
              <Input
                placeholder="نام خانوادگی"
                error={!!errors.lastName}
                errorText={errors.lastName?.message}
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="phoneNumber"
            rules={{
              required: 'شماره الزامیست',
              pattern: {
                value: /^09\d{9}$/,
                message: 'شماره با ۰۹ آغاز میشود',
              },
              minLength: {
                value: 11,
                message: 'شماره حداقل ۱۱ کاراکتر دارد',
              },
            }}
            render={({field}) => (
              <Input
                placeholder="شماره موبایل"
                inputMode="numeric"
                maxLength={11}
                error={!!errors.phoneNumber}
                errorText={errors.phoneNumber?.message}
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            rules={{
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                message: 'حداقل ۱ حروف کوچک و بزرگ لاتین و عدد الزامی است',
              },
              minLength: {
                value: 4,
                message: 'طول رمز عبور حداقل باید ۴ کاراکتر باشد',
              },
              required: 'رمز عبور اجباریست',
            }}
            render={({field}) => {
              return (
                <Input
                  type="password"
                  maxLength={10}
                  placeholder="رمز عبور"
                  error={!!errors.password}
                  errorText={errors.password?.message}
                  {...field}
                />
              );
            }}
          />
          <div className="text-center">
            <button
              type="submit"
              className="rounded bg-emerald-500 px-6 py-2 font-bold text-white transition duration-200 hover:bg-emerald-600"
            >
              ثبت نام
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
