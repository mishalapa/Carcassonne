import React from 'react'
import BaseCarts from './BaseCarts'

const Base = ({logo, data}) => {
  return (
    <div className='carts'>
        {logo.map((point) => 
          <BaseCarts
            key={point}
            data={data}
            point={point}
          />
          )}
        </div>
  )
}

export default Base