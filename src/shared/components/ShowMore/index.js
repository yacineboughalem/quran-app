import PropTypes from "prop-types";


const Qualifier = ({ label, onClick}) => (
  <div className={`show_more__area`} onClick={onClick}>
    <span>{label}</span>
  </div>
);

Qualifier.propTypes = {};

Qualifier.defaultProps = {};

export default Qualifier;
