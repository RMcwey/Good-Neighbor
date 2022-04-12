const borrowMovie = (event) => {
  if (event.target.hasAttribute('data-id')) {
    const movie_id = event.target.getAttribute('data-id');
    userId();
    function userId(){ fetch(`/api/users/profile`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json()
      ).then(data => {
        response(data)
      });
    }
    function response(data) { 
      fetch(`/api/movies/${movie_id}`, { 
          method: 'PUT',
          body: JSON.stringify({
            'is_available': false,
            'current_holder': `${data}`,
          }),
          headers: { 
            'Content-Type': 'application/json' 
          },
        }).then((res) => res.json()
        ).then(completeData => {
      console.log(completeData) 
      })
    }
  // if (response.ok) {
  //   document.location.replace('/profile');
  // } else {
  //   alert('Failed to update movie.');
  // }
}};

const returnMovie = (event) => {
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
        console.log(completeData) 
        });
    }
  // if (response.ok) {
  //   document.location.replace('/profile');
  // } else {
  //   alert('Failed to update movie.');
  // }
}};

document
  .querySelector('#return-button')
  .addEventListener('click', returnMovie);

  document
  .querySelector('#borrow-button')
  .addEventListener('click', borrowMovie);
