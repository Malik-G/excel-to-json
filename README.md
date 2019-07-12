# Get Jazzy AJAX

- Fork
- Clone
- `npm install` to get all of the dependencies (just `express` for now)

## Base

- Look at the pattern for the working `/artist` AJAX request. The client side is all set up for `/song`, but the server side code isn't there. Add the server side code.
- Add a POST route to the server.js file to allow a new song to be added. 
- Add a form to the `index.html` & update `client.js` to do an Ajax POST request, allowing a new song to be added.

In the comments on the submission write down what you think is happening:

1. When the page is loaded on the client
2. When the submit button is clicked to add a song

## Stretch

- Our `.then` is getting cluttered. Let's move the appending looping code into their own functions
- The `server.js` file is getting a little crowded. Move arrays into a `modules` folder inside of your `server` folder (names like `artist.js` and `song.js` would be good).
- Add a new POST route and form to add an artist. 
- The `/artist` and `/song` requests are working! Add a third table for albums that has `title` and `year` for the release date.
