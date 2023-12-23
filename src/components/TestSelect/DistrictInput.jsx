import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { districtActions, villageActions } from '../../store';
import axios from 'axios';

const DistrictInput = () => {
    const dispatch = useDispatch();
    const selectedRegency = useSelector(state => state.regency.selected)
    const districts = useSelector(state => state.district.data)
    const selectedDistrict = useSelector(state => state.district.selected)

    useEffect(() => {
        getDistricts(selectedRegency)
        dispatch(districtActions.reset())
        dispatch(villageActions.reset())
    }, [selectedRegency])

    const getDistricts = (id) => {
        axios.get(`https://api.kerjoo.com/api/v1/reference/districts_of/${id}`)
            .then(function (response) {
                dispatch(districtActions.setData(response.data))
            }).catch(function (error) {
                console.log(error);
            })
    }

    const selectDistrictHandler = (e) => {
        dispatch(districtActions.setSelected(e.target.value))
    }

    return (
        <div className='row'>
            <p className='m-0'>Pilih Kecamatan</p>
            <select className="custom-select mb-3" onChange={(e) => selectDistrictHandler(e)} selected={selectedDistrict}>
                <option value={0}>--pilih kecamatan--</option>
                {
                    districts.length !== 0 && districts.map(item => <option key={`dist${item.id}`} value={item.id}>{item.name}</option>)
                }
            </select>
        </div>
    );
}

export default DistrictInput;