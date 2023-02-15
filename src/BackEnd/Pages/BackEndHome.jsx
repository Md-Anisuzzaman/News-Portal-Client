import React from 'react';

const BackendHome = () => {
    return (
        <div>
            <div className="row">
                <div className="col-xl-3 col-lg-6">
                    <div className="card mb-3">
                        <div className="card-body">
                            <div className="d-flex fw-bold small mb-3">
                                <span className="flex-grow-1">SITE VISITORS</span>
                                <a href="#/" onClick={(e)=>e.preventDefault()} data-toggle="card-expand" className="text-white text-opacity-50 text-decoration-none"><i className="bi bi-fullscreen" /></a>
                            </div>
                            <div className="row align-items-center mb-2">
                                <div className="col-7">
                                    <h3 className="mb-0">4.2m</h3>
                                </div>
                                <div className="col-5">
                                    <div className="mt-n2" data-render="apexchart" data-type="bar" data-title="Visitors" data-height={30} />
                                </div>
                            </div>
                            <div className="small text-white text-opacity-50 text-truncate">
                                <i className="fa fa-chevron-up fa-fw me-1" /> 33.3% more than last week<br />
                                <i className="far fa-user fa-fw me-1" /> 45.5% new visitors<br />
                                <i className="far fa-times-circle fa-fw me-1" /> 3.25% bounce rate
                            </div>
                        </div>
                        <div className="card-arrow">
                            <div className="card-arrow-top-left" />
                            <div className="card-arrow-top-right" />
                            <div className="card-arrow-bottom-left" />
                            <div className="card-arrow-bottom-right" />
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6">
                    <div className="card mb-3">
                        <div className="card-body">
                            <div className="d-flex fw-bold small mb-3">
                                <span className="flex-grow-1">STORE SALES</span>
                                <a href="#/" onClick={(e)=>e.preventDefault()} data-toggle="card-expand" className="text-white text-opacity-50 text-decoration-none"><i className="bi bi-fullscreen" /></a>
                            </div>
                            <div className="row align-items-center mb-2">
                                <div className="col-7">
                                    <h3 className="mb-0">$35.2K</h3>
                                </div>
                                <div className="col-5">
                                    <div className="mt-n2" data-render="apexchart" data-type="line" data-title="Visitors" data-height={30} />
                                </div>
                            </div>
                            <div className="small text-white text-opacity-50 text-truncate">
                                <i className="fa fa-chevron-up fa-fw me-1" /> 20.4% more than last week<br />
                                <i className="fa fa-shopping-bag fa-fw me-1" /> 33.5% new orders<br />
                                <i className="fa fa-dollar-sign fa-fw me-1" /> 6.21% conversion rate
                            </div>
                        </div>
                        <div className="card-arrow">
                            <div className="card-arrow-top-left" />
                            <div className="card-arrow-top-right" />
                            <div className="card-arrow-bottom-left" />
                            <div className="card-arrow-bottom-right" />
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6">
                    <div className="card mb-3">
                        <div className="card-body">
                            <div className="d-flex fw-bold small mb-3">
                                <span className="flex-grow-1">NEW MEMBERS</span>
                                <a href="#/" onClick={(e)=>e.preventDefault()} data-toggle="card-expand" className="text-white text-opacity-50 text-decoration-none"><i className="bi bi-fullscreen" /></a>
                            </div>
                            <div className="row align-items-center mb-2">
                                <div className="col-7">
                                    <h3 className="mb-0">4,490</h3>
                                </div>
                                <div className="col-5">
                                    <div className="mt-n3 mb-n2" data-render="apexchart" data-type="pie" data-title="Visitors" data-height={45} />
                                </div>
                            </div>
                            <div className="small text-white text-opacity-50 text-truncate">
                                <i className="fa fa-chevron-up fa-fw me-1" /> 59.5% more than last week<br />
                                <i className="fab fa-facebook-f fa-fw me-1" /> 45.5% from facebook<br />
                                <i className="fab fa-youtube fa-fw me-1" /> 15.25% from youtube
                            </div>
                        </div>
                        <div className="card-arrow">
                            <div className="card-arrow-top-left" />
                            <div className="card-arrow-top-right" />
                            <div className="card-arrow-bottom-left" />
                            <div className="card-arrow-bottom-right" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BackendHome;