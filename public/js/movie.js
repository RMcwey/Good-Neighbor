const borrowMovie = async (event) => {
  console.log("BORROW button was pressed");
  
  if (event.target.hasAttribute('data-id')) {
    console.log("button has a data-id attribute");
    const movie_id = event.target.getAttribute('data-id');
    
    console.log(movie_id);

    await fetch(`/api/movies/${movie_id}`, { 
      method: 'PUT',
      body: JSON.stringify({'is_available': false}),
      headers: { 'Content-Type': 'application/json' },
    });

    // console.log(response);

  /* if (response.ok) {
    // document.location.replace('/profile');
  } else {
    alert('Failed to update movie.');
  } */
}};



const returnMovie = async (event) => {
  console.log("RETURNING button was pressed");
  if (event.target.hasAttribute('data-id')) {
    console.log("button has a data-id attribute");
    const movie_id = event.target.getAttribute('data-id');

    console.log(movie_id);

    await fetch(`/api/movies/${movie_id}`, {
      method: 'PUT',
      body: JSON.stringify({"is_available": true}),
      headers: { 'Content-Type': 'application/json' },
    });

    // console.log(response);

  /* if (response.ok) {
    // document.location.replace('/profile');
  } else {
    alert('Failed to update movie.');
  } */
}};

document
  .querySelector('#return-button')
  .addEventListener('click', returnMovie);

  document
  .querySelector('#borrow-button')
  .addEventListener('click', borrowMovie);
