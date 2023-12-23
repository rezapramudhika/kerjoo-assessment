import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { regencyActions, districtActions, villageActions } from '../../store';
import axios from 'axios';

const RegencyInput = () => {
    const dispatch = useDispatch();
    const selectedProvince = useSelector(state => state.province.selected)
    const regencies = useSelector(state => state.regency.data);
    const selectedRegency = useSelector(state => state.regency.selected);

    useEffect(() => {
        getRegencies(selectedProvince)
        dispatch(regencyActions.reset())
        dispatch(districtActions.reset())
        dispatch(villageActions.reset())
    }, [selectedProvince])

    const getRegencies = (id) => {
        axios.get(`https://api.kerjoo.com/api/v1/reference/regencies_of/${id}`)
            .then(function (response) {
                dispatch(regencyActions.setData(response.data))
            }).catch(function (error) {
                console.log(error);
            })
    }

    const selectRegencyHandler = (e) => {
        dispatch(regencyActions.setSelected(e.target.value))
    }

    return (
        <div className='row'>
            <p className='m-0'>Pilih Kabupaten/Kota</p>
            <select className="custom-select mb-3" onChange={(e) => selectRegencyHandler(e)} selected={selectedRegency}>
                <option value={0}>--pilih kab/kota--</option>
                {
                    regencies.length !== 0 && regencies.map(item => <option key={`reg${item.id}`} value={item.id}>{item.name}</option>)
                }
            </select>
        </div>
    );
}

export default RegencyInput;