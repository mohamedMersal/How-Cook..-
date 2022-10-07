import React from 'react';
import { Link } from 'react-router-dom';
import food from '../Style/MenuStyle.module.css';
// Img Food
import Kabab from './img/Kabab.jpg';
import Pasta from './img/pasta.jpg';
import Pizza from './img/Pizza.jpg';
import Seefood from './img/SeeFood.jpg';
import Burger from './img/Burger.jpg';
import Fries from './img/Fries.jpg';
import Chicken from './img/Chicken.jpg';
import Sushi from './img/Sushi.jpg';
import Mushrooms from './img/Mushrooms.jpg';
import Fajitas from './img/fajitas.jpg';

export default function Food() {

  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-2 text-center">
            <div className={food.item}>
              <Link className='text-decoration-none' to={'/pizzaa'}>
                <div className='overflow-hidden p-3'>
                <img  src={Pizza} className="d-block w-100" alt="" />
                </div>
                <h4  name="pizzaa">How Cook Pizza..?</h4>
              </Link>
            </div>
          </div>
        <div className="col-md-2 text-center">
            <div className={food.item}>
              <Link className='text-decoration-none' to={'/passta'}>
                <div className='overflow-hidden p-3'>
                <img  src={Pasta} className="d-block w-100" alt="" />
                </div>
                <h4 name="pasta">How Cook Pasta..?</h4>
              </Link>
            </div>
          </div>
        <div className="col-md-2 text-center">
            <div className={food.item}>
              <Link className='text-decoration-none' to={'/seeefood'}>
                <div className='overflow-hidden p-3'>
                <img  src={Seefood} className="d-block w-100" alt="" />
                </div>
                <h4 name="seefood">How Cook Seefood..?</h4>
              </Link>
            </div>
          </div>
        <div className="col-md-2 text-center">
            <div className={food.item}>
              <Link className='text-decoration-none' to={'/kebaab'}>
                <div className='overflow-hidden p-3'>
                <img  src={Kabab} className="d-block w-100" alt="" />
                </div>
                <h4 name="kabab">How Cook Kebab..?</h4>
              </Link>
            </div>
          </div>
        <div className="col-md-2 text-center">
            <div className={food.item}>
              <Link className='text-decoration-none' to={'/haamburger'}>
                <div className='overflow-hidden p-3'>
                  <img  src={Burger} className="d-block w-100" alt="" />
                </div>
                <h4 name="hamburger">How Cook Hamburger..?</h4>
              </Link>
            </div>
          </div>
        <div className="col-md-2 text-center">
            <div className={food.item}>
              <Link className='text-decoration-none' to={'/fries'}>
                <div className='overflow-hidden p-3'>
                <img  src={Fries} className="d-block w-100" alt="" />
                </div>
                <h4 name="fries">How Cook Fries..?</h4>
              </Link>
            </div>
          </div>
        <div className="col-md-2 text-center">
            <div className={food.item}>
              <Link className='text-decoration-none' to={'/chicken'}>
                <div className='overflow-hidden p-3'>
                <img  src={Chicken} className="d-block w-100" alt="" />
                </div>
                <h4 name="chicken">How Cook Chicken..?</h4>
              </Link>
            </div>
          </div>
          <div className="col-md-2 text-center">
            <div className={food.item}>
              <Link className='text-decoration-none' to={'/fahita'}>
                <div className='overflow-hidden p-3'>
                <img  src={Fajitas} className="d-block w-100" alt="" />
                </div>
                <h4 name="chicken">How Cook Fajitas(Fahita)..?</h4>
              </Link>
            </div>
          </div>
        <div className="col-md-2 text-center">
            <div className={food.item}>
              <Link className='text-decoration-none' to={'/mushrooms'}>
                <div className='overflow-hidden p-3'>
                <img  src={Sushi} className="d-block w-100" alt="" />
                </div>
                <h4 name="sushi">How Cook Sushi..?</h4>
              </Link>
            </div>
          </div>
        <div className="col-md-2 text-center">
            <div className={food.item}>
              <Link className='text-decoration-none' to={'/mushrooms'}>
                <div className='overflow-hidden p-3'>
                <img  src={Mushrooms} className="d-block w-100" alt="" />
                </div>
                <h4 name="mushrooms">How Cook Mushrooms..?</h4>
              </Link>
            </div>
          </div>
      </div>
    </div>
    </>
  )
}
