import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthorContext } from '../../../context/ContextProvider';

const MyAppionment = () => {
    const {user} = useContext(AuthorContext)

    const url = `http://localhost:5000/bookings?email=${user?.email}`

    const {data: bookings = []} = useQuery({
        queryKey:['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url)
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
                        </tr>
                    </thead>
                    <tbody>
                      {
                        bookings.map((booked, i) =>   <tr>
                            <th>{i+1}</th>
                            <td>{booked.patient}</td>
                            <td>{booked.treatment}</td>
                            <td>{booked.appionmentDate}</td>
                            <td>{booked.slot}</td>
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