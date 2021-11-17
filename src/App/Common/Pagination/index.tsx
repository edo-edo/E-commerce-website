import { FC } from 'react';

const Pagination: FC = () => (
  <nav className="border-t border-gray-200 px-4 mt-24 flex  justify-center sm:px-0">
    <div className="md:-mt-px flex">
      <a
        href="#"
        className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 flex items-center text-sm font-medium"
      >
        1
      </a>
      {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}
      <a
        href="#"
        className="border-indigo-500 text-indigo-600 border-t-2 pt-4 px-4 flex items-center text-sm font-medium"
        aria-current="page"
      >
        2
      </a>
      <a
        href="#"
        className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 flex items-center text-sm font-medium"
      >
        3
      </a>
      <span className="border-transparent text-gray-500 border-t-2 pt-4 px-4 flex items-center text-sm font-medium">
        ...
      </span>
      <a
        href="#"
        className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 flex items-center text-sm font-medium"
      >
        8
      </a>
      <a
        href="#"
        className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 flex items-center text-sm font-medium"
      >
        9
      </a>
      <a
        href="#"
        className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 flex items-center text-sm font-medium"
      >
        10
      </a>
    </div>
  </nav>
);

export default Pagination;
