import "./style/testipages.css";
import { testi } from "../assets/main/main";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay, EffectCreative } from "swiper/modules";

const TestiPages = () => {
  return (
    <section className="testi">
      <div className="testi-content">
        <div className="testi-title">
          <h1>Testimonial</h1>
          <h2>
            Pengalaman nyata <br /> dari pelanggan kami.
          </h2>
          <p>
            Jelajahi kesaksian dari pelanggan kami dan rasakan kehangatan serta
            kepuasan yang mereka rasakan.
          </p>
        </div>
        <div className="testi-list">
          <Swiper
             grabCursor={true}
             effect={'creative'}
             loop={true}
             creativeEffect={{
               prev: {
                 shadow: true,
                 translate: ['-120%', 0, -500],
               },
               next: {
                 shadow: true,
                 translate: ['120%', 0, -500],
               },
             }}
             autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
             modules={[Autoplay,EffectCreative]}
             className="mySwiper2"
          >
            {testi.map((testies) => (
              <SwiperSlide key={testies.id}>
                <h1 className="swip-text">{testies.text}</h1>
                <div className="swip-name">
                  <p>{testies.picture}</p>
                  <div className="swip-namev2">
                    <h3>{testies.name}</h3>
                    <h5>{testies.web}</h5>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestiPages;
