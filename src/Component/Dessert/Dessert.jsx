import React from 'react';

export default function Dessert() {
  return (
    <>
    <div ></div>
    <div className="container my-5">
      <div className="row">
        <div  className="col-md-3 text-center">
          <div >
            <div className='overflow-hidden'>
            <img  name="food"  alt="" />
            </div>
            <h4 name="food">How Cook Food..?</h4>
          </div>
        </div>
        <div className="col-md-3 text-center">
          <div >
            <div className='overflow-hidden'>
            <img   alt="" />
            </div>
            <h4>How Cook Salad..?</h4>
          </div>
        </div>
        <div className="col-md-3 text-center">
          <div >
            <div className='overflow-hidden'>
              <img   alt="" />
            </div>
            <h4>How Cook Dessert..?</h4>
          </div>
        </div>
        <div className="col-md-3 text-center">
          <div >
            <div className='overflow-hidden'>
              <img  alt="" />
            </div>
            <h4>How Cook Fruits..?</h4>
          </div>
        </div>
      </div>
    </div>
    <h3 className='bg-danger text-white text-center'>Dessert Component</h3>
   </>  )
}
