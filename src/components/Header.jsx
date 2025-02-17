import LogoImg from '../assets/logo.jpg'
function Header() {
  return (
    <header id='main-header'>
        <div id='title'>
            <img src={LogoImg} alt="logo" />
            <h1>Ske Foods</h1>
        </div>
        <nav>
            <button>Cart (0)</button>
        </nav>
    </header>
  )
}

export default Header