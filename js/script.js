/*********************************************
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
**********************************************/

/**
* This function will create and insert/append the elements needed to display a "page" of nine students
  * @param {string} list - the array of student data from data.js
  * @param {number} page - the page number we want to display
**/
function showPage (list, page) {
  const startIndex = (page * 9) - 9;
  const endIndex = page * 9;
  const studentList = document.querySelector('.student-list');
  studentList.innerHTML = '';

    // loop over the length of the `list` parameter
      // inside the loop create a conditional to display the proper students
        // inside the conditional:
          // create the elements needed to display the student information
          // insert the above elements
}
showPage(data, 1);

/**
*This function will create and insert/append the elements needed for the pagination buttons
  * @param {string} list - the array of student data from data.js
**/
function addPagination (list) {


}

// Call functions
