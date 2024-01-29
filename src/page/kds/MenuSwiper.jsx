import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Icons } from "../../components/Icon";
import EndOrderModal from "./EndOrderModal";
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
    spaceBetween: 10,
    slidesPerGroup: 6,
    slidesPerView: 6,
    modules: [Pagination],
    breakpoints: {
      280: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1300: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      1450: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
      1700: {
        slidesPerView: 7,
        spaceBetween: 10,
      },
      1900: {
        slidesPerView: 9,
        spaceBetween: 10,
      },
      2500: {
        slidesPerView: 12,
        spaceBetween: 10,
      },
    },
  };
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    if (count === 1) {
      setOpen("pick");
    }
    setCount(count + 1);
  };
  const handleOpen1 = () => {
    if (count === 1) {
      setOpen("serving");
    }
    setCount(count + 1);
  };
  const handleOpen2 = () => {
    if (count === 1) {
      setOpen("delivery");
    }
    setCount(count + 1);
  };
  const handleClose = () => {
    setOpen(null);
    setCount(0);
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
    <>
      <Swiper {...swiperParams} className={`${"kds_main_order_swiper"} `}>
        {data.map((order, index) => (
          <SwiperSlide key={index} className={`${"kds_main_order"} `}>
            <div className={`${"kds_main_order_box"} `}>
              <button
                onClick={
                  order.pickup === "P"
                    ? handleOpen
                    : "" | (order.pickup === "S")
                    ? handleOpen1
                    : "" | (order.pickup === "D")
                    ? handleOpen2
                    : ""
                }
                className={`${"kds_main_order_top"} ${
                  min > 2 ? "warning" : ""
                } ${min > 4 ? "issue" : ""}`}
              >
                <div className="kds_main_order_top_pick">
                  <p className="pick">{order.pickup}</p>
                  <p className="num ml_12">{order.id}</p>
                </div>
                <div className="kds_main_order_top_pick mt_10">
                  <div className="lft">
                    <Icons.KDSTime />
                    <p className="clock ml_5">
                      {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}
                    </p>
                  </div>
                  <div className="rgt">
                    <p className="ordertime">{order.ordertime}</p>
                  </div>
                </div>
              </button>
              <div className={`${"kds_main_order_bottom"} `}>
                <ul>
                  {order?.ProductData.map((orderlist, index) => (
                    <li key={index}>
                      <div className="kds_main_list">
                        <div
                          className={`${"kds_main_opt mr_15"} ${
                            orderlist.opt === "ICE" ? "ice" : ""
                          }  ${orderlist.opt === "HOT" ? "hot" : ""}`}
                        >
                          <div className="kds_main_opt_txt">
                            <span>{orderlist.opt}</span>
                            <span className="num">
                              <em>{orderlist.num}</em>
                            </span>
                          </div>
                          <div className="kds_main_opt_bg">
                            {orderlist.opt === "ICE" && (
                              <Icons.KDSOrder
                                width={40}
                                height={44}
                                fill="#F2F4FF"
                                stroke="#D9DEFF"
                              />
                            )}
                            {orderlist.opt === "HOT" && (
                              <Icons.KDSOrder
                                width={40}
                                height={44}
                                fill="#FFF2F2"
                                stroke="#FFD9D9"
                              />
                            )}
                            {orderlist.opt !== "ICE" &&
                              orderlist.opt !== "HOT" && (
                                <Icons.KDSOrder
                                  width={40}
                                  height={44}
                                  fill="#F5F6F7"
                                  stroke="#C5C9CD"
                                />
                              )}
                          </div>
                        </div>
                        <span className="kds_main_product">
                          {orderlist.product}
                          {orderlist.detopt && <span>{orderlist.detopt}</span>}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div
          className={`${"swiper-pagination"} ${"kds_main_order_swiper_pagination"}`}
        ></div>
      </Swiper>
      <EndOrderModal open={open} handleClose={handleClose} />
    </>
  );

}

export default MenuSwiper;