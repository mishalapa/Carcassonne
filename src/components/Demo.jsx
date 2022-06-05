import React, { useEffect, useState } from 'react';
import { Segmented } from 'antd';
import { useNavigate } from 'react-router-dom';
import 'antd/dist/antd.css';

const Demo = () => {
  const [value, setValue] = useState('Menu');
  const navigate = useNavigate()
  useEffect(() => {
    changePage(value)
  }, [value])
  function changePage(value) {
    if(value === 'Scoring') {
      navigate('./scoring')
    } else if(value === 'Tiles for the Game') {
      navigate('./tiles')
    } else {
      navigate('./')
    }
  }
  return <Segmented options={['Menu', 'Tiles for the Game' ,'Scoring']} value={value} onChange={setValue} />;
};

export default Demo;