import React, { useState, useEffect, useRef } from "react";
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
    slidesPerGroup: 4,
    slidesPerView: 4,
    modules: [Pagination],
  };

  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const time = useRef(0);
  const timerId = useRef(null);

  useEffect(() => {
    timerId.current = setInterval(() => {
      setMin(parseInt(time.current / 60));
      setSec(time.current % 60);
      time.current += 1;
    }, 1000);

    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (time.current < 0) {
      clearInterval(timerId.current);
    }
  }, [sec]);
  return (
    <Swiper {...swiperParams}>
      {data.map((order) => (
        <SwiperSlide key={order.id} className={`${"order_visual_card"} `}>
          <div>
            <div>
              <p>{order.id}</p>
              <div>
                <p>
                  {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}
                </p>
                <p>{order.ordertime}</p>
              </div>
            </div>
            <div>
              <ul>
                {order?.ProductData.map((orderlist, index) => (
                  <li key={index}>
                    <span>{orderlist.num}</span>
                    <p>
                      <span>{orderlist.opt}</span>
                      <span>{orderlist.product}</span>
                    </p>
                    {orderlist.detopt && <p>{orderlist.detopt}</p>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className={`${"swiper-pagination"} ${"menudetail"}`}></div>
    </Swiper>
  );

}

export default MenuSwiper;