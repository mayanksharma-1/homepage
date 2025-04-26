import './stylesheets/Navigation.css';

function Navigation(){
    return (
        <nav className="navbar">
            <div className="navbar-brand nav-section">
                <a href="/">My Website</a>
            </div>
            <div className="navbar-menu nav-section">
                <div><a href="/about">About</a></div>
                <div><a href="/contact">Contact</a></div>
            </div>
        </nav>
    )
}

export default Navigation;