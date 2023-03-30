import { format } from 'date-fns';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthorContext } from '../../../context/ContextProvider';

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
    //console.log(treatment)
    const {  name: treatmentName, slots, price } = treatment;//treatment hocce appionments options
    const date = format(selectedDate, "PP")
    const { user } = useContext(AuthorContext)


    const handleBooking = event => {
        event.preventDefault()

        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
 
        const booking = {
            treatment:  treatmentName,
            patient: name,
            appionmentDate: date,
            slot,
            email,
            phone,
            price,

        }
        //post data
        fetch(`https://doctors-portal-server-chi-teal.vercel.app/bookings`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                
                if (data.acknowledged) {
             //mdl er btn a click korar por jno auto metice cole jai se jorno use kora hoyece
                    setTreatment(null)
                     toast.success('Booking confirmed')
                     refetch()
                }
                else{
                    toast.error(data.message)
                }

            })

 
    }


    return (
        <>
            <input type="checkbox" id="Booking-Modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="Booking-Modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatmentName}</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} className="input w-full input-bordered " />
                        <select name="slot" className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" required />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;