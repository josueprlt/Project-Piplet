import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { AgChartsReact } from 'ag-charts-react';
import { NotifBadge, NotifGeneral, AwardPinkWhiteBg } from "../../components/icons";
import { BsBellFill, BsBarChartLineFill, BsXCircle } from "react-icons/bs";
import { RequestNotifByIdUser, RequestNotifReadByIdUser, RequestNotifBasketByIdUser, RequestDeleteNotifBasketByIdUser, RequestDeletePermentlyNotifBasketByIdUser, RequestMarkViewByIdUserAndByIdNotif, RequestMarkBasketByIdUserAndByIdNotif, RequestMarkAllNotifViewByIdUser } from '../../request/notifUserRequest';

function ChartRender() {

    // Chart Options: Control & configure the chart
    const [chartOptions, setChartOptions] = useState({
        // Data: Data to be displayed in the chart
        data: [
            { month: 'Jan', avgTemp: 2.3, iceCreamSales: 162000 },
            { month: 'Mar', avgTemp: 6.3, iceCreamSales: 302000 },
            { month: 'May', avgTemp: 16.2, iceCreamSales: 800000 },
            { month: 'Jul', avgTemp: 22.8, iceCreamSales: 1254000 },
            { month: 'Sep', avgTemp: 14.5, iceCreamSales: 950000 },
            { month: 'Nov', avgTemp: 8.9, iceCreamSales: 200000 },
        ],
        // Series: Defines which chart type and data to use
        series: [{ type: 'bar', xKey: 'month', yKey: 'iceCreamSales' }],
    });

    return (
        // AgChartsReact component with options passed as prop
        <AgChartsReact options={chartOptions} />
    );
}

function TemplateNotifNotRead({ notif, fetchNotifRead, fetchNotifDelete }) {
    return (
        <>
            <div className='col-12 position-relative'>

                {notif.type === "badge" && <AwardPinkWhiteBg className='notif-div-absolute-item-desktop d-none d-md-block' />}
                {(notif.type === "text" || notif.type === "text2" || notif.type === "text3") && <BsBellFill className='notif-div-absolute-item-desktop d-none d-md-block' />}


                <div className='d-flex notif-div justify-content-between ai-center ai-md-end py-4 px-2 flex-column flex-md-row rounded position-relative overflow-hidden'>

                    {notif.type === "badge" && <NotifBadge className='notif-div-absolute-item-bg d-block d-md-none' />}
                    {(notif.type === "text" || notif.type === "text2" || notif.type === "text3") && <NotifGeneral className='notif-div-absolute-item-bg d-block d-md-none' />}

                    <Link onClick={() => fetchNotifDelete(notif.id)} className='notif-div-absolute-item-close'>
                        <BsXCircle style={{ color: '#104547', fontSize: '20px' }} />
                    </Link>

                    {notif.type === "badge" && <p className='notif-div-title text-center text-md-start col m-0 py-5 ps-0 ps-md-4'>Vous avez gagné <span className='notif-div-title-span'>un badge</span> !</p>}
                    {(notif.type === "text" || notif.type === "text2" || notif.type === "text3") && <p className='notif-div-title text-center text-md-start col m-0 py-5 ps-0 ps-md-4'>Votre texte à été <span className='notif-div-title-span'>publié</span> !</p>}

                    <div className='d-flex h-100 justify-content-center gap-3 flex-wrap'>
                        {notif.type === "badge" && (
                            <>
                                <button className='btn btn-outline-primary'>Voir mes badges</button>
                            </>
                        )}
                        {(notif.type === "text" || notif.type === "text2" || notif.type === "text3") && <button className='btn btn-outline-primary'>Voir le texte</button>}
                        <button onClick={() => fetchNotifRead(notif.id)} className='btn'>Marquer comme lu</button>
                    </div>
                </div>
            </div>
        </>
    );
}

function TemplateNotifRead({ notif, fetchNotifDelete }) {
    return (
        <>
            <div className='col-12 position-relative'>

                {notif.type === "badge" && <AwardPinkWhiteBg className='notif-div-absolute-item-desktop d-none d-md-block' />}
                {(notif.type === "text" || notif.type === "text2" || notif.type === "text3") && <BsBellFill className='notif-div-absolute-item-desktop d-none d-md-block' />}


                <div className='d-flex notif-div justify-content-between ai-center ai-md-end py-4 px-2 flex-column flex-md-row rounded position-relative overflow-hidden'>

                    {notif.type === "badge" && <NotifBadge className='notif-div-absolute-item-bg d-block d-md-none' />}
                    {(notif.type === "text" || notif.type === "text2" || notif.type === "text3") && <NotifGeneral className='notif-div-absolute-item-bg d-block d-md-none' />}

                    {notif.type === "badge" && <p className='notif-div-title text-center text-md-start col m-0 py-5 ps-0 ps-md-4'>Vous avez gagné un badge !</p>}
                    {(notif.type === "text" || notif.type === "text2" || notif.type === "text3") && <p className='notif-div-title text-center text-md-start col m-0 py-5 ps-0 ps-md-4'>Votre texte à été publié !</p>}

                    <div className='d-flex h-100 justify-content-center gap-3 flex-wrap'>
                        {notif.type === "badge" && (
                            <>
                                <button className='btn btn-outline-primary'>Voir mes badges</button>
                            </>
                        )}
                        {(notif.type === "text" || notif.type === "text2" || notif.type === "text3") && <button className='btn btn-outline-primary'>Voir le texte</button>}
                        <button onClick={() => fetchNotifDelete(notif.id)} className='btn'>Envoyer à la corbeille</button>
                    </div>
                </div>
            </div>
        </>
    );
}

function TemplateNotifBasket({ notif, fetchNotifPermantly }) {
    return (
        <>
            <div className='col-12 position-relative'>

                {notif.type === "badge" && <AwardPinkWhiteBg className='notif-div-absolute-item-desktop d-none d-md-block' />}
                {(notif.type === "text" || notif.type === "text2" || notif.type === "text3") && <BsBellFill className='notif-div-absolute-item-desktop d-none d-md-block' />}


                <div className='d-flex notif-div justify-content-between ai-center ai-md-end py-4 px-2 flex-column flex-md-row rounded position-relative overflow-hidden'>

                    {notif.type === "badge" && <NotifBadge className='notif-div-absolute-item-bg d-block d-md-none' />}
                    {(notif.type === "text" || notif.type === "text2" || notif.type === "text3") && <NotifGeneral className='notif-div-absolute-item-bg d-block d-md-none' />}

                    {notif.type === "badge" && <p className='notif-div-title text-center text-md-start col m-0 py-5 ps-0 ps-md-4'>Vous avez gagné un badge !</p>}
                    {(notif.type === "text" || notif.type === "text2" || notif.type === "text3") && <p className='notif-div-title text-center text-md-start col m-0 py-5 ps-0 ps-md-4'>Votre texte à été publié !</p>}

                    <div className='d-flex h-100 justify-content-center gap-3 flex-wrap'>
                        {notif.type === "badge" && (
                            <>
                                <button className='btn btn-outline-primary'>Voir mes badges</button>
                            </>
                        )}
                        {(notif.type === "text" || notif.type === "text2" || notif.type === "text3") && <button className='btn btn-outline-primary'>Voir le texte</button>}
                        <button onClick={() => fetchNotifPermantly(notif.id)} className='btn text-secondary'>Supprimer définitivement</button>
                    </div>
                </div>
            </div>
        </>
    );
}

function NotifRenderTemplate({ userNotif, fetchNotifRead, fetchNotifDelete, fetchNotifPermantly }) {
    return (
        <>
            {userNotif && userNotif.length > 0 ? (
                userNotif.map((notif) => (
                    <React.Fragment key={notif.id}>
                        {notif.view === false && notif.basket === false && (
                            <TemplateNotifNotRead
                                notif={notif}
                                fetchNotifRead={fetchNotifRead}
                                fetchNotifDelete={fetchNotifDelete}
                            />
                        )}
                        {notif.view === true && notif.basket === false && (
                            <TemplateNotifRead
                                notif={notif}
                                fetchNotifDelete={fetchNotifDelete}
                            />
                        )}
                        {notif.basket === true && (
                            <TemplateNotifBasket
                                notif={notif}
                                fetchNotifPermantly={fetchNotifPermantly}
                            />
                        )}
                    </React.Fragment>
                ))
            ) : (
                <p>Vous n'avez aucune notification ici...</p>
            )}
        </>
    );
}



function NotifRender({ userNotif, fetchNotifRead, fetchNotifDelete, fetchNotifPermantly }) {

    return (
        <div className='d-flex flex-column py-5 gap-4 ps-3'>
            {!userNotif ? (
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            ) : (
                <>
                    <NotifRenderTemplate userNotif={userNotif} fetchNotifRead={fetchNotifRead} fetchNotifDelete={fetchNotifDelete} fetchNotifPermantly={fetchNotifPermantly} />
                </>
            )}
        </div>
    );
}

export default function DashboardRender({ userData }) {
    const [chooseNotif, setChooseNotif] = useState('notif');
    const [userNotif, setUserNotif] = useState();
    const [userNotifRead, setUserNotifRead] = useState();
    const [userNotifDelete, setUserNotifDelete] = useState();

    useEffect(() => {
        if (userData) {
            fetchNotif();
            fetchNotifRead();
            fetchNotifDelete();
        }
    }, [userData]);

    const fetchNotif = async () => {
        const newData = await RequestNotifByIdUser({ userData });
        if (newData) {
            setUserNotif(newData);
        }
    };

    const fetchNotifRead = async () => {
        const newData = await RequestNotifReadByIdUser({ userData });
        if (newData) {
            setUserNotifRead(newData);
        }
    };

    const fetchNotifDelete = async () => {
        const newData = await RequestNotifBasketByIdUser({ userData });
        if (newData) {
            setUserNotifDelete(newData);
        }
    };

    const handleNotif = () => {
        setChooseNotif('notif');
    };

    const handleReadNotif = () => {
        setChooseNotif('notifRead');
    };

    const handleDeleteNotif = () => {
        setChooseNotif('notifDelete');
    };

    const handleDeleteNotifBasket = async () => {
        const newData = await RequestDeleteNotifBasketByIdUser({ userData });
        if (newData) {
            await fetchNotifDelete();
        }
    };

    const handleMarkNotifView = async (id) => {
        const newData = await RequestMarkViewByIdUserAndByIdNotif({ userData, id });
        if (newData) {
            await fetchNotif();
            await fetchNotifRead();
        }
    };

    const handleMarkNotifBasket = async (id) => {
        const newData = await RequestMarkBasketByIdUserAndByIdNotif({ userData, id });
        if (newData) {
            await fetchNotif();
            await fetchNotifRead();
            await fetchNotifDelete();
        }
    };

    const handleRemoveNotifBasket = async (id) => {
        const newData = await RequestDeletePermentlyNotifBasketByIdUser({ userData, id });
        if (newData) {
            await fetchNotifDelete();
        }
    };

    const handleAllNotifsView = async (id) => {
        const newData = await RequestMarkAllNotifViewByIdUser({ userData });
        if (newData) {
            await fetchNotif();
            await fetchNotifRead();
        }
    };

    return (
        <div className="col-12 col-lg-8 mt-5 mt-lg-0">

            <div className="row">
                <div className="col-12">

                    <div className="row ai-center">
                        <div className="col-12 d-flex justify-content-center justify-content-md-start">
                            <BsBarChartLineFill className='d-none d-md-block' style={{ color: '#281B1B', fontSize: '23px' }} />
                            <p className="dashboard-title ps-0 ps-md-3">Appercus de mes Créations</p>
                        </div>
                    </div>

                    <div className='my-5' style={{ height: '300px' }}>
                        <ChartRender />
                    </div>

                    <div className="row align-items-center justify-content-between">
                        <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-start">
                            <BsBellFill className='d-none d-md-block' style={{ color: '#281B1B', fontSize: '23px' }} />
                            <p className="dashboard-title ps-0 ps-md-3">Notifications({userNotif && userNotif.length})</p>
                        </div>
                        <div className="col col-md-6 text-end d-flex pt-4 pt-md-0 justify-content-between d-md-block">
                            <button onClick={handleAllNotifsView} className='btn btn-outline-primary'>Tout marquer comme lu</button>

                            <div className='d-flex flex-wrap justify-content-end gap-2 pt-2'>

                                {chooseNotif === 'notifRead' ? <Link onClick={handleNotif} className='dashboard-links'>En attente({userNotif && userNotif.length})</Link> : <Link onClick={handleReadNotif} className='dashboard-links'>Lus ({userNotifRead && userNotifRead.length})</Link>}
                                <Link onClick={handleDeleteNotif} className='dashboard-links dashboard-links-secondary'>Corbeille({userNotifDelete && userNotifDelete.length})</Link>
                                <Link onClick={handleDeleteNotifBasket} className='dashboard-links dashboard-links-secondary'>Vider la corbeille({userNotifDelete && userNotifDelete.length})</Link>
                            </div>
                        </div>
                    </div>

                    {chooseNotif === 'notif' && <NotifRender userNotif={userNotif} fetchNotifRead={handleMarkNotifView} fetchNotifDelete={handleMarkNotifBasket} fetchNotifPermantly={handleRemoveNotifBasket} />}
                    {chooseNotif === 'notifRead' && <NotifRender userNotif={userNotifRead} fetchNotifRead={handleMarkNotifView} fetchNotifDelete={handleMarkNotifBasket} fetchNotifPermantly={handleRemoveNotifBasket} />}
                    {chooseNotif === 'notifDelete' && <NotifRender userNotif={userNotifDelete} fetchNotifRead={handleMarkNotifView} fetchNotifDelete={handleMarkNotifBasket} fetchNotifPermantly={handleRemoveNotifBasket} />}
                </div>
            </div>
        </div>
    );
}