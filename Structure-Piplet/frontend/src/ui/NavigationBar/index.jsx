import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { Logo } from "../../components/icons";
import { BsHouse, BsColumnsGap, BsSearch, BsBellFill, BsFlower2 } from "react-icons/bs";
import { RequestDataLogin } from '../../request/userRequest';
import { Waves } from "../../components/icons";
import { Offcanvas, Nav } from "react-bootstrap";

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

function MenuMobile({ show, handleClose, userData }) {
    let tokenUser = localStorage.getItem('jwtToken');

    return (
        <>
            <Offcanvas show={show} onHide={handleClose} placement="end" data-bs-theme="light">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="siteDetails">
                        <Link to='/'>
                            <Logo style={{ width: '100px' }} />
                        </Link>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div>
                        Vous êtes sur le site web officiel de <span className="text-uppercase text-secondary">Piplt</span> !
                    </div>
                    <Nav id="mobile-nav" className="flex-column mt-4">
                        <Nav.Link className="active" aria-current="page"><Link to='/' className='text-decoration-none'>Accueil</Link></Nav.Link>
                        <Nav.Link><Link to='/blog' className='text-decoration-none'>Blog</Link></Nav.Link>
                        {userData && <Nav.Link><Link to='/dashboard' className='text-decoration-none'>Mon tableau de bord</Link></Nav.Link>}
                        <Nav.Link><Link to='/credits' className='text-decoration-none'>Crédits</Link></Nav.Link>
                    </Nav>
                    <Nav id="mobile-nav" className="flex-column mt-4">
                        {tokenUser ? (
                            <>
                                {userData ? (
                                    <>
                                        <Nav.Link>
                                            <Link className='text-decoration-none'>
                                                <BsSearch style={{ color: '#104547', fontSize: '20px' }} />
                                            </Link>
                                        </Nav.Link>
                                        <Nav.Link>
                                            <Link to='/dashboard' className='text-decoration-none'>
                                                <BsBellFill style={{ color: '#292E2E', fontSize: '29px' }} />
                                            </Link>
                                        </Nav.Link>
                                        <Nav.Link>
                                            <Link to='/dashboard/account' className='text-decoration-none'>
                                                <div className='navbar-div'>
                                                    <img className='navbar-div-img' src={userData.imgProfil} alt="Image Utilisateur" />
                                                </div>
                                            </Link>
                                        </Nav.Link>
                                    </>
                                ) : (
                                    <div class="spinner-border text-primary" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                                )}
                            </>
                        ) : (
                            <Link to='/login' className='btn btn-primary'>Se Connecter</Link>
                        )}
                    </Nav>
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

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <MenuMobile show={show} handleClose={handleClose} userData={userData} />

            <header id="main-header" className="shadow-sm">
                <nav className="navbar navbar-expand-md">

                    <div className="container-xl d-flex align-items-center justify-content-between position-relative">


                        <Link to='/' className="navbar-brand mx-0 d-flex align-items-center">
                            <Logo id="main-logo" />
                        </Link>
                        {/* <span className="slogan d-none d-sm-inline-flex d-lg-inline-flex ps-lg-3 mx-sm-auto d-md-none text-uppercase">Le réseau social favoris de Molière</span> */}

                        <button onClick={handleShow} className="btn ms-2 py-2 ps-1 d-md-none"
                            id="btn-offcanvas" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDetails"
                            aria-controls="offcanvasDetails">
                            <span></span>
                            <span></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                                <li className="nav-item">
                                    <Link to='/' className="nav-link text-uppercase text-primary fw-medium d-flex ai-center fs-6">
                                        <BsHouse className='pe-1' style={{ color: '#104547', fontSize: '20px' }} />
                                        Accueil</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle text-uppercase text-primary fw-medium d-flex ai-center fs-6" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <BsFlower2 className='pe-1' style={{ color: '#104547', fontSize: '20px' }} />
                                        Blog
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item">UX/UI Design</Link></li>
                                        <li><Link className="dropdown-item">Dév. front-end</Link></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><Link className="dropdown-item">News</Link></li>
                                    </ul>
                                </li>
                                {tokenUser && (
                                    <li className="nav-item">
                                        <Link to='/dashboard' className="nav-link text-uppercase text-primary fw-medium d-flex ai-center fs-6">
                                            <BsColumnsGap className='pe-1' style={{ color: '#104547', fontSize: '20px' }} />
                                            Mon tableau de bord
                                        </Link>
                                    </li>
                                )}
                                <li className="nav-item d-none d-xl-inline-flex">
                                    <Link to='/credits' className="nav-link text-uppercase text-primary fw-medium fs-6">Crédits</Link>
                                </li>

                                <li className='nav-item'>
                                    <Link className='nav-link'>
                                        <BsSearch style={{ color: '#104547', fontSize: '20px' }} />
                                    </Link>
                                </li>

                                {tokenUser ? (
                                    <>
                                        {userData ? (
                                            <>
                                                <li className='nav-item'>
                                                    <Link to='/dashboard' className='nav-link'>
                                                        <BsBellFill style={{ color: '#292E2E', fontSize: '29px' }} />
                                                    </Link>
                                                </li>
                                                <li className='nav-item'>
                                                    <Link to='/dashboard/account' className="nav-link p-0 d-flex ai-center h-100 fs-6">
                                                        <div className='navbar-div'>
                                                            <img className='navbar-div-img' src={userData.imgProfil} alt="Image Utilisateur" />
                                                        </div>
                                                    </Link>
                                                </li>
                                            </>
                                        ) : (
                                            <>
                                                <li className='nav-item'>
                                                    <Link to='/dashboard' className='nav-link'>
                                                        <BsBellFill style={{ color: '#292E2E', fontSize: '29px' }} />
                                                    </Link>
                                                </li>
                                                <li className='nav-item'>
                                                    <Link to='/dashboard/account' className="nav-link p-0 d-flex ai-center h-100 fs-6">
                                                        <div className='navbar-div'>
                                                            <img className='navbar-div-img' src='../../../public/user/UserProfilDefault.jpg' alt="Image Utilisateur" />
                                                        </div>
                                                    </Link>
                                                </li>
                                            </>
                                        )}
                                    </>
                                ) : (
                                    <li className='nav-item'>
                                        <Link to='/login' className='btn btn-primary my-2'>Se Connecter</Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <SousInfoBar />
        </>
    );
}

export default NavigationBar;