# Movie Project

This is a movie database project, where it shows movies, their casts, ratings, trailers, related movies, genres, and so on.

This project uses The Movie DB API: `https://api.themoviedb.org/3`. It is up to
you to use your Google and Postman skills to explore the API and understand the
data.

# Version 2

Updated Jun 24, 4:30 pm

### What to do in class

- Add a Spinner component to the Navbar component and make it invisible by default also pass a function called `onSearch` to the SearchBox and then when you type some text inside the SearchBox component, call it to make the spinner in the Navbar component appears. You can use spinners from here https://react-bootstrap.github.io/components/spinners/

- use this function to fetch and don’t change it, the `path` is basically whatever your are requesting after the `TMDB_BASE_URL` like `/movies/popular`

```jsx
const constructUrl = (path, query) => {
  return `${TMDB_BASE_URL}/${path}?api_key=${atob(
    "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
  )}&query=${query}`;
};
```

- checkout this for more info about the search api endpoint
  https://developers.themoviedb.org/3/search/search-movies

- Implement the SearchBox component to search for the input using the `constructUrl` function passing it the search path and query, and then return the results into the main component using a handler function. the function should be passed as a prop to the SearchBox.
- Send the movies response from the main component to another component that will render the movies and lets call it MoviesGrid.
- In the MoviesGrid map each movie to another component called MovieItem.

### Homework

- Go to the TMDB documentations and see how you can get all the genres (the categories) and how to get popular movies in this category
- Fetch the categories and put them inside a dropdown inside the NavBar
- when you change categories from the dropdown it should fetch the popular movies in that category

### Styling

feel free to style the movies list but we suggest making it as a grid and each movie has the poster and title under it, maybe call effect when hovering or something or hide the title and show it when hovering, don't know be creative with it

### Search Keywords

- Events in react
- Events with state
- handling Forms in react

# Version 1

Updated: Jun 22, 2:00 AM

# What you and your partners will build in class

## 1. Project Structure

Create a new react app inside a directory with your team name as the app name. You can search how to start a new react app using the follwoing keywords.

### Keywords:

- create-react-app
- npx

### Make sure to:

- Add node_modules to `.gitignore`
- the root directory contains only a directory with your team name and this `README.md` file

---

## 2. Homepage

### Navbar Component

Add a universal navbar (it appears on every page) to the home page that includes
buttons that go to the following pages:

- Home button, takes you to the home page.
- Search box where you can type the movie or actor name and display the
  related results. Logic will be added later, just add a dummy search bar. **It should be a component.**

### Main Component

Add an empty main section below the navbar and above the footer. It can be empty for now.

### Footer Component

Add a universal footer that includes:

- Credit to you and your partner for building the website,
- You and your partner's github link inside an icon and optionally, your social
  media links.

### Styling

- you can style the components yourself, import the stylesheet from JavaScript, not in HTML
- Optionally: you can use react-bootstrap library. Search on how to install it and get started using it

# Homework

- Style the navbar and search box
- Add simple functionality to the search box. Whenever you type something, the text inside the input should be logged to the console.
- The same should happen when you hit enter

### Search Keywords:

- How to handle text input change in react
- How to handle form submission in react
