import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  return (
    <section className="search-container">
      <div className="search-icon">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>

      <input
        type="text"
        placeholder="Search for a country"
        className="search-input"
        value=""
      />
    </section>
  );
};

export default Search;
