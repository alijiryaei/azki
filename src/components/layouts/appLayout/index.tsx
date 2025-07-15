import {Outlet} from 'react-router';
import carImage from '../../../assets/car-green.svg';

export const AppLayout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center md:flex-row-reverse">
      <div className="flex w-full flex-1 justify-center md:h-full md:w-1/2">
        <Outlet />
      </div>
      <div className="relative flex flex-1 items-start pl-4 md:h-screen md:w-1/2 md:items-end md:pb-8 ">
        <img className="z-10 w-3/5 md:w-full" src={carImage} />
        <div className="h-8/12 absolute bottom-0 left-0 w-full bg-amber-50 md:h-full md:w-6/12" />
      </div>
    </div>
  );
};
