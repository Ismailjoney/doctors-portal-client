import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppionmentsOptions from './AppionmentsOptions';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppionments = ({ selectedDate }) => {
    const [appionmentsOptions, setAppionmntsOptions] = useState([])//appionments data
    const [treatment, setTreatment] = useState(null)

    //appionments options slote:
    useEffect(() => {
        fetch('appionment.json')
            .then(res => res.json())
            .then(data => setAppionmntsOptions(data))
    }, [])
    return (
        <section className='mt-2 my-28'>
            <p className='text-center text-primary font-bold'> You have Selected: {format(selectedDate, 'PPPP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appionmentsOptions.map(options => <AppionmentsOptions
                        key={options._id}
                        options={options}
                        setTreatment={setTreatment}//state decleare kore props akare pathano hoyece
                    ></AppionmentsOptions>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    treatment={treatment}//treatment hocce appionments options
                    selectedDate={selectedDate}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppionments;