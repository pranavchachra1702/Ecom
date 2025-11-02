import React, { useEffect } from 'react'


import $ from 'jquery';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import 'datatables.net';
import { Link } from 'react-router-dom'


import Breadcrum from '../../../Components/Breadcrum'
import AdminSidebar from './../AdminSidebar'

import { deleteFeature, getFeature } from "../../../Redux/ActionCreators/FeatureActionCreators"
import { useDispatch, useSelector } from 'react-redux';

export default function AdminFeature() {
    // let [FeatureStateData, setFeatureStateData] = useState([])
    let FeatureStateData = useSelector(state => state.FeatureStateData)
    let dispatch = useDispatch()


    // async function deleteRecord(id) {
    //     if (window.confirm("Are you sure to delete that record?")) {
    //         let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/Feature/${id}`, {
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
            dispatch(deleteFeature({ id: id }))
            getAPIData()
        }
    }
    // async function getAPIData() {
    //     let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/Feature`, {
    //         method: "GET",
    //         headers: {
    //             "content-type": "application/json"
    //         }
    //     })

    //     response = await response.json()
    //     setFeatureStateData(response)
    //     let time = setTimeout(() => {
    //         $('#DataTable').DataTable()
    //     }, 500)
    //     return time
    // }

    function getAPIData() {
        dispatch(getFeature())
        let time = setTimeout(() => {
            $('#DataTable').DataTable()
        }, 500)
        return time
    }

    useEffect(() => {
        let time = getAPIData()
        return () => clearTimeout(time)
    }, [FeatureStateData.length])

    return (
        <>
            <Breadcrum title="Admin" />
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-3">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='border p-2 text-center'>Feature <Link to='/admin/feature/create'><i className='fa fa-plus float-end'></i></Link></h5>
                        <table id='DataTable' className='table table-bordered table-striped'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Icon</th>
                                    <th>Short Description</th>
                                    <th>Status</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    FeatureStateData.map(item => {
                                        console.log(item.icon);
                                        return <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            {/* <td>
                                                <Link to={`${import.meta.env.VITE_APP_IMAGE_SERVER}/${item.pic}`}
                                                    target='_blank' rel='noreferrer'>
                                                    <img src={`${import.meta.env.VITE_APP_IMAGE_SERVER}/${item.pic}`} height={80} width={100} alt="" />
                                                </Link>
                                            </td> */}
                                            
                                            <td><span className='fs-1 text-primary' dangerouslySetInnerHTML={{__html:item.icon}}/></td>
                                            <td>{item.shortDescription}</td>
                                            <td>{item.status ? "Active" : "Inactive"}</td>
                                            <td><Link className="btn btn-primary" to={`/admin/feature/update/${item.id}`}><i className='fa fa-edit'></i></Link></td>
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
