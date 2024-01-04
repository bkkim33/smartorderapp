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
  { label: "전체", value: "전체" },
  { label: "일별 통계", value: "일별 통계" },
  { label: "주별 통계", value: "주별 통계" },
  { label: "월별 통계", value: "월별 통계" },
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

const periodOpt = [
  { label: "최근 1주일", value: "최근 1주일", },
  { label: "최근 1개월", value: "최근 1개월", },
  { label: "최근 6개월", value: "최근 6개월", },
  { label: "최근 1년", value: "최근 1년", },
  { label: "이번달", value: "이번달", },
  { label: "지난달", value: "지난달", },
  { label: "올해", value: "올해", },
  { label: "지난해", value: "지난해", },
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
            placeholder="판매 매장"
            options={storeNameOpt}
          />
        </div>
        <div>
          <Select
            minwidth="210px"
            round="app"
            placeholder="통계기간"
            options={categoryOpt}
          />
        </div>
        <div>
          <Select
            minwidth="210px"
            round="app"
            placeholder="기간선택"
            options={periodOpt}
          />
        </div>
        {/* <div>
          <Select
            minwidth="210px"
            round="app"
            placeholder="결제수단"
            options={paymentMethods}
          />
        </div> */}
        {/* <div>
          <Select
            minwidth="78px"
            round="app"
            placeholder="기간 선택"
            defaultValue={periodOpt[0]}
            options={periodOpt}
          />
        </div> */}
        <div style={{ width: "260px" }}>
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
            fill: "#fff",
            height: 18,
            width: 18,
          }}
          round
          size="icon_l"
        >
          검색
        </Button>
        <Button
          type="pc"
          color="white"
          size="icon_l"
          round
          icon="Refresh"
          iconStyle={{
            fill: "var(--primary)",
            height: 23,
            width: 19,
          }}
          globalClass="ml_10"
        >
          초기화
        </Button>
      </ContentBox>
      <ContentBox>
        {/* <div className="admin_ordersales">
          <div className="total_box">
            <div className="total_item">
              <div className="total_tit">합계금액</div>
              <div className="total_price">
                <p>21,100</p>
                <span>원</span>
              </div>
            </div>
            <div className="total_item">
              <div className="total_tit">총 할인금액</div>
              <div className="total_price">
                <p>-106,820</p>
                <span>원</span>
              </div>
            </div>
            <div className="total_item">
              <div className="total_tit">총 결제금액</div>
              <div className="total_price">
                <p className="red_text">4,280</p>
                <span>원</span>
              </div>
            </div>
          </div>
        </div> */}
        <div className="align mb_12">
          {/* <div className="lft">
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
          </div> */}
          <div className="rgt">
            <Button
              onClick={() => {}}
              type="pc"
              size="small"
              color="point"
              icon="Download"
            >
              엑셀다운로드
            </Button>
          </div>
        </div>
        <div className="admin_grapbox"></div>

        <div className="tbl mt_12">
          <MuiTable>
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
                <TableCell>판매 매장</TableCell>
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
                <TableCell>
                  <Checkbox id="check1" name="check1" />
                </TableCell>
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
                <TableCell colSpan={11}>검색된 결과가 없습니다.</TableCell>
              </TableRow>
            </TableBody>
          </MuiTable>
        </div>
      </ContentBox>
    </Layout>
  );
}

export default SalesListPage;