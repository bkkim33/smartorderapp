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
            placeholder="기간 범위"
            options={categoryOpt}
          />
        </div>
        <div>
          <Select
            minwidth="210px"
            round="app"
            placeholder="기간 설정"
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

        <div className="tbl mt_20">
          <MuiTable>
            <colgroup>
              <col width="16.66%" />
              <col width="16.66%" />
              <col width="16.66%" />
              <col width="16.66%" />
              <col width="16.66%" />
              <col width="16.66%" />
            </colgroup>
            <TableHead>
              <TableRow>
                <TableCell>날짜</TableCell>
                <TableCell>판매액</TableCell>
                <TableCell>판매액 증감</TableCell>
                <TableCell>누적 판매액</TableCell>
                <TableCell>주문수</TableCell>
                <TableCell>주문수 증감</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>2023.12.08</TableCell>
                <TableCell className="right">1,232,000 원</TableCell>
                <TableCell className="right"></TableCell>
                <TableCell className="right">1,232,000 원</TableCell>
                <TableCell className="right">253 개</TableCell>
                <TableCell className="right"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023.12.09</TableCell>
                <TableCell className="right">1,832,000 원</TableCell>
                <TableCell className="right">
                  <span className="blue">+ 600,000 원</span>
                </TableCell>
                <TableCell className="right">1,232,000 원</TableCell>
                <TableCell className="right">367 개</TableCell>
                <TableCell className="right">
                  <span className="blue">+ 114 개</span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2023.12.10</TableCell>
                <TableCell className="right">1,832,000 원</TableCell>
                <TableCell className="right">
                  <span className="red">- 600,000 원</span>
                </TableCell>
                <TableCell className="right">1,232,000 원</TableCell>
                <TableCell className="right">367 개</TableCell>
                <TableCell className="right">
                  <span className="red">- 55 개</span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={6}>검색된 결과가 없습니다.</TableCell>
              </TableRow>
            </TableBody>
          </MuiTable>
        </div>
      </ContentBox>
    </Layout>
  );
}

export default SalesListPage;