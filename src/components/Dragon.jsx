import React from 'react'
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

import BaseCarts from './BaseCarts'


const data = {
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
const logo = ["logo1", "logo2","logo3", "logo4","logo5", "logo6","logo7", "logo8","logo9", "logo10","logo11", "logo12","logo13", "logo14","logo15", "logo16","logo17", "logo18","logo19"]

const Dragon = () => {
  return (
    <div>
      <div className='carts'>
        {logo.map((point) => 
          <BaseCarts
            key={Math.random()}
            data={data}
            point={point}
          />
          )}
      </div>
    </div>
  )
}

export default Dragon
