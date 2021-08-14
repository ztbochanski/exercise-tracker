import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import EditExercisePage from './pages/edit-exercise-page/edit-exercise-page';
import CreateExercisePage from './pages/create-exercise-page/create-exercise-page';
import { useState } from 'react';


/** exclusively rendering routes with the <Switch> component from react router dom library, 
the docs recommend using it to render only one page

https://reactrouter.com/web/api/Switch
**/

function App() {  

    const [exerciseToEdit, setExerciseToEdit] = useState(); 

    return (
    <div >
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage setExerciseToEdit={setExerciseToEdit}/>
                </Route>
                <Route path="/edit-exercise-page">
                    <EditExercisePage exerciseToEdit={exerciseToEdit}/>
                </Route>
                <Route path="/create-exercise-page">
                    <CreateExercisePage />
                </Route>
            </Switch>
        </BrowserRouter>
    </div>
    );
}

export default App;
