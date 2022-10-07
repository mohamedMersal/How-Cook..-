import React from 'react';
import './Style/Loading.css';
import $ from 'jquery'

export default function Loading() {
    $(document).ready(()=>{
        $('.sk-chase').fadeOut(2000,()=>{
            $('#loading').fadeOut(5000)
        })
    })
  return (
    <>
    <section id='loading'>
    <div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
    </div>
    </section>
    </>
  )
}



































// $(document).ready(() =>{
//     $(".sk-chase").fadeOut(2000, ()=>{
//         $('#loading').fadeOut(5000)
//     })
// })