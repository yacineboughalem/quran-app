import PropTypes from "prop-types";
import Button from "../../shared/components/Button";
import React, { useState } from "react";
‍import { Helmet } from 'react-helmet';

const Results = () => {
  return (
    <>
    <Helmet>‍
        <title>QURAN APP - Results</title>‍
        <meta name="description" content="Find all the best quality           products your pet may need" />        
        <meta name="twitter:card" content="summary_large_image" />        
        <meta name="twitter:site" content="@user" />        
        <meta name="twitter:creator" content="@user" />        
        <meta name="twitter:title" content="Pets - Products" />        
        <meta name="twitter:description" content="Best Products for your pet" />        
        <meta name="twitter:image" content="url_to_image"/>        
        <meta property="og:title" content="Pets - Products" />        
        <meta property="og:description" content="Best Products for your pet" />        
        <meta property="og:image" content="url_to_image"/>
        <meta property="og:url" content="pets.abc" />
        <meta property="og:site_name" content="Pets - Products" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
      </Helmet>
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
    </>
  );
};
Results.propTypes = {};

Results.defaultProps = {};

export default Results;
