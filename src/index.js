// Add event listeners to capture form data and override a form's default behavior
// Fetch data based on what the user types into that form
// Display that data on the page

//******************************************ORIGINAL CODE******************************************
// const init = () => {
  
// }

// document.addEventListener('DOMContentLoaded', init);
//******************************************ORIGINAL CODE******************************************

//****************************************** 1st ATTEMPT******************************************
const init = () => {
    let form = document.querySelector('form');
//   let submitBox = document.querySelector('#searchByID')
    // let resultSection = document.querySelectorAll('#movieDetails');
    // let movieTitleRequested = resultSection['h4'];
    let movieTitleRequested = document.querySelector('h4');
    let movieSummaryRequested = document.querySelector('p');
    // console.log(movieSummaryRequested.textContent);
    // console.log(movieTitleRequested.textContent);
    
    form.addEventListener('submit' , e => {
        e.preventDefault();
        //let formData = e.target.children[1].value;
        let formData = document.querySelector('#searchByID').value;
        // console.log(formData);
        // let p = document.createElement('p');
        // p.textContent = formData;
        form.reset();



      fetch(`http://localhost:3000/movies/${formData}`).then(resp => resp.json()).then(data => {
        movieTitleRequested.textContent = data.title;
        movieSummaryRequested.textContent = data.summary;
        console.log(movieTitleRequested.textContent);
        console.log(movieSummaryRequested.textContent);
      });
  })
}

document.addEventListener('DOMContentLoaded', init);
//****************************************** 1st ATTEMPT******************************************