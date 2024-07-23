// src/components/CourseList.jsx
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialCourses = [
  { id: '1', name: 'Course 1' },
  { id: '2', name: 'Course 2' },
  { id: '3', name: 'Course 3' },
];

const CourseList = () => {
  const [courses, setCourses] = useState(initialCourses);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(courses);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setCourses(items);
  };

  const moveToTop = (index) => {
    const items = Array.from(courses);
    const [movedItem] = items.splice(index, 1);
    items.unshift(movedItem);
    setCourses(items);
  };

  const moveToBottom = (index) => {
    const items = Array.from(courses);
    const [movedItem] = items.splice(index, 1);
    items.push(movedItem);
    setCourses(items);
  };

  const removeItem = (index) => {
    const items = Array.from(courses);
    items.splice(index, 1);
    setCourses(items);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="courses">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef} className="w-1/2 bg-white p-6 rounded shadow-md">
              {courses.map((course, index) => (
                <Draggable key={course.id} draggableId={course.id} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="bg-gray-200 p-4 rounded mb-2 flex justify-between items-center"
                    >
                      {course.name}
                      <div>
                        <button
                          className="bg-blue-500 text-white py-1 px-2 rounded mr-2"
                          onClick={() => moveToTop(index)}
                        >
                          Move to Top
                        </button>
                        <button
                          className="bg-yellow-500 text-white py-1 px-2 rounded mr-2"
                          onClick={() => moveToBottom(index)}
                        >
                          Move to Bottom
                        </button>
                        <button
                          className="bg-red-500 text-white py-1 px-2 rounded"
                          onClick={() => removeItem(index)}
                        >
                          Remove
                        </button>
                      </div>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default CourseList;
