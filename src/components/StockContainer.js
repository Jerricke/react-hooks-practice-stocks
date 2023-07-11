import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, portfolio, setPortfolio}) {

  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map( (stock) => {
        if (!portfolio[stock.name]) {
          return <Stock key={stock.id} portfolio={portfolio} setPortfolio={setPortfolio} stock={stock}/>
        } else return null
      })}
    </div>
  );
}

export default StockContainer;
