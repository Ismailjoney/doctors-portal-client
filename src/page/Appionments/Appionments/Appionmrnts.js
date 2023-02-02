import React, { useState } from 'react';
import AppionmentBanner from '../AppionmentBanner';
import AvailableAppionments from '../AvailableAppionments/AvailableAppionments';

const Appionmrnts = () => {
    const[selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <AppionmentBanner
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            ></AppionmentBanner>
            <AvailableAppionments
            selectedDate={selectedDate}
            ></AvailableAppionments>
        </div>
    );
};

export default Appionmrnts;