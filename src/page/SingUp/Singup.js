import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthorContext } from '../../context/ContextProvider';
import useToken from '../../hooks/useToken';


const Singup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthorContext)
    const [singupError, setSingUpError] = useState('')
    
    //user email observer state when user log in
    const[createUserEmail, setcreateUserEmail] = useState('')

    //get jwt token from hooks folder
    //createUserEmail hocce user er email
    //same work login page
    const [token] = useToken(createUserEmail)
    const navigate = useNavigate()

    if(token){
        navigate('/')
    }

    const handdleSingIn = data => {
         
        //akbr error hwar por initialy kno error na thakar jorno
        setSingUpError('')

        createUser(data.email, data.password)
            .then(res => {
                const user = res.user;
                //user name set line 21 - 31
                const userInfo = {
                    displayName: data.name
                }
                 
                updateUser(userInfo)
                    .then(() => {
                        saveUserAccountInfo(data.name, data.email.toLowerCase())
                    })
                    .catch(err => console.Log(err))
                toast("Account create sucessFull")
            })
            .catch(err => {
                console.log(err)
                setSingUpError(err.message)
            })
    }

    //save users account info in my database
    const saveUserAccountInfo = (name,email) => {
        const user = {name, email}
        fetch(`https://doctors-portal-server-chi-teal.vercel.app/users`,{
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            //user database a save howar por token pabe
            setcreateUserEmail(email)
        })
    }


   
    return (
        <div className='h-[600px] w-full flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>SingUp</h2>

                <form onSubmit={handleSubmit(handdleSingIn)}>
                    <div className="form-control w-full max-w-xs">
                        <label htmlFor="name">Name</label>
                        <input id="name" {...register('name', { required: true, maxLength: 30 })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && errors.name.type === "required" && <span className='text-red-600'>This is required</span>}
                        {errors.name && errors.name.type === "maxLength" && <span className='text-red-600'>Max length exceeded</span>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required",
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "Entered value does not match email format"
                                }
                            })}
                            className="input input-bordered w-full max-w-xs" ></input>
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password required",
                                minLength: {
                                    value: 6,
                                    message: "password must be minmum length is 6"
                                },
                                pattern: {
                                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters'
                                }
                            })}
                            className="input input-bordered w-full max-w-xs" ></input>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <div>
                        {
                            singupError && <p className='text-red-600'>{singupError}</p>
                        }
                    </div>
                    <input className='btn btn-accent w-full mt-4' value="Login" type="submit" />
                </form>

                <p>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Singup;