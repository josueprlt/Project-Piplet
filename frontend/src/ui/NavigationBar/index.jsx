import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { Logo } from "../../components/icons";
import { BsHouse, BsColumnsGap, BsSearch, BsBellFill, BsFlower2 } from "react-icons/bs";
import { RequestDataLogin } from '../../request/userRequest';
import { Waves } from "../../components/icons";
import { Offcanvas, Button, Nav } from "react-bootstrap";

let naturalLinks = [
    {
        title: 'Accueil',
        icon: <BsHouse className='col-auto pe-0' style={{ color: '#104547', fontSize: '20px' }} />,
        iconNone: <BsHouse className='col-auto pe-0' style={{ color: '#BFB7B9', fontSize: '20px' }} />,
        path: ['/']
    },
    {
        title: 'Blog',
        icon: <BsFlower2 className='col-auto pe-0' style={{ color: '#104547', fontSize: '20px' }} />,
        iconNone: <BsFlower2 className='col-auto pe-0' style={{ color: '#BFB7B9', fontSize: '20px' }} />,
        path: ['/blog']
    },
    {
        title: 'Mon tableau de bord',
        icon: <BsColumnsGap className='col-auto pe-0' style={{ color: '#104547', fontSize: '20px' }} />,
        iconNone: <BsColumnsGap className='col-auto pe-0' style={{ color: '#BFB7B9', fontSize: '20px' }} />,
        path: ['/dashboard', '/dashboard/account', '/dashboard/reward']
    }
];


let infoNews = {
    bgTitle: "News",
    title: 'Quoi de neuf ?',
    hashtag: 'Résultat concours',
    sousTitle: '🎉 Félicitations à : El-Cassegrain !',
    content: "Notre Pips s’est beaucoup fait remarqué lors du concours de la semaine dernière, notamment grâce à sa capacité à séduire et à convaincre par ce short percutant. Il gagne le badge “Remporter un concours” qu’il peut dorénavant admirer sur son tableau de bord dans la section récompense, et se rapproche du grade ultime de Pips Piplette ! Bravo à lui !",
    btnValue: "Lire l'article de blog"
}

function MenuMobile({ show, handleClose }) {

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Open Offcanvas
            </Button> */}

            <Offcanvas show={show} onHide={handleClose} placement="end" data-bs-theme="dark">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="siteDetails">Bienvenue 👋</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div>
                        Vous êtes sur le site web officiel de <span className="text-uppercase text-info">Etienne Leriche - Web Designer Freelance.</span> Faites-y un tour, et n'hésitez pas à me contacter, ne serais-ce que pour faire un coucou !
                    </div>
                    <Nav id="mobile-nav" className="flex-column mt-4">
                        <Nav.Link href="#" className="active" aria-current="page">Accueil</Nav.Link>
                        <Nav.Link href="#">À propos</Nav.Link>
                        <Nav.Link href="#">Blog</Nav.Link>
                        <Nav.Link href="#">Portfolio</Nav.Link>
                        <Nav.Link href="#">Crédits</Nav.Link>
                    </Nav>
                    <Button variant="primary" className="ms-3 mt-3" data-bs-toggle="modal" data-bs-target="#contactModal">
                        <i className="bi-send me-2"></i>Contact
                    </Button>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

function SousInfoBar() {
    const location = useLocation();
    const [filteredLinks, setFilteredLinks] = useState([]);

    useEffect(() => {
        const matchingLinks = naturalLinks.filter(link => link.path.includes(location.pathname));
        setFilteredLinks(matchingLinks);
    }, [location.pathname]);

    return (
        <>
            <div className='pt-5 mt-0 mt-md-4' style={{ backgroundColor: location.pathname === '/' ? '#FBF3F5' : 'none' }}>

                {/* {location.pathname === '/' && (
                    <span className='position-absolute fw-semibold text-uppercase' style={{ color: '#FDF8F9', fontSize: '450px', zIndex: '0', bottom: '0'}}> {infoNews.bgTitle}</span>
                )} */}

                {filteredLinks.map((link, index) => (
                    <nav className='container'>
                        <div key={index} className='row pb-5 pt-4 align-items-center'>
                            {link.iconNone}
                            <p className="col-auto m-0 text-uppercase" style={{ color: '#BFB7B9' }}>{link.title}</p>
                        </div>

                        {location.pathname === '/' && (
                            <div className='row justify-content-between text-center text-md-start gap-5 gap-md-0'>
                                <div className="col-12 col-md-3">
                                    <h2 className='text-uppercase fw-semibold' style={{ fontSize: '32px', color: '#000000' }}>{infoNews.title}</h2>
                                    <span className='text-secondary' style={{ fontSize: '20px' }}>#{infoNews.hashtag}</span>
                                </div>
                                <div className="col-12 col-md-8">
                                    <div className='row gap-4'>
                                        <h4 className='fw-semibold' style={{ fontSize: '20px' }}>{infoNews.sousTitle}</h4>
                                        <p style={{ fontSize: '18px' }}>{infoNews.content}</p>

                                        <div className="col-12 col-md-auto text-center text-md-start">
                                            <button className='btn btn-outline-primary text-uppercase' style={{ fontSize: '16px' }}>{infoNews.btnValue}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                    </nav>
                ))}
            </div>
            {location.pathname === '/' && <Waves className='navbar-div-svg' style={{ zIndex: '0' }} />}
        </>
    );
};

function NavigationBar() {
    const location = useLocation();
    const [userData, setUserData] = useState();
    const [show, setShow] = useState(false);
    let tokenUser = localStorage.getItem('jwtToken');

    useEffect(() => {
        if (!userData) {
            fetchData();
        }
    }, [userData]);

    const fetchData = async () => {
        const newData = await RequestDataLogin({ setUserData });
        if (newData) {
            setUserData(newData);
        }
    };

    const handleClickMenuBurger = () => {
        let menu = document.querySelector('.menu-icon-responsive');

        if (menuBurger === true) {
            document.body.classList.remove('overflow-hidden');
            setMenuBurger(false);
            menu.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            document.body.classList.add('overflow-hidden');
            setMenuBurger(true);
            menu.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <MenuMobile show={show} handleClose={handleClose} />

            <header id="main-header" className="shadow-sm">
                <nav className="navbar navbar-expand-md">

                    <div className="container-xl d-flex align-items-center justify-content-between position-relative">


                        <Link to='/' className="navbar-brand mx-0 d-flex align-items-center">
                            <Logo id="main-logo"/>
                        </Link>
                        <span className="slogan d-none d-sm-inline-flex d-lg-inline-flex ps-lg-3 mx-sm-auto d-md-none text-uppercase">Le réseau social favoris de Molière</span>

                        <button onClick={handleShow} className="btn ms-2 py-2 ps-1 d-md-none"
                            id="btn-offcanvas" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDetails"
                            aria-controls="offcanvasDetails">
                            <span></span>
                            <span></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Accueil</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Blog
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">UX/UI Design</a></li>
                                        <li><a className="dropdown-item" href="#">Dév. front-end</a></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><a className="dropdown-item" href="#">News</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Portfolio
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Personnel</a></li>
                                        <li><a className="dropdown-item" href="#">Professionnel</a></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><a className="dropdown-item" href="#">Autre</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Mon tableau de bord</a>
                                </li>
                                <li className="nav-item d-none d-xl-inline-flex">
                                    <a className="nav-link" href="#">Crédits</a>
                                </li>
                            </ul>
                        </div>

                        {/* <div className="col-auto d-none d-lg-block">
                            <div className="row h-100 justify-content-center ai-center gap-5">
                                {naturalLinks.map((link, index) => (
                                    (index !== 2 || tokenUser) && (
                                        <Link
                                            key={index}
                                            to={link.path[0]}
                                            className={`col-auto h-100 link-offset-2 link-underline link-underline-opacity-0 ${location.pathname === link.path ? 'border-bottom border-3 border-primary' : ''}`}
                                        >
                                            <div className="row h-100 ai-center gap-3 fw-medium">
                                                {link.icon}
                                                <p className="col-auto text-uppercase m-0 p-0">{link.title}</p>
                                            </div>
                                        </Link>
                                    )
                                ))}


                                <div className='col-auto h-100'>
                                    <div className="row h-100 ai-center gap-2">
                                        <Link className="col-auto">
                                            <BsSearch className='m-0 p-0' style={{ color: '#104547', fontSize: '20px' }} />
                                        </Link>

                                        {userData && (
                                            <>
                                                <Link to='/dashboard' type="button" class="col-auto btn position-relative m-0 p-0">
                                                    <BsBellFill className='m-0 p-0' style={{ color: '#292E2E', fontSize: '29px' }} />
                                                    <span id='notif-span' class="position-absolute translate-middle bg-secondary border border-light rounded-circle"></span>
                                                </Link>

                                                <Link to='/dashboard/account' className="col-auto">
                                                    <div className='navbar-div'>
                                                        <img className='navbar-div-img' src={userData.imgProfil} alt="Image Utilisateur" />
                                                    </div>
                                                </Link>
                                            </>
                                        )}
                                    </div>
                                </div>

                            </div>
                        </div> */}
                    </div>

                </nav>
            </header>

            <SousInfoBar />
        </>
    );
}

export default NavigationBar;