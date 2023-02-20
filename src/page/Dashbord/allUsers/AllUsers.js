import React from 'react';
import { useQuery } from 'react-query';

const AllUsers = () => {

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users`)
            const data = await res.json()
            // console.log(data)
            return data;
        }
    })

    return (
        <div>
            <h2 className="text-3xl">All Users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id} className="hover">
                            <th>{i + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                             
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;