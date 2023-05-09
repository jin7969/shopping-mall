import { AiOutlineSearch } from "react-icons/ai";
import { FiDelete } from "react-icons/fi";

function Search() {
  return (
    <div>
      <div className="flex justify-between px-3 py-2 bg-zinc-300 rounded-lg">
        <AiOutlineSearch />
        <FiDelete />
      </div>
    </div>
  );
}

export default Search;
