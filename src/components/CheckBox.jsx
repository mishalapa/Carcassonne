import { Checkbox } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {  changeBase, changeDragon, changeTraders } from '../redux/playerSlice';
const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Base Game', 'Princess & Dragon', 'Traders & Builders'];
const defaultCheckedList = ['Base Game'];

const CheckBox = () => {
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);


  const dispatch = useDispatch()

  useEffect(() => {
    changeGame()
  }, [checkedList, setCheckedList])

  function changeGame() {
    if(checkedList.includes('Base Game')) {
      dispatch(changeBase(true))
    } else {
      dispatch(changeBase(false))
    }
    if(checkedList.includes('Princess & Dragon')) {
      dispatch(changeDragon(true))
    } else {
      dispatch(changeDragon(false))
    }
    if(checkedList.includes('Traders & Builders')) {
      console.log(checkedList)
      dispatch(changeTraders(true))
    } else {
      dispatch(changeTraders(false))
    }
  }

  const onChange = (list) => {
    console.log(list)
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  return (
    <div className='checkbox'>
      <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
        Check all
      </Checkbox>
      <CheckboxGroup id='aaa' options={plainOptions} value={checkedList} onChange={onChange} />
    </div>
  );
};

export default CheckBox;