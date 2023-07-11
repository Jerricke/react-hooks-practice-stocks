import React from "react";
import Stock from "./Stock";

function PortfolioContainer({stocks, portfolio, setPortfolio}) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {stocks.map( (stock) => {
        if (portfolio[stock.name]) {
          return <Stock key={stock.id} portfolio={portfolio} setPortfolio={setPortfolio} stock={stock}/>
        } else return null
      })}
    </div>
  );
}

export default PortfolioContainer;
