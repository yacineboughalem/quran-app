import PropTypes from "prop-types";
import { FaPlayCircle } from "react-icons/fa";

const StyleOne = () => (
    <div className={`header__options`}>
        <div className="right">
            <span>تقويم المعلمات</span>
            <span>(سيعود بعد يومين)</span>
        </div>

        <div className="left">
            <FaPlayCircle size={24} />
        </div>
    </div>
  );
  
  StyleOne.propTypes = {
   
  };
  
  StyleOne.defaultProps = {
   
  };
  
  export default StyleOne;