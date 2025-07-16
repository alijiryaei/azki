import {RegisterUser} from '@/features/registerUser';
export const RegisterPage = () => {
  return (
    <div className="w-full max-w-md">
      <h1 className="mb-6 text-center text-2xl font-bold text-gray-800 md:text-right">
        ثبت نام
      </h1>
      <RegisterUser />
    </div>
  );
};
