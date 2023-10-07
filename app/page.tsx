import CardList from "@/components/CardList";
import Search from "@/components/Search";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start">
      <header className="flex items-center justify-center min-h-[180px]">
        <h1 className="font-title text-7xl font-bold">Monsters Roledex</h1>
      </header>
      <section>
        <Search />
        <CardList />
      </section>
    </main>
  );
}
