import React, { useEffect } from 'react';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { provinceActions, regencyActions, districtActions, villageActions } from '../../store';
import axios from 'axios';

const TestSelect = () => {
    const dispatch = useDispatch();
    const provinces = useSelector(state => state.province.data)
    const selectedProvince = useSelector(state => state.province.selected)
    const regencies = useSelector(state => state.regency.data)
    const selectedRegency = useSelector(state => state.regency.selected)
    const districts = useSelector(state => state.district.data)
    const selectedDistrict = useSelector(state => state.district.selected)
    const villages = useSelector(state => state.village.data)
    const selectedVillage = useSelector(state => state.village.selected)

    useEffect(() => {
        getProvinces();
    }, []);

    useEffect(()=>{
        getRegencies(selectedProvince)
        dispatch(regencyActions.reset())
        dispatch(districtActions.reset())
        dispatch(villageActions.reset())
    }, [selectedProvince])

    useEffect(()=>{
        getDistricts(selectedRegency)
        dispatch(districtActions.reset())
        dispatch(villageActions.reset())
    }, [selectedRegency])

    useEffect(()=>{
        getVillages(selectedDistrict)
        dispatch(villageActions.reset())
    }, [selectedDistrict])

    const getProvinces = () => {
        axios.get('https://api.kerjoo.com/api/v1/reference/provinces')
        .then(function (response) {
            dispatch(provinceActions.setData(response.data))
        }).catch(function (error) {
            console.log(error);
        })
    }

    const getRegencies = (id) => {
        axios.get(`https://api.kerjoo.com/api/v1/reference/regencies_of/${id}`)
        .then(function (response) {
            dispatch(regencyActions.setData(response.data))
        }).catch(function (error) {
            console.log(error);
        })
    }

    const getDistricts = (id) => {
        axios.get(`https://api.kerjoo.com/api/v1/reference/districts_of/${id}`)
        .then(function (response) {
            dispatch(districtActions.setData(response.data))
        }).catch(function (error) {
            console.log(error);
        })
    }

    const getVillages = (id) => {
        axios.get(`https://api.kerjoo.com/api/v1/reference/villages_of/${id}`)
        .then(function (response) {
            dispatch(villageActions.setData(response.data))
        }).catch(function (error) {
            console.log(error);
        })
    }

    const selectProvinceHandler = (e) => {
        dispatch(provinceActions.setSelected(e.target.value))
    }

    const selectRegencyHandler = (e) => {
        dispatch(regencyActions.setSelected(e.target.value))
    }

    const selectDistrictHandler = (e) => {
        dispatch(districtActions.setSelected(e.target.value))
    }

    const selectVillageHandler = (e) => {
        dispatch(villageActions.setSelected(e.target.value))
    }
    
    return (
        <div className='container mt-5'>
            <div className='row'>
                <p className='m-0'>Pilih Provinsi</p>
                <select className="custom-select mb-3" onChange={(e) => selectProvinceHandler(e)} selected={selectedProvince}>
                    <option value={0}>--pilih provinsi--</option>
                    {
                        provinces.length !== 0 && provinces.map(item => <option key={`prov${item.id}`} value={item.id}>{item.name}</option>)
                    }
                </select>
            </div>
            <div className='row'>
                <p className='m-0'>Pilih Kabupaten/Kota</p>
                <select className="custom-select mb-3" onChange={(e) => selectRegencyHandler(e)} selected={selectedRegency}>
                    <option value={0}>--pilih kab/kota--</option>
                    {
                        regencies.length !== 0 && regencies.map(item => <option key={`reg${item.id}`} value={item.id}>{item.name}</option>)
                    }
                </select>
            </div>
            <div className='row'>
                <p className='m-0'>Pilih Kecamatan</p>
                <select className="custom-select mb-3" onChange={(e) => selectDistrictHandler(e)} selected={selectedDistrict}>
                    <option value={0}>--pilih kecamatan--</option>
                    {
                        districts.length !== 0 && districts.map(item => <option key={`dist${item.id}`} value={item.id}>{item.name}</option>)
                    }
                </select>
            </div>
            <div className='row'>
                <p className='m-0'>Pilih Desa</p>
                <select className="custom-select mb-3" onChange={(e) => selectVillageHandler(e)} selected={selectedVillage}>
                    <option value={0}>--pilih desa--</option>
                    {
                        villages.length !== 0 && villages.map(item => <option key={`vill${item.id}`} value={item.id}>{item.name}</option>)
                    }
                </select>
            </div>
        </div>
    );
}

export default TestSelect;
