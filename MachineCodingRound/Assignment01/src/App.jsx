
import React from 'react';
// import { BrowserRouter as Router, Route, Redirect,Switch } from 'react-router-dom';
import OTPForm from './Components/OTPForm';
import Batches from './Components/Batches';
import CourseList from './Components/CourseList';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
function App() {
  return (
    <DndProvider backend={HTML5Backend}>
           <CourseList/>    
    </DndProvider>

  );
}

export default App;
