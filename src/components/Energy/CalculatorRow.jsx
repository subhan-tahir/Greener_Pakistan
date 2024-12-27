import React, { useEffect, useState } from 'react';

const CalculatorRow = ({ title, updateTotalLoad, options }) => {
    // const [selectValue, setSelectValue] = useState(0); // Value for the select field
    const [inputValue, setInputValue] = useState(0); // Stores the value in watts
    const [countValue, setCountValue] = useState(0); // Number of items
    const [showLoad, setShowLoad] = useState(0); // Display load in watts
    const [previousLoad, setPreviousLoad] = useState(0); // Track previous load


    const handleSelectChange = (e) => {
        const selectedValue = Number(e.target.value);
        setInputValue(selectedValue);
    };

    const handleInputChange = (e) => {
        const value = Number(e.target.value);
        setInputValue(value);
    }

    const handleCountChange = (e) => {
        const count = Number(e.target.value);
        setCountValue(count);
    };

    useEffect(() => {
        // Calculate the new load
        const calculatedLoad = inputValue * countValue;

        // Update the total load in the parent component by the difference between the new and previous load
        updateTotalLoad(calculatedLoad - previousLoad);

        // Update the previous load to the new load
        setPreviousLoad(calculatedLoad);

        // Update the display load
        setShowLoad(calculatedLoad);
    }, [inputValue, countValue, updateTotalLoad, previousLoad]);

    return (
        <div className='flex justify-between py-[7px] sm:px-[30px] px-3 rounded-[30px] bg-[--lightBackgroundColor]'>
            <div className='flex items-center sm:w-[200px] w-[100px] text-black sm:text-[16px] text-[12px] h-[30px] font-[400]'>
                {title}
            </div>
            <div className='flex items-center sm:w-[200px] w-[100px] text-black text-[16px] h-[30px] font-[400]'>
                <select
                    value={inputValue}
                    onChange={handleSelectChange}
                    className='sm:w-[100px] w-[50px] h-[30px]'
                >
                    <option value={inputValue}>{inputValue}</option>
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option} W
                        </option>
                    ))}
                </select>
                <input
                    className='w-[100px] h-[30px] ml-4'
                    type="number"
                    min="0"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </div>
            <div className='flex items-center sm:w-[200px] w-[50px] text-black text-[16px] h-[30px] font-[400]'>
                <input
                    onChange={handleCountChange}
                    className='sm:w-[100px] w-[50px] h-[30px]'
                    type="number"
                    min="0"
                    value={countValue}
                />
            </div>
            <div className='flex items-center w-[50px] sm:w-[150px] text-black sm:text-[16px] text-[12px] h-[30px] font-[400]'>
                {showLoad} W
            </div>
        </div>
    );
};

export default CalculatorRow;
