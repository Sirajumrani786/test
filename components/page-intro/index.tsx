import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Navigation } from 'swiper';

SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => {

  return (
    <section className="page-intro">
      <Swiper navigation effect="fade" className="swiper-wrapper">
        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/slide-1.jpg')" }}>
            <div className="container">
              {/* <div className="page-intro__slide__content">
                <h2 style={{ margin: "20px" }}>BUILDING THE
                  NEXT GENERATION
                  OF LEGENDS</h2>
              </div> */}
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/slide-2.jpg')" }}>
            <div className="container">
              {/* <div className="page-intro__slide__content">
                <h2 style={{ marginTop: "125px" }}>ANYTIME, ANYWHERE.
                  AND NOW WITH FITNESS Gym+.</h2>
              </div> */}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>


    </section>
  )
};

export default PageIntro