import React from "react";
import Image from "next/image";

function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col items-start xl:items-start xl:w-[340px] p-2 fixed h-full ">
      <div className="flex items-center justify-center w-14 h-14 hoveer: Animation p-0 xl:ml-24">
        <Image alt="img" src="https://rb.gy/ogau5a" width={30} height={30}  />
      </div>
    </div>
  );
}

export default Sidebar;
