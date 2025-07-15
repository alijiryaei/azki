import Input from '../../components/ui/input';

export const RegisterUser = () => {
  return (
    <div className="flex min-h-screen w-full justify-center px-4 pt-5 font-sans">
      <div className="w-full max-w-md rounded-xl p-8">
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">
          ثبت نام
        </h1>
        <form className="flex flex-col gap-2">
          <Input type="text" placeholder="نام" />
          <Input type="text" placeholder="نام خانوادگی" />
          <Input
            error
            errorText="سلام"
            helperText="سلتم"
            type="text"
            placeholder="شماره موبایل"
          />
          <Input type="password" placeholder="رمز عبور" />
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
