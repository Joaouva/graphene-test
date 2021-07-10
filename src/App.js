import React from "react"

import Header from "./pages/header/header"
import Community from "./pages/community/community";
import Map from "./pages/map/map"
import Recipes from "./pages/recipes/recipes";
import Collaborate from "./pages/collaborate/collaborate";
import Footer from "./pages/footer/footer";



function App() {
  return (
    <div>
      <Header />
      <Community />
      <Map />
      <Recipes />
      <Collaborate />
      <Footer/>
    </div>
  );
}

export default App;
