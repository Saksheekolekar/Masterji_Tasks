
import React from 'react';
// import { BrowserRouter as Router, Route, Redirect,Switch } from 'react-router-dom';
import OTPForm from './Components/OTPForm';
import Batches from './Components/Batches';
import CourseList from './Components/CourseList';
import Header from './Header';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App h-full bg-green-100 w-auto">
        <Header/> 
          <CourseList />
       
      </div>
    </DndProvider>
    
    // <Router>
    //   <Switch>
    //     <Route path="/otp-form" component={OTPForm} />
    //     <Route path="/course-list" component={CourseList} />
    //     <Route path="/batches" component={Batches} />
    //     <Redirect from="/" to="/otp-form" />
    //   </Switch>
    // </Router>
  );
}

export default App;
