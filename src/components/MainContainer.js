import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [filter, setFilter] = useState("")
  const [sorter, setSorter] = useState("")
  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState({
    "Google": false,
    "Facebook": false,
    "Twitter": false,
    "Amazon": false,
    "Visa": false,
    "Bank of America": false,
    "JP Morgan": false,
    "Citi Bank": false,
    "Nike": false,
    "Under Armour": false
  })

  useEffect( () => {
    fetch("http://localhost:3001/stocks")
      .then(r => r.json())
      .then(data => setStocks(data))
  }, [])

  function searchRadio(e) {
    setSorter(e.target.value)
  }

  function searchFilter(e) {
    setFilter(e.target.value)
  }

  const sortData = stocks.sort( (a,b) => {
    if (sorter === "") return true
    else {
      if (sorter === "Alphabetically") {
        return a.name.localeCompare(b.name)
      } else {
        return (a.price - b.price)
      }
    }
  })

  const filterData = sortData.filter( data => {
    if (filter === "") return true
    else return data.type.includes(filter)
  })

  return (
    <div>
      <SearchBar searchFilter={searchFilter} searchRadio={searchRadio}/>
      <div className="row">
        <div className="col-8">
          <StockContainer portfolio={portfolio} setPortfolio={setPortfolio} stocks={filterData}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} setPortfolio={setPortfolio} stocks={filterData}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
