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

const Explain = () => {

  const [show, setShow] = useState(false);


  
  return (
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
  );
};
Explain.propTypes = {};

Explain.defaultProps = {};

export default Explain;
