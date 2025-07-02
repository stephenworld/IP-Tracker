# Frontend Mentor - IP Address Tracker Solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The Challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

![Screenshot](./screenshot.jpg)

<!-- Replace the image above with your own screenshot of the project. -->

### Links

- [Solution URL](https://your-solution-url.com)
- [Live Site URL](https://your-live-site-url.com)

## My Process

### Built With

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Styled Components](https://styled-components.com/)

### What I Learned

During this project, I improved my skills in responsive design, API integration, and state management in React. I also learned how to use Leaflet.js for interactive maps and how to handle asynchronous data fetching in Next.js.

```js
// Example: Fetching IP data
const fetchIPData = async (ip) => {
  const res = await fetch(`https://geo.ipify.org/api/v1?apiKey=YOUR_API_KEY&ipAddress=${ip}`);
  return res.json();
};
```

### Continued Development

In future projects, I want to focus more on accessibility, advanced map features, and optimizing performance for large datasets.

### Useful Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Leaflet.js Documentation](https://leafletjs.com/)
- [Frontend Mentor Community](https://www.frontendmentor.io/community)

## Author

- Website: [Your Name](https://www.your-site.com)
- Frontend Mentor: [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter: [@yourusername](https://www.twitter.com/yourusername)

## Acknowledgments

Thanks to the Frontend Mentor community for feedback and support during this challenge.
