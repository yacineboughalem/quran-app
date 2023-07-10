import PropTypes from "prop-types";


const Qualifier = ({level, name, prof}) => (
  <div className={`qualifier__item`}>
    <div className="right">
      <img src="https://s3.amazonaws.com/upload.uxpin/files/931197/920401/WhatsApp_Image_2019-02-25_at_7.24.30_PM-51b07b.jpeg" />
      <div className="content">
        <span>{level}</span>
        <h4>{name}</h4>
        <h5>{prof}</h5>
      </div>
    </div>
    <div className="left">
      <span>72</span>
    </div>
  </div>
);

Qualifier.propTypes = {};

Qualifier.defaultProps = {};

export default Qualifier;
