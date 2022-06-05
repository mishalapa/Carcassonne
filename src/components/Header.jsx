import React from 'react'
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate()
  function clickToTile() {
    navigate('./tiles')
  }
  function clickToScoring() {
    navigate('./scoring')
  }
  return (
    <div className='header'>
      {/* <Button type="primary" onClick={clickToScoring}>Scoring</Button>
      <Button type="primary" onClick={clickToTile}>Tiles for the Game</Button> */}
    </div>
  )
}

export default Header