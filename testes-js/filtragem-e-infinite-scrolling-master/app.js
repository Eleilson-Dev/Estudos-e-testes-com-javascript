const postsContainer = document.querySelector('#posts-container');
const loader = document.querySelector('.loader');
const filterInput = document.querySelector('#filter');

let page = 1;

const getPost = async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`
  );
  return response.json();
};

const generatePostTemplate = (posts) =>  posts.map( ({ id, title, body }) => `
  <div class="post">
    <div class="number">${id}</div>
    <div class="post-info">
      <h2 class="post-title">${title}</h2>
      <p class="post-body">${body}</p>
    </div>
  </div>
`
).join('');
    
const addPostIntoDOM = async () => {
  const posts = await getPost();
  const postsTemplate = generatePostTemplate(posts);
  postsContainer.innerHTML += postsTemplate;
};

const getNextPosts = () => {
  setTimeout(() => {
    page++;
    addPostIntoDOM();
  }, 300);
};

const removeLoader = () => {
  setTimeout(() => {
    loader.classList.remove('show');
    getNextPosts();
  }, 1000);
};

const showLoader = () => {
  loader.classList.add('show');
  removeLoader();
};

const handleScrollToPageBottom = () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  const isPageBottomAulmostReached =
    scrollTop + clientHeight >= scrollHeight - 10;

  if (isPageBottomAulmostReached) {
    showLoader();
  }
};

const showPostIfMatchInputValue = (inputValue) => (post) => {
  const postTitle = post
  .querySelector('.post-title')
  .textContent.toLowerCase();

  const postBody = post
  .querySelector('.post-body')
  .textContent.toLowerCase();

  const postContainsInputValue =
    postTitle.includes(inputValue) || postBody.includes(inputValue);

  if (postContainsInputValue) {
    post.style.display = 'flex';
    return;
  }
  post.style.display = 'none';
};

const handleInputValue = (event) => {
  const inputValue = event.target.value.toLowerCase();
  const posts = document.querySelectorAll('.post');

  posts.forEach(showPostIfMatchInputValue(inputValue));
};

addPostIntoDOM();

filterInput.addEventListener('keyup', handleInputValue);
window.addEventListener('scroll', handleScrollToPageBottom);
