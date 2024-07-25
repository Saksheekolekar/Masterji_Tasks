import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';

const ItemType = 'COURSE';

const CourseCard = ({ course, index, moveCard, moveToTop, moveToBottom, removeCard }) => {
    const [showMenu, setShowMenu] = useState(false);

    const [, ref] = useDrag({
        type: ItemType,
        item: { index },
    });

    const [, drop] = useDrop({
        accept: ItemType,
        hover: (item) => {
            if (item.index !== index) {
                moveCard(item.index, index);
                item.index = index;
            }
        },
    });

    return (
        <div ref={(node) => ref(drop(node))} className="course-card">
            <div className="flex items-center text-black p-4 mb-4 bg-slate-100 shadow-lg rounded-lg">
                <div className="grid  grid-cols-7 md:grid-cols-8 items-center">
                    <div className="mr-4 gap-7x">
                        <img src={course.image} alt={course.title} className="w-16  bg-black h-16 ml-4" />
                    </div>
                    <div className="mr-10 col-span-3  md:col-span-4  ">
                        <h3 className="text-lg font-semibold">{course.title}</h3>
                    </div>

                    <div className="mr-4 "><p>{course.price}</p></div>
                    <div className="mr-4 bg-green-200 p-1 bg-opacity-50 rounded-lg text-green-900">
                        <p>{course.type}</p>
                    </div>
                    <div className="relative bg-transparent">
                        <button onClick={() => setShowMenu(!showMenu)} className="focus:outline-none bg-transparent ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                            </svg>
                        </button>
                        {showMenu && (
                            <div className="absolute right-0 mt-2 bg-white  shadow-lg rounded-lg z-10">
                                <button className="block px-4 py-2 text-sm text-gray-700 bg-transparent" onClick={() => moveToTop(index)}>
                                   ⬆️ Move to Top
                                </button>
                                <button className=" px-4 py-2 text-sm text-gray-700 bg-transparent " onClick={() => moveToBottom(index)}>
                                   ⬇️ Move to Bottom
                                </button>
                                <button
                                    className="flex items-center px-6 py-2 text-sm text-gray-700 bg-transparent"
                                    onClick={() => removeCard(index)}
                                >
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 1024 1024"
                                        fill="red"
                                        className="mr-2" >
                                        <path d="M831.24 280.772c5.657 0 10.24-4.583 10.24-10.24v-83.528c0-5.657-4.583-10.24-10.24-10.24H194.558a10.238 10.238 0 00-10.24 10.24v83.528c0 5.657 4.583 10.24 10.24 10.24H831.24zm0 40.96H194.558c-28.278 0-51.2-22.922-51.2-51.2v-83.528c0-28.278 22.922-51.2 51.2-51.2H831.24c28.278 0 51.2 22.922 51.2 51.2v83.528c0 28.278-22.922 51.2-51.2 51.2z" />
                                        <path d="M806.809 304.688l-58.245 666.45c-.544 6.246-6.714 11.9-12.99 11.9H290.226c-6.276 0-12.447-5.654-12.99-11.893L218.99 304.688c-.985-11.268-10.917-19.604-22.185-18.619s-19.604 10.917-18.619 22.185l58.245 666.45c2.385 27.401 26.278 49.294 53.795 49.294h445.348c27.517 0 51.41-21.893 53.796-49.301l58.244-666.443c.985-11.268-7.351-21.201-18.619-22.185s-21.201 7.351-22.185 18.619zM422.02 155.082V51.3c0-5.726 4.601-10.342 10.24-10.342h161.28c5.639 0 10.24 4.617 10.24 10.342v103.782c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48V51.3c0-28.316-22.908-51.302-51.2-51.302H432.26c-28.292 0-51.2 22.987-51.2 51.302v103.782c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48z" />
                                        <path d="M496.004 410.821v460.964c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48V410.821c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48zm-192.435 1.767l39.936 460.964c.976 11.269 10.903 19.612 22.171 18.636s19.612-10.903 18.636-22.171l-39.936-460.964c-.976-11.269-10.903-19.612-22.171-18.636s-19.612 10.903-18.636 22.171zm377.856-3.535l-39.936 460.964c-.976 11.269 7.367 21.195 18.636 22.171s21.195-7.367 22.171-18.636l39.936-460.964c.976-11.269-7.367-21.195-18.636-22.171s-21.195 7.367-22.171 18.636z" />
                                    </svg>
                                    Remove
                                </button>

                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
