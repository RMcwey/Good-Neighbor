const borrowMovie = (event) => {
  if (event.target.hasAttribute('data-id')) {
    // const movie_id2 = event.target.getAttribute('data-id');
    const movie_id2 = document.querySelector('#test').innerHTML;
    const movie_id = parseInt(movie_id2)
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
        console.log(completeData);
        document.location.reload();
        })
    }
}};

const returnMovie = (event) => {
  if (event.target.hasAttribute('data-id')) {
    // const movie_id = event.target.getAttribute('data-id');
    const movie_id2 = document.querySelector('#test').innerHTML;
    const movie_id = parseInt(movie_id2)
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
}};

if (document.querySelector('#return-button')) {
document
  .querySelector('#return-button')
  .addEventListener('click', returnMovie);
} else if (document.querySelector('#borrow-button')) {
  document
  .querySelector('#borrow-button')
  .addEventListener('click', borrowMovie);
}