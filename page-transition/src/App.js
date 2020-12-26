import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import { Route, Switch, useLocation } from "react-router-dom";
import Home from "../src/Pages/Home";
import About from "../src/Pages/About";
import Services from "../src/Pages/Services";
import { AnimatePresence } from "framer-motion";
import GloabalStyle from "./globalStyle";
import styled from "styled-components";

const Section = styled.section`
  overflow-x: hidden;
`;

function App() {
  let location = useLocation();
  return (
    <>
      <Section>
        <GloabalStyle />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
          </Switch>
        </AnimatePresence>
      </Section>
    </>
  );
}

export default App;
