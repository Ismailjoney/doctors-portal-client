import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();


    const { data: Specialtys = [], isLoading } = useQuery({
        querykey: ['appionmentsspecialty'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appionmentsspecialty`)
            const data = await res.json()
            return data;
        }
    })


    const handdleAddADoctor = data => {
        console.log(data)
    }


    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='w-96 p-7'>
            <h2 className="text-3xl mb-5 font-bold">Add A Doctor</h2>

            <form onSubmit={handleSubmit(handdleAddADoctor)}>
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
                    <label className="label"> <span className="label-text">Specialty</span></label>
                    <select className="select select-success w-full max-w-xs">
                        {
                            Specialtys.map(Specialty => <option
                                key={Specialty._id}
                                value={Specialty.name}
                            >{Specialty.name}</option>
                            )
                        }

                    </select>

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input -m-1 w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                {/* <div>
                        {
                            singupError && <p className='text-red-600'>{singupError}</p>
                        }
                    </div> */}
                <input className='btn btn-accent w-full mt-4 font-bold' value="Add Doctor" type="submit" />
            </form>

        </div>
    );
};

export default AddDoctor;