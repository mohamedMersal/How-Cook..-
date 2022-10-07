import axios, { Axios } from 'axios';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import styleRecipes from '../Style/StyleRecipes.module.css';

export default function GetData({category}) {
  const [data, setData] = useState([]);
  async function getData()
  {
      let {data} = await axios.get(`https://forkify-api.herokuapp.com/api/search?q=${category}`);
      setData(data.recipes)
  };
  useEffect(()=>{
      getData()
  }, []);
  return (
    <>
    <div className="container my-4">
      <div className="row py-5 d-flex justify-content-center">
        {data.map((data, i)=>{
            return(
                <div key={i} className="text-center col-md-2 text-center">
                <div className={styleRecipes.item}>
                  <Link className='text-decoration-none' to={'/recipeDetails'}>
                    <div className='overflow-hidden'>
                      <img className={styleRecipes.imeg} src={data.image_url} alt="" />
                    </div>
                    <h3 className='h6 my-2 text-decoration-non'>{data.title}</h3>
                  </Link>
                </div>
            </div>
            )
        })}
      </div>
    </div>
    </>
  )
}
