import PropTypes from "prop-types";
import { FaArrowRight, FaPlayCircle } from "react-icons/fa";
import Button from "../../Button";

const StyleTwo = () => (
    <div className={`header__surah`}>
        <div className="right">
            <FaArrowRight size={16} />
            <span>السؤال الأول</span>
        </div>

        <div className="left">
        <Button type='primary' size={'medium--btn'} >التالي</Button>
        </div>
    </div>
  );
  
  StyleTwo.propTypes = {
   
  };
  
  StyleTwo.defaultProps = {
   
  };
  
  export default StyleTwo;