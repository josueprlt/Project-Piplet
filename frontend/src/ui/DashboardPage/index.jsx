import React, { useState, useEffect } from 'react';
import NavigationBar from "../NavigationBar";
import { Link } from "react-router-dom";
import { BsSpeedometer, BsPersonCircle, BsAward } from "react-icons/bs";
import DashboardRender from "./dashboard";
import AccountRender from "./account";
import RewardRender from "./reward";
import { RequestDataLogin } from '../../request/userRequest';


let dashboardLinks = [
    {
        title: "Tableau de bord",
        icon: <BsSpeedometer style={{ color: '#104547', fontSize: '30px' }} />,
        iconActive: <BsSpeedometer style={{ color: '#292E2E', fontSize: '30px' }} />,
        link: '/dashboard'
    },
    {
        title: "Mon Compte",
        icon: <BsPersonCircle style={{ color: '#104547', fontSize: '30px' }} />,
        iconActive: <BsPersonCircle style={{ color: '#292E2E', fontSize: '30px' }} />,
        link: '/dashboard/account'
    },
    {
        title: "Mes Récompenses",
        icon: <BsAward style={{ color: '#104547', fontSize: '30px' }} />,
        iconActive: <BsAward style={{ color: '#292E2E', fontSize: '30px' }} />,
        link: '/dashboard/reward'
    }
]


function RenderLeftLinks({ link, setLink }) {

    const handleChangeLink = (index) => {
        setLink(index);
    };

    return (
        <>
            <div className="links-contain col-4 d-none d-lg-block">
                {dashboardLinks.map((dash, index) => (
                    <Link
                        to={dash.link}
                        key={index}
                        className={`links-contain-a row align-items-center link-offset-2 link-underline link-underline-opacity-0 py-3 px-4 ${index === link ? 'links-contain-a-active' : ''}`}
                        onClick={() => handleChangeLink(index)}
                    >
                        <div className="col-auto">{index === link ? dash.iconActive : dash.icon}</div>
                        <p className="links-contain-a-title col-auto">{dash.title}</p>
                    </Link>
                ))}
            </div>

            <div className="links-contain d-block d-lg-none">
                <div className='d-flex justify-content-between outline-info'>
                    {dashboardLinks.map((dash, index) => (
                        <Link
                            to={dash.link}
                            key={index}
                            className={`links-contain-a ${index === link ? 'col col-sm-8' : 'col col-sm-2'} link-offset-2 link-underline link-underline-opacity-0 py-3 px-4 outline-info overflow-hidden ${index === link ? 'links-contain-a-active' : ''}`}
                            onClick={() => handleChangeLink(index)}
                        >
                            <div className={`row flex-nowrap ${index !== link ? 'justify-content-center' : 'justify-content-center justify-content-sm-start'}`}>
                                <div className="col-auto">{index === link ? dash.iconActive : dash.icon}</div>
                                {link === index && <p className="col-auto links-contain-a-title d-none d-sm-block">{dash.title}</p>}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}

function RenderRightContent({ link, userData }) {

    if (link === 0) {
        return DashboardRender({ userData });
    }
    else if (link === 1) {
        return AccountRender({ userData });
    }
    else if (link === 2) {
        return RewardRender();
    }
}


export default function DashboardPage() {
    const [userData, setUserData] = useState();
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (!userData) {
            fetchData();
        }

        if (window.location.pathname === '/dashboard') {
            setActiveIndex(0);
        } else if (window.location.pathname === '/dashboard/account') {
            setActiveIndex(1);
        } else if (window.location.pathname === '/dashboard/reward') {
            setActiveIndex(2);
        }
    }, [userData]);
    
    const fetchData = async () => {
        const newData = await RequestDataLogin({ setUserData });
        if (newData) {
            setUserData(newData);
        }
    };

    return (
        <>
            <main className="container">
                <div className="row justify-content-between">
                    <RenderLeftLinks link={activeIndex} setLink={setActiveIndex} />
                    <RenderRightContent link={activeIndex} userData={userData} />
                </div>
            </main>
        </>
    );
}