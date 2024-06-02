const fs = require('fs');


// Step 1- 
//Class to store student and course data
class Data {        
    constructor(students, courses) {
        this.students = students;
        this.courses = courses;
    }
}

let dataCollection = null;  // declaring the variable "dataCollection" and assign it to null value

//step 2-
//Create the initialize Function-
//step1 -This function reads the JSON files
// step2 - Initializes an instance of the 'Data' class.
const initialize = () => { 
    return new Promise((resolve, reject) => {
        // Read students.json file
        fs.readFile('./data/students.json', 'utf8', (err, studentsData) => {
            if (err) {
                reject("unable to read students.json");
                return;
            }

            let students;
            try {
                students = JSON.parse(studentsData);
            } catch (error) {
                reject("students.json is not a valid JSON file");
                return;
            }

            // Read courses.json file
            fs.readFile('./data/courses.json', 'utf8', (err, coursesData) => {
                if (err) {
                    reject("unable to read courses.json");
                    return;
                }

                let courses;
                try {
                    courses = JSON.parse(coursesData);
                } catch (error) {
                    reject("courses.json is not a valid JSON file");
                    return;
                }

                // Store the data in the dataCollection object
                dataCollection = new Data(students, courses);
                resolve();
            });
        });
    });
};

//Step 3-
//Create Functions to Access Data -

//getAllStudents(): returns all student objects.
//getTAs(): returns student objects where the TA property is true.
//getCourses(): returns all course objects.

//  Returns all student objects
const getAllStudents = () => {
    return new Promise((resolve, reject) => {
        if (!dataCollection || dataCollection.students.length === 0) {
            reject("no results returned");
        } else {
            resolve(dataCollection.students);
        }
    });
};

//returns student objects where the TA property is true.
const getTAs = () => {
    return new Promise((resolve, reject) => {
        const TAs = dataCollection.students.filter(student => student.TA);
        if (TAs.length === 0) {
            reject("no results returned");
        } else {
            resolve(TAs);
        }
    });
};

//  returns all course objects.
const getCourses = () => {
    return new Promise((resolve, reject) => {
        if (!dataCollection || dataCollection.courses.length === 0) {
            reject("no results returned");
        } else {
            resolve(dataCollection.courses);
        }
    });
};

// Export functions for use in other files
module.exports = { initialize, getAllStudents, getTAs, getCourses };
