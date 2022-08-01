# Kasa

Kasa[^1] is a website for renting apartments between individuals. Users can browse apartments to see their details and pictures.

**Goal of this project**: React app creation, use of React Router and fetch of JSON data.

## Load specifications

### Website designs

The desktop and mobile designs are available on [Figma](https://www.figma.com/file/bAnXDNqRKCRRP8mY2gcb5p/UI-Design-Kasa-FR). The website is fully responsive.

![Design for the apartment page](./src/assets/design/apartment.png 'Design for the apartment page')

### Technical constraints

-  Application development with React.
   -  Use of modular and reusable components.
   -  One component per file.
   -  Logical structure in files.
   -  Use of props between components.
   -  Use of state in components if needed.
   -  Event handling.
   -  Use of lists in React (map).
-  Use of React Router.
   -  Use of route parameters in URL to get each apartment's details.
   -  One page per route.
   -  Creation of 404 page for each non-existing route.
   -  Router in one file.
-  No external React library.
-  No error or warning in the console.

### Functional constraints

-  Gallery component:
   -  If the user is on the first picture and clicks on "previous picture" arrow, the gallery shows the last picture.
   -  If the user is on the last picture and clicks on "next picture" arrow, the gallery shows the first picture.
   -  If there's only one picture, previous and next picture's arrows are hidden.
   -  The gallery has a fixed height. Pictures will be cropped and centered in the frame.
-  Collapse component:
   -  Collapses are closed by default on the page initialization.
   -  If the collapse is open, it can be closed with a click. If it's closed, it can be opened with a click.

## Installation and launch

1. Clone the repository

```sh
git clone https://github.com/aurelianeg/kasa.git
```

2. Install dependencies

```sh
npm install
```

3. Launch the project

```sh
npm start
```

It runs the app in development mode, and the website is open on [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload when changes are made in the code, and any lint errors can be seen in the console.

[^1]: This is the 8th project of the "Front-end developer (JS - React)" training by OpenClassrooms.
