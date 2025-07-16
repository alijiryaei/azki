import {Outlet} from 'react-router';
import carImage from '../../../assets/car-green.svg';
import {NavBar} from '../navbar';

export const AppLayout = () => {
  return (
    <>
      <NavBar />
      <div className="relative flex h-full flex-col justify-between pt-16 md:flex-row-reverse">
        <div className="h-7/10 md:px-18 md:pt-18 w-full px-4 pt-4 md:h-full md:w-1/2">
          <Outlet />
        </div>
        <div className="flex flex-1 items-start pl-4 md:h-full md:w-1/2 md:items-end md:pb-8 ">
          <img className="z-10 w-3/5 md:w-full" src={carImage} />
          <div className="h-2/12 absolute bottom-0 left-0 w-full bg-amber-50 md:h-full md:w-3/12" />
        </div>
      </div>
    </>
  );
};
