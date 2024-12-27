import React, { useEffect, useState } from 'react';
import CalculatorRow from './CalculatorRow';

const EnergyCalculator = () => {
    const [totalSumLoad, setTotalSumLoad] = useState(0);

    const calculatorItems = [
        { title: 'Bulb', options: [ 5, 7, 9, 12] },
        { title: 'Ceiling Fan', options: [ 30, 50, 70] },
        { title: 'Table Fan', options: [ 20, 25, 30] },
        { title: 'TV', options: [ 50, 100, 150] },
        { title: 'Air Conditioner', options: [ 1000, 1500, 2000] },
        { title: 'Washing Machine', options: [ 300, 500, 800] },
        { title: 'Water Pump', options: [ 250, 500, 750] },
        { title: 'Geyser', options: [ 1000, 1500, 2000] },
        { title: 'Heater', options: [ 500, 1000, 1500] },
        { title: 'Refrigerator', options: [ 150, 200, 300] },
        { title: 'Electric Iron', options: [ 1000, 1200, 1500] },
        { title: 'Mixer / Grinder', options: [ 300, 500, 800] },
        { title: 'PC / Laptop', options: [ 50, 100, 200] },
        { title: 'Microwave Oven', options: [ 600, 800, 1000] },
        { title: 'Radio', options: [ 10, 15, 20] },
        { title: 'Stove', options: [ 200, 300, 400] },
        { title: 'Cloth Drier', options: [ 2000, 2500, 3000] },
        { title: 'Electric Clock', options: [ 5, 10] },
        { title: 'Cooking Range', options: [ 2000, 2500, 3000] },
        { title: 'Other Appliances', options: [ 100, 200, 300] },
    ];

    // Function to update total load
    const updateTotalLoad = (load) => {
        console.log(load);
        
        setTotalSumLoad(prevTotal => prevTotal + load);
    };

    // Resets the total load to zero when the component mounts
    useEffect(() => {
        setTotalSumLoad(0);
    },[]);

    return (
        <div className='flex flex-col gap-[40px] sm:p-[8%] p-4'>
            <div className='text-[18px] font-[600] text-[--darkGreyColor] '>
                <p>Greener Pakistan has developed an Energy Load Calculator to help you estimate your power backup needs easily.</p>
            </div>
            <div className='flex gap-3 justify-between py-[5px] sm:px-[30px] px-3 rounded-[30px] bg-[--secondaryColor]'>
                <div className='flex items-center sm:w-[200px] w-[140px] text-white sm:text-[18px] text-[14px] h-[50px] font-[400]'>Appliances</div>
                <div className='flex items-center w-[100px] sm:w-[200px] text-white sm:text-[18px] text-[14px] h-[50px] font-[400]'>Units/W</div>
                <div className='flex items-center w-[100px] sm:w-[200px] text-white sm:text-[18px] text-[14px] h-[50px] font-[400]'>Count</div>
                <div className='flex items-center sm:w-[150px] w-[50px] text-white sm:text-[18px] text-[14px] h-[50px] font-[400]'>Load</div>
            </div>

            <div className='flex flex-col gap-[10px]'>
                {calculatorItems.map((item, index) => (
                    <CalculatorRow 
                        title={item.title} 
                        key={index} 
                        updateTotalLoad={updateTotalLoad} 
                        options={item.options} // Pass the unique options for each appliance
                    />
                ))}
                <div className='flex pt-[10px] px-[30px] rounded-[30px] bg-[--secondaryColor] text-white text-center justify-center items-center h-[50px] text-[20px] font-[400]'>
                    Total Load = {totalSumLoad} W
                </div>
            </div>
        </div>
    );
};

export default EnergyCalculator;
