// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

const datefun = () => {
  let date = new Date();
  appDiv.innerHTML = date.toLocaleTimeString();
};

// setInterval(() => {
//   // let date = new Date();
//   // appDiv.innerHTML = date.toLocaleTimeString();
//   datefun();
// }, 1000);

// OR by pass a reference of the func
setInterval(datefun, 1000);
