const form = document.querySelector('form');
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const messageInput = document.getElementById('message');
const commentList = document.getElementById('comment-list');
const errorMessage = document.getElementById('error-message');
function addComment(firstName, lastName, message) {
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('flex', 'space-x-4', 'text-sm', 'text-gray-500');

    const innerDiv = document.createElement('div');
    innerDiv.classList.add('flex-1', 'py-10', 'border-t', 'border-gray-200');
    const fullName = document.createElement('h3');
    fullName.classList.add('font-medium', 'text-gray-900');
    fullName.textContent = `${firstName} ${lastName}`;

    
    const commentText = document.createElement('p');
    commentText.classList.add('prose', 'prose-sm', 'mt-4', 'max-w-none', 'text-gray-500');
    commentText.textContent = message;


    innerDiv.appendChild(fullName);
    innerDiv.appendChild(commentText);
    commentDiv.appendChild(innerDiv);

   
    commentList.appendChild(commentDiv);
}

form.addEventListener('submit', function(event) {
    event.preventDefault(); 


    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const message = messageInput.value.trim();

 
    if (firstName === '' || lastName === '' || message === '') {
        errorMessage.style.display = 'block'; 
    } else {
        errorMessage.style.display = 'none';
        addComment(firstName, lastName, message);
        form.reset();
    }
});