import { Project, Tool } from "./utils/types";

export const imgPath =
  "https://res.cloudinary.com/damgaqago/image/upload/v1615033565/portfolio/";

const tools = {
  react: {
    title: "React",
    imgUrl: `react.png`,
  },
  redux: {
    title: "Redux",
    imgUrl: `icons8-redux.svg`,
  },
  semanticUi: {
    title: "Semantic UI React",
    imgUrl: `react-semantic-ui.png`,
  },
  reactNative: {
    title: "React Native",
    imgUrl: "react-native-logo.png",
  },
  reactNavigation: {
    title: "React Navigation",
    imgUrl: "react-navigation.svg",
  },
  expo: {
    title: "Expo",
    imgUrl: "expo.png",
  },
  reactRouter: {
    title: "React Router",
    imgUrl: "react-router-seeklogo.com.svg",
  },
  asyncStorage: {
    title: "Async Storage",
    imgUrl: "async-storage.svg",
  },
  bootStrap: {
    title: "Bootstrap",
    imgUrl: "bootstrap-solid.svg",
  },
  nodeJs: {
    title: "NodeJs",
    imgUrl: "nodejs.png",
  },
  postgresSql: {
    title: "Postgres SQL",
    imgUrl: "postgres.png",
  },
  mongoDb: {
    title: "Mongo DB",
    imgUrl: "mongoDb.png",
  },
  clarifai: {
    title: "Clarifai",
    imgUrl: "Clarifai_Logo_FC.png",
    wideImage: true,
  },
  javaScript: {
    title: "JavaScript",
    imgUrl: "javascript.png",
  },
  html: {
    title: "HTML",
    imgUrl: "html.png",
  },
  css: {
    title: "CSS",
    imgUrl: "css.png",
  },
  cpp: {
    title: "C++",
    imgUrl: "cplpl.png",
  },
  cSharp: {
    title: "C#",
    imgUrl: "cSharp.png",
  },
  winForms: {
    title: "Windows Forms",
    imgUrl: "winform.png",
    wideImage: true,
  },
  payPal: {
    title: "PayPal",
    imgUrl: "PayPal.svg",
    wideImage: true,
  },
  strapi: {
    title: "Strapi CMS",
    imgUrl: "strapi-logo-light.svg",
    wideImage: true,
  },
  nextJs: { title: "Next.js", imgUrl: "next-js.svg" },
  apollo: { title: "Apollo", imgUrl: "apollo.svg" },
  typeScript: { title: "TypeScript", imgUrl: "typescript.svg" },
  grommet: { title: "Grommet", imgUrl: "grommet.svg", wideImage: true },
  graphql: { title: "GraphQl", imgUrl: "graphql.svg" },
  cognito: { title: "AWS Cognito", imgUrl: "aws-cognito.svg" },
  dynamoDB: { title: "AWS DynamoDB", imgUrl: "aws-dynamodb.svg" },
  styledComponents: {
    title: "Styled Components",
    imgUrl: "styled-components.svg",
  },
  nativeBase: {
    title: "Native Base",
    imgUrl: "native-base-logo.png",
  },
  reactHookForm: {
    title: "React Hook Form",
    imgUrl: "react-hook-form-logo-only.svg",
  },
};

export const projectsUrls: Project[] = [
  {
    name: "Wafar Points",
    url: "https://wafarpoints.com/",
    image: `${imgPath}/wafar-2.png`,
    reviewUrl: "true",
    tools: [
      tools.nextJs,
      tools.grommet,
      tools.typeScript,
      tools.styledComponents,
      tools.graphql,
      tools.apollo,
      tools.cognito,
      tools.dynamoDB,
    ],
    description: `WafarPoints is a web app that has a bunch of merchants who have offers on
    thier products, when a customer buys a certain product in an offer, he gets some points
    as a reward for that purchase. Customer then can redeem his points in exchange for some money 
    from any merchant on wafar. This app also has admins who can add merchants and
    sell points for them while customers can self signup themselves. Every user can view his
    transactions history 
    `,
  },

  {
    name: "Utudio",
    url: "https://utudio.com/",
    image: `${imgPath}/utudio.JPG`,
    tools: [
      tools.nextJs,
      tools.grommet,
      tools.typeScript,
      tools.graphql,
      tools.apollo,
      tools.cognito,
      tools.dynamoDB,
    ],
    description: `Utudio is a web app that enables users to represent their talent by
    creating one or more studios to add a description, photo album or a video to 
    that studio to showcase their talent.
    This app has a multiple ssr pages using nextjs, user authentication using cognito, rtl,
    creating and modifying studios by calling a graphql api using apollo and storing data to a dynamoDB and it was
    styled using grommet styling library
    `,
  },

  {
    name: "Wafar Points Mobile App",
    url: "https://play.google.com/store/apps/details?id=com.wafarpoints",
    image: `${imgPath}/wafar_mobile_pic2.png`,
    tools: [
      tools.reactNative,
      tools.reactNavigation,
      tools.nativeBase,
      tools.typeScript,
      tools.reactHookForm,
      tools.graphql,
      tools.apollo,
      tools.cognito,
    ],
    description: `Wafar Points mobile app is a react native application in which I have used react navigation, 
    native base ui library, react hook form, react native image picker & cropper, amazon cognito, apollo client 
    and some native device features like camera and splash screen.
    `,
  },

  // {
  //   name: "Mobile Store",
  //   url: "https://phone-storena.netlify.app/",
  //   code: "https://github.com/MostafaFarag14/mobile-ecommerce",
  //   image: `${imgPath}/mobile-store.png`,
  //   tools: [
  //     tools.react,
  //     tools.strapi,
  //     tools.semanticUi,
  //     tools.reactRouter,
  //     tools.payPal,
  //   ],
  //   description: `An e-commerce mobile store app that displays a collection of phones
  //   , search for a specific phone by name or filter the phones by brand , price , storage and so on.
  //   user can select a specific phone to view more specs. user can add products to cart and place order
  //   to make a payment to paypal sandbox. In this app I used strapi CMS to store phones data.
  //   `,
  // },

  {
    name: "Would You Rather",
    url: "https://would-you-razer.netlify.app/",
    code: "https://github.com/MostafaFarag14/would-you-rather.git",
    image: `${imgPath}/would-you-rather.png`,
    tools: [tools.react, tools.redux, tools.semanticUi, tools.reactRouter],
    description: `A voting app that enables user to login,
     once logged in he can see all of poll questions made in the app.
       The user can't see the votes on some question until he vote in it,
        once voted he will see how many votes and percentage for each choice ,
         and his choice will be marked, user can also post a poll question.
          There is a Leader board for all users ordered descending based on their questions and answers.`,
  },

  {
    name: "Movie App",
    url: "https://ree-action.netlify.com/",
    code: "https://github.com/MostafaFarag14/Movie-App.git",
    image: `${imgPath}/reeaction.png`,
    tools: [tools.react, tools.bootStrap],
    description: `A movie browser react app that interacts with The Movie DB API to get trending,
     top rated, popular and upcoming movies. also it has a live search for a certain movie. 
     every movie has a details such as rating and trailer that can be viewed by clicking it. 
     a movie overview can be shown by hovering the movie. Also there is a pagination to view different pages.
    `,
  },

  // {
  //   name: "Mobile Flashcards",
  //   url: "https://snack.expo.io/@mostafa14/github.com-mostafafarag14-mobile-flashcards",
  //   code: "https://github.com/MostafaFarag14/mobile-flashcards",
  //   image: `${imgPath}/mobile-flashcards.png`,
  //   tools: [
  //     tools.reactNative,
  //     tools.reactNavigation,
  //     tools.redux,
  //     tools.asyncStorage,
  //   ],
  //   description: `A mobile application that allows users to study collections of flashcards.
  //   The app will allow users to create different categories of flashcards called "decks",
  //    add flashcards to those decks, then take quizzes on those decks`,
  // },

  // {
  //   name: "Smart Brain",
  //   url: "https://idiot-brain.netlify.app/",
  //   code: "https://github.com/MostafaFarag14/smart-brain",
  //   image: `${imgPath}/smart_brain.png`,
  //   tools: [
  //     tools.react,
  //     tools.nodeJs,
  //     tools.postgresSql,
  //     tools.bootStrap,
  //     tools.clarifai,
  //   ],
  //   description: `A full stack app with React, NodeJs and PostgreSQL that enables users to register and login to detect faces in their photos using
  //   Clarifai API by getting faces positions in the submitted image , then creates list of empty divs with borders to contain these faces
  //   `,
  // },
  // {
  //   name: "Guest-book",
  //   url: "https://guest-book.netlify.app/",
  //   code: "https://github.com/MostafaFarag14/Guest-book",
  //   image: `${imgPath}/guest-book.png`,
  //   tools: [
  //     tools.react,
  //     tools.nodeJs,
  //     tools.mongoDb,
  //     tools.bootStrap
  //   ],
  //   description: `A full stack app with React,
  //    NodeJs and MongoDB that enables users
  //    to register and login to write a message ,
  //    reply to others messages ,
  //    edit or delete their own messages
  //   `
  // },

  {
    name: "Jammming",
    url: "https://jammming-hits.netlify.com/",
    code: "https://github.com/MostafaFarag14/Jammming-react-app.git",
    image: `${imgPath}/jamming.png`,
    tools: [tools.react, tools.css],
    description: `A react app that interacts with Spotify API to allow users to search the Spotify library,
     create a custom playlist by adding songs from the search results, then save it to their Spotify account.`,
  },

  {
    name: "Shooter Game",
    url: "https://mostafafarag14.github.io/shooter-game/",
    code: "https://github.com/MostafaFarag14/shooter-game.git",
    image: `${imgPath}/shooter.png`,
    tools: [tools.javaScript, tools.html, tools.css],
    description: `It's a shooting game that allows the user to select 3 levels and 3 characters.
    each level has a different environment and spawning frequency of 2 different kinds enemies.
    Player has score and health and must reach the end to win`,
  },

  {
    name: "Calculator",
    url: "https://mostafafarag14.github.io/calculator/",
    code: "https://github.com/MostafaFarag14/calculator.git",
    image: `${imgPath}/calculator.png`,
    tools: [tools.react, tools.bootStrap],
    description: `A simple calculator using React`,
  },

  {
    name: "Piano Player",
    url: "https://mostafafarag14.github.io/Piano-player/",
    code: "https://github.com/MostafaFarag14/Piano-player.git",
    image: `${imgPath}/piano.png`,
    tools: [tools.javaScript],
    description: `A piano player app which i have added functionality to it using javascript and made it 
    playable using mouse or keyboard keys by mapping each key or mouse click to certain audio`,
  },

  {
    name: "Chore Door",
    url: "https://chore-door-one.vercel.app/",
    code: "https://github.com/MostafaFarag14/Chore-Door.git",
    image: `${imgPath}/choreDoor.png`,
    tools: [tools.javaScript, tools.html, tools.css],
    description: `A game using html and javascript. There is a Bot hiding behind one of 3 doors,
    Your mission is to open two Consecutive doors without running into the ChoreBot to win.
    See if you can score a winning streak!`,
  },

  {
    name: "Memory Allocation",
    code: "https://github.com/MostafaFarag14/Memory-allocation.git",
    image: `${imgPath}/allocation.png`,
    description: `A Desktop App built using c# and winForms to simulate allocating of proccesses algorithms`,
    tools: [tools.cSharp, tools.winForms],
  },

  {
    name: "DES Function",
    code: "https://github.com/MostafaFarag14/DES-Function.git",
    image: `${imgPath}/round_function.jpg`,
    description: `A Console App with C++ to implement DES Function`,
    tools: [tools.cpp],
  },

  {
    name: "Scanner And Parser",
    code: "https://github.com/MostafaFarag14/Parser.git",
    image: `${imgPath}/parser.jpg`,
    description: `Scanner read the input from a file containing sample TINY code,
    then identifies the tokens and passes that list of tokens to the parser to get 
    Recognized structures and saves it to a text file`,
    tools: [tools.cpp],
  },

  {
    name: "Job scheduler",
    code: "https://github.com/MostafaFarag14/Job-scheduler.git",
    image: `${imgPath}/job-scheduler.png`,
    description: `A Console c++ app implements scheduling algorithms like FCFS, higher priority first , SJF and round robin`,
    tools: [tools.cpp],
  },
];
