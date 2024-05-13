import React, { useState } from 'react';
import NavigationBar from "../NavigationBar";
import { Link } from "react-router-dom";
import { Speedometer, PersonCircle, Award, BarCharLineFill, BellFill, XCircle } from "../../components/icons";
import { AgChartsReact } from 'ag-charts-react';


let dashboardLinks = [
    {
        title: "Tableau de bord",
        icon: <Speedometer className='links-contain-svg' />,
        iconActive: <Speedometer className='links-contain-svg-active' />
    },
    {
        title: "Mon Compte",
        icon: <PersonCircle className='links-contain-svg' />,
        iconActive: <PersonCircle className='links-contain-svg-active' />
    },
    {
        title: "Mes Récompenses",
        icon: <Award className='links-contain-svg' />,
        iconActive: <Award className='links-contain-svg-active' />
    }
]


function RenderLeftLinks({ link, setLink }) {

    const handleChangeLink = (index) => {
        setLink(index);
    };

    return (
        <div className="links-contain col-auto">
            {dashboardLinks.map((dash, index) => (
                <Link
                    key={index}
                    className={`links-contain-a row align-items-center link-offset-2 link-underline link-underline-opacity-0 py-3 px-4 ${index === link ? 'links-contain-a-active' : ''}`}
                    onClick={() => handleChangeLink(index)}
                >
                    <div className="col-auto">{index === 0 ? dash.iconActive : dash.icon}</div>
                    <p className="links-contain-a-title col-auto">{dash.title}</p>
                </Link>
            ))}
        </div>
    );
}


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

function NotifRender() {

    return (
        <div className='row py-5 gap-4'>

            <div className='col-12'>
                <div className='row notif-div justify-content-between align-items-center rounded py-2'>
                    <p className='notif-div-title col-auto m-0'>Vous avez gagné <span className='notif-div-title-span'>un badge</span> !</p>

                    <div className='col-auto'>
                        <div className='row justify-content-end text-end'>
                            <Link className='col-12'>
                                <XCircle />
                            </Link>

                            <div className='row'>

                            </div>
                            <div className="col-auto">
                                <button className='col-auto btn btn-outline-primary text-uppercase'>Voir mes badges</button>
                            </div>
                            <div className="col-auto">
                                <button className='btn text-uppercase'>Marquer comme lu</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='col-12'>
                <div className='row notif-div justify-content-between align-items-center rounded'>
                    <p className='notif-div-title col-auto m-0'>Vous avez gagné <span className='notif-div-title-span'>un badge</span> !</p>

                    <div className='col-auto'>
                        <div className='row justify-content-end text-end'>
                            <Link className='col-12'>
                                <XCircle />
                            </Link>
                            <div className="col-auto">
                                <button className='btn btn-outline-primary text-uppercase'>Voir mes badges</button>
                            </div>
                            <div className="col-auto">
                                <button className='btn text-uppercase'>Marquer comme lu</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function DashboardRender() {


    return (
        <div className="col-8">

            <div className="row">
                <div className="col-12">

                    <div className="row align-items-center">
                        <BarCharLineFill className='col-auto' />
                        <p className="dashboard-title col-auto">Appercus de mes Créations</p>
                    </div>

                    <div className='my-5' style={{ height: '300px' }}>
                        <ChartRender />
                    </div>

                    <div className="row align-items-center justify-content-between">
                        <div className="col-auto">
                            <div className="row">
                                <BellFill className='col-auto' />
                                <p className="dashboard-title col-auto">Notifications en attentes</p>
                                <p className="dashboard-title col-auto">(2)</p>
                            </div>
                        </div>
                        <div className="col-auto text-end">
                            <button className='btn btn-outline-primary'>Tout marquer comme lu</button>
                        </div>
                    </div>

                    <NotifRender />
                </div>
            </div>
        </div>
    );
}

function AccountRender() {
    return (
        <div className="col-8">
            <p>Accès Account</p>
        </div>
    );
}

function RewardRender() {
    return (
        <div className="col-8">
            <p>Accès Reward</p>
        </div>
    );
}

function RenderRightContent({ link }) {

    if (link === 0) {
        return DashboardRender();
    }
    else if (link === 1) {
        return AccountRender();
    }
    else if (link === 2) {
        return RewardRender();
    }
}


export default function DashboardPage() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            <NavigationBar />

            <main className="container">

                <div className="row justify-content-between">
                    <RenderLeftLinks link={activeIndex} setLink={setActiveIndex} />
                    <RenderRightContent link={activeIndex} />
                </div>
            </main>
        </>
    );
}