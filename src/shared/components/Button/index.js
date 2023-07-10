
import PropTypes from "prop-types";

const ALIGNMENTS = ["left", "center", "right"];

const TYPES = [
  "default",
  "primary",
  "secondary",
  "primary--light",
  "secondary--light",
  "primary--link",
  "secondary--link",
  "primary--outlined",
  "success",
  "success--link",
  "success--light",
  "gray",
  "gray--outlined",
  "warning",
  "warning--link",
  "warning--light",
  "danger",
  "danger--link",
  "danger--outlined",
  "danger--light",
];

const Component = ({ type, alignment, children, size, onClick}) => (
  <div className={`button__wrapper ${alignment}`} onClick={onClick}>
    <button className={`${type} ${size}`}  >
      {children}
    </button>
  </div>
);

Component.propTypes = {
  alignment: PropTypes.oneOf(ALIGNMENTS),
  type: PropTypes.oneOf(TYPES),
};

Component.defaultProps = {
  alignment: "left",
  type: "default",
};

export default Component;
