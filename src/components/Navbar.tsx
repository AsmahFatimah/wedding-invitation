import Logo from '../assets/a3cc30217ece833438e78a00b74d1fe5.jpg'

const Navbar = () => (
    <>
        <nav className="navbar customNav">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src= {Logo} alt="Bootstrap" width="110" height="60"/>
                </a>
            </div>
        </nav>
    </>
);

export default Navbar
