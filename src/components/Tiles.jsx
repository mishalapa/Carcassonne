import React, { useState } from 'react'
import CheckBox from './CheckBox'
import { useSelector } from 'react-redux'
import Base from './Base'
import { Button } from 'antd';
import 'antd/dist/antd.css';

import logo1 from '../assets/base/tail1.jpg'
import logo2 from '../assets/base/tail2.jpg'
import logo3 from '../assets/base/tail3.jpg'
import logo4 from '../assets/base/tail4.jpg'
import logo5 from '../assets/base/tail5.jpg'
import logo6 from '../assets/base/tail6.jpg'
import logo7 from '../assets/base/tail7.jpg'
import logo8 from '../assets/base/tail8.jpg'
import logo9 from '../assets/base/tail9.jpg'
import logo10 from '../assets/base/tail10.jpg'
import logo11 from '../assets/base/tail11.jpg'
import logo12 from '../assets/base/tail12.jpg'
import logo13 from '../assets/base/tail13.jpg'
import logo14 from '../assets/base/tail14.jpg'
import logo15 from '../assets/base/tail15.jpg'
import logo16 from '../assets/base/tail16.jpg'
import logo17 from '../assets/base/tail17.jpg'
import logo18 from '../assets/base/tail18.jpg'
import logo19 from '../assets/base/tail19.jpg'

import logod1 from '../assets/dragon/dragon1.jpg'
import logod2 from '../assets/dragon/dragon2.jpg'
import logod3 from '../assets/dragon/dragon3.jpg'
import logod4 from '../assets/dragon/dragon4.jpg'
import logod5 from '../assets/dragon/dragon5.jpg'
import logod6 from '../assets/dragon/dragon6.jpg'
import logod7 from '../assets/dragon/dragon7.jpg'
import logod8 from '../assets/dragon/dragon8.jpg'
import logod9 from '../assets/dragon/dragon9.jpg'
import logod10 from '../assets/dragon/dragon10.jpg'
import logod11 from '../assets/dragon/dragon11.jpg'

import logov1 from '../assets/dragon/vulcan1.jpg'
import logov2 from '../assets/dragon/vulcan2.jpg'
import logov3 from '../assets/dragon/vulcan3.jpg'
import logov4 from '../assets/dragon/vulcan4.jpg'
import logov5 from '../assets/dragon/vulcan5.jpg'
import logov6 from '../assets/dragon/vulcan6.jpg'

import logop1 from '../assets/dragon/portal1.jpg'
import logop2 from '../assets/dragon/portal2.jpg'
import logop3 from '../assets/dragon/portal3.jpg'
import logop4 from '../assets/dragon/portal4.jpg'
import logop5 from '../assets/dragon/portal5.jpg'
import logop6 from '../assets/dragon/portal6.jpg'

import logopr1 from '../assets/dragon/princess1.jpg'
import logopr2 from '../assets/dragon/princess2.jpg'
import logopr3 from '../assets/dragon/princess3.jpg'
import logopr4 from '../assets/dragon/princess4.jpg'
import logopr5 from '../assets/dragon/princess5.jpg'
import logopr6 from '../assets/dragon/princess6.jpg'

import logot1 from '../assets/traders/traders1.jpg'
import logot2 from '../assets/traders/traders2.jpg'
import logot3 from '../assets/traders/traders3.jpg'
import logot4 from '../assets/traders/traders4.jpg'
import logot5 from '../assets/traders/traders5.jpg'
import logot6 from '../assets/traders/traders6.jpg'
import logot7 from '../assets/traders/traders7.jpg'
import logot8 from '../assets/traders/traders8.jpg'
import logot9 from '../assets/traders/traders9.jpg'
import logot10 from '../assets/traders/traders10.jpg'
import logot11 from '../assets/traders/traders11.jpg'
import logot12 from '../assets/traders/traders12.jpg'
import logot13 from '../assets/traders/traders13.jpg'
import logot14 from '../assets/traders/traders14.jpg'
import logot15 from '../assets/traders/traders15.jpg'
import logot16 from '../assets/traders/traders16.jpg'
import logot17 from '../assets/traders/traders17.jpg'
import logot18 from '../assets/traders/traders18.jpg'
import logot19 from '../assets/traders/traders19.jpg'
import logot20 from '../assets/traders/traders20.jpg'
import logot21 from '../assets/traders/traders21.jpg'
import logot22 from '../assets/traders/traders22.jpg'
import logot23 from '../assets/traders/traders23.jpg'
import logot24 from '../assets/traders/traders24.jpg'

const dataBase = {
  "logo1": [logo1, 9],
  "logo2": [logo2, 8],
  "logo3": [logo3, 4],
  "logo4": [logo4, 1],
  "logo5": [logo5, 4],
  "logo6": [logo6, 2],
  "logo7": [logo7, 5],
  "logo8": [logo8, 3],
  "logo9": [logo9, 3],
  "logo10": [logo10, 4],
  "logo11": [logo11, 3],
  "logo12": [logo12, 3],
  "logo13": [logo13, 2],
  "logo14": [logo14, 5],
  "logo15": [logo15, 5],
  "logo16": [logo16, 3],
  "logo17": [logo17, 4],
  "logo18": [logo18, 3],
  "logo19": [logo19, 1],
}

const dataDragon = {
  "logod1": [logod1, 2],
  "logod2": [logod2, 1],
  "logod3": [logod3, 1],
  "logod4": [logod4, 1],
  "logod5": [logod5, 1],
  "logod6": [logod6, 1],
  "logod7": [logod7, 1],
  "logod8": [logod8, 1],
  "logod9": [logod9, 1],
  "logod10": [logod10, 1],
  "logod11": [logod11, 1],
}

const dataVulcan = {
  "logov1": [logov1, 1],
  "logov2": [logov2, 1],
  "logov3": [logov3, 1],
  "logov4": [logov4, 1],
  "logov5": [logov5, 1],
  "logov6": [logov6, 1],
}

const dataPortal = {
  "logop1": [logop1, 1],
  "logop2": [logop2, 1],
  "logop3": [logop3, 1],
  "logop4": [logop4, 1],
  "logop5": [logop5, 1],
  "logop6": [logop6, 1],
}

const dataPrincess = {
  "logopr1": [logopr1, 1],
  "logopr2": [logopr2, 1],
  "logopr3": [logopr3, 1],
  "logopr4": [logopr4, 1],
  "logopr5": [logopr5, 1],
  "logopr6": [logopr6, 1],
}

const dataTraders = {
  "logot1": [logot1, 1],
  "logot2": [logot2, 1],
  "logot3": [logot3, 1],
  "logot4": [logot4, 1],
  "logot5": [logot5, 1],
  "logot6": [logot6, 1],
  "logot7": [logot7, 1],
  "logot8": [logot8, 1],
  "logot9": [logot9, 1],
  "logot10": [logot10, 1],
  "logot11": [logot11, 1],
  "logot12": [logot12, 1],
  "logot13": [logot13, 1],
  "logot14": [logot14, 1],
  "logot15": [logot15, 1],
  "logot16": [logot16, 1],
  "logot17": [logot17, 1],
  "logot18": [logot18, 1],
  "logot19": [logot19, 1],
  "logot20": [logot20, 1],
  "logot21": [logot21, 1],
  "logot22": [logot22, 1],
  "logot23": [logot23, 1],
  "logot24": [logot24, 1],
}

const logoBase = ["logo1", "logo2","logo3", "logo4","logo5", "logo6","logo7", "logo8","logo9", "logo10","logo11", "logo12","logo13", "logo14","logo15", "logo16","logo17", "logo18","logo19"]
const logoDragon = ["logod1", "logod2","logod3", "logod4","logod5", "logod6","logod7", "logod8","logod9", "logod10","logod11"]
const logoVulcan = ["logov1", "logov2","logov3", "logov4","logov5", "logov6"]
const logoPortal = ["logop1", "logop2","logop3", "logop4","logop5", "logop6"]
const logoPrincess = ["logopr1", "logopr2","logopr3", "logopr4","logopr5", "logopr6"]
const logoTraders = ["logot1", "logot2","logot3", "logot4","logot5", "logot6","logot7", "logot8","logot9", "logot10","logot11", "logot12","logot13", "logot14","logot15", "logot16","logot17", "logot18","logot19","logot20", "logot21","logot22", "logot23","logot24"]



const Tiles = () => {
  const base = useSelector((state) => state.users.base)
  const dragon = useSelector((state) => state.users.dragon)
  const traders = useSelector((state) => state.users.traders)

  const [tiles, setTiles] = useState(true)

  function resetData() {
    logoBase.map((logo) => {
      return localStorage.removeItem(logo)
    })
    logoDragon.map((logo) => {
      localStorage.removeItem(logo)
    })
    logoVulcan.map((logo) => {
      localStorage.removeItem(logo)
    })
    logoPortal.map((logo) => {
      localStorage.removeItem(logo)
    })
    logoPrincess.map((logo) => {
      localStorage.removeItem(logo)
    })
    logoTraders.map((logo) => {
      localStorage.removeItem(logo)
    })
    setTiles(!tiles)
  }

  return (
    <div>
       <CheckBox/>
       <div className='reset'>
        <Button value="small" id='button__base' onClick={resetData}>Restart</Button>
       </div>
        {!base && !dragon && !traders && (
          <div>
            <p className='title__dragon'>Choose one of the Games</p>
          </div>
        )}
        {tiles && base && (
          <div>
            <p className='title__dragon'>Basic Set</p>
            <Base logo={logoBase} data={dataBase}/>
          </div>
        )}      
        {!tiles && base && (
          <div>
            <p className='title__dragon'>Basic Set</p>
            <Base logo={logoBase} data={dataBase}/>
          </div>
        )}
        {!tiles && dragon && (
            <div>
              <p className='title__dragon'>Dragon</p>
              <Base logo={logoDragon} data={dataDragon}/>
              <p className='title__dragon'>Vulcan</p>
              <Base logo={logoVulcan} data={dataVulcan}/>
              <p className='title__dragon'>Magic Portal</p>
              <Base logo={logoPortal} data={dataPortal}/>
              <p className='title__dragon'>Princess</p>
              <Base logo={logoPrincess} data={dataPrincess}/>
            </div>
        )}
        {tiles && dragon && (
            <div>
              <p className='title__dragon'>Dragon</p>
              <Base logo={logoDragon} data={dataDragon}/>
              <p className='title__dragon'>Vulcan</p>
              <Base logo={logoVulcan} data={dataVulcan}/>
              <p className='title__dragon'>Magic Portal</p>
              <Base logo={logoPortal} data={dataPortal}/>
              <p className='title__dragon'>Princess</p>
              <Base logo={logoPrincess} data={dataPrincess}/>
            </div>
        )}
        {!tiles && traders && (
          <div>
            <p className='title__dragon'>Traders</p>
            <Base logo={logoTraders} data={dataTraders}/>
          </div>
        )}  
        {tiles && traders && (
          <div>
            <p className='title__dragon'>Traders</p>
            <Base logo={logoTraders} data={dataTraders}/>
          </div>
        )}  
    </div>
  )
}

export default Tiles
