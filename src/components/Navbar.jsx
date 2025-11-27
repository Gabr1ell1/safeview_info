import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="sv-navbar">
      <div className="logo">
        <img src={logo}  alt="Logo da SafeView" />
        <span>SafeView</span>
      </div>

      <input type="checkbox" id="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>

      <ul className="menu">
        <a href="/about">Sobre</a>
      </ul>
    </nav>
  )
}
