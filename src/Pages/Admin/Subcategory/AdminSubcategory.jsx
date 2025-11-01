import React, { useEffect } from 'react'


import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import 'datatables.net';
import { Link } from 'react-router-dom'


import Breadcrum from '../../../Components/Breadcrum'
import AdminSidebar from './../AdminSidebar'

import { deleteSubcategory, getSubcategory } from "../../../Redux/ActionCreators/SubcategoryActionCreators"
import { useDispatch, useSelector } from 'react-redux';

export default function AdminSubcategory() {
    // let [SubcategoryStateData, setSubcategoryStateData] = useState([])
    let SubcategoryStateData = useSelector(state => state.SubcategoryStateData)
    let dispatch = useDispatch()


    // async function deleteRecord(id) {
    //     if (window.confirm("Are you sure to delete that record?")) {
    //         let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/subcategory/${id}`, {
    //             method: "DELETE",
    //             headers: {
    //                 "content-type": "application/json"
    //             }
    //         })

    //         response = await response.json()
    //         getAPIData()
    //     }
    // }
    
    function deleteRecord(id) {
        if (window.confirm("Are you sure to delete that record: ")) {
            dispatch(deleteSubcategory({ id: id }))
            getAPIData()
        }
    }
    // async function getAPIData() {
    //     let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/subcategory`, {
    //         method: "GET",
    //         headers: {
    //             "content-type": "application/json"
    //         }
    //     })

    //     response = await response.json()
    //     setSubcategoryStateData(response)
    //     let time = setTimeout(() => {
    //         $('#DataTable').DataTable()
    //     }, 500)
    //     return time
    // }

    function getAPIData() {
        dispatch(getSubcategory())
        let time = setTimeout(() => {
            $('#DataTable').DataTable()
        }, 500)
        return time
    }

    useEffect(() => {
        let time = getAPIData()
        return () => clearTimeout(time)
    }, [SubcategoryStateData.length])

    return (
        <>
            <Breadcrum title="Admin" />
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-3">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='border p-2 text-center'>Subcategory <Link to='/admin/subcategory/create'><i className='fa fa-plus float-end'></i></Link></h5>
                        <table id='DataTable' className='table table-bordered table-striped'>
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
                                    SubcategoryStateData.map(item => {
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
                                            <td><Link className="btn btn-primary" to={`/admin/subcategory/update/${item.id}`}><i className='fa fa-edit'></i></Link></td>
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
