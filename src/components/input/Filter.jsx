import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Filter = () => {
    return (
      <section className="filter-container">
        <div className="filter">
          <input
            type="text"
            readOnly
            placeholder="Filter by Region"
            value=""
            className="filter-input"
          />
  
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
      </section>
    );
  };
  
  export default Filter;