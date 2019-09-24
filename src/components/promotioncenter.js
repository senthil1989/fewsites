import React from "react";
import Imgfunction from "../common/images";
import CommonTitle from "../components/title";

const PromotionCenter = () => {
  return (
    <>
      <div>
        <CommonTitle title={"Promotion Center"} />
      </div>
      <div>
        <div>{Imgfunction("prRoomBanner")}</div>
      </div>
    </>
  );
};
export default PromotionCenter;
