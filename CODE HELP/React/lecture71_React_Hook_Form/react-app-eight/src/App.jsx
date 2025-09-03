import { useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form';

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    // API CALL 
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Submitting the form",data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name: </label>
        <input type="text" className={errors.firstName ? 'input-error': ""} {...register('firstName', {required: true, minLength:{value:3, message:'Min length is 3'}, maxLength:{value:6, message:'Max length is 6'}})} />
        {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
      </div>
      <br />
      <div>
        <label>Middle Name: </label>
        <input type="text" {...register('middleName')} />
      </div>
      <br />
      <div>
        <label>Last Name: </label>
        <input type="text" {...register('lastName',{
          pattern: {
            value: /^[A-Za-z]+$/i ,
            message: "Last Name is not as per rule"
          }
        })} />
        {errors.lastName && <p className='error-msg' >{errors.lastName.message}</p>}
      </div>
      <br />
      <input type="submit" disabled={isSubmitting} value={isSubmitting ? "Submitting" : "Submit"}/>
    </form>
  )
}

export default App
