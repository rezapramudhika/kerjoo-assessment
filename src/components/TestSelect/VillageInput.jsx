import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { villageActions } from '../../store';
import axios from 'axios';

const VillageInput = () => {
    const dispatch = useDispatch();
    const selectedDistrict = useSelector(state => state.district.selected)
    const villages = useSelector(state => state.village.data)
    const selectedVillage = useSelector(state => state.village.selected)

    useEffect(() => {
        getVillages(selectedDistrict)
        dispatch(villageActions.reset())
    }, [selectedDistrict])

    const getVillages = (id) => {
        axios.get(`https://api.kerjoo.com/api/v1/reference/villages_of/${id}`)
            .then(function (response) {
                dispatch(villageActions.setData(response.data))
            }).catch(function (error) {
                console.log(error);
            })
    }

    const selectVillageHandler = (e) => {
        dispatch(villageActions.setSelected(e.target.value))
    }

    return (
        <div className='row'>
            <p className='m-0'>Pilih Desa</p>
            <select className="custom-select mb-3" onChange={(e) => selectVillageHandler(e)} selected={selectedVillage}>
                <option value={0}>--pilih desa--</option>
                {
                    villages.length !== 0 && villages.map(item => <option key={`vill${item.id}`} value={item.id}>{item.name}</option>)
                }
            </select>
        </div>
    );
}

export default VillageInput;