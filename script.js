import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  { className: "heading"},
  "Namaste React js"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


// What parcel do ?
// 1. Hot module Replacement
// 2. file watcher
// 3. Bundling the files
// 4. Minify
// 5. Cleaning our code
// 6. Image Optimization
// 7. Dev and production build
// 8. Super Fast build  algorithm
// 9. Caching while development
// 10. Campatible with older version of browsers
// 11. Enable Https on dev
// 12. You should put .parcel-cache in gitignore
// 13. Consit Hashing Algorithm
// 14. Zero Config



// Trasitive dependencies : we have our package manager which handles and takes care of our transitive dependies, dependies have their own dependencies and that depencies has their own dependencies and this is called transitive dependencies
