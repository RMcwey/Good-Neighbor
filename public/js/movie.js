
const borrowMovie = async (event) => {
  if (event.target.hasAttribute('borrow-data-id')) {
    const movie_id = event.target.getAttribute('borrow-data-id');

    const response = await fetch(`/api/movies/${movie_id}`, {
      method: 'PUT'
    });

  if (response.ok) {
    document.location.replace('/profile');
  } else {
    alert('Failed to update movie.');
  }
}};

document
  .querySelector('.borrow-movie')
  .addEventListener('click', borrowMovie);
