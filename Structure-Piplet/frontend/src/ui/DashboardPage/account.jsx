import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { BsFileEarmarkPerson } from "react-icons/bs";
import { AddPhoto } from '../../components/icons';
import { RequestDataLogin } from '../../request/userRequest';

export default function AccountRender({ userData }) {

    return (
        <div className="col-12 col-lg-8 mt-5 mt-lg-0">
            <div className="row">
                <div className="col-12">
                    <div className="row align-items-center">
                        <BsFileEarmarkPerson className='col-auto' style={{ color: '#281B1B', fontSize: '23px' }} />
                        <p className="dashboard-title col-auto">Profil</p>
                    </div>

                    {!userData ? (
                        <div>
                            <p>Loading...</p>
                        </div>
                    ) : (
                        <div>
                            <div className='dashboard-div position-relative'>
                                <img className='dashboard-div-img' src={userData.imgProfil} alt="Image utilisateur" />

                                <div className='dashboard-div-bandeau position-absolute bottom-0 left-0 d-flex justify-content-center align-items-center'>
                                    <AddPhoto className='dashboard-div-bandeau-icon' style={{ color: '#FFFFFF', fontSize: '20px' }} />
                                </div>
                            </div>

                            <h2>{userData.username}</h2>
                            <h3>{userData.pseudo}</h3>
                            <p>{userData.email}</p>

                            <Link to='/logout' className='btn btn-danger'>Se déconnecter</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}