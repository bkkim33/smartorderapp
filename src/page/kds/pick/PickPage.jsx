import React from "react";
import Layout from '../../../layout/KDSDefaultLayout'
import KDSContentBox from "../../../layout/KDSContentBox";
import { Icons } from "../../../components/Icon";
import Button from "../../../components/Button";
import MuiPage from "../../../components/MuiPage";
   
function PickPage() {
  return (
    <Layout>
      <KDSContentBox>
        <h1 className="kds_title mb_40">픽업현황</h1>
        <div className="kds_pick_list">
          <ul>
            <li className="active">
              <span>
                <em>1</em>
                <Icons.KDSPickNum fill="#00C0FF" />
              </span>
              <div className="kds_pick_picknum">
                <button>
                  <p>110</p>
                </button>
                <button>
                  <Icons.Delete width={30} height={30} fill="#00C0FF" />
                </button>
              </div>
            </li>
            <li>
              <span>
                <em>2</em>
                <Icons.KDSPickNum />
              </span>
              <div className="kds_pick_picknum">
                <button>
                  <p>111</p>
                </button>
                <button>
                  <Icons.Delete width={30} height={30} fill="#707A83" />
                </button>
              </div>
            </li>
            <li>
              <span>
                <em>3</em>
                <Icons.KDSPickNum />
              </span>
              <div className="kds_pick_picknum">
                <button>
                  <p>112</p>
                </button>
                <button>
                  <Icons.Delete width={30} height={30} fill="#707A83" />
                </button>
              </div>
            </li>
            <li>
              <span>
                <em>4</em>
                <Icons.KDSPickNum />
              </span>
              <div className="kds_pick_picknum">
                <button>
                  <p>113</p>
                </button>
                <button>
                  <Icons.Delete width={30} height={30} fill="#707A83" />
                </button>
              </div>
            </li>
            <li>
              <span>
                <em>5</em>
                <Icons.KDSPickNum />
              </span>
              <div className="kds_pick_picknum">
                <button>
                  <p>114</p>
                </button>
                <button>
                  <Icons.Delete width={30} height={30} fill="#707A83" />
                </button>
              </div>
            </li>
            <li>
              <span>
                <em>6</em>
                <Icons.KDSPickNum />
              </span>
              <div className="kds_pick_picknum">
                <button>
                  <p>115</p>
                </button>
                <button>
                  <Icons.Delete width={30} height={30} fill="#707A83" />
                </button>
              </div>
            </li>
            <li>
              <span>
                <em>7</em>
                <Icons.KDSPickNum />
              </span>
            </li>
            <li>
              <span>
                <em>8</em>
                <Icons.KDSPickNum />
              </span>
            </li>
          </ul>
        </div>
        <div className="kds_pick_btn mt_55">
          <button>전체 초기화</button>
          <button>재호출</button>
          {/* <button className="disabled">재호출</button> */}
        </div>
      </KDSContentBox>
    </Layout>
  );
}

export default PickPage;
