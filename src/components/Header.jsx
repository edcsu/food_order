import LogoImg from '../assets/logo.jpg'
import Button from './UI/Button'
function Header() {
  return (
    <header id='main-header'>
        <div id='title'>
            <img src={LogoImg} alt="logo" />
            <h1>Ske Foods</h1>
        </div>
        <nav>
            <Button textOnly>Cart (0)</Button>
        </nav>
    </header>
  )
}

export default Header