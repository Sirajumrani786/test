type ProductDescriptionType = {
  show: boolean;
}

const Description = ({ show }: ProductDescriptionType) => {
  const style = {
    display: show ? 'flex' : 'none',
  }

  return (
    <section style={style} className="product-single__description">
      <div className="product-description-block">
        <h4>Discover the Ultimate Fitness Experience</h4>
        <p>Embark on a journey to transform your body and mind with our state-of-the-art gym facilities. Our premier gym offers a wide range of equipment and amenities to elevate your fitness journey to new heights.</p>
        <p>With our expert trainers and personalized workout plans, you'll achieve your fitness goals faster than ever before. Whether you're a seasoned athlete or new to fitness, our supportive community and motivating atmosphere will empower you to succeed.</p>
      </div>
      <div className="product-description-block">
        <h4>Discover the Ultimate Fitness Experience</h4>
        <p>Embark on a journey to transform your body and mind with our state-of-the-art gym facilities. Our premier gym offers a wide range of equipment and amenities to elevate your fitness journey to new heights.</p>
        <p>With our expert trainers and personalized workout plans, you'll achieve your fitness goals faster than ever before. Whether you're a seasoned athlete or new to fitness, our supportive community and motivating atmosphere will empower you to succeed.</p>
      </div>
    </section>
  );
};

export default Description;
