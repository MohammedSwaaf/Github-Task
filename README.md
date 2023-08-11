
## Overview

**HOLO Task**

## Features

- SearchForm component for searching GitHub repositories and users.
- Pagination using scrolling with `react-infinite-scroll-component`.
- Axios request function for making API requests.
- Redux and Redux Persist for managing and persisting data.
- `ReposView` and `UsersView` components for displaying repositories and users, respectively.
- `utils` folder with helper functions.
- `appTypes.ts` for defining types and interfaces.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Redux**: State management library for managing application state.
- **Redux** Persist: Library for persisting Redux store data to local storage.
- **Axios**: Promise-based HTTP client for making API requests.
- **react-infinite-scroll-component**: React component for infinite scrolling.
- **CSS**: Styling language for styling the components.

## Folder Structure

- **src/components**: Contains the SearchForm, ReposView, and UsersView components.
- **src/utils**: Contains utility functions, such as string truncation.
- **src/appTypes.ts**: Defines types and interfaces used throughout the application.
- **src/service**: Contains the axios request function for making API requests.
- **src/redux**: Contains Redux-related files, such as actions, reducers, and the store.
- **src/App.tsx**: Entry point of the application.

## Design Decisions

- **GitHub APIs Integration**: Chose to integrate with GitHub APIs to search for repositories and users. GitHub APIs provide a wealth of data and functionality related to repositories and users, making it a suitable choice for this project.
- **Redux and Redux Persist**: Chose to use Redux for managing application state as it provides a centralized store and makes data sharing between components easier. Redux Persist was used to persist the data to local storage, allowing the application to remember the user's search results even after refreshing the page.
- **React Infinite Scroll Component**: Chose to use this library for pagination as it provides a simple way to implement infinite scrolling, eliminating the need for traditional pagination with page numbers.
- **Axios Request Function**: Created a reusable axios request function to simplify making API requests. This allows for consistent error handling, cleaner code, and easy maintenance when making requests to different APIs.
- **Utils Folder**: Created a utils folder to store utility functions that can be shared across components. The string truncation function was placed in this folder to keep the codebase organized and modular.

## Instructions

- To clone the App` git clone https://github.com/MohammedSwaaf/Github-Task.git`
- To install the dependinces `npm install`
- To run the app `npm start`

## Clone the app
```bash
git clone https://github.com/MohammedSwaaf/Github-Task.git
```

## Installation

```bash
npm install
```

## Running the app

```bash
npm start

### Note
Please make sure you are using the last version of node
