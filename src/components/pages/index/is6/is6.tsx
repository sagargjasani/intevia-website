"use client";

import { useEffect, useRef } from "react";

import Swiper from "react-id-swiper";
import "swiper/swiper-bundle.css";
import "./is6.scss";
// import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
const Is6 = () => {
  const ref = useRef(null);

  // const goNext = () => {
  //   if (ref.current !== null && ref.current.swiper !== null) {
  //     ref.current.swiper.slideNext();
  //   }
  // };

  const goPrev = () => {
    // @ts-ignore
    if (ref.current !== null && ref.current.swiper !== null) {
      // @ts-ignore
      ref.current.swiper.slidePrev();
    }
  };
  useEffect(() => {
    const timmmer = setInterval(() => goPrev(), 2500);

    return () => clearInterval(timmmer);
  }, []);
  const params = {
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  };
  return (
    <div className="is6">
      <h5>Testimonials</h5>
      <div className="is6-cont">
        <Swiper ref={ref} {...params}>
          <div>
            <div className="test">
              <div className="test-img">
                <img src={"/images/testimonial/ps.png"} />
              </div>
              <div className="test-name">Peter Adeyanju</div>
              <div className="test-test">
                I am so proud to be a part of Intevia. From day one, the company
                has been impactful to my life. I havebeen provided opportunities
                to sharpen and diversify my skill set. At every step of the way,
                I have full support of my recruitment consultant
                &apos;Lisa&apos; who has been of great help to me I must say. I
                employ each of every unique aspects of the company. Thank you so
                much for all the opportunities given to be part of the amazing
                team
              </div>
            </div>
          </div>
          <div>
            <div className="test">
              <div className="test-img">
                <img src={"/images/testimonial/to.png"} />
              </div>
              <div className="test-name">Temitope Oladoja</div>
              <div className="test-test">
                It has been an honor to be a part of a team dedicated to making
                a positive impact on people&apos;s lives. I am continuously
                impressed by how Intevia prioritizes patient-centered care and
                consistently makes strides in improving their staff&apos;s
                performance. Thank you for the opportunity to be part of such an
                amazing organization.
              </div>
            </div>
          </div>
          <div>
            <div className="test">
              <div className="test-img">
                <img src={"/images/testimonial/ee.png"} />
              </div>
              <div className="test-name">Emmanuel Ekene</div>
              <div className="test-test">
                It has been a wonderful experience for me to work with such a
                reputed organization. Working with Intevia Healthcare has
                improved my Healthcare skills and that has lead me to be more
                self reliant and filled me with a lot of self confidence to work
                with less supervision to achive massive results. The
                organisation has been a healthcare builder.
              </div>
            </div>
          </div>
          <div>
            <div className="test">
              <div className="test-img">
                <img src={"/images/testimonial/cris.png"} />
              </div>
              <div className="test-name">Christian Kemakolam</div>
              <div className="test-test">
                Intevia is a global brand and a household name in healthcare,
                delivering exceptional client-centered care and
                support,empathy-driven and evidence-based healthcare through
                engagement of best and dedicated hands, motivation and constant
                retraining of their staff for the best global healthcare
                practices. Working with Intevia Healthcare has been an amazing
                lifetime experience,a turning point and redefining pleasure in
                providing assistance that brightens the clients hope and
                laughter.
              </div>
            </div>
          </div>
          <div>
            <div className="test">
              <div className="test-img">
                <img src={"/images/testimonial/ern.png"} />
              </div>
              <div className="test-name">Ernest Kyei</div>
              <div className="test-test">
                I’m so elated to be a part of this wonderful family called
                Intevia. | came to the UK as an international student and
                Intevia Healthcare accepted me, trained me, and has constantly
                supported me to become an experienced Healthcare Assistant. They
                have been supporting me 24/7 with my career needs, ranging from
                adequate shifts to help me grow in experience to prompt
                payment.The staff are just amazing. Thank you Intevia for this
                opportunity.
              </div>
            </div>
          </div>
        </Swiper>
        {/* <div className="swiperNav">
          <i onClick={goPrev}>
            <MdSkipPrevious />
          </i>
          <i onClick={goNext}>
            <MdSkipNext />
          </i>
        </div> */}
      </div>
    </div>
  );
};

export default Is6;
