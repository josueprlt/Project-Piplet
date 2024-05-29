import React, { useState } from 'react';
import NavigationBar from "../NavigationBar";
import { BsChatSquareQuote, BsHandThumbsUp, BsHandThumbsUpFill, BsHandThumbsDown, BsHandThumbsDownFill, BsPencilSquare, BsThreeDotsVertical } from "react-icons/bs";
import { HashRouter, Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';

let publications = [
    {
        content: 'Il est aussi peu probable que l’homme soit au centre de l’univers, que l’inverse soit vrai.',
        author: 'El-Cassegrain',
        likes: 187,
        countComments: 10
    },
    {
        content: 'Spécialité locale : gros bédo dans l’local de la cité.',
        author: 'El-Cassegrain',
        likes: 50000,
        countComments: 1000
    },
    {
        content: 'test test 1 2 3',
        author: 'A.I',
        likes: 5000000,
        countComments: 1000000
    }
]

function formatLikes(likes) {
    if (likes >= 1000 && likes < 1000000) {
        return (likes / 1000) + "K";
    }
    else if (likes >= 1000000) {
        return (likes / 1000000) + "M";
    }
    else {
        return likes.toString();
    }
}

function formatComments(comments) {
    if (comments >= 1000 && comments < 1000000) {
        return (comments / 1000) + "K";
    }
    else if (comments >= 1000000) {
        return (comments / 1000000) + "M";
    }
    else {
        return comments.toString();
    }
}


function RenderPublication() {
    const [like, setLike] = useState(false);

    const handleLike = () => {
        setLike(true);
    };

    const handleUnlike = () => {
        setLike(false);
    };

    return (
        <>
            <div className="row py-5 justify-content-between">

                <Carousel className='d-flex d-lg-none p-3 p-sm-5'>
                    <Carousel.Item>
                        <div className='article'>
                            <p>test1</p>
                        </div>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='article'>
                            <p>test1</p>
                        </div>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='article'>
                            <p>test1</p>
                        </div>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                {publications.map((pub) => (
                    <div className="col-4 d-none d-lg-flex justify-content-center">
                        <div className='row article align-items-between'>

                            <Link className='article-link col-auto'>
                                <BsThreeDotsVertical style={{ width: '30px', height: '30px', color: '#104547' }} />
                            </Link>

                            <div className="col-12 px-5 text-center position-relative">

                                <BsChatSquareQuote className='position-absolute top-0' style={{ width: '89px', height: '85px', color: '#F0F0F0', zIndex: '-1', left: '2rem' }} />

                                <p className='article-content'>{pub.content}</p>
                                <span className='article-author'>{pub.author}</span>
                            </div>
                            <div className="article-div col-12">
                                <div className="row w-100 align-items-center">
                                    <div className="col-auto col-lg-6">

                                        <div className="row justify-content-center">
                                            <div className="col-auto">
                                                <div className="row p-2 bg-light rounded-pill">
                                                    <Link onClick={handleLike} className="col-auto link-offset-2 link-underline link-underline-opacity-0 fw-medium ps-0">

                                                        {like === true && <BsHandThumbsUpFill style={{ width: '22px', height: '22px', color: '#104547' }} />}
                                                        {like === false && <BsHandThumbsUp style={{ width: '22px', height: '22px', color: '#104547' }} />}
                                                        {formatLikes(pub.likes)}
                                                    </Link>
                                                    <Link onClick={handleUnlike} className="article-div-like col-auto pe-0">

                                                        {like === true && <BsHandThumbsDown style={{ width: '22px', height: '22px', color: '#104547' }} />}
                                                        {like === false && <BsHandThumbsDownFill style={{ width: '22px', height: '22px', color: '#104547' }} />}
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto col-lg-6">
                                        <Link className="row justify-content-end">
                                            <div className="col-2 p-0">
                                                <BsPencilSquare style={{ width: '25px', height: '25px', color: '#104547' }} />
                                            </div>
                                            <p className='col-10 article-commentaire fw-medium p-0 m-0 ps-1 d-none d-xl-block'>Commentaires({formatComments(pub.countComments)})</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}


export default function AccueilPage() {
    const [valueToggle, setValueToggle] = useState(false);

    return (
        <>
            <main className="container">
                <div className="row justify-content-center justify-content-md-between align-items-center">
                    <div className="col-auto">
                        <h2 className='text-uppercase fw-semibold' style={{ fontSize: '32px', color: '#000000' }}>Tous chaud !</h2>
                        <span className='text-secondary' style={{ fontSize: '20px' }}>#Dernières publications</span>
                    </div>
                    <div className="col-auto">

                        <div className="row">
                            <label class="form-check-label col-auto text-uppercase" for="flexSwitchCheckChecked" style={{ color: valueToggle === false ? '#292E2E' : '#747878' }}>Shorts</label>
                            <div class="form-check form-switch col-auto pe-0">
                                <input
                                    className="form-check-input bg-light"
                                    checked={valueToggle}
                                    onChange={(e) => setValueToggle(e.target.checked)}
                                    type="checkbox"
                                    role="switch"
                                    id="flexSwitchCheckChecked"
                                    style={{ width: '42px', height: '21px' }}
                                />
                            </div>
                            <label class="form-check-label col-auto text-uppercase" for="flexSwitchCheckChecked" style={{ color: valueToggle === true ? '#292E2E' : '#747878' }}>Longs</label>
                        </div>
                    </div>
                </div>

                <RenderPublication />
            </main>
        </>
    );
}