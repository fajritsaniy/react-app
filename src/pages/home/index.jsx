import { Component } from "react";
import About from "./about";
import Hero from "./hero";
import Service from "./service";
import Contact from "./contact";
import InvestStep from "./investStep";
import StockProduct from "./stockProduct";

export default class Home extends Component {
  render() {
    return (
      <>
        <Hero></Hero>
        <main id={"main"}></main>
        <StockProduct></StockProduct>
        <About></About>
        <InvestStep></InvestStep>
        <Service></Service>
        <Contact></Contact>
      </>
    );
  }
}
