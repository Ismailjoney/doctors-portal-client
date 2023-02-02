import React from 'react';
import { format } from 'date-fns';

const AvailableAppionments = ({selectedDate}) => {
    return (
        <section className='mt-4 my-12'>
            <p className='text-center text-primary font-bold'> You have Selected: {format(selectedDate, 'PPPP')}</p>
        </section>
    );
};

export default AvailableAppionments;