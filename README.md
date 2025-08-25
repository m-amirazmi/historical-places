# Historical Places

A React Native starter template for building mobile applications with Expo, React Navigation, and TypeScript. This project is designed to run on both mobile and web platforms.

### ⚠️⚠️⚠️ Disclaimer ⚠️⚠️⚠️

I'm so sorry if this app seems like half baked. I'm very **new to React Native** and also the **Observable Pattern with Redux Observable**. I have learn a lot of things throughout building this app. I have not use or heard anything about Redux Observable to handle async task in Redux as I'm comfortable with `createAsyncThunk` with Redux Toolkit. Handling API call through listening on stream of events quite new and interesting to me. This might be my next go to pattern when I building my next app in future.

As for React Native, I have hard time to figure out how to style the app properly. First I go barebone with StyleSheet and using simple DaisyUI kind of theme. Looks clean but when try access on Android, the UI getting weird where the element overlapping each other. Then I try Kitten UI. Kitten UI not solve the issue. Lastly, I revert back to barebone style but with very minimal UI to avoid unnecessary overlapping.

However, I just learnt that, instead of using PX, I should use % instead especially on spacing due to different devices have different kind of pixel rendering.

To be honest, I already plan to build atleast interesting app. I have plan to put:

- Fullscreen map with horizontal scrolling places
- Ability to add new historical places (already prepare the code for POST req)
- Share the place to others through WhatsApp (though I do not know how to implement this yet)

Anyway, this assessment really teach me a lot. Thank you so much for giving me a chance to try building this app.

## Features

- **React Native with Expo** – Simplifies development and deployment.
- **React Navigation** – Handles navigation between screens.
- **TypeScript Support** – Ensures type safety and better development experience.
- **Web Support** – Works with React Native for Web.
- **Deep Linking & URL Handling** – Supports app navigation via URLs.
- **Theming** – Centralized theme support for consistent styling.
- **Starter Template** – Ready-to-use structure for building mobile apps.

---

## Project Structure

```bash
├── assets/ # Images and static assets
├── ios/ # iOS-specific code and configurations
├── src/ # Main source code of the application
├── index.tsx # App entry point
├── package.json # Project dependencies and scripts
├── tsconfig.json # TypeScript configuration
├── app.json # Expo app configuration
├── eas.json # Expo Application Services configuration
├── requests.http # Sample HTTP requests for testing
```

---

## Getting Started

### Prerequisites

- Node.js >= 18
- Expo CLI
- Yarn or npm

### Installation

```bash
git clone https://github.com/m-amirazmi/historical-places.git
cd historical-places
npm install
# or
yarn install
```

### Running the app

```bash
# Start Expo development server
npm start
# or
yarn start
```
