import React from "react";

import Header from "components/Headers/Header.js";
import Footer from "components/Footers/AppFooter";
import User from "./pages/User";

const App = () => {
  return (
    <>
      <Header />
      <User />
      <Footer />
    </>
  );
};

export default App;
