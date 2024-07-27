export default function Navbar() {
  return (
    <header>
      <img src="/assets/logo.svg" alt="" className="header-logo" />
      <nav>
        <a href="#">Why us</a>
        <a href="#">Services</a>
        <a href="#">Our Process</a>
        <a href="#">Payments</a>
        <a href="#">FAQs</a>
      </nav>
      <button className="header-button">Contact</button>
      <img src="/assets/dora-header.svg" alt="" className="dora-header" />
    </header>
  )
}
