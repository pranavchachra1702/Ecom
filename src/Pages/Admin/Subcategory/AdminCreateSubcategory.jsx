import React, { useEffect, useState } from 'react'
import Breadcrum from '../../../Components/Breadcrum'
import AdminSidebar from './../AdminSidebar'
import { Link, useNavigate } from 'react-router-dom'
import FormValidator from '../../../Validators/FormValidator'
import ImageValidator from '../../../Validators/ImageValidator'

import { getSubcategory, createSubcategory } from "../../../Redux/ActionCreators/SubcategoryActionCreators"
import { useDispatch, useSelector } from 'react-redux'
export default function AdminCreateSubcategory() {
    // let [SubcategoryStateData, setSubcategoryStateData] = useState([])
    let [data, setData] = useState({
        name: "",
        pic: "",
        status: true
    })
    let [errorMessage, setErrorMessage] = useState({
        name: "Name Field is Mandatory",
        pic: "Pic Field is Mandatory"
    })
    let [show, setShow] = useState(false)

    let SubcategoryStateData = useSelector(state => state.SubcategoryStateData)
    let dispatch = useDispatch()
    let navigate = useNavigate()
    function getInputData(e) {
        let name = e.target.name
        let value = name === "pic" ? "subcategory/" + e.target.files[0].name : e.target.value

        // For a Real Backend:
        // let value = name === "pic" ? e.target.files[0].name : e.target.value

        setErrorMessage(old => {
            return {
                ...old,
                [name]: name === "pic" ? ImageValidator(e) : FormValidator(e)
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
            let item = SubcategoryStateData.find(x => x.name.toLocaleLowerCase() === data.name.toLocaleLowerCase())
            if (item) {
                setShow(true)
                setErrorMessage(old => {
                    return {
                        ...old,
                        'name': 'Sub Category with this name already exists'
                    }
                })
            }
            else {
                let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/subcategory`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({ ...data })
                })

                response = await response.json()
                if (response)
                    navigate("/admin/subcategory")
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
            let item = SubcategoryStateData.find(x => x.name.toLocaleLowerCase() === data.name.toLocaleLowerCase())
            if (item) {
                setShow(true)
                setErrorMessage(old => {
                    return {
                        ...old,
                        'name': 'Sub Category with this name already exists'
                    }
                })
            }
            else {
                dispatch(createSubcategory({ ...data }))
                
                // let formData = new FormData()
                // formData.append("name", data.name)
                // formData.append("pic", data.pic)
                // formData.append("status", data.status)
                // dispatch(createSubcategory(formData))


                navigate("/admin/subcategory")
            }
        }
    }
    /*
        useEffect(() => {
            (async () => {
                let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/Subcategory`, {
                    method: "GET",
                    headers: {
                        "content-type": "application/json"
                    }
                })
    
                response = await response.json()
                setSubcategoryStateData(response)
            })()
        }, [])
        */

    useEffect(() => {
        (() => {
            dispatch(getSubcategory())
        })()
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
                        <h5 className='border p-2 text-center'>Create Subcategory <Link to='/admin/subcategory'><i className='fa fa-arrow-left float-end'></i></Link></h5>
                        <form onSubmit={postData}>
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <label>Name*</label>
                                    <input type="text" name="name" onChange={getInputData} placeholder='Name' className={`${show && errorMessage.name ? 'border-danger' : ''} form-control`} />
                                    {show && errorMessage.name ? <p className='text-danger'>{errorMessage.name}</p> : null}
                                </div>
                                <div className="col-lg-6 mb-3">
                                    <label>Pic*</label>
                                    <input type="file" name="pic" onChange={getInputData} className={`${show && errorMessage.pic ? 'border-danger' : ''} form-control`} />
                                    {show && errorMessage.pic ? <p className='text-danger'>{errorMessage.pic}</p> : null}
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
