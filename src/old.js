import React from "react";
// import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';

import * as API from "./api";
import Header from './shared/components/Header'
import { Link } from "react-router-dom";

const App = () => {

    const [ surah         , setSurah        ] = React.useState([]);
    const [ loadingSurah  , setLoadingSurah ] = React.useState(false);

    const loadSurah = (_page) => {
        setLoadingSurah(true);
        API.Surah(_page)
          .then((res)=>{
            //console.log(res);
            setSurah(res.data);
            console.log(res.data);
          })
          .catch((err)=>{ 
            //console.log(err);
          })
          .then(()=>{
            setLoadingSurah(false);
          });
      }

      React.useEffect(()=>{
        loadSurah();
        // Set title page
        document.title = API.APP_NAME + " - Surah " ;
      },[0])

  return (
    <>
        <Header />
        <div className="container">
            {
                loadingSurah ? 'Loading' :
                <>
                {
                    surah.length ?
                    <ul>
                    
                        {surah.map((item, index) => {
                        return (
                        <li key={index}>
                            <a href={`/surah/${item.id}`} className="no-decoration" >
                                {item.name_ar}
                            </a>
                            </li>
                        );
                        })}
                    </ul>
                    :
                    <>
                        <h3> il n'y a pas encore de données </h3>
                    </>
                }
                    
                </>
            }
        </div>

    </>
  );
};

export default App;