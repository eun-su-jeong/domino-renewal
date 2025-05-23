import './Header.scss';
import logo from '../images/logo.png';
import cartIcon from '../images/ico-cart.png';
const Header = () => {
    return (
        <header className="header">
            <h1 className={'header__logo'}>
                <a href={'/'}>
                    <img src={logo} alt={'도미노 로고'} />
                </a>
            </h1>
            <div className={'header__cart'}>
                <a href={'/cart'}>
                    <img src={cartIcon} alt={'장바구니'} />
                    <span className={'header__cart-count'}>1</span>
                </a>
            </div>
        </header>
    )
}

export default Header;