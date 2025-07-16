import logo from '../../../assets/logo.svg';
import {useAppContext} from '../../../providers/userAppProvider';

export const NavBar = () => {
  const {data} = useAppContext();

  return (
    <div className="fixed left-0 top-0 z-50 h-12 w-full px-4 md:h-16 md:px-12">
      <div className="flex h-full w-full items-center justify-between">
        <p className="text-sm">
          {data.userData.firstName
            ? `${data.userData.firstName} ${data.userData.lastName}`
            : 'ثبت نام'}
        </p>
        <h1 className="hidden text-center text-base font-medium text-gray-800 md:block">
          سامانه مقایسه و خرید آنلاین بیمه
        </h1>
        <div>
          <img src={logo} />
        </div>
      </div>
    </div>
  );
};
