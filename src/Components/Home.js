import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = ({}) => (
  <div className="App">
    <Link className="App-link" to="/detail">点我进入详情页</Link>
  </div>
)

export default Home