export default function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-card-container">
        <h2 className="hero-title">
          Discover the Perfect <br />
          <span>
            Credit Card{' '}
            <img
              src="/assets/vector-hero.svg"
              alt=""
              className="hero-title-vector"
            />
          </span>{' '}
          for You
        </h2>
        <p>
          Discover the power of our secure and rewarding credit cards. Explore
          our range of credit cards and take control of your finances today.
        </p>
        <button className="button-primary">
          Get Started{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-move-right">
            <path d="M18 8L22 12L18 16" />
            <path d="M2 12H22" />
          </svg>
        </button>
        <div className="hero-framer">
          <img src="/assets/Frame-hero.svg" alt="" />
          <div className="hero-framer-content">
            <span>10.2 k+ </span>
            <p>Active users around the wordls</p>
          </div>
        </div>
      </div>
      <img src="/assets/card-hero.svg" alt="" className="hero-img" />
    </section>
  )
}
