import React from 'react';
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';




const AppionmentBanner = ({selectedDate, setSelectedDate }) => {
//note: children akno kicu sibblig a share korar jorno simple way hisebe left up use kora hoi mane ak lavel upore. akhaneo tai kora hoyece -- {selectedDate, setSelectedDate } -- prantes (Appionments.js) a decleare kora hoyece and props akare sob jaigai pathano hoyece
    return (
        <header className='mt-20 my-20'>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='mr-6 sm:w-full'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>

        </header>
    );
};

export default AppionmentBanner;