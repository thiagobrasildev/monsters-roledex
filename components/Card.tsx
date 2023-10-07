import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="flex flex-col p-2 items-center justify-center bg-slate-400">
      <Image src="/1.png" alt="monster" width={100} height={150} />
      <h2>Leanne Graham</h2>
      <p>Sincere@april.biz</p>
    </div>
  );
};

export default Card;
