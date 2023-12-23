import React, { useEffect, useState } from 'react';
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
        dispatch(regencyActions.setData([]))
        dispatch(districtActions.setData([]))
        dispatch(villageActions.setData([]))
    }, [selectedProvince])

    useEffect(()=>{
        getDistricts(selectedRegency)
        dispatch(districtActions.setData([]))
        dispatch(villageActions.setData([]))
    }, [selectedRegency])

    useEffect(()=>{
        getVillages(selectedDistrict)
        dispatch(villageActions.setData([]))
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
                <select class="custom-select mb-3" onChange={(e) => selectProvinceHandler(e)}>
                    <option selected>--pilih provinsi--</option>
                    {
                        provinces.length !== 0 && provinces.map(item => <option value={item.id}>{item.name}</option>)
                    }
                </select>
            </div>
            <div className='row'>
                <p className='m-0'>Pilih Kabupaten/Kota</p>
                <select class="custom-select mb-3" onChange={(e) => selectRegencyHandler(e)}>
                    <option selected>--pilih kab/kota--</option>
                    {
                        regencies.length !== 0 && regencies.map(item => <option value={item.id}>{item.name}</option>)
                    }
                </select>
            </div>
            <div className='row'>
                <p className='m-0'>Pilih Kecamatan</p>
                <select class="custom-select mb-3" onChange={(e) => selectDistrictHandler(e)}>
                    <option selected>--pilih kecamatan--</option>
                    {
                        districts.length !== 0 && districts.map(item => <option value={item.id}>{item.name}</option>)
                    }
                </select>
            </div>
            <div className='row'>
                <p className='m-0'>Pilih Desa</p>
                <select class="custom-select mb-3" onChange={(e) => selectVillageHandler(e)}>
                    <option selected>--pilih desa--</option>
                    {
                        villages.length !== 0 && villages.map(item => <option value={item.id}>{item.name}</option>)
                    }
                </select>
            </div>
        </div>
    );
}

export default TestSelect;
