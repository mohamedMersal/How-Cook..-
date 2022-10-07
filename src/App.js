import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import Food from './Component/Food/Food';
import Salad from './Component/Salad/Salad';
import Dessert from './Component/Dessert/Dessert';
import Fruits from './Component/Fruits/Fruits';
import Notfound from './Component/Notfound/Notfound';
import RecipeDetails from './Component/RecipeDetails/RecipeDetails';
import Pizzaa from './Component/Food/Pizzaa/Pizzaa';
import Passta from './Component/Food/Passta/Passta';
import Seeefood from './Component/Food/Seeefood/Seeefood';
import Kebaab from './Component/Food/Kebaab/Kebaab';
import Haamburger from './Component/Food/Haamburger/Haamburger';
import Frries from './Component/Food/Frries/Frries';
import Chiicken from './Component/Food/Chiicken/Chiicken';
import Fajitaas from './Component/Food/Fajitaas/Fajitaas';
import Sushi from './Component/Food/Sushi/Sushi';
import Mushrooms from './Component/Food/Mushrooms/Mushrooms';
import Loading from './Component/Loading';
import { useState } from 'react';
import Lettuce from './Component/Salad/Lettuce/Lettuce';
import Apple from './Component/Fruits/Apple/Apple';
import Apricot from './Component/Fruits/Apricot/Apricot';
import Avocado from './Component/Fruits/Avocado/Avocado';
import Banana from './Component/Fruits/Banana/Banana';
import Blackberry from './Component/Fruits/Blackberry/Blackberry';
import Blackcurrant from './Component/Fruits/Blackcurrant/Blackcurrant';
import Boysenberry from './Component/Fruits/Boysenberry/Boysenberry';
import Cherry from './Component/Fruits/Cherry/Cherry';
import Coconut from './Component/Fruits/Coconut/Coconut';
import Fig from './Component/Fruits/Fig/Fig';
import Grape from './Component/Fruits/Grape/Grape';



function App() {
  
  return (
    <>
    
    <Navbar/>
    <Loading/>
      <Routes>
        <Route path={'/'} element={ <Home/> }/>
        <Route path={'home'} element={ <Home/> }/>
        <Route path='food'   element={ <Food/> }/>
        <Route path='salad' element={ <Salad/> }/>
        <Route path='dessert' element={ <Dessert/> }/>
        <Route path='fruits' element={ <Fruits/> }/>
        <Route path='recipeDetails' element={ <RecipeDetails/> }/>
        <Route path='pizzaa' element={ <Pizzaa/> }/>
        <Route path='passta' element={ <Passta/> }/>
        <Route path='seeefood' element={ <Seeefood/> }/>
        <Route path='kebaab' element={ <Kebaab/> }/>
        <Route path='haamburger' element={ <Haamburger/> }/>
        <Route path='fries' element={ <Frries/> }/>
        <Route path='chicken' element={ <Chiicken/> }/>
        <Route path='fahita' element={ <Fajitaas/> }/>
        <Route path='sushi' element={ <Sushi/> }/>
        <Route path='mushrooms' element={ <Mushrooms/> }/>
        <Route path='lettuce' element={ <Lettuce/> }/>
        <Route path='apple' element={ <Apple/> }/>
        <Route path='apricot' element={ <Apricot/> }/>
        <Route path='avocado' element={ <Avocado/> }/>
        <Route path='banana' element={ <Banana/> }/>
        <Route path='blackberry' element={ <Blackberry/> }/>
        <Route path='blackcurrant' element={ <Blackcurrant/> }/>
        <Route path='boysenberry' element={ <Boysenberry/> }/>
        <Route path='cherry' element={ <Cherry/> }/>
        <Route path='coconut' element={ <Coconut/> }/>
        <Route path='fig' element={ <Fig/> }/>
        <Route path='grape' element={ <Grape/> }/>
        <Route path='*' element={ <Notfound/> }/>
      </Routes>
    </>
  );
}

export default App;
