import PropTypes from "prop-types";
import Menu from "../../shared/components/Menu";
import Header from "../../shared/components/Header";
import Qualifier from "../../shared/components/Qualifier";
import ShowMore from "../../shared/components/ShowMore";
import Button from "../../shared/components/Button";
import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";
import { TbBulb } from "react-icons/tb";
import { FiZoomIn, FiZoomOut } from "react-icons/fi";
‍import { Helmet } from 'react-helmet';

const Surah = () => {
  const [biggerImage, setbiggerImage] = React.useState(false);
  const toggleImage = () => setbiggerImage(!biggerImage);
  return (
    <>
    <Helmet>‍
        <title>QURAN APP - Surah</title>‍
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
    <div className={`p-top-60 p-bottom-70`}>
      <Header type={"two"} />
      <div className="surah__wrapper">
        <p>
          اتلو من قوله تعالى: <strong>لقد خلقنا الإنسان في كبد،</strong>
        </p>
        <p>
          {" "}
          إلى : <strong>آخر السورة.</strong>
        </p>
      </div>

      <div className="surah__image">
        <div className="wrap">
          <img
            src="https://s3.amazonaws.com/upload.uxpin/files/931197/920401/Screen_Shot_2018-12-19_at_6.32.51_PM-b85cac.png"
            alt=""
          />
        </div>
        <div className="zoom" onClick={toggleImage}>
          {biggerImage ? <FiZoomOut size={24} /> : <FiZoomIn size={24} />}
        </div>

        {biggerImage ? (
          <div className="wrap bigger">
            <img
              src="https://s3.amazonaws.com/upload.uxpin/files/931197/920401/Screen_Shot_2018-12-19_at_6.32.51_PM-b85cac.png"
              alt=""
            />
          </div>
        ) : null}
      </div>

      <div className="surah__footer">
        <div className="surah__score">
          <span>النتيجة : 100</span>
          <span className="icon">
            <BsArrowReturnRight size={18} />
          </span>
        </div>
        <div className="row">
          <Button type="primary" size={""}>
            اللحن الخفي
          </Button>
          <Button type="primary" size={""}>
            اللحن الجلي
          </Button>
          <Button type="warning" size={""}>
            <TbBulb size={24} />{" "}
          </Button>
        </div>
      </div>
    </div>
    </>
  );
};
Surah.propTypes = {};

Surah.defaultProps = {};

export default Surah;
