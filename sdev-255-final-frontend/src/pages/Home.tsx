import React, { useState } from "react";
import './pages.css'

interface Course {
  courseID: number;
  className: string;
  description: string;
  instructor: string;
  room: string;
  enrolled: boolean;
  startTime: string;
  endTime: string;
  day: string; 
}

const ViewCourses = () => {
  const [courses, setCourses] = useState<Course[]>([
    {
      courseID: 1,
      className: "SDEV 255",
      description: "Software Development",
      instructor: "Prof. Engelken",
      room: "Room 1",
      enrolled: false,
      startTime: "10:00 AM",
      endTime: "12:30 PM",
      day: "Monday and Wednesday"
    },
    {
      courseID: 2,
      className: "SDEV 300",
      description: "Advanced Software Development",
      instructor: "Prof. Engelken",
      room: "Room 2",
      enrolled: false,
      startTime: "2:00 PM",
      endTime: "4:30 PM",
      day: "Tuesday and Thursday"
    }
  ]);

  const handleEnroll = (courseID: number) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.courseID === courseID
          ? { ...course, enrolled: !course.enrolled }
          : course
      )
    );
  };

  return (
    <div className="viewCoursesPage">
      <h1>Available Courses</h1>
      <p>List of all courses you are currently able to enroll in</p>

      <div className="courseList">
        {courses.map((course) => (
          <div key={course.courseID} className="courseCard">
            <h2>{course.className}</h2>
            <p><strong>Instructor:</strong> {course.instructor}</p>
            <p><strong>Room:</strong> {course.room}</p>
            <p><strong>Time:</strong> {course.startTime} - {course.endTime}</p>
            <p><strong>Description:</strong> {course.description}</p>
            <button onClick={() => handleEnroll(course.courseID)}>
              {course.enrolled ? "Unenroll" : "Enroll"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewCourses;
