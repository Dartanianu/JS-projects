const commentInput = document.querySelector('#commentInput');
const button = document.querySelector('#addComment');
const commentList = document.querySelector('#commentList');

function addComment() {
    const text = commentInput.value.trim();
    if (text === '') {
        alert('Напишите комментарий');
        return;
    }

    const li = document.createElement('li');
    const span = document.createElement('span');
    const deleteBtn = document.createElement('button');

    span.textContent = text;
    deleteBtn.textContent = 'Удалить';

    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    commentList.appendChild(li);

    commentInput.value = '';
}

button.addEventListener('click', addComment);

