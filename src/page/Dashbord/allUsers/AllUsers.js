import React from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`https://doctors-portal-server-chi-teal.vercel.app/users`)
            const data = await res.json()
            return data;
        }
    })

    const handdleMakeAdmin = id => {
        fetch(`https://doctors-portal-server-chi-teal.vercel.app/users/admin/${id}`,{
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('userToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                toast.success('Admin Added SucessFull')
                refetch()
            }
        })
    }

    return (
        <div>
            <h2 className="text-3xl mb-5 font-bold">All Users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Maake Admin</th>
                            <th>Delete</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id} className="hover">
                            <th>{i + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>

                            <td>{user?.role !== 'admin' && <button onClick={ () => handdleMakeAdmin(user._id)} className='btn btn-accent'>Admin</button>}</td>

                            <td><button className='btn btn-xsm'>Delete</button></td>  
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;