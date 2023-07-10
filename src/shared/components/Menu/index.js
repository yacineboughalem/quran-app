import PropTypes from "prop-types";
import {  FaCheckCircle,FaCircleDown,FaUsers,FaSlidersH } from "react-icons/fa";
import { FiArrowDownCircle, FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";

const Menu = () => (
    <div className={`menu__area`}>
        <Link to="/" className="menu__area--item">
            <FaCheckCircle size={24} />
            <span>التقويم</span>
        </Link>
        <Link to="/" className="menu__area--item">
            <FiArrowDownCircle size={24} />
            <span>اختباري</span>
        </Link>
        <Link to="/" className="menu__area--item">
            <FaUsers size={24} />
            <span>المتسابقين</span>
        </Link>
        <Link to="/" className="menu__area--item">
            <FiSettings size={24} />
            <span>إعدادات</span>
        </Link>
    </div>
  );
  
  Menu.propTypes = {
   
  };
  
  Menu.defaultProps = {
   
  };
  
  export default Menu;