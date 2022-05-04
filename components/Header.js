import Image from "next/image";
import React from "react";
import Dropdown from "./Dropdown";

const Header = () => {
  return (
    <div className="flex lg:hidden items-center justify-between py-2 p-4 pr-5">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        className="h-20"
      />
      <Dropdown />
    </div>
  );
};

export default Header;
