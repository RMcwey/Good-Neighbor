const borrowMovie = async (event) => {
  console.log("BORROW button was pressed");
  
  if (event.target.hasAttribute('data-id')) {
    console.log("button has a data-id attribute");
    const movie_id = event.target.getAttribute('data-id');
    console.log(movie_id);

    const response = await fetch(`/api/movies/${movie_id}`, { 
      method: 'PUT',
      body: {
        "is_available": false
      }
    });

  if (response.ok) {
    document.location.replace('/profile');
  } else {
    alert('Failed to update movie.');
  }
}};

/* const returnMovie = async (event) => {
  if (event.target.hasAttribute('borrow-movie')) {
    const movie_id = event.target.getAttribute('borrow-movie');

    const response = await fetch(`/api/movies/${movie_id}`, {
      method: 'PUT',
      body: {
        is_available: true
      }
    });

  if (response.ok) {
    document.location.replace('/profile');
  } else {
    alert('Failed to update movie.');
  }
}}; */

document
  .querySelector('#borrow-button')
  .addEventListener('click', borrowMovie);
