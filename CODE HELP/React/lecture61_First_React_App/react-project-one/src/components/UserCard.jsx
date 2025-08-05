import React from 'react'
import './UserCard.css'
import pic from '../assets/react.svg'

const UserCard = (props) => {
  return (
    <div className='user-container'>
      <p id='title'>{props.name}</p>
      <img id='user-image' src={pic} alt="Image"></img>
      <p id='user-desc'>{props.description}</p>
    </div>
  )
}

export default UserCard
