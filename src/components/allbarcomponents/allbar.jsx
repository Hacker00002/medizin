import React from "react";
import Searchbar from "../searchbar/searchbar";
import Categoriesbar from "../categoriesbar/categoriesbar";
import Sizebar from "../sizebar/sizebar";
import Tagsbar from "../tagsbar/tagsbar";
import Toprated from "../toprated/toprated";
import Settings from "../settingsbar/settings";

const Allbar = () => {
  return (
    <div className="flex container">
      <div>
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
      </div>
      <Settings />
    </div>
  );
};

export default Allbar;
