import PropTypes from "prop-types";
import Menu from "../../shared/components/Menu";
import Header from "../../shared/components/Header";
import Qualifier from "../../shared/components/Qualifier";
import ShowMore from "../../shared/components/ShowMore";
import React from "react";

const Home = () => {
  const [showMore, setShowMore] = React.useState(false)
  const onClick = () => setShowMore(!showMore)
  return (
    <div className={`p-top-60 p-bottom-70`}>
      <Header type={"one"} />

      <div className="qualifiers__wrapper">
        <h2 className="title--second">
          كل المتأهلين تلاوة
        </h2>

        <Qualifier name={'عائشة بنت حمد السيابي'} level={'المستوى الاول'} prof={'المعلمة عائشة بنت حمد السيابية'} />
        <Qualifier name={'عائشة بنت حمد السيابي'} level={'المستوى الاول'} prof={'المعلمة عائشة بنت حمد السيابية'} />


        {
          showMore ?
            <>
              <Qualifier name={'عائشة بنت حمد السيابي'} level={'المستوى الاول'} prof={'المعلمة عائشة بنت حمد السيابية'} />
              <Qualifier name={'عائشة بنت حمد السيابي'} level={'المستوى الاول'} prof={'المعلمة عائشة بنت حمد السيابية'} />
              <Qualifier name={'عائشة بنت حمد السيابي'} level={'المستوى الاول'} prof={'المعلمة عائشة بنت حمد السيابية'} />
              <Qualifier name={'عائشة بنت حمد السيابي'} level={'المستوى الاول'} prof={'المعلمة عائشة بنت حمد السيابية'} />
            </>
            : null
        }
        <div className="m-top-16" />
        <ShowMore label={'إظهار الباقي (4) '} onClick={onClick} />
      </div>

      <div className="qualifiers__wrapper m-top-16">
        <h2 className="title--second">
          كل المتأهلين الحفظ
        </h2>

        <Qualifier name={'عائشة بنت حمد السيابي'} level={'المستوى الاول'} prof={'المعلمة عائشة بنت حمد السيابية'} />
        <Qualifier name={'عائشة بنت حمد السيابي'} level={'المستوى الاول'} prof={'المعلمة عائشة بنت حمد السيابية'} />
        <div className="m-top-16" />
        <ShowMore label={'إظهار الباقي (4) '} />
      </div>

      <Menu />
    </div>
  )
}
Home.propTypes = {

};

Home.defaultProps = {

};

export default Home;