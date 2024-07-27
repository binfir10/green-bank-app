export default function CreditCard() {
  return (
    <section className="credit-container">
      <div className="credit-card-container">
        <h3>
          Design your personalized <br />
          credit card
        </h3>
        <p>
          You have the freedom to personalize the design of your credit card,
          ensuring a truly unique experience that makes you feel extraordinary
        </p>
        <button className="button-primary">
          Get Create New Card{' '}
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
      </div>
      <img src="/assets/card-credit.svg" alt="" className="credit-img" />
      <img src="/assets/dora-credit.svg" alt="" className="dora-credit" />
    </section>
  )
}
