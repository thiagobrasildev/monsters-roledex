interface SearchProps {
  handleSearchValue: (e: React.FormEvent<HTMLInputElement>) => void;
  searchValue: string;
}

const Search = ({ handleSearchValue, searchValue }: SearchProps) => {
  return (
    <div className="flex w-full items-center justify-center h-4 p-7">
      <input
        type="search"
        placeholder="search monsters"
        className="border-none outline-none p-3 w-45 flex"
        onChange={handleSearchValue}
        value={searchValue}
      />
    </div>
  );
};

export default Search;
