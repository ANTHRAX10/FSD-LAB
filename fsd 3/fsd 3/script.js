function addPost() {
  const text = document.getElementById('postText').value.trim();
  if (text === '') {
    alert('Please enter a post!');
    return;
  }
  const li = document.createElement('li');
  li.textContent = text;
  document.getElementById('postList').appendChild(li);
  document.getElementById('postText').value = '';
}
