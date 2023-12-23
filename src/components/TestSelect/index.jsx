import React from 'react';
import './index.css';
import ProviceInput from './ProvinceInput';
import RegencyInput from './RegencyInput';
import DistrictInput from './DistrictInput';
import VillageInput from './VillageInput';

const TestSelect = () => {
    return (
        <div className='container mt-5'>
            {
                <ProviceInput />
            }
            {
                <RegencyInput />
            }
            {
                <DistrictInput />
            }
            {
                <VillageInput />
            }
        </div>
    );
}

export default TestSelect;
