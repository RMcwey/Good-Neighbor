const newFormHandler = async (event) => {
  event.preventDefault();

  const movie_name = document.querySelector('#movie-name').value.trim();
  const publish_year = document.querySelector('#movie-year').value.trim();
  const movie_genre = document.querySelector('#movie-genre').value.trim();
  const mpaa_rating = document.querySelector('#movie-mpaa').value.trim();
  const movie_description = document.querySelector('#movie-desc').value.trim();

  if (movie_name && publish_year && movie_genre && mpaa_rating && movie_description) {
    const response = await fetch(`/api/movies`, {
      method: 'POST',
      body: JSON.stringify({ movie_name, publish_year, movie_genre, mpaa_rating, movie_description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

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

const returnButtonHandler = (event) => {
  console.log("RETURN button was pressed.");
  if (event.target.hasAttribute('data-id')) {
    const movie_id = event.target.getAttribute('data-id');
    userId();
    function userId(){ fetch(`/api/movies/${movie_id}`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json()
      ).then(data => {
        response(data.movie_contributor)
      });
    }
    function response(data) { 
      fetch(`/api/movies/${movie_id}`, { 
          method: 'PUT',
          body: JSON.stringify({
            'is_available': true,
            'current_holder': `${data}`,
          }),
          headers: { 
            'Content-Type': 'application/json' 
          },
        }).then((res) => res.json()
        ).then(completeData => {
        console.log(completeData); 
        document.location.reload();
        });
    }

    // if (response.ok) {
    //   document.location.replace('/profile');
    // } else {
    //   alert('Failed to delete MOVIE');
    // }
  }
};


document
  .querySelector('.new-movie-form')
  .addEventListener('submit', newFormHandler);

  
  if (document.querySelector('#remove-button')) {
    document
    .querySelector('#remove-button')
    .addEventListener('click', delButtonHandler);
  } else if (document.querySelector('#return-button')) {
    document
    .querySelector('#return-button')
    .addEventListener('click', returnButtonHandler);
  }
