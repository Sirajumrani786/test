// import { useState } from 'react';
// import productsColors from './../../../utils/data/products-colors';
// import productsSizes from './../../../utils/data/products-sizes';
// import CheckboxColor from './../../products-filter/form-builder/checkbox-color';
// import { useDispatch, useSelector } from 'react-redux';
// import { some } from 'lodash';
// import { addProduct } from 'store/reducers/cart';
// import { toggleFavProduct } from 'store/reducers/user';
import { ProductType } from 'types';
// import { RootState } from 'store';

type ProductContent = {
  product: ProductType;
}

const Content = ({ product }: ProductContent) => {
  // const dispatch = useDispatch();
  // const [count, setCount] = useState<number>(1);
  // const [color, setColor] = useState<string>('');
  // const [itemSize, setItemSize] = useState<string>('');

  // const onColorSet = (e: string) => setColor(e);
  // const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => setItemSize(e.target.value);

  // const { favProducts } = useSelector((state: RootState) => state.user);
  // const isFavourite = some(favProducts, productId => productId === product.id);

  // const toggleFav = () => {
  //   dispatch(toggleFavProduct(
  //     {
  //       id: product.id,
  //     }
  //   ))
  // }

  // const addToCart = () => {
  //   const productToSave: ProductStoreType = {
  //     id: product.id,
  //     name: product.name,
  //     thumb: product.images ? product.images[0] : '',
  //     price: product.currentPrice,
  //     count: count,
  //     color: color,
  //     size: itemSize
  //   }

  //   const productStore = {
  //     count,
  //     product: productToSave
  //   }

  //   dispatch(addProduct(productStore));
  // }

  return (
    <section className="product-content">
  <div className="product-content__intro">
    <h5 className="product__id">GYM ID:<br></br>{product.id}</h5>
    <span className="product-on-sale">Gym</span>
    <h2 className="product__name">{product.name}</h2>

    <div className="product__prices">
      <h4>${product.currentPrice}</h4>
      {product.discount &&
        <span>${product.price}</span>
      }
    </div>
  </div>

  <div className="product-content__filters">
    <div className="product-filter-item">
      <h2>Description:</h2>
      <p style={{ marginTop: '8px', lineHeight: '21px', fontSize: '12px' }}>
        Many gyms offer health assessments and fitness tracking facilities to help members track their progress.
      </p>
    </div>

    <div className="product-filter-item">
      <h2>Features:</h2>
      <ul >
        <li style={{ marginTop: '8px', lineHeight: '21px', fontSize: '12px' }}>State-of-the-art equipment</li>
        <li style={{ marginTop: '8px', lineHeight: '21px', fontSize: '12px' }}>Personalized training programs</li>
        <li style={{ marginTop: '8px', lineHeight: '21px', fontSize: '12px' }}>Group fitness classes</li>
      </ul>
    </div>

    <div className="product-filter-item">
      <h2>Location:</h2>
      <p style={{ marginTop: '8px', lineHeight: '21px', fontSize: '12px' }}>Conveniently located in the heart of the city.</p>
    </div>
  </div>
</section>

  );
};

export default Content;
