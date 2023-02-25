import { Link } from 'react-router-dom';

const BackendSideBar = () => {
    function toggle_list(e) {
        e.preventDefault();
        document.querySelectorAll('.menu-submenu').forEach(i => i.classList.remove('d-block'))
        e.currentTarget.nextElementSibling.classList.toggle('d-block');
    }

    function toggle_side_bar() {
        let app = document.getElementById('app');

        if (window.innerWidth < 768) {
            app.classList.remove('app-sidebar-collapsed');
            app.classList.remove('app-sidebar-toggled');

            if (app.classList.contains('app-sidebar-mobile-collapsed')) {
                app.classList.add('app-sidebar-mobile-toggled');
                app.classList.remove('app-sidebar-mobile-collapsed');
            }
            else if (app.classList.contains('app-sidebar-mobile-toggled')) {
                app.classList.remove('app-sidebar-mobile-toggled');
                app.classList.add('app-sidebar-mobile-collapsed');
            } else {
                app.classList.add('app-sidebar-mobile-toggled')
            }
        }
    }

    return (
        < >
            <div id="sidebar" className="app-sidebar">
                <div className="app-sidebar-content" data-scrollbar="true" data-height="100%">
                    <div className="menu">
                        <div className="menu-header d-flex justify-content-between">
                            <span>
                                Navigation
                            </span>
                            <i onClick={toggle_side_bar} className='fa fa-close d-md-none'></i>
                        </div>
                        <div className="menu-item">
                            <a href="#/dashboard" className="menu-link">
                                <span className="menu-icon"><i className="fa fa-gauge" /></span>
                                <span className="menu-text">Dashboard</span>
                            </a>
                        </div>
                        <div className="menu-item">
                            <a href="#/dashboard/all-message" className="menu-link">
                                <span className="menu-icon"><i className="fa-solid fa-message" /></span>
                                <span className="menu-text">Messages</span>
                            </a>
                        </div>
                        <div className="menu-item has-sub">
                            <a href="#/" onClick={(e) => { toggle_list(e) }} className="menu-link">
                                <span className="menu-icon">
                                    <i className="fa fa-envelope" />
                                </span>
                                <span className="menu-text">Email</span>
                                <span className="menu-caret">
                                    <b className="fa fa-angle-down" />
                                </span>
                            </a>
                            <div className="menu-submenu">
                                <div className="menu-item">
                                    <a href="email_inbox.html" className="menu-link">
                                        <span className="menu-text">Inbox</span>
                                    </a>
                                </div>
                                <div className="menu-item">
                                    <a href="email_compose.html" className="menu-link">
                                        <span className="menu-text">Compose</span>
                                    </a>
                                </div>
                                <div className="menu-item">
                                    <a href="email_detail.html" className="menu-link">
                                        <span className="menu-text">Detail</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="menu-item has-sub">
                            <a href="#/" onClick={(e) => { toggle_list(e) }} className="menu-link">
                                <span className="menu-icon">
                                    <i className="fa fa-gear" />
                                </span>
                                <span className="menu-text">News Management</span>
                                <span className="menu-caret">
                                    <b className="fa fa-angle-down" />
                                </span>
                            </a>
                            <div className="menu-submenu">
                                <div className="menu-item">
                                    <Link to="/dashboard/news/addnews" className="menu-link">
                                        <span className="menu-text">Create News</span>
                                    </Link>
                                </div>
                                <div className="menu-item">
                                    <Link to="/dashboard/news/editnews" className="menu-link">
                                        <span className="menu-text">Edit News</span>
                                    </Link>
                                </div>
                                <div className="menu-item">
                                    <a href="email_inbox.html" className="menu-link">
                                        <span className="menu-text">News Category</span>
                                    </a>
                                </div>
                                <div className="menu-item">
                                    <a href="email_compose.html" className="menu-link">
                                        <span className="menu-text">News Sub Category</span>
                                    </a>
                                </div>
                                <div className="menu-item">
                                    <a href="email_detail.html" className="menu-link">
                                        <span className="menu-text">News list</span>
                                    </a>
                                </div>
                                <div className="menu-item">
                                    <a href="email_detail.html" className="menu-link">
                                        <span className="menu-text">Brand</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="menu-item has-sub">
                            <a href="#/" onClick={(e) => { toggle_list(e) }} className="menu-link">
                                <span className="menu-icon">
                                    <i className="fa fa-gear" />
                                </span>
                                <span className="menu-text">User Management</span>
                                <span className="menu-caret">
                                    <b className="fa fa-angle-down" />
                                </span>
                            </a>
                            <div className="menu-submenu">
                                <div className="menu-item">
                                    <Link to="/dashboard/user/allusers" className="menu-link">
                                        <span className="menu-text">All User</span>
                                    </Link>
                                </div>
                                <div className="menu-item">
                                    <Link to="/dashboard/user/adduser" className="menu-link">
                                        <span className="menu-text">Create User</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="menu-item">
                            <a href="#/" className="menu-link">
                                <span className="menu-icon"><i className="fa fa-globe" /></span>
                                <span className="menu-text">Website</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default BackendSideBar;