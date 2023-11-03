import React , { useState } from "react";
import Layout from '../../../layout/AppDefaultLayout'
import { Icons } from "../../../components/Icon";
import { Button } from "../../../components/Button"
import { Checkbox } from "../../../components/Checkbox"
import { Count } from "../../../components/Count"
import { FormGroup } from "../../../components/FormGroup"
import { useNavigate } from "react-router-dom";
import NoData from "../../../components/NoData";


function CartPage({ isHotIce }) {
  // 지점 데이터
  const initialLocations = [
    "클라우드카페 역삼점",
    "클라우드카페 역삼점 2호점",
    "클라우드카페 역삼점 3호점"
  ];
  // 지점 드롭다운
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // 지점 초기값
  const [selectedLocation, setSelectedLocation] = useState("클라우드카페 역삼점");
  // 지점 선택시 데이터
  const [locations, setLocations] = useState(initialLocations);
  const handleLocationChange = (location) => {
    setSelectedLocation(location);
    setIsDropdownOpen(false);
  };
  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setLocations(initialLocations.filter((loc) => loc !== selectedLocation));
  };


// 카페 메뉴 데이터 
const initialCartItems = [{
    id: 1,
    name: "아메리카노",
    price: 3800,
    quantity: 1,
    image: require("../../../images/item.png"),
    selected: false
  },
  {
    id: 2,
    name: '카페라떼',
    price: 4500,
    quantity: 1,
    image: require("../../../images/item01.png"),
    selected: false
  },
  {
    id: 3,
    name: '카페모카',
    price: 5000,
    quantity: 1,
    image: require("../../../images/item.png"),
    selected: false
  },
  {
    id: 4,
    name: '카페라떼',
    price: 4500,
    quantity: 1,
    image: require("../../../images/item01.png"),
    selected: false
  },
  {
    id: 5,
    name: '카페모카',
    price: 5000,
    quantity: 1,
    image: require("../../../images/item.png"),
    selected: false
  },
  // {
  //   id: 6,
  //   name: '카페모카',
  //   price: 5000,
  //   quantity: 1,
  //   image: require("../../../images/item.png"),
  //   selected: false
  // },
];

// 메뉴 데이터 넣는거 
const [cartItems, setCartItems] = useState(initialCartItems);

// 전체 선택
const [selectAll, setSelectAll] = useState(false);

// 카운터시 계산 
const handleItemQuantity = (id, value) => {
  const updatedCart = cartItems.map(item =>
    item.id === id ? { ...item, quantity: Math.max(1, item.quantity + value) } : item
  );
  setCartItems(updatedCart);
};

// 체크박스 전체선택
const handleSelectAll = () => {
  const updatedSelectAll = !selectAll;
  const updatedCart = cartItems.map(item => ({ ...item, selected: updatedSelectAll }));
  setSelectAll(updatedSelectAll);
  setCartItems(updatedCart);
  console.log("clicked value:", updatedSelectAll); 
};


// 체크박스 각자 선택
const handleSingleCheck = (id) => {
  const updatedCart = cartItems.map(item =>
    item.id === id ? { ...item, selected: !item.selected } : item
  );
  setCartItems(updatedCart);
  setSelectAll(updatedCart.every(item => item.selected));
};
// 선택삭제 버튼
const handleDeleteSelected = () => {
  const updatedCart = cartItems.filter(item => !item.selected);
  setCartItems(updatedCart);
  setSelectAll(false);
};
// 각자 휴지통 삭제 버튼
const handleDeleteItem = (id) => {
  const updatedCart = cartItems.filter((item) => item.id !== id);
  setCartItems(updatedCart);
  setSelectAll(false);
};

// 아이템 계산
const selectedItems = cartItems.filter(item => item.selected);
// 합산된 총 금액 계산
const totalAmount = selectedItems.reduce((total, item) => total + item.price * item.quantity, 0);
// 합산된 총 수량 계산
const totalQuantity = selectedItems.reduce((total, item) => total + item.quantity, 0);
// 빈 장바구니 
const isCartEmpty = cartItems.length === 0;
// 랜딩 연결
const navigate = useNavigate();

  return (
    <Layout Back Title="장바구니">
      <div className="cartcontainer ">
        <FormGroup vertical>
          <div className="location inner align">
            <div className="align start">
              <Icons.Location width={20} height={20} fill="#495EEC" />
              <p className="location_text ml_5 ">
                <b>{selectedLocation}</b>의 메뉴입니다.
              </p>
            </div>
            <Button
              onClick={handleDropdownClick}
              size="xsmall"
              btntype="change"
            >
              변경
            </Button>
            {isDropdownOpen && (
                <ul className="location_dropdown">
                  {locations.map((location) => (
                    <li key={location} onClick={() => handleLocationChange(location)}>
                      {location}
                    </li>
                  ))}
                </ul>
              )}
          </div>
          <hr />
            <div className="checkout inner align">
              <Checkbox 
                id={selectAll.toString()} 
                onChange={handleSelectAll} 
                checked={selectAll}
                txt={"전체 선택"}
                >
              </Checkbox>
              <Button 
                onClick={handleDeleteSelected} 
                none 
                globalClass="deleteselect pd_0"
                >
                선택삭제
              </Button>
            </div>
          <hr />
          <div className="shoppingcart inner">
            {cartItems.map(item => (
              <div key={item.id} className="menu align column">
                <div className="menu_container">
                  <div className="menu_card align mb_30">
                    <div className="menu_card_left align top start">
                      {cartItems.length > 0 && (
                        <Checkbox
                          id={item.id.toString()}
                          name={item.name} 
                          checked={item.selected} 
                          onChange={() => handleSingleCheck(item.id)}
                        />
                      )}
                      <div className="menu_card_images ml_10 mr_15">
                        <div className="menu_card_images_img_box">
                          <img className="img" src={item.image} alt="Menu Item" />
                        </div>
                      </div>
                      <div className="menu_card_item">
                        <p className="title mb_8">{item.name}</p>
                        <p className="price mb_16">
                          {Number(item.price).toLocaleString()}<span>원</span>
                        </p>
                        <div className="description align">
                          <div className={isHotIce ? "hot" : "iced"}>ICED</div>
                          <span className="bar mlr_6" />
                          <div className="option">연하게</div>
                        </div>
                      </div>
                    </div>
                    <div className="menu_card_right align column bottom">
                      <Button icon="Trash" 
                        none 
                        onClick={() => handleDeleteItem(item.id)}
                        size="icon_s"
                      >
                        휴지통
                      </Button>
                      <Button 
                        onClick={() => navigate("/order")}
                        none 
                        globalClass="pd_0"
                      >
                        옵션변경
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="menu_bottom align pl_30">
                  <Count
                    count={item.quantity} size="small"
                    handleItemQuantity={(value) => handleItemQuantity(item.id, value)} 
                  />
                  <p className="item_total">
                    {Number(item.price * item.quantity).toLocaleString()}
                    <span className="ml_3">원</span>
                  </p>
                </div>
              </div>
            ))}
          {isCartEmpty && (
            <NoData globalClass="mt_80 mb_30 align item" txt={("장바구니에 담겨진\n메뉴가 없습니다.")} />
          )}
            <Button onClick={() => {navigate("/main");}} size="full" line>
              {isCartEmpty ? "메뉴 담으러 가기" : "메뉴 더 담기"}
            </Button>
          </div>
          {!isCartEmpty && (
            <div className="cartorder_box">
              {/* {cartItems.length > 0 && ( <hr /> )} */}
              <div className="cartorder">
                <dl className="align mb_30">
                  <dt>총 주문금액</dt>
                  <dd>{totalAmount.toLocaleString()}<span className="ml_2">원</span></dd>
                </dl>
                <Button onClick={() => {navigate("/payment");}} size="full">총 <span>{totalQuantity}</span>개 주문하기</Button>
              </div>
            </div>
          )}
        </FormGroup>
      </div>
    </Layout>
  );
}
export default CartPage;