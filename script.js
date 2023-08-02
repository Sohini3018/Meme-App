// Initial references
let meme = document.getElementById("meme");
let title = document.getElementById("title");
let memeBtn = document.getElementById("get-meme-btn");
// API URL
let url = "https://meme-api.com/gimme/";
let subreddits = ["catmemes", "wholesomemes", "dogmemes", "me_irl"];

// Function to get random meme
function getRandom() {
    //Choose a random subreddit from the subreddits array
    let randomSubreddits = subreddits[Math.floor(Math.random() * subreddits.length)];
    //Fetch data from the api
    fetch(url + randomSubreddits)
        .then((resp) => resp.json())
        .then((data) => {
            let memeImg = new Image();
            //Display meme image and title only after the image loads
            memeImg.onload = () => {
                meme.src = data.url;
                title.innerHTML = data.title;
            };
            memeImg.src = data.url;
        });
}

// Call this function
memeBtn.addEventListener("click", getRandom);
window.addEventListener("load", getRandom);