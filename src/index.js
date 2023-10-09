import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// async function generateRandomNumber(onSuccess, onFailure) {
//   setTimeout(() => {
//     const random = Math.random().toFixed(2);
//     if (random > 0.01) {
//       onSuccess("It worked the random number is " + random);
//     } else {
//       onFailure("It didn't work well the random number is ", random);
//     }
//   }, 2000);
// }

// const promise = new Promise(generateRandomNumber);
// const promise2 = new Promise(generateRandomNumber);
// const promise3 = new Promise(generateRandomNumber);

// promise
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((response) => {
//     console.log(response);
//   });

// import axios from "axios";
// fetch("https://randomuser.me/api/")
//   .then((response) => {
//     response.json().then((jsonResponse) => {
//       console.log(jsonResponse);
//     });
//   })
//   .catch((error) => {});
// async function req() {
//   try {
//     const jsonResponse = await axios("https://randouser.me/api/");
//     console.log(jsonResponse);
//   } catch (error) {
//     console.log("Erro ", error.message);
//   }
// }

// req();

// axios("https://randomuser.me/api/")
//   .then((jsonResponse) => {
//     console.log(jsonResponse.data);
//   })
//   .catch((error) => {});
