import React from 'react'
import { useParams } from 'react-router-dom'

const Stock = ({data}) => {

    const {id} = useParams()
    const properStocks = data.filter(stock =>{
        return id == stock.id
    })
  return (
    <>
    
    <h1>This is my id: {id}</h1>

    {properStocks.map(stock =>{
        return <h3>{stock.company}</h3>
    })}
    
    </>
  )
}

export default Stock