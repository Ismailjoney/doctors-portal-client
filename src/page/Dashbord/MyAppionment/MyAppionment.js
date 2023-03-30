import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { AuthorContext } from '../../../context/ContextProvider';

const MyAppionment = () => {
    const {user} = useContext(AuthorContext)

    const url = `https://doctors-portal-server-chi-teal.vercel.app/bookings?email=${user?.email}`;

    const {data: bookings = []} = useQuery({
        queryKey:['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch( url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('userToken')}`
                }
            })
            const data = await res.json()
            return data;
        }
    })


    return (
        <div>
            <h2 className='text-3xl mb-5 font-bold'>My Appionment</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                       bookings &&
                        bookings?.map((booked, i) =>   <tr key ={booked._id}>
                            <th>{i+1}</th>
                            <td>{booked.patient}</td>
                            <td>{booked.treatment}</td>
                            <td>{booked.appionmentDate}</td>
                            <td>{booked.slot}</td>
                            <td>
                                {
                                     booked.price && !booked.paid &&
                                     <Link to={`/dashbord/payment/${booked._id}`}>
                                        <button className='btn btn-sm btn-primary'>Pay</button>
                                     </Link>
                                }
                                {
                                    booked.price && booked.paid && <span  className='text-primary'>Paid</span>
                                }
                            </td>
                        </tr>
                        )
                      }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppionment;