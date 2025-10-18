import React, { useEffect, useState } from 'react'
import Breadcrum from '../../../Components/Breadcrum'
import AdminSidebar from './../AdminSidebar'
import { Link } from 'react-router-dom'

export default function AdminMaincategory() {
    let [MaincategoryStateData, setMaincategoryStateData] = useState([])

    async function deleteRecord(id) {
        if (window.confirm("Are you sure to delete that record?")) {
            let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/maincategory/${id}`, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json"
                }
            })

            response = await response.json()
            getAPIData()
        }
    }
    async function getAPIData() {
        let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/maincategory`, {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        })

        response = await response.json()
        setMaincategoryStateData(response)
    }

    useEffect(() => {
        getAPIData()
    }, [])

    return (
        <>
            <Breadcrum title="Admin" />
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-3">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='border p-2 text-center'>Maincategory <Link to='/admin/maincategory/create'><i className='fa fa-plus float-end'></i></Link></h5>
                        <table className='table table-bordered table-striped'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Pic</th>
                                    <th>Status</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    MaincategoryStateData.map(item => {
                                        return <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>
                                                <Link to={`${import.meta.env.VITE_APP_IMAGE_SERVER}/${item.pic}`}
                                                    target='_blank' rel='noreferrer'>
                                                    <img src={`${import.meta.env.VITE_APP_IMAGE_SERVER}/${item.pic}`} height={80} width={100} alt="" />
                                                </Link>
                                            </td>
                                            <td>{item.status ? "Active" : "Inactive"}</td>
                                            <td><Link className="btn btn-primary" to={`/admin/maincategory/update/${item.id}`}><i className='fa fa-edit'></i></Link></td>
                                            <td><button className="btn btn-danger" onClick={() => deleteRecord(item.id)}><i className='fa fa-trash'></i></button></td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
