import React from 'react';

const BackendHeader = () => {
    function toggle_side_bar() {
        let app = document.getElementById('app');
        if (app.classList.contains('app-sidebar-collapsed')) {
            app.classList.add('app-sidebar-toggled');
            app.classList.remove('app-sidebar-collapsed');
        }
        else if (app.classList.contains('app-sidebar-toggled')) {
            app.classList.remove('app-sidebar-toggled');
            app.classList.add('app-sidebar-collapsed');
        }

        if (window.innerWidth < 768) {
            if (app.classList.contains('app-sidebar-mobile-collapsed')) {
                app.classList.add('app-sidebar-mobile-toggled');
                app.classList.remove('app-sidebar-mobile-collapsed');
            }
            else if (app.classList.contains('app-sidebar-mobile-toggled')) {
                app.classList.remove('app-sidebar-mobile-toggled');
                app.classList.add('app-sidebar-mobile-collapsed');
            } else {
                app.classList.add('app-sidebar-mobile-collapsed')
            }

        } else {
            app.classList.remove('app-sidebar-mobile-collapsed');
            app.classList.remove('app-sidebar-mobile-toggled');
        }
    }
    return (
        <>
            <div id="header" className="app-header">
                <div className="desktop-toggler">
                    <button
                        type="button"
                        className="menu-toggler"
                        onClick={toggle_side_bar}
                    >
                        <span className="bar" />
                        <span className="bar" />
                        <span className="bar" />
                    </button>
                </div>

                <div className="mobile-toggler">
                    <button
                        type="button"
                        className="menu-toggler"
                        onClick={toggle_side_bar}
                    >
                        <span className="bar" />
                        <span className="bar" />
                        <span className="bar" />
                    </button>
                </div>
                <div className="brand">
                    <a href="/" className="brand-logo">
                        <span className="brand-img">
                            <span className="brand-img-text text-theme">N</span>
                        </span>
                        <span className="brand-text">News</span>
                    </a>
                </div>

                <div className="menu-search-input w-25 mt-1">
                    <input type="text" className="form-control form-control-lg" placeholder="Search menu..." />
                </div>

                <div className="menu">
                    <div className="menu-item dropdown">
                        <a
                            href="#/"
                            data-toggle-class="app-header-menu-search-toggled"
                            data-toggle-target=".app"
                            className="menu-link"
                        >
                            <div className="menu-icon">
                                <i className="bi bi-search nav-icon" />
                            </div>
                        </a>
                    </div>
                    <div className="menu-item dropdown dropdown-mobile-full">
                        <a
                            href="#/"
                            data-bs-toggle="dropdown"
                            data-bs-display="static"
                            className="menu-link"
                        >
                            <div className="menu-icon">
                                <i className="bi bi-bell nav-icon" />
                            </div>
                            <div className="menu-badge bg-theme" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end mt-1 w-300px fs-11px pt-1">
                            <h6 className="dropdown-header fs-10px mb-1">NOTIFICATIONS</h6>
                            <div className="dropdown-divider mt-1" />
                            <a
                                href="#/"
                                className="d-flex align-items-center py-10px dropdown-item text-wrap"
                            >
                                <div className="fs-20px">
                                    <i className="bi bi-bag text-theme" />
                                </div>
                                <div className="flex-1 flex-wrap ps-3">
                                    <div className="mb-1 text-white">NEW ORDER RECEIVED ($1,299)</div>
                                    <div className="small">JUST NOW</div>
                                </div>
                                <div className="ps-2 fs-16px">
                                    <i className="bi bi-chevron-right" />
                                </div>
                            </a>
                            <hr className="bg-white-transparent-5 mb-0 mt-2" />
                            <div className="py-10px mb-n2 text-center">
                                <a href="#/" className="text-decoration-none fw-bold">
                                    SEE ALL
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="menu-item dropdown dropdown-mobile-full">
                        <a
                            href="#/"
                            data-bs-toggle="dropdown"
                            data-bs-display="static"
                            className="menu-link"
                        >
                            <div className="menu-img online">
                                <img src="/Assets/img/user/profile.jpg" alt="Profile" height={60} />
                            </div>
                            <div className="menu-text d-sm-block d-none">
                                <span
                                    className="__cf_email__"
                                    data-cfemail="dda8aeb8afb3bcb0b89dbcbebeb2a8b3a9f3beb2b0"
                                >
                                    John Doe
                                </span>
                            </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end me-lg-3 fs-11px mt-1">
                            <a
                                className="dropdown-item d-flex align-items-center"
                                href="profile.html"
                            >
                                PROFILE{" "}
                                <i className="bi bi-person-circle ms-auto text-theme fs-16px my-n1" />
                            </a>
                            <a
                                className="dropdown-item d-flex align-items-center"
                                href="email_inbox.html"
                            >
                                INBOX{" "}
                                <i className="bi bi-envelope ms-auto text-theme fs-16px my-n1" />
                            </a>
                            <a
                                className="dropdown-item d-flex align-items-center"
                                href="calendar.html"
                            >
                                CALENDAR{" "}
                                <i className="bi bi-calendar ms-auto text-theme fs-16px my-n1" />
                            </a>
                            <a
                                className="dropdown-item d-flex align-items-center"
                                href="settings.html"
                            >
                                SETTINGS{" "}
                                <i className="bi bi-gear ms-auto text-theme fs-16px my-n1" />
                            </a>
                            <div className="dropdown-divider" />
                            <a
                                className="dropdown-item d-flex align-items-center"
                                href="page_login.html"
                            >
                                LOGOUT{" "}
                                <i className="bi bi-toggle-off ms-auto text-theme fs-16px my-n1" />
                            </a>
                        </div>
                    </div>
                </div>
                <form className="menu-search" method="POST" name="header_search_form">
                    <div className="menu-search-container">
                        <div className="menu-search-icon">
                            <i className="bi bi-search" />
                        </div>
                        <div className="menu-search-input">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Search menu..."
                            />
                        </div>
                        <div className="menu-search-icon">
                            <a
                                href="#/"
                                data-toggle-class="app-header-menu-search-toggled"
                                data-toggle-target=".app"
                            >
                                <i className="bi bi-x-lg" />
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default BackendHeader;