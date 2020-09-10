// 1. rafcp command to write all de base codex

import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["Marvel"]);

  return (
    <>
      <h2>Gift Expert App</h2>
      <AddCategory setCategories={setCategories}></AddCategory>
      <hr></hr>

      <h3>Categories</h3>

      <ol>
        {
          // 3. Maps the category to display it in an ordered list
          categories.map((category) => (
            <GifGrid key={category} category={category} />
          ))

          //all the html components have to have a key, that can be the same content
        }
      </ol>
    </>
  );
};

export default GiftExpertApp;
