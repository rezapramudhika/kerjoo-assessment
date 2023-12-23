import React from 'react';
import './index.css';

const TestFlex = () => {
    return (
        <div className='container mt-5'>
            <div className='d-flex flex-column flex-sm-column flex-md-column flex-lg-row' >
                <div className='d-flex flex-row'>
                    <button type="button" className="btn btn-primary">Tambah</button>
                    <button type="button" className="btn btn-primary">Import</button>
                    <button type="button" className="btn btn-primary">Export</button>
                </div>
                <div className='d-flex flex-row flex-grow-1 flex-wrap flex-md-nowrap flex-lg-nowrap'>
                    <input type="text" className="form-control" placeholder="Search"></input>
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                            Tahun
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">2020</a>
                            <a className="dropdown-item" href="#">2021</a>
                            <a className="dropdown-item" href="#">2022</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default TestFlex;