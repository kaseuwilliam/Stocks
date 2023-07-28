import React from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import data from './data/stocks'
import Stock from './pages/Stock'
import StocksList from './pages/StocksList'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import AddStock from './pages/AddStock'

const App = () => {
  return (
    <>

    <nav>
      <ul>
        <li> <Link to='/'>Home</Link> </li>
        <li> <Link to='/stocks'>Stocks</Link> </li>
        <li> <Link to='/stock'>Stock</Link> </li>
      </ul>
    </nav>
    
    <Routes>
      <Route path='/' element={<Home />}></Route>
      
      <Route path='/stocks'>
        <Route index element={<StocksList data={data}/>}></Route>
        <Route path=':id' element={<Stock data={data}/>}></Route>
        <Route path='add' element={<AddStock data={data}/>}></Route>  
      </Route>

      <Route path='/stock' element={<Stock />}></Route>
      <Route path='*' element={<PageNotFound />}></Route>
    </Routes>

    

    {/* <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/stocks' element={<StocksList />}></Route>
      <Route path='/stock' element={<Stock />}></Route>
      <Route path='*' element={<PageNotFound />}></Route>
    </Routes> */}


    </>
  )
}

export default App