
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const movie_id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/movies/${movie_id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete MOVIE');
    }
  }
};


document
  .querySelector('.movie-list')
  .addEventListener('click', delButtonHandler);
