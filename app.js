//Query the DOM to have access to the form
const formElement = document.querySelector('form');
const newCommentSection = document.getElementById('#allComments');

//prevent he default behaviour of the form (refreshing)
function handleSubmit(e) {
    e.preventDefault();

    alert('Wow! You submitted the form, but sorry you cannnot actually post, because I cannot make that happen :(');

    // I want to take the user's info and put it into the page (append to the html)
    //the name
    const userName = document.getElementById('#userName');
    //target the value in the text input
    const name = userName.value;


    //collect the email address
    const userEmail = document.querySelector('input[type=email]');

    //the textarea
    const commentText = document.querySelector('textarea');

    //I want the value of the textarea
    const comment = commentText.value;


    //Element wrapping comment setup the same way as our existing comments
    const wrapperDiv = document.createElement('div');
    wrapperDiv.classList.add('commentWrapper');

    //The user and date element
    const userDateAndName = document.createElement('h3');


    //the user comment element
    const userComment = document.createElement('p');
    //adding its text content
    userComment.textContent = comment;


    //compile the comment div
    commentDiv.append(userComment);

    //clear inputs
    userName.value = '';
    userEmail.value = '';
    commentText.value = '';
}

formElement.addEventListener('submit', handleSubmit);


//ATTEMPT 3


//variables that access my id's and elements in my html
// const submit = document.getElementById('#addComments');
// const commentArea = document.getElementById('#userComment');
// const email = document.getElementById('#userEmail');
// const userName = document.getElementById('#userName');
// const commentDiv = document.getElementById('#allComments');
// const form = document.querySelector('form');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log('form was submitted!');
//     let element = document.createElement('p');
//     commentDiv.appendChild(element);
// })

// function submitForm() {
//     userName.value;
//     email.value;
//     commentArea.value;
// }

// function submitEvent() {
//     submit.addEventListener('click', submitForm);
// }

// submitForm();

