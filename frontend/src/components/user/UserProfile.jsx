import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Footer2 from "../Footer/footer2";
import BreadcrumbUser from "../Other/BreadCrumbUser";
import UserSidebar from "./UserSidebar";
import AccountSetting from "./AccountSetting";
import "./UserProfile.css";
import ChangePassword from "./ChangePassword";
import YourOrders from "./YourOrders";
import UserAddress from "./UserAddress";
const UserProfile = () => {
  const [cartItemCount] = useState(0);

  const { activepage } = useParams();
  return (
    <div className="userprofile">
      <Header cartItemCount={cartItemCount} />
      <BreadcrumbUser />
      <div className="userprofilein">
        <div className="left">
          <UserSidebar activepage={activepage} />
        </div>
        <div className="right">
          {activepage === "accountsettings" && <AccountSetting />}
          {activepage === "changepassword" && <ChangePassword />}
          {activepage === "yourorders" && <YourOrders />}
          {activepage === "youraddress" && <UserAddress />}
        </div>
      </div>
      <Footer2 />
    </div>
  );
};
export default UserProfile;
