import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate }) => {
    //console.log(treatment)
    const { name, slots } = treatment;//treatment hocce appionments options

    const date = format(selectedDate, "PP")
    return (
        <>
            <input type="checkbox" id="Booking-Modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="Booking-Modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form className='mt-8 grid grid-cols-1 gap-3'>
                        <input type="text" disabled value={date} className="input input-bordered w-full" />
                        <select className="select select-bordered w-full  ">
                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        <input className='btn btn-primary' type="button" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;