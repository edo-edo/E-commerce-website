import { FC } from 'react';
import classNames from 'classnames';

interface NumberProps {
  num: number;
  active?: boolean;
}

const Number: FC<NumberProps> = ({ num, active = false }) => (
  <a
    href="#"
    className={classNames(
      active ? 'border-indigo-500 text-indigo-600 border-t-2 pt-4 px-4 flex items-center text-sm font-medium' : '',
      'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 flex items-center text-sm font-medium',
    )}
    aria-current={active ? 'page' : 'false'}
  >
    {num}
  </a>
);

export default Number;
