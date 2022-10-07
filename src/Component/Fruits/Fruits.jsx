import React from 'react';
import { Link } from 'react-router-dom';
import fruits from '../Style/MenuStyle.module.css';
// img
import apple from './img/apple.jpg'
import apricot from './img/apricot.jpg'
import avocado from './img/avocado.jpg'
import banana from './img/banana.jpg'
import blackberry from './img/blackberry.jpg'
import blackcurrant from './img/blackcurrant.jpg'
import boysenberry from './img/boysenberry.jpg'
import cherry from './img/cherry.jpg'
import coconut from './img/coconut.jpg'
import fig from './img/fig.jpg'
import grape from './img/grape.jpg'

export default function Fruits() {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-2 text-center">
          <div className={fruits.item}>
            <Link className='text-decoration-none' to={'/apple'}>
              <div className='overflow-hidden p-3'>
                <img  src={apple} className="d-block w-100" alt="" />
              </div>
              <h4>How Cook Apple..?</h4>
            </Link>
          </div>
        </div>
        <div className="col-md-2 text-center">
          <div className={fruits.item}>
            <Link className='text-decoration-none' to={'/apricot'}>
              <div className='overflow-hidden p-3'>
                <img  src={apricot} className="d-block w-100" alt="" />
              </div>
              <h4>How Cook Apricot..?</h4>
            </Link>
          </div>
        </div>
        <div className="col-md-2 text-center">
          <div className={fruits.item}>
            <Link className='text-decoration-none' to={'/avocado'}>
              <div className='overflow-hidden p-3'>
                <img  src={avocado} className="d-block w-100" alt="" />
              </div>
              <h4>How Cook Avocado..?</h4>
            </Link>
          </div>
        </div>
        <div className="col-md-2 text-center">
          <div className={fruits.item}>
            <Link className='text-decoration-none' to={'/blackberry'}>
              <div className='overflow-hidden p-3'>
                <img  src={blackberry} className="d-block w-100" alt="" />
              </div>
              <h4>How Cook Blackberry..?</h4>
            </Link>
          </div>
        </div>
        <div className="col-md-2 text-center">
          <div className={fruits.item}>
            <Link className='text-decoration-none' to={'/banana'}>
              <div className='overflow-hidden p-3'>
                <img  src={banana} className="d-block w-100" alt="" />
              </div>
              <h4>How Cook Banana..?</h4>
            </Link>
          </div>
        </div>
        <div className="col-md-2 text-center">
          <div className={fruits.item}>
            <Link className='text-decoration-none' to={'/blackcurrant'}>
              <div className='overflow-hidden p-3'>
                <img  src={blackcurrant} className="d-block w-100" alt="" />
              </div>
              <h4>How Cook Blackcurrant..?</h4>
            </Link>
          </div>
        </div>
        <div className="col-md-2 text-center">
          <div className={fruits.item}>
            <Link className='text-decoration-none' to={'/boysenberry'}>
              <div className='overflow-hidden p-3'>
                <img  src={boysenberry} className="d-block w-100" alt="" />
              </div>
              <h4>How Cook Boysenberry..?</h4>
            </Link>
          </div>
        </div>
        <div className="col-md-2 text-center">
          <div className={fruits.item}>
            <Link className='text-decoration-none' to={'/cherry'}>
              <div className='overflow-hidden p-3'>
                <img  src={cherry} className="d-block w-100" alt="" />
              </div>
              <h4>How Cook Cherry..?</h4>
            </Link>
          </div>
        </div>
        <div className="col-md-2 text-center">
          <div className={fruits.item}>
            <Link className='text-decoration-none' to={'/coconut'}>
              <div className='overflow-hidden p-3'>
                <img  src={coconut} className="d-block w-100" alt="" />
              </div>
              <h4>How Cook Coconut..?</h4>
            </Link>
          </div>
        </div>
        <div className="col-md-2 text-center">
          <div className={fruits.item}>
            <Link className='text-decoration-none' to={'/fig'}>
              <div className='overflow-hidden p-3'>
                <img  src={fig} className="d-block w-100" alt="" />
              </div>
              <h4>How Cook Fig..?</h4>
            </Link>
          </div>
        </div>
        <div className="col-md-2 text-center">
          <div className={fruits.item}>
            <Link className='text-decoration-none' to={'/grape'}>
              <div className='overflow-hidden p-3'>
                <img  src={grape} className="d-block w-100" alt="" />
              </div>
              <h4>How Cook Grape..?</h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
