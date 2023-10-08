import { TypeMonster } from "@/types/TypeMonster";
import Card from "./Card";

interface CardListProps {
  monsters: TypeMonster[];
}

const CardList = ({ monsters }: CardListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[200px_200px] md:grid-cols-[250px_250px_250px_250px] items-center justify-center px-10 py-6 gap-5">
      {monsters.map((monster, index) => (
        <Card key={index} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
