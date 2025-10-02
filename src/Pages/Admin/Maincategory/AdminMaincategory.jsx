import React, { useState } from 'react'
import Breadcrum from '../../../Components/Breadcrum'
import AdminSidebar from './../AdminSidebar'
import { Link } from 'react-router-dom'

export default function AdminMaincategory() {
    return (
        <>
            <Breadcrum title="Admin" />
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-3">
                        <AdminSidebar/>
                    </div>
                    <div className="col-md-9">
                        <h5 className='border p-2 text-center'>Maincategory <Link to='/admin/maincategory/create'><i className='fa fa-plus float-end'></i></Link></h5>
                    </div>
                </div>
            </div>
        </>
    )
}
