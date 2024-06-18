import React from 'react';
import './styles/userCard.css'

const UserCard = ({user,deleteUser,setUpdate,setIsShow}) => {

    const handleDelete = () => {
        deleteUser('/users',user.id); 
    }

    const handleEdit = () => {
        setUpdate(user);
        setIsShow(true);
    }
   
  //console.log(user);
  //console.log(deleteUser);
  return (
    <article className='usercard'> 
        <h2 className='usercard__name'>{user.first_name} {user.last_name} </h2>
        <hr/>
        <ul className='usercard__list'>
            <li className='usercard__item'><span>Email: </span><span>{user.email}</span></li>
            <li className='usercard__item'><span>Birthday</span><span>{user.birthday}</span></li>
        </ul>
        <hr/>
        <div className='usercard__buttons'> 
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleEdit}>Edit</button>
        </div>

    </article>
  )
}

export default UserCard
