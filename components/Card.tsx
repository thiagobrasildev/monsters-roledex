import { TypeMonster } from "@/types/TypeMonster";
import Image from "next/image";
import React from "react";

interface CardProps {
  monster: TypeMonster;
}

const Card = ({ monster }: CardProps) => {
  return (
    <div className="flex flex-col p-2 items-center justify-center bg-[#95DADA] rounded-md cursor-pointer hover:scale-105 transition-all ease-in duration-200">
      <Image
        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
        alt="monster"
        width={200}
        height={250}
      />
      <h2 className="text-xl font-bold w-full text-center mt-5">
        {monster.name}
      </h2>
      <p className="text-sm text-center py-8">{monster.email}</p>
    </div>
  );
};

export default Card;
