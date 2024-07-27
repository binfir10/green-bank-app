export default function Adventaje() {
  return (
    <div className="adventaje-container">
      <h3>What do we offer?</h3>
      <div className="adventaje-card-container">
        {data.map((item, index) => (
          <div key={index} className="adventaje-card">
            <img src={item.icon} alt={item.title} />
            <div className="adventaje-details">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const data = [
  {
    icon: '/assets/f.svg',
    title: 'Security Guarantee ',
    description: 'Your data and funds will be securely protected.',
  },
  {
    icon: '/assets/f (1).svg',
    title: 'Investing',
    description: 'Your data and funds will be securely protected.',
  },
  {
    icon: '/assets/f (2).svg',
    title: 'Multiple Method',
    description: 'Your data and funds will be securely protected.',
  },
]
