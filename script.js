/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/***
   Add your global variables that store the DOM elements you will
   need to reference and/or manipulate.

   But be mindful of which variables should be global and which
   should be locally scoped to one of the two main functions you're
   going to create. A good general rule of thumb is if the variable
   will only be used inside of a function, then it can be locally
   scoped to that function.
***/
const pageLimit = 10;
const students = document.getElementsByClassName('student-item');
const page = document.querySelector('.page');


//search
// const h2 = document.querySelector('h2');
// const div = document.createElement('div');
// const search = document.createElement('input');
// const button = document.createElement('button');
// search.placeholder = "Search for students...";
// button.textContent = 'Search';
// div.className = "student-search";
// h2.appendChild(div);
// div.appendChild(search);
// div.appendChild(button);











/***
   Create the `showPage` function to hide all of the items in the
   list except for the ten you want to show.

   Pro Tips:
     - Keep in mind that with a list of 54 students, the last page
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when
       you initially define the function, and it acts as a variable
       or a placeholder to represent the actual function `argument`
       that will be passed into the parens later when you call or
       "invoke" the function
***/
function showPage(list, page){
    let startIndex = (page * pageLimit) - pageLimit;
    let endIndex = page * pageLimit;

    for(let i = 0; i < students.length; i++){
        let student = students[i];
        if(i >= startIndex && i < endIndex){
            student.style.display = '';
        } else {
            student.style.display = 'none';
        }
    };
};




/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/
function appendPageLinks(list){
    const div = document.createElement('div')
    const ul = document.createElement('ul');
    page.appendChild(childDiv);
    childDiv.appendChild(ul);

    childDiv.className = 'pagination';
    const limit = Math.ceil(students.length / pageLimit);

    for(let i = 0; i < limit; i++){
        const li = document.createElement('li');
        ul.appendChild(li)
        const a = document.createElement('a');
        a.setAttribute("href", "#");
        a.textContent = i + 1;
        li.appendChild(a);
    }
    const as = document.getElementsByTagName('a');
    for(let i = 0; i < as.length; i++){
        let page = i + 1;
        console.log(page);

        if(page === 1){
            as[0].className = 'active';
        }

        as[i].addEventListener('click', (e)=>{
            let clicked = e.target;
            let active = document.querySelector('.active');

            if(parseInt(e.target.textContent) === i+1){
                active.className = '';
                clicked.className = 'active';
                showPage(students, i+1);
            } else {
                console.log('wrong');
                console.log(i);
            }
        });

    };
};


button.addEventListener('click', (e) => {
    const student = document.getElementsByTagName('h3');
    for(let i = 0; i < student.length; i++){
        if(search.value === student[i].textContent){
            students[i].style.display = '';
        } else {
            students[i].style.display = 'none';
        }
    }
});

showPage(students, 1);
appendPageLinks();

// Remember to delete the comments that came with this file, and replace them with your own code comments.
