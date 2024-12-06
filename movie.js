
const movieID = document.getElementById("movieInput");
const movieSubmit = document.getElementById("movieSubmit");
const movieForm = document.getElementById("movieForm");

window.addEventListener("load", function(){
    //const genre = this.localStorage.getItem("movieID");
    movieID.value = this.localStorage.getItem("movieID");
    movieSubmit.click();
    //this.confirm(genre);

    // run html form to go to php from here and grab from SQL database
});

// movieSubmit.addEventListener("input", function() {
//     confirm("this")
// });

// movieForm.addEventListener('submit', function() {
//     //confirm(movieID.value);
// })










