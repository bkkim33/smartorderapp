import React from "react";
import { MuiTooltip } from "../../components/MuiTooltip";

export default {
  title: "components/Lib/Tooltip",
  component: MuiTooltip,
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = (args) => (
  <>
    <MuiTooltip {...args}>
      텍스트 텍스트
    </MuiTooltip>
  </>
);

export const Tag = (args) => (
  <>
    <MuiTooltip {...args}>
      <ul className="bullet_list">
        <li>쿠폰 추가 버튼을 통해 쿠폰을 생성할 수 있습니다.</li>
        <li>
          쿠폰 이미지는 파일 불러오기 기능을 통해 직접 제작하여 업로드 가능합니다.
        </li>
        <li>
          이미 발급한 쿠폰은 삭제해도 발송 관리자가 고객에게 전송할 수 있습니다. <br/>
          쿠폰 회수는 쿠폰 발급 메뉴에서 가능합니다.
        </li>
      </ul>
    </MuiTooltip>
  </>
);