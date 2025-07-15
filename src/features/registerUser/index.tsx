export const RegisterUser = () => {
  return (
    <div className="flex min-h-screen w-full justify-center px-4 pt-5 font-sans">
      <div className="w-full max-w-md rounded-xl p-8">
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">
          ثبت نام
        </h1>
        <form>
          <div className="mb-4">
            <input
              id="first-name"
              type="text"
              placeholder="نام"
              className="w-full rounded border border-gray-400 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div className="mb-4">
            <input
              id="last-name"
              type="text"
              placeholder="نام خانوادگی"
              className="w-full rounded border border-gray-400 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div className="mb-4">
            <input
              id="mobile"
              type="text"
              placeholder="شماره موبایل"
              className="w-full rounded border border-gray-400 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div className="mb-6">
            <input
              id="password"
              type="password"
              placeholder="رمز عبور"
              className="w-full rounded border border-gray-400 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="rounded bg-green-500 px-6 py-2 font-bold text-white transition duration-200 hover:bg-green-600"
            >
              ثبت نام
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
