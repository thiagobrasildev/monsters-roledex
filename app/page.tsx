"use client";

import CardList from "@/components/CardList";
import Search from "@/components/Search";
import { TypeMonster } from "@/types/TypeMonster";
import { useEffect, useState } from "react";

// Recebe os dados da API
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default function Home() {
  const [monsters, setMonster] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  // Salva dos dados recebidos no State
  useEffect(() => {
    getData()
      .then((data) => {
        setMonster(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Recebe o valor do Input Search e atualiza o State
  const handleSearchValue = (e: React.FormEvent<HTMLInputElement>): void => {
    const searchField = e.currentTarget.value;
    setSearchValue(searchField);
  };

  // Filtra os dados de acordo com o State do Input Search
  const filteredMonsters = monsters.filter((monster: TypeMonster) =>
    monster.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <main className="flex flex-col items-center max-w-[1140px]">
      <header className="flex items-center justify-center min-h-[180px]">
        <h1 className="font-title text-7xl font-bold">Monsters Roledex</h1>
      </header>
      <section className="flex flex-col w-full">
        <Search
          handleSearchValue={handleSearchValue}
          searchValue={searchValue}
        />
        <CardList monsters={filteredMonsters} />
      </section>
    </main>
  );
}
