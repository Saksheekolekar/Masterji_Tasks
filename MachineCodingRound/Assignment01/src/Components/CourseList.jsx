import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import CourseCard from './CourseCard';
import data from './data.json';

const CourseList = () => {
  const [courses, setCourses] = useState(data);

  const moveCard = (fromIndex, toIndex) => {
    const updatedCourses = [...courses];
    const [movedCard] = updatedCourses.splice(fromIndex, 1);
    updatedCourses.splice(toIndex, 0, movedCard);
    setCourses(updatedCourses);
  };

  const removeCard = (index) => {
    const updatedCourses = courses.filter((_, i) => i !== index);
    setCourses(updatedCourses);
  };

  const moveToTop = (index) => {
    moveCard(index, 0);
  };

  const moveToBottom = (index) => {
    moveCard(index, courses.length - 1);
  };

  const [, drop] = useDrop({
    accept: 'COURSE',
  });
  const handleImageClick = () => {
    window.location.href = 'https://www.chaicode.com';
  };

  return (
    <>
    <div className='w-full h-full p-8 bg-green-200 bg-opacity-95'>
      <h1 className='text-center text-green-800 font-bold mb-2 text-4xl'>Chai aur Code</h1>
    <div className='bg-slate-100 shadow-2xl  p-6 pt-2 rounded-lg  w-fit  m-auto bg-slate-50s'>
    <h3 className=' font-bold text-2xl text-black'>Manage Bundle</h3>
    <h6 className='text-slate-500 font-normal'>change order of product based on priority.</h6>
    <div ref={drop} className="course-list  ">
      {courses.map((course, index) => (
        <CourseCard
          key={course.id}
          index={index}
          course={course}
          moveCard={moveCard}
          moveToTop={moveToTop}
          moveToBottom={moveToBottom}
          removeCard={removeCard}
        />
      ))}
    </div>
    <div className="bg-transparent absolute bottom-4 right-4">
        <img src=".\chai.png" alt="chai"  onClick={handleImageClick} className="w-36 h-24 rounded" />
      </div>
      </div></div>
    </>
  );
};

export default CourseList;
