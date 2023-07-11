import React, { Profiler } from "react";

function Stock({stock, portfolio, setPortfolio}) {

  function handleClick() {
      setPortfolio({
        ...portfolio,
        [stock.name]: !portfolio[stock.name]
      })
  }
  return (
    <div>
      <div className="card" onClick={handleClick}>
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{`${stock.ticker}: ${stock.price}`}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
