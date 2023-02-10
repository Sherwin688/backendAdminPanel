import React from "react";
import { Helmet } from "react-helmet";

import Footer from "../../shared/layout/commonAssets/footer";
import SubHeading from "../../shared/layout/commonAssets/subHeading";


export default function Dashboard() {

    return (<>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Dashboard - Crafsmen</title>
        </Helmet>








        <main className="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">

            <SubHeading
                mainApp={'Crafsmen'}
                pageBreadcrumb={'Dashboard'}
                pageTitle={'Crafsmen Dashboard'}
            />

            <div className="container-fluid py-4">
                <div className="row">
                    <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                        <div className="card">
                            <div className="card-body p-3">
                                <div className="row">
                                    <div className="col-8">
                                        <div className="numbers">
                                            <p className="text-sm mb-0 text-capitalize font-weight-bold">Today's Money</p>
                                            <h5 className="font-weight-bolder mb-0">
                                                $53,000
                                                <span className="text-success text-sm font-weight-bolder">+55%</span>
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-4 text-end">
                                        <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                                            <i className="ni ni-money-coins text-lg opacity-10" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                        <div className="card">
                            <div className="card-body p-3">
                                <div className="row">
                                    <div className="col-8">
                                        <div className="numbers">
                                            <p className="text-sm mb-0 text-capitalize font-weight-bold">Today's Users</p>
                                            <h5 className="font-weight-bolder mb-0">
                                                2,300
                                                <span className="text-success text-sm font-weight-bolder">+3%</span>
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-4 text-end">
                                        <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                                            <i className="ni ni-world text-lg opacity-10" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                        <div className="card">
                            <div className="card-body p-3">
                                <div className="row">
                                    <div className="col-8">
                                        <div className="numbers">
                                            <p className="text-sm mb-0 text-capitalize font-weight-bold">New Clients</p>
                                            <h5 className="font-weight-bolder mb-0">
                                                +3,462
                                                <span className="text-danger text-sm font-weight-bolder">-2%</span>
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-4 text-end">
                                        <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                                            <i className="ni ni-paper-diploma text-lg opacity-10" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6">
                        <div className="card">
                            <div className="card-body p-3">
                                <div className="row">
                                    <div className="col-8">
                                        <div className="numbers">
                                            <p className="text-sm mb-0 text-capitalize font-weight-bold">Sales</p>
                                            <h5 className="font-weight-bolder mb-0">
                                                $103,430
                                                <span className="text-success text-sm font-weight-bolder">+5%</span>
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-4 text-end">
                                        <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                                            <i className="ni ni-cart text-lg opacity-10" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-7 mb-lg-0 mb-4">
                        <div className="card">
                            <div className="card-body p-3">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="d-flex flex-column h-100">
                                            <p className="mb-1 pt-2 text-bold">Built by developers</p>
                                            <h5 className="font-weight-bolder">Soft UI Dashboard</h5>
                                            <p className="mb-5">From colors, cards, typography to complex elements, you will find the full documentation.</p>
                                            <a className="text-body text-sm font-weight-bold mb-0 icon-move-right mt-auto" href="/">
                                                Read More
                                                <i className="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 ms-auto text-center mt-5 mt-lg-0">
                                        <div className="bg-gradient-primary border-radius-lg h-100">
                                            <img src="../assets/img/shapes/waves-white.svg" className="position-absolute h-100 w-50 top-0 d-lg-block d-none" alt="waves" />
                                            <div className="position-relative d-flex align-items-center justify-content-center h-100">
                                                <img className="w-100 position-relative z-index-2 pt-4" src="../assets/img/illustrations/rocket-white.png" alt="rocket" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="card h-100 p-3">
                            <div className="overflow-hidden position-relative border-radius-lg bg-cover h-100">
                                <span className="mask bg-gradient-dark"></span>
                                <div className="card-body position-relative z-index-1 d-flex flex-column h-100 p-3">
                                    <h5 className="text-white font-weight-bolder mb-4 pt-2">Work with the rockets</h5>
                                    <p className="text-white">Wealth creation is an evolutionarily recent positive-sum game. It is all about who take the opportunity first.</p>
                                    <a className="text-white text-sm font-weight-bold mb-0 icon-move-right mt-auto" href="/">
                                        Read More
                                        <i className="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <Footer />
            </div>
        </main>
















    </>);
}