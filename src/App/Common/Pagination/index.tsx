import { FC } from 'react';

import Number from './Number';

const Pagination: FC = () => (
  <nav className="border-t border-gray-200 px-4 mt-24 flex  justify-center sm:px-0">
    <div className="md:-mt-px flex">
      <Number num={1} />
      <Number num={2} active={true} />
      <Number num={3} />
      <span className="border-transparent text-gray-500 border-t-2 pt-4 px-4 flex items-center text-sm font-medium">
        ...
      </span>
      <Number num={8} />
      <Number num={9} />
      <Number num={10} />
    </div>
  </nav>
);

export default Pagination;
