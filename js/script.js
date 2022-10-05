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

  for ( let i = 0; i < list.length; i++ ){
    if ( i >= startIndex && i < endIndex ) {
      
    }
  }
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
  // create a variable to calculate the number of pages needed

    // select the element with a class of `link-list` and assign it to a variable

    // set the innerHTML property of the variable you just created to an empty string

    // loop over the number of pages needed
      // create the elements needed to display the pagination button
      // insert the above elements

    // give the first pagination button a class of "active"

    // create an event listener on the `link-list` element
      // if the click target is a button:
        // remove the "active" class from the previous button
        // add the active class to the clicked button
        // call the showPage function passing the `list` parameter and page to display as arguments
}

// Call functions
