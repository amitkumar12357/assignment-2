/*********************************************************************************
* WEB700 – Assignment 2
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Amit kumar, Student ID: 160904231, Date: 1 june 2024
*
********************************************************************************/
// imports the 'collegeData' module from the collegeData.js file
const collegeData = require('./modules/collegeData');  

// Initialize the data
collegeData.initialize()  //reading data from files and return promise.
    .then(() => {
        console.log("Initialization successful");
        
        // Retrieve all students
        return collegeData.getAllStudents();
    })

    .then((students) => {
        // Log the number of students retrieved
        console.log(`Successfully retrieved ${students.length} students`);

        // Retrieve all courses
        return collegeData.getCourses();
    })
    .then((courses) => {
        // Log the number of courses retrieved
        console.log(`Successfully retrieved ${courses.length} courses`);

        // Retrieve all TAs
        return collegeData.getTAs();
    })
    .then((TAs) => {
        // Log the number of TAs retrieved
        console.log(`Successfully retrieved ${TAs.length} TAs`);
    })
    .catch((err) => {
        // Log any errors encountered during the process
        console.error(err);
    });
