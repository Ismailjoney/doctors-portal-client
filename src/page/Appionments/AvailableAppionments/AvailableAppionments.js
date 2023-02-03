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