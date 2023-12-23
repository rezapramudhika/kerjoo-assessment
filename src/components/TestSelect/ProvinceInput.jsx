import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { provinceActions } from '../../store';
import axios from 'axios';

const ProviceInput = () => {
    const dispatch = useDispatch();
    const provinces = useSelector(state => state.province.data)
    const selectedProvince = useSelector(state => state.province.selected)

    useEffect(() => {
        getProvinces();
    }, []);

    const getProvinces = () => {
        axios.get('https://api.kerjoo.com/api/v1/reference/provinces')
            .then(function (response) {
                dispatch(provinceActions.setData(response.data))
            }).catch(function (error) {
                console.log(error);
            })
    }

    const selectProvinceHandler = (e) => {
        dispatch(provinceActions.setSelected(e.target.value))
    }

    return (
        <div className='row'>
            <p className='m-0'>Pilih Provinsi</p>
            <select className="custom-select mb-3" onChange={(e) => selectProvinceHandler(e)} selected={selectedProvince}>
                <option value={0}>--pilih provinsi--</option>
                {
                    provinces.length !== 0 && provinces.map(item => <option key={`prov${item.id}`} value={item.id}>{item.name}</option>)
                }
            </select>
        </div>
    );
}

export default ProviceInput;