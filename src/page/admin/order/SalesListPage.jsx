import React, { useState } from "react";
import Layout from '../../../layout/DefaultLayout'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ContentBox from "../../../layout/ContentBox";
import Button from "../../../components/Button";
import Table from "../../../components/Table";
import Select from "../../../components/Select";
import MuiPage from "../../../components/MuiPage";
import Checkbox from "../../../components/Checkbox";

//mui table import
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';

const storeNameOpt = [
  { label: "전체", value: "전체", },
  { label: "클라우드 카페", value: "클라우드 카페", },
  { label: "클라우드 9 카페", value: "클라우드 9 카페", },
];

const categoryOpt = [
  { label: "전체", value: "전체", },
  { label: 'Coffee', value: 'Coffee', },
  { label: 'Non-Coffee', value: 'Non-Coffee', },
  { label: 'Ade/Juice', value: 'Ade/Juice', },
  { label: 'Blended', value: 'Blended', },
  { label: 'Tea', value: 'Tea', },
  { label: 'Bread', value: 'Bread', },
  { label: 'Bottle', value: 'Bottle', },
];

const paymentTypes = [
  { value: 0, label: '전체' },
  { value: 1, label: '일반 결제' },
  { value: 2, label: '네이버페이' },
  { value: 3, label: '애플페이' },
  { value: 4, label: '삼성페이' },
];

const paymentMethods = [
  { value: 0, label: '전체' },
  { value: 1, label: '각종 카드사명 1' },
  { value: 2, label: '각종 카드사명 2' },
  { value: 3, label: '각종 카드사명 3' },
  { value: 4, label: '각종 카드사명 4' },
  { value: 5, label: '각종 카드사명 5' },
];

const numOpt = [
  { label: "20개씩 보기", value: "20개씩 보기", },
  { label: "30개씩 보기", value: "30개씩 보기", },
  { label: "50개씩 보기", value: "50개씩 보기", },
];

const initialTableRows = [
  {
    id: 1,
    orderNumber: 1 ,
    productName: "에스프레소",
    storeName: "클라우드 9 카페",
    orderDateTime: "2023.10.24 09:27:00",
    payer: "아무개",
    paymentType: "네이버페이",
    paymentMethod: "신한카드",
    originalAmount: "500000",
    discountAmount: "-2500",
    totalPaymentAmount: "4500",
  },
  {
    id: 2,
    orderNumber: 2 ,
    productName: "카라멜 마끼아또",
    storeName: "클라우드 9 카페",
    orderDateTime: "2023.10.24 09:27:00",
    payer: "아무개",
    paymentType: "네이버페이",
    paymentMethod: "신한카드",
    originalAmount: "500000",
    discountAmount: "",
    totalPaymentAmount: "4500",
  },
  {
    id: 3,
    orderNumber: 3 ,
    productName: "디카페인콜드브루",
    storeName: "클라우드 9 카페",
    orderDateTime: "2023.10.24 09:27:00",
    payer: "010-5012-0165",
    paymentType: "네이버페이",
    paymentMethod: "신한카드",
    originalAmount: "500000",
    discountAmount: "-2500",
    totalPaymentAmount: "4500",
  },
];

function SalesListPage() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const [selectAll, setSelectAll] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    const newCheckedItems = {};
    if (!selectAll) {
      initialTableRows.forEach((item) => {
        newCheckedItems[item.id] = true;
      });
    }
    setCheckedItems(newCheckedItems);
  };

  const handleCheckboxChange = (itemId) => {
    setCheckedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const [tableRows] = useState(initialTableRows);
  const [activeButton, setActiveButton] = useState(null); 
  const handleButtonClick = (buttonLabel) => {
    setActiveButton(buttonLabel);
  };

  return (
    <Layout>
      <div className="align mb_20">
        <h1 className="headline2">매출 관리</h1>
      </div>      
      <ContentBox top>
        <div>
          <Select 
            minwidth="210px"
            round="app"
            placeholder="매장명"
            options={storeNameOpt} 
          />
        </div>
        <div>
          <Select 
            minwidth="210px"
            round="app"
            placeholder="상품명"
            options={categoryOpt} 
          />
        </div>
        <div>
          <Select 
            minwidth="210px"
            round="app"
            placeholder="결제유형"
            options={paymentTypes}
          />
        </div>
        <div>
          <Select 
            minwidth="210px"
            round="app"
            placeholder="결제수단" 
            options={paymentMethods} 
          />
        </div>
        <div style={{ width: "250px" }}>
          <DatePicker
            dateFormat="yyyy/MM/dd"
            selected={startDate}
            className={"date_picker"}
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
              setDateRange(update);
            }}
            isClearable={false}
            placeholderText="날짜를 선택해 주세요."
          />
        </div>
        <Button
          type="pc"
          color="black"
          icon="Search"
          iconStyle={{
            fill: '#fff',
            height: 24,
            width: 24
          }}
          round
          size="icon_l"
        >
          검색
        </Button>
      </ContentBox>
      <ContentBox>
        <div className="align mb_12">
          <div className="lft">
            <div className="item">
              <Select
                minwidth="200px"
                round="round"
                defaultValue={0}
                options={numOpt}
              />
            </div>
            <div className="item">
              <p className="body0">
                총 <span className="title3">200</span>건
              </p>
            </div>
          </div>
          <div className="rgt">
            <Button
              onClick={() => { }}
              type="pc"
              size="small"
              color="point"
              icon="Download"
            >
              엑셀다운로드
            </Button>
          </div>
        </div>
        <div className="tbl">
          <TableContainer>
            <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
              <colgroup>
                <col width="2%" />
                <col width="3%" />
                <col width="auto" />
                <col width="auto" />
                <col width="auto" />
                <col width="auto" />
                <col width="auto" />
                <col width="auto" />
                <col width="auto" />
                <col width="auto" />
                <col width="auto" />
              </colgroup>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Checkbox id="checkAll" name="checkAll" />
                  </TableCell>
                  <TableCell>No.</TableCell>
                  <TableCell>상품명</TableCell>
                  <TableCell>매장명</TableCell>
                  <TableCell>주문일시</TableCell>
                  <TableCell>결제자</TableCell>
                  <TableCell>결제유형</TableCell>
                  <TableCell>결제수단</TableCell>
                  <TableCell>정상금액</TableCell>
                  <TableCell>할인금액</TableCell>
                  <TableCell>총 결제금액</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell><Checkbox id="check1" name="check1" /></TableCell>
                  <TableCell>1</TableCell>
                  <TableCell>에스프레소</TableCell>
                  <TableCell>클라우드 9 카페</TableCell>
                  <TableCell>2023.10.24 09:27:00</TableCell>
                  <TableCell>아무개</TableCell>
                  <TableCell>네이버페이</TableCell>
                  <TableCell>신한카드</TableCell>
                  <TableCell>500000</TableCell>
                  <TableCell>-2500</TableCell>
                  <TableCell>4500</TableCell>
                </TableRow>
                {tableRows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>
                      <Checkbox
                        id={`check${row.id}`}
                        name={`check${row.id}`}
                        checked={checkedItems[row.id] || false}
                        onChange={() => handleCheckboxChange(row.id)}
                      />
                    </TableCell>
                    <TableCell>{row.orderNumber}</TableCell>
                    <TableCell className="left">{row.productName}</TableCell>
                    <TableCell>{row.storeName}</TableCell>
                    <TableCell>{row.orderDateTime}</TableCell>
                    <TableCell>{row.payer}</TableCell>
                    <TableCell>{row.paymentType}</TableCell>
                    <TableCell>{row.paymentMethod}</TableCell>
                    <TableCell className="right">
                      {row.originalAmount.toString()}
                    </TableCell>
                    <TableCell className="right">
                      {row.discountAmount.toString()}
                    </TableCell>
                    <TableCell className="right">
                      {row.totalPaymentAmount.toString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={8} className="bg_f5">
                    총 매출액
                  </TableCell>
                  <TableCell className="right">1,500,000</TableCell>
                  <TableCell className="right">-250,000</TableCell>
                  <TableCell className="right red_text">1,250,000</TableCell>
                </TableRow>
              </TableFooter>
            </MuiTable>
          </TableContainer>
        </div>
        <MuiPage />
      </ContentBox>
    </Layout>
  );
}

export default SalesListPage;
