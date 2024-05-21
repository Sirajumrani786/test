import { useState } from 'react';
import Checkbox from './form-builder/checkbox';
// import CheckboxColor from './form-builder/checkbox-color';
import Slider from 'rc-slider';

// data
import productsTypes from './../../utils/data/products-types';
// import productsColors from './../../utils/data/products-colors';
// import productsSizes from './../../utils/data/products-sizes';

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const ProductsFilter = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);

  const addQueryParams = () => {
    // query params changes
  }

  const [location, setLocation] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle location input change
  const handleLocationChange = (event:any) => {
    setLocation(event.target.value);
  };

  // Function to handle search term input change
  const handleSearchTermChange = (event:any) => {
    setSearchTerm(event.target.value);
  };

  // Function to handle gym search
  const handleSearch = () => {
    // Perform search based on location and search term
    console.log(`Searching for gyms near ${location} with the term "${searchTerm}"`);
    // You can perform your search logic here, such as making an API call
  };


  return (
    <form className="products-filter" onChange={addQueryParams}>
      <button type="button"
        onClick={() => setFiltersOpen(!filtersOpen)}
        className={`products-filter__menu-btn ${filtersOpen ? 'products-filter__menu-btn--active' : ''}`}>
        Add Filter <i className="icon-down-open"></i>
      </button>



      <div className={`products-filter__wrapper ${filtersOpen ? 'products-filter__wrapper--open' : ''}`}>
        <div className="products-filter__block">
          <button type="button">Gym types</button>
          <div className="products-filter__block__content">
            {productsTypes.map(type => (
              <Checkbox
                key={type.id}
                name="product-type"
                label={type.name}
              />
            ))}
          </div>
        </div>
        <div className="products-filter__block">
      <label htmlFor="locationInput">Location</label>
      <input 
        type="text" 
        id="locationInput" 
        value={location} 
        onChange={handleLocationChange} 
        placeholder="Enter your location" 
        style={{
          border: '1px solid #000',
          padding: '8px',
          borderRadius: '6px',
          marginTop: '10px',
          marginBottom: '12px',
          width: '100%'
        }} 
      />
      <label htmlFor="searchInput">Search Term</label>
      <input 
        type="text" 
        id="searchInput" 
        value={searchTerm} 
        onChange={handleSearchTermChange} 
        placeholder="Enter gym name or type" 
        className='form-control mt-2'
        style={{
          border: '1px solid #000',
          padding: '8px',
          borderRadius: '6px',
          marginTop: '10px',
          width: '100%'
        }} 
      />
      <button 
        type="button" 
        onClick={handleSearch} 
        style={{
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '6px',
          cursor: 'pointer',
          marginTop: '10px'
        }}
      >
        Search Gym
      </button>
    </div>        

        <div className="products-filter__block">
          <button type="button">Fees </button>
          <div className="products-filter__block__content">
            <Range min={0} max={10000} defaultValue={[2000, 100000]} tipFormatter={value => `${value}rs`} />
          </div>
        </div>

        {/* <div className="products-filter__block">
          <button type="button">Size</button>
          <div className="products-filter__block__content checkbox-square-wrapper">
            {productsSizes.map(type => (
              <Checkbox 
                type="square" 
                key={type.id} 
                name="product-size" 
                label={type.label} />
            ))}
          </div>
        </div> */}

       

        <button type="submit" className="btn btn-submit btn--rounded btn--yellow">Apply</button>
      </div>
    </form>
  )
}

export default ProductsFilter
