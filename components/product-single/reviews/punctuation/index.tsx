//// import Rater from 'react-rater';
import { PunctuationType } from 'types';
import ReactStars from 'react-stars'
const Punctuation = ({ }: PunctuationType) => {
  // const percentageBar = (count: number) => {
  //   return (count * 100) / countOpinions;
  // }

  return (
    <section className="product-punctuation">
        <form>
      <div className='form-group'>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="rating">Rating</label>
          <ReactStars
            count={5}
            size={24}
            color2={'#ffd700'}
            // id="rating"
          />
        </div>
        <input 
          type="text" 
          placeholder='Enter Your Name' 
          style={{
            border: '1px solid #ccc',
            padding: '8px',
            borderRadius: '6px',
            marginTop: '10px',
            width: '100%'
          }} 
        />
        <textarea 
          // type="text" 
          placeholder='Enter Your Review'   
          style={{
            border: '1px solid #ccc',
            padding: '8px',
            borderRadius: '6px',
            marginTop: '10px',
            width: '100%'
          }} 
      ></textarea>
      </div>
      <button 
        type="submit" 
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
        Submit
      </button>
    </form>


    </section>
  );
};

export default Punctuation;
