import { createSlice, configureStore } from '@reduxjs/toolkit';

let provinceState = {
    selected: 0,
    data: []
}

let regencyState = {
    selected: 0,
    data: []
}

let districtState = {
    selected: 0,
    data: []
}

let villageState = {
    selected: 0,
    data: []
}

const provinceSlice = createSlice({
    name: 'province',
    initialState: provinceState,
    reducers: {
        setSelected(state, action) {
            state.selected = action.payload
        },
        setData(state, action) {
            state.data = action.payload
        }
    }
})

const regencySlice = createSlice({
    name: 'regency',
    initialState: regencyState,
    reducers: {
        setSelected(state, action) {
            state.selected = action.payload
        },
        setData(state, action) {
            state.data = action.payload
        }
    }
})

const districtSlice = createSlice({
    name: 'disctrict',
    initialState: districtState,
    reducers: {
        setSelected(state, action) {
            state.selected = action.payload
        },
        setData(state, action) {
            state.data = action.payload
        }
    }
})

const villageSlice = createSlice({
    name: 'village',
    initialState: villageState,
    reducers: {
        setSelected(state, action) {
            state.selected = action.payload
        },
        setData(state, action) {
            state.data = action.payload
        }
    }
})


const store = configureStore({
    reducer: {
        province: provinceSlice.reducer,
        regency: regencySlice.reducer,
        district: districtSlice.reducer,
        village: villageSlice.reducer,
    }
});

export const provinceActions = provinceSlice.actions;
export const regencyActions = regencySlice.actions;
export const districtActions = districtSlice.actions;
export const villageActions = villageSlice.actions;

export default store;