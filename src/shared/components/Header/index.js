import { useMemo } from "react";

import PropTypes from "prop-types";

import Default from "./Default";
import StyleOne from "./StyleOne";
import StyleTwo from "./StyleTwo";

const MODES = {
  default: Default,
  one: StyleOne,
  two: StyleTwo,
};

const Card = ({ type, ...props }) => {
  const View = useMemo(() => MODES[type], [type]);
  return <View {...props} />;
};

Card.propTypes = {
  type: PropTypes.oneOf(Object.keys(MODES)),
};

Card.defaultProps = {
  type: "default",
};

export default Card;
