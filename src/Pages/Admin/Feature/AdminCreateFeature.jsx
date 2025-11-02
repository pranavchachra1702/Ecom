import React, { useEffect, useState } from 'react'
import Breadcrum from '../../../Components/Breadcrum'
import AdminSidebar from './../AdminSidebar'
import { Link, useNavigate } from 'react-router-dom'
import FormValidator from '../../../Validators/FormValidator'
import ImageValidator from '../../../Validators/ImageValidator'

import { getFeature, createFeature } from "../../../Redux/ActionCreators/FeatureActionCreators"
import { useDispatch, useSelector } from 'react-redux'
export default function AdminCreateFeature() {
    // let [FeatureStateData, setFeatureStateData] = useState([])
    let [data, setData] = useState({
        name: "",
        icon: "",
        shortDescription: "",
        status: true
    })
    let [errorMessage, setErrorMessage] = useState({
        name: "Name Field is Mandatory",
        icon: "Icon Field is Mandatory",
        shortDescription: "Short Description Field is Mandatory",
    })
    let [show, setShow] = useState(false)

    let FeatureStateData = useSelector(state => state.FeatureStateData)
    let dispatch = useDispatch()
    let navigate = useNavigate()
    function getInputData(e) {
        // let name = e.target.name
        // let value = name === "pic" ? "feature/" + e.target.files[0].name : e.target.value

        let {name, value} = e.target

        // For a Real Backend:
        // let value = name === "pic" ? e.target.files[0].name : e.target.value

        setErrorMessage(old => {
            return {
                ...old,
                [name]: FormValidator(e)
            }
        })

        setData(old => {
            return {
                ...old,
                [name]: name === "status" ? (value === "1" ? true : false) : value
            }
        })
    }
    /*
    async function postData(e) {
        e.preventDefault()
        let error = Object.values(errorMessage).find(x => x !== "")

        if (error)
            setShow(true)
        else {
            let item = FeatureStateData.find(x => x.name.toLocaleLowerCase() === data.name.toLocaleLowerCase())
            if (item) {
                setShow(true)
                setErrorMessage(old => {
                    return {
                        ...old,
                        'name': 'Main Category with this name already exists'
                    }
                })
            }
            else {
                let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/Feature`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({ ...data })
                })

                response = await response.json()
                if (response)
                    navigate("/admin/Feature")
                else
                    alert("Something went wrong")
            }
        }
    }
    */

    function postData(e) {
        e.preventDefault()
        let error = Object.values(errorMessage).find(x => x !== "")

        if (error)
            setShow(true)
        else {
            let item = FeatureStateData.find(x => x.name.toLocaleLowerCase() === data.name.toLocaleLowerCase())
            if (item) {
                setShow(true)
                setErrorMessage(old => {
                    return {
                        ...old,
                        'name': 'Main Category with this name already exists'
                    }
                })
            }
            else {
                dispatch(createFeature({ ...data }))
                
                // let formData = new FormData()
                // formData.append("name", data.name)
                // formData.append("icon", data.icon)
                // formData.append("shortDescription", data.shortDescription)
                // formData.append("status", data.status)
                // dispatch(createFeature(formData))


                navigate("/admin/feature")
            }
        }
    }
    /*
        useEffect(() => {
            (async () => {
                let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/Feature`, {
                    method: "GET",
                    headers: {
                        "content-type": "application/json"
                    }
                })
    
                response = await response.json()
                setFeatureStateData(response)
            })()
        }, [])
        */

    useEffect(() => {
        (() => {
            dispatch(getFeature())
        })()
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
                        <h5 className='border p-2 text-center'>Create Feature<Link to='/admin/feature'><i className='fa fa-arrow-left float-end'></i></Link></h5>
                        <form onSubmit={postData}>
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <label>Name*</label>
                                    <input type="text" name="name" onChange={getInputData} placeholder='Name' className={`${show & errorMessage.name ? 'border-danger' : ''} form-control`} />
                                    {show && errorMessage.name ? <p className='text-danger'>{errorMessage.name}</p> : null}
                                </div>
                                <div className="col-12 mb-3">
                                    <label>Short Description*</label>
                                    <textarea type="text" name="shortDescription" onChange={getInputData} placeholder='Description' rows={3} className={`${show & errorMessage.shortDescription ? 'border-danger' : ''} form-control`}></textarea>
                                    {show && errorMessage.shortDescription ? <p className='text-danger'>{errorMessage.shortDescription}</p> : null}
                                </div>
                                <div className="col-lg-6 mb-3">
                                    <label>Icon*</label>
                                    <input type="text" name="icon" onChange={getInputData} placeholder='e.g <i class="fab-fa-list"></i>' className={`${show & errorMessage.icon ? 'border-danger' : ''} form-control`} />
                                    {show && errorMessage.icon ? <p className='text-danger'>{errorMessage.icon}</p> : null}
                                </div>
                                <div className="col-lg-6 mb-3">
                                    <label>Status*</label>
                                    <select name="status" onChange={getInputData} className='form-select'>
                                        <option value="1">Active</option>
                                        <option value="0">Inactive</option>
                                    </select>
                                </div>
                                <div className="col-12 mb-3">
                                    <button type='submit' className='btn btn-primary w-100'>Create</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
