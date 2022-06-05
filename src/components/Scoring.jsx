import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiFillPlusCircle, AiFillCrown } from "react-icons/ai";
import Player from './Player';
import { addColor, addPlayer } from '../redux/playerSlice';

function Scoring () {
  const color = useSelector((state) => state.users.color)
  const namesPlayer = useSelector((state) => state.users.player)
  const points = useSelector((state) => state.users.point)
  const winner = useSelector((state) => state.users.winner)
  const dispatch = useDispatch()
  const randomNamesPlayer = ['Букашка', 'ЕдиноКот', 'Роботяга', 'Карапуз', 'Колобок', 'Питон', 'Скряга', 'Дровосек',]
  const secondRandomNamesPlayer = ['Трактор', 'Мотылек', 'Конфетка', 'Биткоин', 'Велосипед', 'Заноза', 'Лунтик', 'Поворот',]
  const randomColors = ['green', 'blue', 'red', 'yellow', 'purple', 'orange',]
  const secondRandomColors = ['pink', 'gray', 'olive', 'lavender ', 'golden ', 'silver ']
  const randomColor = Math.floor(Math.random()*randomColors.length);
  const randomUser = Math.floor(Math.random()*randomNamesPlayer.length);

  function addUser() {
    if(!namesPlayer.includes(randomNamesPlayer[randomUser])) {
      dispatch(addPlayer(randomNamesPlayer[randomUser]))
      if(!color.includes(randomColors[randomColor])) {
        dispatch(addColor(randomColors[randomColor]))
        const user = {
          name: randomNamesPlayer[randomUser],
          point: 0,
          color: randomColors[randomColor]
        }
        localStorage.setItem(randomNamesPlayer[randomUser], JSON.stringify(user))
      } else {
        dispatch(addColor(secondRandomColors[randomColor]))
        const user = {
          name: randomNamesPlayer[randomUser],
          point: 0,
          color: secondRandomColors[randomColor]
        }
        localStorage.setItem(randomNamesPlayer[randomUser], JSON.stringify(user))
      }
    } else {
      dispatch(addPlayer(secondRandomNamesPlayer[randomUser]))
      if(!color.includes(randomColors[randomColor])) {
        dispatch(addColor(randomColors[randomColor]))
        const user = {
          name: secondRandomNamesPlayer[randomUser],
          point: 0,
          color: randomColors[randomColor]
        }
        localStorage.setItem(secondRandomNamesPlayer[randomUser], JSON.stringify(user))
      } else {
        dispatch(addColor(secondRandomColors[randomColor]))
        const user = {
          name: secondRandomNamesPlayer[randomUser],
          point: 0,
          color: secondRandomColors[randomColor]
        }
        localStorage.setItem(secondRandomNamesPlayer[randomUser], JSON.stringify(user))
      }
    }
    

  }




  return (
    <div>
      <div className='winer'>
        {namesPlayer.length >=1 &&
          <div className='winer__player'>
            <AiFillCrown className='one'/>
            <p>{points}</p>
            <p>{winner}</p>
          </div>
        }
      </div>
      <AiFillPlusCircle className='plus' onClick={addUser}/>
      {namesPlayer.length > 0 ? (
				namesPlayer.map((userName) => {
					return (
              <Player
              key={userName}
              userName={userName}
              />
          )
				})
			) : (
        <div className='not__player'>
          <p>Add players please</p>
        </div>
			)}
        
    </div>
  )
}

export default Scoring