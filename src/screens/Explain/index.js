import PropTypes from "prop-types";
import Menu from "../../shared/components/Menu";
import Header from "../../shared/components/Header";
import Qualifier from "../../shared/components/Qualifier";
import ShowMore from "../../shared/components/ShowMore";
import Button from "../../shared/components/Button";
import Modal from "../../shared/components/Modal";
import React, { useState } from "react";
import { BsArrowReturnRight } from "react-icons/bs";
import { TbBulb } from "react-icons/tb";
import { FiZoomIn, FiZoomOut } from "react-icons/fi";
‍import { Helmet } from 'react-helmet';

const Explain = () => {

  const [show, setShow] = useState(false);


  
  return (
    <>
    <Helmet>‍
        <title>QURAN APP - Explain</title>‍
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
      <div className="surah__wrapper" onClick={() => setShow(true)}>
        <p>
        اشرح قوله تعالى:
        <strong> لقد خلقنا الإنسان في كبد  </strong>
        </p>
      
      </div>

      <div className="explain__text" onClick={() => setShow(true)}>
        <h2 className="title--second">الجواب</h2>

        <p>
        روي عن ابن مسعود، وابن عباس، وعكرمة، ومجاهد، وإبراهيم النخعي، وخيثمة، والضحاك، وغيرهم،  يعني منتصبا - زاد ابن عباس في رواية عنه - في بطن أمه، والكبد : الاستواء والاستقامة . ومعنى هذا القول  لقد خلقنا الإنسان سويا مستقيما كقوله
        </p>
      </div>

      <div className="explain__footer">
          <Button type="primary" onClick={() => setShow(true)}>
          خطء
          </Button>
          <Button type="primary" onClick={() => setShow(true)}>
          صحيح
          </Button>
      </div>

      <Modal title="My Modal" onClose={() => setShow(false)} show={show}>
        <p className="p1">السؤال الثاني</p>
        <p className="p2">اشرح قوله تعالى</p>
        <p className="p3"><strong>لقد خلقنا الإنسان في كبد</strong></p>
      </Modal>
     
    </div>
    </>
  );
};
Explain.propTypes = {};

Explain.defaultProps = {};

export default Explain;
