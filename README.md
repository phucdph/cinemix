
  

# Cinemix

**Cinemix** is a movies app using the [The Movie Database API](https://developers.themoviedb.org/3).

[Live Demo](https://elaborate-cranachan-6be856.netlify.app/)
 
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

* NodeJS >= 14
* pnpm


### Development

  

A step by step series of examples that tell you how to get a development env running

  

Clone this respository

  

```
git clone git@github.com:phucdph/cinemix.git
```

  

And instal the dependencies

  

```
pnpm install
```

  

Create an enviroment variables file `.env`

  

```
API_KEY=<Your api key>
API_URL=https://api.themoviedb.org/3
```

And finally just start the application

```
pnpm dev
```

  

## User Stories

#### The following **required** functionality is completed:
 - [x] User can view a list of movies currently playing in theaters. Poster images load asynchronously.

 - [x] User can view movie details by tapping on a cell.

 - [x] User sees loading state while waiting for the API.

 - [x] User sees an error message when there is a network error.

 - [ ] User can pull to refresh the movie list.

 - I don't think pull to refresh is necessary. Because desktop do not need this function. And mobile device already has built-in support.

- [x] Simple responsive.

 #### The following **optional** features are implemented:

- [x] Add a tab bar for **Now Playing** and **Top Rated** movies.
- [x] Implement segmented control to switch between list view and grid view.
- [x] Add a search bar.
- [x] All images fade in.
- [x] Implement lazy load image.
- [x] Customize the highlight and selection effect of the cell.
- [x] Improve UX loading by skeleton loading.
- [x] Enhance responsive.

#### The following **additional** features are implemented:

- [x] Add a tab bar for **Upcoming** movies.
- [x] Add **Similar Movies** section.
- [x] Implement Progressive Load Image.
## Built With

  

* [react.js](https://reactjs.org/) - A JavaScript library for building user interfaces.

* [remix](https://remix.run/) - Remix is a full stack web framework that lets you focus on the user interface and work back through web fundamentals to deliver a fast, slick, and resilient user experience.

* [mantine](https://mantine.dev/) - A fully featured React components library.

* [lodash](https://lodash.com/) - A modern JavaScript utility library delivering modularity, performance & extras.

* [react-intersection-observer](https://www.npmjs.com/package/react-intersection-observer/) React implementation of the Intersection Observer API to tell you when an element enters or leaves the viewport.

* [@tabler/icons-react](https://tabler-icons-react.vercel.app/) A set of over 450 free MIT-licensed high-quality SVG icons for you to use in your web projects.

  
  

## Authors

  

* **Đặng Phan Hoàng Phúc** (phuchoang2710@gmail.com)