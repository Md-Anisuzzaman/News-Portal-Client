import React from 'react';

const Dashboard = () => {
    return (
        <div id="app" class="app">
            <div id="header" class="app-header">

                <div class="desktop-toggler">
                    <button type="button" class="menu-toggler" data-toggle-class="app-sidebar-collapsed"
                        data-dismiss-class="app-sidebar-toggled" data-toggle-target=".app">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </button>
                </div>


                <div class="mobile-toggler">
                    <button type="button" class="menu-toggler" data-toggle-class="app-sidebar-mobile-toggled"
                        data-toggle-target=".app">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </button>
                </div>


                <div class="brand">
                    <a href="index.html" class="brand-logo">
                        <span class="brand-img">
                            <span class="brand-img-text text-theme">H</span>
                        </span>
                        <span class="brand-text">HUD ADMIN</span>
                    </a>
                </div>


                <div class="menu">
                    <div class="menu-item dropdown">
                        <a href="#" data-toggle-class="app-header-menu-search-toggled" data-toggle-target=".app"
                            class="menu-link">
                            <div class="menu-icon"><i class="bi bi-search nav-icon"></i></div>
                        </a>
                    </div>
                    <div class="menu-item dropdown dropdown-mobile-full">
                        <a href="#" data-bs-toggle="dropdown" data-bs-display="static" class="menu-link">
                            <div class="menu-icon"><i class="bi bi-bell nav-icon"></i></div>
                            <div class="menu-badge bg-theme"></div>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end mt-1 w-300px fs-11px pt-1">
                            <h6 class="dropdown-header fs-10px mb-1">NOTIFICATIONS</h6>
                            <div class="dropdown-divider mt-1"></div>
                            <a href="#" class="d-flex align-items-center py-10px dropdown-item text-wrap">
                                <div class="fs-20px">
                                    <i class="bi bi-bag text-theme"></i>
                                </div>
                                <div class="flex-1 flex-wrap ps-3">
                                    <div class="mb-1 text-white">NEW ORDER RECEIVED ($1,299)</div>
                                    <div class="small">JUST NOW</div>
                                </div>
                                <div class="ps-2 fs-16px">
                                    <i class="bi bi-chevron-right"></i>
                                </div>
                            </a>

                            <hr class="bg-white-transparent-5 mb-0 mt-2" />
                            <div class="py-10px mb-n2 text-center">
                                <a href="#" class="text-decoration-none fw-bold">SEE ALL</a>
                            </div>
                        </div>
                    </div>
                    <div class="menu-item dropdown dropdown-mobile-full">
                        <a href="#" data-bs-toggle="dropdown" data-bs-display="static" class="menu-link">
                            <div class="menu-img online">
                                <img src="Assets/hud/assets/img/user/profile.jpg" alt="Profile" height="60" />
                            </div>
                            <div class="menu-text d-sm-block d-none"><span class="__cf_email__"
                                data-cfemail="dda8aeb8afb3bcb0b89dbcbebeb2a8b3a9f3beb2b0">Anisuzzaman</span>
                            </div>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end me-lg-3 fs-11px mt-1">
                            <a class="dropdown-item d-flex align-items-center" href="profile.html">PROFILE <i
                                class="bi bi-person-circle ms-auto text-theme fs-16px my-n1"></i></a>
                            <a class="dropdown-item d-flex align-items-center" href="email_inbox.html">INBOX <i
                                class="bi bi-envelope ms-auto text-theme fs-16px my-n1"></i></a>
                            <a class="dropdown-item d-flex align-items-center" href="calendar.html">CALENDAR <i
                                class="bi bi-calendar ms-auto text-theme fs-16px my-n1"></i></a>
                            <a class="dropdown-item d-flex align-items-center" href="settings.html">SETTINGS <i
                                class="bi bi-gear ms-auto text-theme fs-16px my-n1"></i></a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item d-flex align-items-center" href="page_login.html">LOGOUT <i
                                class="bi bi-toggle-off ms-auto text-theme fs-16px my-n1"></i></a>
                        </div>
                    </div>
                </div>


                <form class="menu-search" method="POST" name="header_search_form">
                    <div class="menu-search-container">
                        <div class="menu-search-icon"><i class="bi bi-search"></i></div>
                        <div class="menu-search-input">
                            <input type="text" class="form-control form-control-lg" placeholder="Search menu..." />
                        </div>
                        <div class="menu-search-icon">
                            <a href="#" data-toggle-class="app-header-menu-search-toggled" data-toggle-target=".app"><i
                                class="bi bi-x-lg"></i></a>
                        </div>
                    </div>
                </form>

            </div>


            <div id="sidebar" class="app-sidebar">

                <div class="app-sidebar-content" data-scrollbar="true" data-height="100%">

                    <div class="menu">
                        <div class="menu-header">Navigation</div>
                        <div class="menu-item">
                            <a href="index.html" class="menu-link">
                                <span class="menu-icon"><i class="bi bi-cpu"></i></span>
                                <span class="menu-text">Dashboard</span>
                            </a>
                        </div>
                        <div class="menu-item has-sub">
                            <a href="#" class="menu-link">
                                <span class="menu-icon">
                                    <i class="bi bi-envelope"></i>
                                </span>
                                <span class="menu-text">Email</span>
                                <span class="menu-caret"><b class="caret"></b></span>
                            </a>
                            <div class="menu-submenu">
                                <div class="menu-item">
                                    <a href="email_inbox.html" class="menu-link">
                                        <span class="menu-text">Inbox</span>
                                    </a>
                                </div>
                                <div class="menu-item">
                                    <a href="email_compose.html" class="menu-link">
                                        <span class="menu-text">Compose</span>
                                    </a>
                                </div>
                                <div class="menu-item">
                                    <a href="email_detail.html" class="menu-link">
                                        <span class="menu-text">Detail</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div id="content" class="app-content">

                <div class="container">
                    <h1>CONTENT</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ex ab itaque iure accusamus? Harum, ex aliquid. Neque est, velit corrupti laborum beatae nihil, esse temporibus nobis maiores cupiditate facilis!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ex ab itaque iure accusamus? Harum, ex aliquid. Neque est, velit corrupti laborum beatae nihil, esse temporibus nobis maiores cupiditate facilis!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ex ab itaque iure accusamus? Harum, ex aliquid. Neque est, velit corrupti laborum beatae nihil, esse temporibus nobis maiores cupiditate facilis!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ex ab itaque iure accusamus? Harum, ex aliquid. Neque est, velit corrupti laborum beatae nihil, esse temporibus nobis maiores cupiditate facilis!
                    <br /> <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ex ab itaque iure accusamus? Harum, ex aliquid. Neque est, velit corrupti laborum beatae nihil, esse temporibus nobis maiores cupiditate facilis!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ex ab itaque iure accusamus? Harum, ex aliquid. Neque est, velit corrupti laborum beatae nihil, esse temporibus nobis maiores cupiditate facilis!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ex ab itaque iure accusamus? Harum, ex aliquid. Neque est, velit corrupti laborum beatae nihil, esse temporibus nobis maiores cupiditate facilis!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ex ab itaque iure accusamus? Harum, ex aliquid. Neque est, velit corrupti laborum beatae nihil, esse temporibus nobis maiores cupiditate facilis!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ex ab itaque iure accusamus? Harum, ex aliquid. Neque est, velit corrupti laborum beatae nihil, esse temporibus nobis maiores cupiditate facilis!</p>

                </div>

            </div>

            <a href="#" data-toggle="scroll-to-top" class="btn-scroll-top fade"><i class="fa fa-arrow-up"></i></a>

        </div>

    );
};

export default Dashboard;