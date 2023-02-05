import { format } from 'date-fns/esm';
import React, { useEffect, useState } from 'react';
import AppionmentsOptions from '../AvailableAppionments/AppionmentsOptions.js'
import BookingModal from '../BookingModal/BookingModal.js';

const AvailableAppionments = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('appionment.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])
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
                ></BookingModal>
            }

        </section>
    );
};

export default AvailableAppionments;

//step - 1;
//fetch kore data load korlam 
// state a set korlam 
// map kore data appionmentsOptions component a pathalam
// appionmentsOptions a datar info single card akare dekhano hoyece UI te abong akta btn set kolam modal open korar jorno --- htmlFor="Booking-Modal" use korlam jeta modal a id hisebe use kora (<BookingModal></BookingModal>) hoyece orthat ai btn a click korle modal open hbe.

//step-2
//modal akta central jaigai banalam sudhu modal banalei hbe na seta website a use korte hbe tai seta AvailableAppionments data pathanor subihar jorno prants a  a use korlam 
//modal a data dekhanor jorno parent component a (AvailableAppionments.js) akta state  set korlam abong seta props hisebe AppionmentsOptions.js componet a pathalam ---> setTreatment={setTreatment}
// abong seta onClick er maddome map kora option ta pathai dilam ----> onClick={() => setTreatment(options) orthat btn a click korle option gula (name,slots) setTreatment a set hye jabe.
// setTreatment a set hwya mane --> treatment j kotha option same kotha tai treatment k BookingModal a pathai dilam abong data duita (slots,name)  dekhalam