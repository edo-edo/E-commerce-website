import { FC } from 'react';

import Product from './Product';
import Pagination from '../Common/Pagination';
import { products } from '../data/productList.json';
import Navigation from '../Common/Navigation';

const Products: FC = () => (
  <div className="bg-white">
    <Navigation />
    <div className="max-w-2xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <Product
            key={product.id}
            imageSrc={product.imageSrc}
            imageAlt={product.imageAlt}
            href={product.href}
            name={product.name}
            color={product.color}
            price={product.price}
          />
        ))}
      </div>
      <Pagination />
    </div>
  </div>
);

export default Products;
