export default function Footer() {
  return (
    <footer>
      <div className="footer-contacts">
        <div>
          <img src="/assets/logo.svg" alt="" className="header-logo" />
          <p
            style={{
              maxWidth: '280px',
              color: '#ADB2B1',
              fontSize: '16px',
              fontWeight: '300',
            }}>
            Discover the power of our secure and rewarding credit cards
          </p>
        </div>
        <div className="footer-card">
          <div className="footer-items">
            <h4>About us</h4>
            <div>
              {about.map((item: string) => (
                <p>{item}</p>
              ))}
            </div>
          </div>
          <div className="footer-items">
            <h4>Products</h4>
            <div>
              {products.map((item: string) => (
                <p>{item}</p>
              ))}
            </div>
          </div>
          <div className="footer-items">
            <h4>Userful Links</h4>
            <div>
              {links.map((item: string) => (
                <p>{item}</p>
              ))}
            </div>
          </div>
          <div className="footer-items">
            <h4>Social</h4>
            <div>
              {social.map((item: string) => (
                <p>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copr">
        <span>copyright 2023 DoraDesign All Rights Reserved</span>
        <span>This page uses cookies. See cookies details here </span>
      </div>
    </footer>
  )
}

const about = ['Inventors', 'Features', 'Booke a demo', 'Security']

const products = ['Credits Cards', 'Gift Cards', 'Savings accounts', 'NFT']

const links = ['Free rewards', 'Documentation', 'Affiliate program']

const social = ['Changelog', 'License', 'Site Maps', 'News']
