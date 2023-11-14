import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from "swiper/modules";

function MenuSwiper({data}) {
  const swiperParams = {
    pagination: {
      el: `${".swiper-pagination"}`,
      clickable: true,
    },
    slidesPerGroup: 1,
    slidesPerView: 1,
    modules: [Pagination],
  };
  return (
    <Swiper
      {...swiperParams}
    >
      {data.map((product) => (
        <SwiperSlide key={product.id} className={`${"order_visual_card"} ${product.sales === false ? "dimd" : ""
          }`}>
          {product.sales === false && <p>{product.salesname}</p>}
          <img
            src={product.image}
            alt={product.title}
          />
        </SwiperSlide>
      ))}
      <div className={`${"swiper-pagination"} ${"menudetail"}`}></div>
    </Swiper>
  );

}

export default MenuSwiper;