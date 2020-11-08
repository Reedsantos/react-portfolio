import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <NavTabs />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;