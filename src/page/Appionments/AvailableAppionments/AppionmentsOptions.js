import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const AppionmentsOptions = ({ options, setTreatment }) => {
    const { name, slots } = options
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl text-secondary font-bold text-center">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <label
                        disabled={slots.length === 0}
                        htmlFor="Booking-Modal"
                        className="btn btn-accent"
                        onClick={() => setTreatment(options)}
                        > Book Appionment</label>
                    {/* click korle options gula k setTreatment namok state a set kora hoyece */}
                </div>
            </div>
        </div>
    );
};

export default AppionmentsOptions;