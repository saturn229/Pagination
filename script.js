/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

//global variables 

const pageLimit = 10;
const students = document.getElementsByClassName('student-item');
const page = document.querySelector('.page');

//function to create functions for recfactoring the code to be more concise
function create(name, property, value){
    const element = document.createElement(name);
    element[property] = value;
    return element;
}

//showPage function that shows a list of 10 students

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

//appendPage functions creates new elements and dynamically creates pages showing a list of 10 students

function appendPageLinks(list){
    const limit = Math.ceil(students.length / pageLimit);
    const div = create('div', 'className', 'pagination');
    const ul = create('ul');
    page.appendChild(div);
    div.appendChild(ul);



    //for loop that loops through and creates links for the other pages
    for(let i = 0; i < limit; i++){
        let pageNbr = i + 1;
        const li = create('li');
        ul.appendChild(li)
        const a = create('a');
        a.setAttribute("href", "#");
        a.textContent = i + 1;
        li.appendChild(a);


        if(pageNbr === 1){
            a.className = 'active';
        }

        a.addEventListener('click', (e)=>{
            let clicked = e.target;
            let active = document.querySelector('.active');

            if(parseInt(e.target.textContent) === i+1){
                active.className = '';
                clicked.className = 'active';
                showPage(students, i+1);
            }


        });

    };
};


//call functions

showPage(students, 1);
appendPageLinks();
