import logo from '../assets/logo.png';

const HeaderComponent = () => {
    return (
        <header>
            <div className="header-container">
                <div className="logo">
                    <img src={logo} alt="Logo"/>
                </div>
            </div>
        </header>
    )
}

export default HeaderComponent;