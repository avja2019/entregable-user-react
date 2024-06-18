import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './styles/useForm.css';


const UserForm = ({createUser,update,updateUser,setUpdate,isShow,setIsShow}) => {

    const {handleSubmit, register, reset} = useForm();
    
    useEffect(() => {
      reset(update);
    }, [update]);
    
    const submit = (data) => {
        if (update){
            updateUser('/users', update.id, data);
            setUpdate();
        } else {
            createUser('/users', data);
        }
        
        reset({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            birthday: '',
        });
        setIsShow(false);
    }

    const handleClose = () => {
        reset({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            birthday: '',
        });
        setIsShow(false);
        setUpdate();
    }

  return (
    <div className={`userform ${isShow && 'active'}`} >
      <form className='userform__form' onSubmit={handleSubmit(submit)}>
        <div className='userform__header'>
            <h2 className='userform__name'>
                {
                  update ? 
                     'Update User' 
                     :
                     'New User'
                }
            </h2>
            <button onClick={handleClose} className='userform__close' type='button'>X</button>
        </div>
        <div className='userform__item'>
            <label htmlFor='first_name'>First name </label>
            <input {...register('first_name')} id='first_name' type="text" />
        </div>
        <div className='userform__item'>
            <label htmlFor='last_name'>Last name</label>
            <input {...register('last_name')} id='last_name' type="text" />
        </div>
        <div className='userform__item'> 
            <label htmlFor='email'>Email</label>
            <input {...register('email')} id='email' type="email" />
        </div>
        <div className='userform__item'>
            <label htmlFor='password'>Password</label>
            <input {...register('password')} id='password' type="password" />
        </div>
        <div className='userform__item'>
            <label htmlFor='birthday'>Birthday</label>
            <input {...register('birthday')} id='birthday' type="date" />
        </div>
        <button className='userform__btn'>
                {
                  update ? 
                     'Update User' 
                     :
                     'Add new User'
                }
            
            </button>
      </form>
    </div>
  )
}

export default UserForm
