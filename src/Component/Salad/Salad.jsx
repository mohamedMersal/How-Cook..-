import React from 'react';
import { Link } from 'react-router-dom';
import salad from '../Style/MenuStyle.module.css';
import Lettuce from './img/lettuce .jpg';

export default function Salad() {
return (
  <>
    <div className="container">
      <div className="row">
      <div className="col-md-2 text-center">
            <div className={salad.item}>
              <Link className='text-decoration-none' to={'/lettuce '}>
                <div className='overflow-hidden p-3'>
                <img  src={Lettuce} className="d-block w-100" alt="" />
                </div>
                <h4>How Cook Lettuce..?</h4>
              </Link>
            </div>
          </div>
      </div>
    </div>
  </>

)
}
