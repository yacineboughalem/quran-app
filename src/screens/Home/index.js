import PropTypes from "prop-types";
import Menu from "../../shared/components/Menu";
import Header from "../../shared/components/Header";
import Qualifier from "../../shared/components/Qualifier";
import ShowMore from "../../shared/components/ShowMore";
import React from "react";
‍import { Helmet } from 'react-helmet';

const Home = () => {
  const [showMore, setShowMore] = React.useState(false)
  const onClick = () => setShowMore(!showMore)
  return (
    <>
    <Helmet>‍
        <title>QURAN APP - Home</title>‍
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
    </>
  )
}
Home.propTypes = {

};

Home.defaultProps = {

};

export default Home;