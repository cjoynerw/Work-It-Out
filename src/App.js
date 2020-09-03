import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar"
import ExercisesList from "./components/exercises-list";
import EditExercise from "./components/edit-exercise";
import CreateExercise from "./components/create-exercise";
import CreateUser from "./components/create-user";
import Footer from './components/footer';
import './App.css';
import Yoda from './yoda.png'

function App() {
  return (
    <>
    <Router>
      <div className="container">
        <div className='content-wrap'>
          <Navbar />
          <br/>
          <Route path="/" exact component={ ExercisesList } />
          <Route path="/edit/:id" component={ EditExercise } />
          <Route path="/create" component={ CreateExercise } />
          <Route path="/user" component={ CreateUser } />
        </div>
        <img src={Yoda} alt='yoda' id='yoda'></img>
      <Footer />
      </div>
    </Router>
    
    </>
  );
}

export default App;
