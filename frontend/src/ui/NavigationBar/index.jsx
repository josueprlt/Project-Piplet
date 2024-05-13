import { Link, useLocation } from "react-router-dom";
import { Logo, House, ColumnsGap, Search, BellFill } from "../../components/icons";

function NavigationBar() {
    const location = useLocation();

    return (
        <>
            <header className="shadow-sm">
                <div className="container">
                    <div className="row position-relative">
                        <div className="col-6">
                            <Logo className="w-92 h-auto" />
                        </div>

                        <div className="col-6">
                            <div className="row h-100 justify-content-end align-items-center gap-5">
                                <Link
                                    to="/"
                                    className={`col-auto h-100 link-offset-2 link-underline link-underline-opacity-0 ${location.pathname === '/' ? 'border-bottom border-3 border-primary' : ''}`}
                                >
                                    <div className="row h-100 align-items-center gap-3 fw-medium">
                                        <House className='col-auto m-0 p-0' />
                                        <p className="col-auto text-uppercase m-0 p-0">Accueil</p>
                                    </div>
                                </Link>
                                <Link
                                    to="/dashboard"
                                    className={`col-auto h-100 link-offset-2 link-underline link-underline-opacity-0 ${location.pathname === '/dashboard' ? 'border-bottom border-3 border-primary' : ''}`}
                                >
                                    <div className="row h-100 align-items-center gap-3 fw-medium">
                                        <ColumnsGap className='col-auto m-0 p-0' />
                                        <p className="col-auto text-uppercase m-0 p-0">Mon tableau de bord</p>
                                    </div>
                                </Link>
                                <Link className="col-auto">
                                    <Search className='col-auto m-0 p-0' />
                                </Link>
                                <Link className="col-auto">
                                    <BellFill className='col-auto m-0 p-0' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container">
                {location.pathname === '/' && (
                    <div className="row gap-1 align-items-center my-4 fw-medium">
                        <House className='col-auto' />
                        <p className="col-auto text-uppercase m-0 p-0">Accueil</p>
                    </div>
                )}
                {location.pathname === '/dashboard' && (
                    <div className="row gap-1 align-items-center my-4">
                        <ColumnsGap className='col-auto' />
                        <p className="col-auto text-uppercase m-0 p-0 fw-medium">Tableau de Bord</p>
                    </div>
                )}
            </div>
        </>
    );
}

export default NavigationBar;