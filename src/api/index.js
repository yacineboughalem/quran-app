import axios from 'axios';
import { findLastKey, parseInt } from 'lodash';

export const APP_NAME = "QuranApp";
const URL = 'http://localhost:8000';
const API = URL + '/api';

export async function Surah()
{
    return await new Promise( ( resolve , reject )=>{
        axios.get( API + '/surah'  )
            .then( async (res) => {
                resolve( res.data ); 
            })
            .catch( err =>{
                reject( err.response );
            })
    })
}


export async function SurahSingle(id)
{
    return await new Promise( ( resolve , reject )=>{
        axios.get( API + '/surah/' + id )
            .then( async (res) => {
                resolve( res.data ); 
            })
            .catch( err =>{
                reject( err.response );
            })
    })
}