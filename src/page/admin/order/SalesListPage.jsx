import React, { useState } from "react";
import Layout from '../../../layout/DefaultLayout'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ContentBox from "../../../layout/ContentBox";
import Button from "../../../components/Button";
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

function SalesListPage() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

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
                defaultValue={numOpt[0]}
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
          <TableContainer sx={{ maxHeight: 495 }}>
            <MuiTable sx={{ minWidth: 650 }} aria-label="sticky table" stickyHeader>
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
                  <TableCell className="right">8,280 원</TableCell>
                  <TableCell className="right">-4,000 원</TableCell>
                  <TableCell className="right">4,280 원</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><Checkbox id="check2" name="check2" /></TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>카라멜 마끼아또</TableCell>
                  <TableCell>클라우드 9 카페</TableCell>
                  <TableCell>2023.10.24 09:27:00</TableCell>
                  <TableCell>아무개</TableCell>
                  <TableCell>네이버페이</TableCell>
                  <TableCell>신한카드</TableCell>
                  <TableCell className="right">8,280 원</TableCell>
                  <TableCell className="right">-8,280 원</TableCell>
                  <TableCell className="right">0 원</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><Checkbox id="check3" name="check3" /></TableCell>
                  <TableCell>3</TableCell>
                  <TableCell>디카페인콜드브루</TableCell>
                  <TableCell>클라우드 9 카페</TableCell>
                  <TableCell>2023.10.24 09:27:00</TableCell>
                  <TableCell>010-5012-0165</TableCell>
                  <TableCell>네이버페이</TableCell>
                  <TableCell>신한카드</TableCell>
                  <TableCell className="right">8,280 원</TableCell>
                  <TableCell className="right">-2,580 원</TableCell>
                  <TableCell className="right">6,000 원</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><Checkbox id="check4" name="check4" /></TableCell>
                  <TableCell>4</TableCell>
                  <TableCell>디카페인콜드브루</TableCell>
                  <TableCell>클라우드 9 카페</TableCell>
                  <TableCell>2023.10.24 09:27:00</TableCell>
                  <TableCell>010-5012-0165</TableCell>
                  <TableCell>네이버페이</TableCell>
                  <TableCell>신한카드</TableCell>
                  <TableCell className="right">8,280 원</TableCell>
                  <TableCell className="right">-2,580 원</TableCell>
                  <TableCell className="right">6,000 원</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><Checkbox id="check5" name="check5" /></TableCell>
                  <TableCell>5</TableCell>
                  <TableCell>디카페인콜드브루</TableCell>
                  <TableCell>클라우드 9 카페</TableCell>
                  <TableCell>2023.10.24 09:27:00</TableCell>
                  <TableCell>010-5012-0165</TableCell>
                  <TableCell>네이버페이</TableCell>
                  <TableCell>신한카드</TableCell>
                  <TableCell className="right">8,280 원</TableCell>
                  <TableCell className="right">-2,580 원</TableCell>
                  <TableCell className="right">6,000 원</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><Checkbox id="check6" name="check6" /></TableCell>
                  <TableCell>6</TableCell>
                  <TableCell>디카페인콜드브루</TableCell>
                  <TableCell>클라우드 9 카페</TableCell>
                  <TableCell>2023.10.24 09:27:00</TableCell>
                  <TableCell>010-5012-0165</TableCell>
                  <TableCell>네이버페이</TableCell>
                  <TableCell>신한카드</TableCell>
                  <TableCell className="right">8,280 원</TableCell>
                  <TableCell className="right">-2,580 원</TableCell>
                  <TableCell className="right">6,000 원</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><Checkbox id="check7" name="check7" /></TableCell>
                  <TableCell>7</TableCell>
                  <TableCell>디카페인콜드브루</TableCell>
                  <TableCell>클라우드 9 카페</TableCell>
                  <TableCell>2023.10.24 09:27:00</TableCell>
                  <TableCell>010-5012-0165</TableCell>
                  <TableCell>네이버페이</TableCell>
                  <TableCell>신한카드</TableCell>
                  <TableCell className="right">8,280 원</TableCell>
                  <TableCell className="right">-2,580 원</TableCell>
                  <TableCell className="right">6,000 원</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><Checkbox id="check8" name="check8" /></TableCell>
                  <TableCell>8</TableCell>
                  <TableCell>디카페인콜드브루</TableCell>
                  <TableCell>클라우드 9 카페</TableCell>
                  <TableCell>2023.10.24 09:27:00</TableCell>
                  <TableCell>010-5012-0165</TableCell>
                  <TableCell>네이버페이</TableCell>
                  <TableCell>신한카드</TableCell>
                  <TableCell className="right">8,280 원</TableCell>
                  <TableCell className="right">-2,580 원</TableCell>
                  <TableCell className="right">6,000 원</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><Checkbox id="check9" name="check9" /></TableCell>
                  <TableCell>9</TableCell>
                  <TableCell>디카페인콜드브루</TableCell>
                  <TableCell>클라우드 9 카페</TableCell>
                  <TableCell>2023.10.24 09:27:00</TableCell>
                  <TableCell>010-5012-0165</TableCell>
                  <TableCell>네이버페이</TableCell>
                  <TableCell>신한카드</TableCell>
                  <TableCell className="right">8,280 원</TableCell>
                  <TableCell className="right">-2,580 원</TableCell>
                  <TableCell className="right">6,000 원</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><Checkbox id="check10" name="check10" /></TableCell>
                  <TableCell>10</TableCell>
                  <TableCell>디카페인콜드브루</TableCell>
                  <TableCell>클라우드 9 카페</TableCell>
                  <TableCell>2023.10.24 09:27:00</TableCell>
                  <TableCell>010-5012-0165</TableCell>
                  <TableCell>네이버페이</TableCell>
                  <TableCell>신한카드</TableCell>
                  <TableCell className="right">8,280 원</TableCell>
                  <TableCell className="right">-2,580 원</TableCell>
                  <TableCell className="right">6,000 원</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><Checkbox id="check11" name="check11" /></TableCell>
                  <TableCell>11</TableCell>
                  <TableCell>디카페인콜드브루</TableCell>
                  <TableCell>클라우드 9 카페</TableCell>
                  <TableCell>2023.10.24 09:27:00</TableCell>
                  <TableCell>010-5012-0165</TableCell>
                  <TableCell>네이버페이</TableCell>
                  <TableCell>신한카드</TableCell>
                  <TableCell className="right">8,280 원</TableCell>
                  <TableCell className="right">-2,580 원</TableCell>
                  <TableCell className="right">6,000 원</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><Checkbox id="check12" name="check12" /></TableCell>
                  <TableCell>12</TableCell>
                  <TableCell>디카페인콜드브루</TableCell>
                  <TableCell>클라우드 9 카페</TableCell>
                  <TableCell>2023.10.24 09:27:00</TableCell>
                  <TableCell>010-5012-0165</TableCell>
                  <TableCell>네이버페이</TableCell>
                  <TableCell>신한카드</TableCell>
                  <TableCell className="right">8,280 원</TableCell>
                  <TableCell className="right">-2,580 원</TableCell>
                  <TableCell className="right">6,000 원</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={11}>검색된 결과가 없습니다.</TableCell>
                </TableRow>
              </TableBody>              
            </MuiTable>
          </TableContainer>
        </div>
        <div className="admin_ordersales">
          <div className="total_box">
            <div className="total_item">
              <div className="total_tit">합계금액</div>
              <div className="total_price">
                <p>21,100</p>
                <span>원</span>
              </div>
            </div>
            <div className="total_item">
              <div className="total_tit">총 할인 금액</div>
              <div className="total_price">
                <p>-106,820</p>
                <span>원</span>
              </div>
            </div>
            <div className="total_item">
              <div className="total_tit">총 결제 금액</div>
              <div className="total_price">
                <p className="red_text">4,280</p>
                <span>원</span>
              </div>
            </div>
          </div>
        </div>
        <MuiPage />
      </ContentBox>
    </Layout>
  );
}

export default SalesListPage;