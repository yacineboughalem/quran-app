import PropTypes from "prop-types";
import Button from "../../shared/components/Button";
import React, { useState } from "react";
const Results = () => {
  return (
    <div className={``}>
      <div className="results__area">
        <div className="infos">
          <img
            src="https://s3.amazonaws.com/upload.uxpin/files/931197/920401/WhatsApp_Image_2019-02-25_at_7.24.30_PM-6cc662.jpeg"
            alt=""
          />
          <h3>عائشة بنت حمد السيابي</h3>
          <p>مسابقة الحفظ  |  المستوى الأول</p>
        </div>

        <div className="score">
          <span>النتيجة النهائية</span>
          <p>73</p>
        </div>

        <Button type="primary" size={"full--btn"}>
          إنهاء
        </Button>
      </div>
    </div>
  );
};
Results.propTypes = {};

Results.defaultProps = {};

export default Results;
