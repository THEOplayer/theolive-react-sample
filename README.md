# Sample THEOlive player in React

## License

This projects falls under the license as defined in https://github.com/THEOplayer/license-and-disclaimer.

## Overview

This project contains a basic implementation of a React App using THEOplayer as a React Component.

## Project setup

### Installing

You can run the command `npm install` to install all the necessary packages. This project was bootstrapped with Create React App. You can learn more in the Create React App documentation.

### Starting the application

You can start the application by running `npm run start`. It compiles and runs the app in the development mode. Open http://localhost:3000 to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

## Examples

### Creating the [`THEOliveWrapper.tsx`](./src/components/THEOliveWrapper.tsx) component

This component will import two important files:

-   `import { Player } from "@theolive/player"`: everything related to the player functionality
-   `import "@theolive/player/THEOLive.css"`: the specific CSS for the THEOlive player. If you want to use your own styling and UI, please visit https://github.com/THEOplayer/theolive-chromeless-react-sample.

Inside the component, we'll wait until the necessary elements are mounted and call for our player to be initialized.

### Loading our channel inside [`App.tsx`](./src/App.tsx)

Inside `App.tsx`, we'll handle the loading of our channel: once our player is available, we'll call `await player.loadChannel("your-channel-id")` to load the manifest and start playing content.

### Listening on events

THEOlive offers the option to listen on certain events the player can throw. As an example: you can register on eventListener that will listen for the player to be paused, and perform an action on it. This can be done by the following code:

`player.addEventListener("pause", (e) => console.log(`The player got paused on ${e.date}`));`

Please visit [`App.tsx`](./src/App.tsx) for more examples.

A full list of possible events can be found at https://developers.theo.live/docs/player-api-details.
