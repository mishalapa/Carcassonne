import React, {  useEffect, useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus, AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { addPoint, addWinner, clearColor, deleteColor, deletePlayer } from '../redux/playerSlice';

const Player = ({userName}) => {
  const namesPlayer = useSelector((state) => state.users.player)
  const points = useSelector((state) => state.users.point)
  const [point, setPoint] = useState(JSON.parse(localStorage.getItem(userName)).point)
  const dispatch = useDispatch()

  function deleteUser() {
    if(namesPlayer.length <= 1) {
      dispatch(addPoint(0))
      dispatch(clearColor())
      dispatch(addWinner('?'))
    }
    zero()
    dispatch(deleteColor(JSON.parse(localStorage.getItem(userName)).color))
    dispatch(deletePlayer(userName))
    localStorage.removeItem(userName)
    let count = 0
    if(namesPlayer.length >= 1) {
      namesPlayer.map((player) => {
        if(JSON.parse(localStorage.getItem(player)) && JSON.parse(localStorage.getItem(player)).point > count) {
          count = JSON.parse(localStorage.getItem(player)).point
        } else {
          count = count
        }
      })
      dispatch(addPoint(count))
      let arr = []
      namesPlayer.map((player) => {
        if(JSON.parse(localStorage.getItem(player)) && JSON.parse(localStorage.getItem(player)).point === count) {
          arr.push(player)
        }
      })
      dispatch(addWinner(arr.join(', ')))
    }
  }

  useEffect(() => {
    setLocal()
  }, [point])

  function setLocal() {
    const obj = JSON.parse(localStorage.getItem(userName))
    obj.point = point
    localStorage.setItem(userName, JSON.stringify(obj))
  }

  function decrement() {
    if(point === 0) {
      return
    }
    if(point  < points ) {
      setPoint(point - 1)
    } else if(point  === points) {
      let arr =[]
      namesPlayer.map((el) => {
        if(JSON.parse((localStorage.getItem(el))).point === point && el !== userName) {
          arr.push(el)
        }
      })
      console.log('arr', arr.length)
      if(arr.length === 0) {
        setPoint(point - 1)
        dispatch(addPoint(point - 1))
        let names = []
        namesPlayer.map((el) => {
          if(JSON.parse((localStorage.getItem(el))).point === point - 1) {
            names.push(el)
          }
        })
        names = names.join(', ') + ', ' + userName
        dispatch(addWinner(names))
      } else {
        arr = arr.join(', ')
        setPoint(point - 1)
        dispatch(addWinner(arr))
      }
    }
  }
  
  function zero() {
    let names = []
        namesPlayer.map((el) => {
          if(JSON.parse((localStorage.getItem(el))).point === points && el !== userName) {
            names.push(el)
          }
        })
        console.log(names)
        names = names.join(', ')
        dispatch(addWinner(names))    
  }

  function increment() {
    if(point + 1 > points ) {
      setPoint(point + 1)
      dispatch(addPoint(point + 1))
      dispatch(addWinner(userName))
    } else if(point + 1 === points) {
      let names = []
        namesPlayer.map((el) => {
          console.log(JSON.parse((localStorage.getItem(el))).point)
          if(JSON.parse((localStorage.getItem(el))).point === points) {
            names.push(el)
          }
        })
        setPoint(point + 1)
        dispatch(addWinner(names.join(', ') + ', ' + userName))
    } else {
      let names = []
        namesPlayer.map((el) => {
          if(JSON.parse((localStorage.getItem(el))).point === point + 1) {
            names.push(el)
          }
        })
      setPoint(point + 1)
      if(names.length > 0) {
      namesPlayer.map((player) => {
        if(JSON.parse(localStorage.getItem(player)) && JSON.parse(localStorage.getItem(player)).point === points) {
          dispatch(addWinner(player))
        }
      })
      }
    }
  }

  function incrementFive() {
    if(point + 5 > points ) {
      setPoint(point + 5)
      dispatch(addPoint(point + 5))
      dispatch(addWinner(userName))
    } else if(point + 5 === points) {
      let names = []
        namesPlayer.map((el) => {
          console.log(JSON.parse((localStorage.getItem(el))).point)
          if(JSON.parse((localStorage.getItem(el))).point === points) {
            names.push(el)
          }
        })
        setPoint(point + 5)
        dispatch(addWinner(names.join(', ') + ', ' + userName))
    }else {
      let names = []
        namesPlayer.map((el) => {
          if(JSON.parse((localStorage.getItem(el))).point === point + 5) {
            names.push(el)
          }
        })
      setPoint(point + 5)
      if(names.length > 0) {
        namesPlayer.map((player) => {
          if(JSON.parse(localStorage.getItem(player)) && JSON.parse(localStorage.getItem(player)).point === points) {
            dispatch(addWinner(player))
          }
        })
        }
    }
  }
  function incrementTen() {
    if(point + 10 > points ) {
      setPoint(point + 10)
      dispatch(addPoint(point + 10))
      dispatch(addWinner(userName))
    } else if(point + 10 === points) {
      let names = []
        namesPlayer.map((el) => {
          console.log(JSON.parse((localStorage.getItem(el))).point)
          if(JSON.parse((localStorage.getItem(el))).point === points) {
            names.push(el)
          }
        })
        setPoint(point + 10)
        dispatch(addWinner(names.join(', ') + ', ' + userName))
    }else {
      let names = []
      namesPlayer.map((el) => {
        if(JSON.parse((localStorage.getItem(el))).point === point + 10) {
          names.push(el)
        }
      })
    setPoint(point + 10)
    if(names.length > 0) {
      namesPlayer.map((player) => {
        if(JSON.parse(localStorage.getItem(player)) && JSON.parse(localStorage.getItem(player)).point === points) {
          dispatch(addWinner(player))
        }
      })
      }
    }
  }

  return (
    <div className={['player'].concat((JSON.parse(localStorage.getItem(userName)).color)).join(' ')}>
      <p>{userName}</p>
      <div className='player__point'>
        <AiOutlineMinus className='change__point' onClick={decrement}>-</AiOutlineMinus>
        <p>{point}</p>
        <AiOutlinePlus className='change__point' onClick={increment}>+</AiOutlinePlus>
        <div className='player__five-point' onClick={incrementFive}>
          <AiOutlinePlus className='change__point' >+</AiOutlinePlus>
          <p>5</p>
        </div>
        <div className='player__ten-point' onClick={incrementTen}>
          <AiOutlinePlus className='change__point' >+</AiOutlinePlus>
          <p>10</p>
        </div>
      </div>
      <AiOutlineDelete className='delete' onClick={deleteUser}/>
    </div>
  )
}

export default Player