import React from 'react';
import { Link } from 'react-router-dom';
import home from './Home.module.css';
// Img Food
import Kabab from './img/Food/Kabab.jpg';
import Pasta from './img/Food/pasta.jpg';
import Pasta1 from './img/Food/Pasta1.jpg';
import Pizza from './img/Food/Pizza.jpg';
import Seefood from './img/Food/SeeFood.jpg';
// Img Salad
import salad from './img/Salad/Salad.jpg';
import salad0 from './img/Salad/Salad1.jpg';
import salad1 from './img/Salad/Salad2.jpg';
import salad2 from './img/Salad/Salad0.jpg';
import salad3 from './img/Salad/Salad3.jpg';
import salad4 from './img/Salad/Salad4.jpg';
// Img Dessert
import dessert from './img/Dessert/Dessert2.jpg';
import dessert0 from './img/Dessert/Dessert.jpg';
import dessert1 from './img/Dessert/Dessert1.jpg';
import dessert2 from './img/Dessert/Dessert4.jpg';
import dessert3 from './img/Dessert/Dessert0.jpg';
import dessert4 from './img/Dessert/Dessert3.jpg';
// Img Fruits
import fruits from './img/Fruits/Fruits.jpg';
import fruits0 from './img/Fruits/Fruits0.jpg';
import fruits1 from './img/Fruits/Fruits1.jpg';
import fruits2 from './img/Fruits/Fruits3.jpg';
import fruits3 from './img/Fruits/Fruits4.jpg';
import fruits4 from './img/Fruits/Fruits5.jpg';
import fruits5 from './img/Fruits/Fruits2.jpg';

export default function Home() {
  return (
    <>
      <div className={home.background}></div>
      <div className="container my-5">
      <h1 className={home.heder}>What do You Went To Eat<span className=' text-success'> ..?</span></h1>
        <div className="row">
          <div className="col-md-3 text-center">
            <Link className="text-decoration-none" to={'/food'}>
              <div className={home.item}>
                <div>
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                 <div className="carousel-inner">
                   <div className="carousel-item active" data-bs-interval="1500">
                     <img  src={Pizza} className="d-block w-100" alt="" />
                   </div>
                   <div className="carousel-item" data-bs-interval="1500">
                     <img  src={Pasta} className="d-block w-100" alt="" />
                   </div>
                   <div className="carousel-item" data-bs-interval="1500">
                     <img  src={Kabab} className="d-block w-100" alt="" />
                   </div>
                   <div className="carousel-item" data-bs-interval="1500">
                     <img  src={Pasta1} className="d-block w-100" alt="" />
                   </div>
                   <div className="carousel-item" data-bs-interval="1500">
                     <img  src={Seefood} className="d-block w-100" alt="" />
                   </div>
                </div>
              </div>
                </div>
            <h4 name="food">How Cook Food..?</h4>
              </div>
            </Link>
          </div>
          <div className="col-md-3 text-center">
            <Link className="text-decoration-none" to={'/salad'}>
            <div className={home.item}>
              <div>
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                 <div className="carousel-inner">
                   <div className="carousel-item active" data-bs-interval="1500">
                     <img  src={salad} className="d-block w-100" alt="" />
                   </div>
                   <div className="carousel-item" data-bs-interval="1500">
                     <img  src={salad0} className="d-block w-100" alt="" />
                   </div>
                   <div className="carousel-item" data-bs-interval="1500">
                     <img  src={salad1} className="d-block w-100" alt="" />
                   </div>
                   <div className="carousel-item" data-bs-interval="1500">
                     <img  src={salad2} className="d-block w-100" alt="" />
                   </div>
                   <div className="carousel-item" data-bs-interval="1500">
                     <img  src={salad3} className="d-block w-100" alt="" />
                   </div>
                   <div className="carousel-item" data-bs-interval="1500">
                     <img  src={salad4} className="d-block w-100" alt="" />
                   </div>
                </div>
              </div>
            </div>
            <h4 name="salad">How Cook Salad..?</h4>
            </div>
            </Link>
          </div>
          <div className="col-md-3 text-center">
            <Link className="text-decoration-none" to={'/dessert'}>
            <div className={home.item}>
              <div>
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                 <div className="carousel-inner">
                   <div className="carousel-item active" data-bs-interval="1500">
                     <img  src={dessert} className="d-block w-100" alt="" />
                   </div>
                   <div className="carousel-item" data-bs-interval="1500">
                     <img  src={dessert0} className="d-block w-100" alt="" />
                   </div>
                   <div className="carousel-item" data-bs-interval="1500">
                     <img  src={dessert1} className="d-block w-100" alt="" />
                   </div>
                   <div className="carousel-item" data-bs-interval="1500">
                     <img  src={dessert2} className="d-block w-100" alt="" />
                   </div>
                   <div className="carousel-item" data-bs-interval="1500">
                     <img  src={dessert3} className="d-block w-100" alt="" />
                   </div>
                   <div className="carousel-item" data-bs-interval="1500">
                     <img  src={dessert4} className="d-block w-100" alt="" />
                   </div>
                </div>
              </div>
            </div>
            <h4 name="dessert">How Cook Dessert..?</h4>
            </div>
            </Link>
          </div>
          <div className="col-md-3 text-center">
            <Link className="text-decoration-none" to={'/fruits'}>
            <div className={home.item}>
              <div>
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                 <div className="carousel-inner">
                   <div className="carousel-item active" data-bs-interval="1500">
                     <img  src={fruits} className="d-block w-100" alt="" />
                   </div>
                   <div className="carousel-item" data-bs-interval="1500">
                     <img  src={fruits0} className="d-block w-100" alt="" />
                   </div>
                   <div className="carousel-item" data-bs-interval="1500">
                     <img  src={fruits1} className="d-block w-100" alt="" />
                   </div>
                   <div className="carousel-item" data-bs-interval="1500">
                     <img  src={fruits2} className="d-block w-100" alt="" />
                   </div>
                   <div className="carousel-item" data-bs-interval="1500">
                     <img  src={fruits3} className="d-block w-100" alt="" />
                   </div>
                   <div className="carousel-item" data-bs-interval="1500">
                     <img  src={fruits4} className="d-block w-100" alt="" />
                   </div>
                   <div className="carousel-item" data-bs-interval="1500">
                     <img  src={fruits5} className="d-block w-100" alt="" />
                   </div>
                </div>
              </div>
            </div>
            <h4 name="fruits">How Cook Fruits..?</h4>
            </div>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
           
          </div>
        </div>
      </div>
    </>)
}
