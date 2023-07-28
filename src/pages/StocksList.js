import React from 'react'

const StocksList = ({data}) => {
  return (
    <>
    <ol>   
      {data.map(stock =>{
        return <li>{stock.company}</li>
      })}
    </ol>
    </>
  )
}

export default StocksList