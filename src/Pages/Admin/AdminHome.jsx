import React from 'react'
import Breadcrum from '../../Components/Breadcrum'
import AdminSidebar from './AdminSidebar'

export default function AdminHome() {
    return (
        <>
            <Breadcrum title="Admin" />
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-3">
                        <AdminSidebar/>
                    </div>
                    <div className="col-md-9">
                        <h5 className='border p-2 test-center'>Admin</h5>
                        <table className='table'>
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <td>Pranav Chachra</td>
                                </tr>
                                <tr>
                                    <th>User Name</th>
                                    <td>pranav</td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td>pranavchachra1702@gmail.com</td>
                                </tr>
                                <tr>
                                    <th>Phone</th>
                                    <td>9412917020</td>
                                </tr>
                                <tr>
                                    <th>Role</th>
                                    <td>Super Admin</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
