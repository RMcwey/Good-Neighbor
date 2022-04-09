const borrowMovie = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const movie_id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/movies/${movie_id}`, { 
      method: 'PUT',
      body: JSON.stringify({'is_available': false}),
      headers: { 'Content-Type': 'application/json' },
    });

  if (response.ok) {
    document.location.replace('/profile');
  } else {
    alert('Failed to update movie.');
  }
}};


const returnMovie = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const movie_id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/movies/${movie_id}`, {
      method: 'PUT',
      body: JSON.stringify({"is_available": true}),
      headers: { 'Content-Type': 'application/json' },
    });

  if (response.ok) {
    document.location.replace('/profile');
  } else {
    alert('Failed to update movie.');
  }
}};


document
  .querySelector('#return-button')
  .addEventListener('click', returnMovie);

  document
  .querySelector('#borrow-button')
  .addEventListener('click', borrowMovie);
