export default function Info() {
  return (
    <div className="info-container">
      {data.map(item => (
        <div className="info-item-container">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  )
}

const data = [
  {
    title: '16y',
    description: 'Experience',
  },
  {
    title: '250+',
    description: 'Merchant Partner',
  },
  {
    title: '+18',
    description: 'Years of Experience',
  },
  {
    title: '10.2k+',
    description: 'Worldwide Clients',
  },
]
