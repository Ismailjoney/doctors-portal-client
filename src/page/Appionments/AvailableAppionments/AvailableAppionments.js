import { format } from 'date-fns/esm';
import React, {   useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading.js';
import AppionmentsOptions from '../AvailableAppionments/AppionmentsOptions.js'
import BookingModal from '../BookingModal/BookingModal.js';

const AvailableAppionments = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP')

    //useQuery object 2 ta props nei frist queryKey(cassing er jorno unique key use kora hoi) 2nd queryFn

     //Option 1 --> data load backend use async await
        const {data:appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey : ['appionmentoptions'],
        queryFn :async () =>{
            const res = await fetch(`https://doctors-portal-server-chi-teal.vercel.app/appionmentoptions?date=${date}`)
            const data = await res.json();
            return data;
        }
    })

    //Option 2 --> data load backend use fetch and .then

    // const {data:appointmentOptions = [] } = useQuery({
    //     queryKey : ['appionmentoptions'],
    //     queryFn : () => 
    //          fetch('https://doctors-portal-server-chi-teal.vercel.app/appionmentoptions')
    //          .then =res.json()
    // })


    if(isLoading){
        return <Loading></Loading>
    }
   


    return (
        <section className='my-16'>
            <p className='text-center text-secondary font-bold'>Available Appointments on {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appointmentOptions.map(options => <AppionmentsOptions
                        key={options._id}
                        options={options}
                        setTreatment={setTreatment}
                    ></AppionmentsOptions>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></BookingModal>
            }

        </section>
    );
};

export default AvailableAppionments;

 

 
//modal akta central jaigai banalam sudhu modal banalei hbe na seta website a use korte hbe tai seta AvailableAppionments data pathanor subihar jorno prants a  a use korlam 
//modal a data dekhanor jorno parent component a (AvailableAppionments.js) akta state  set korlam abong seta props hisebe AppionmentsOptions.js componet a pathalam ---> setTreatment={setTreatment}
// abong seta onClick er maddome map kora option ta pathai dilam ----> onClick={() => setTreatment(options) orthat btn a click korle option gula (name,slots) setTreatment a set hye jabe.
// setTreatment a set hwya mane --> treatment j kotha option same kotha tai treatment k BookingModal a pathai dilam abong data duita (slots,name)  dekhalam