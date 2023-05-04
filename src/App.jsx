import React from "react";
// import components
import Sizebar from "./components/sizebar/sizebar";
import Tagsbar from "./components/tagsbar/tagsbar";
import Toprated from "./components/toprated/toprated";
import Searchbar from "./components/searchbar/searchbar";
import Categoriesbar from "./components/categoriesbar/categoriesbar";

const App = () => {
  return (
    <>
      <div>
        <Searchbar />
      </div>
      <div>
        <Categoriesbar />
      </div>
      <div>
        <Sizebar />
      </div>
      <div>
        <Tagsbar />
      </div>
      <div>
        <Toprated />
      </div>
    </>
  );
};

export default App;
