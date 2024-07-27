export default function Testimonials() {
  return (
    <section className="testimonial-container">
      {testimonial.map((item, index) => (
        <article key={index} className="testimonial-card">
          <img src="/assets/comillas.svg" alt="" className="testimonial-img" />

          <p>{item.quote}</p>

          <div className="testimonial-user">
            <img src={item.image} alt="" />
            <div className="testimonial-user-content">
              <h4>{item.name}</h4>
              <span>{item.title}</span>
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}

const testimonial = [
  {
    name: 'Hadid Khan',
    title: 'UIUX Designer',
    image: '/assets/Ellipse0.svg',
    quote:
      '"Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings."',
  },
  {
    name: 'Wade Warren',
    title: 'Web Designer',
    image: '/assets/Ellipse1.svg',
    quote:
      '"It s is both attractive and highly adaptable. Its exactly what I ve been looking forefinitely wo lorem ipsum dolorth the investment."',
  },
  {
    name: 'Jenny Wilson',
    title: 'Trust Administrator',
    image: '/assets/Ellipse2.svg',
    quote:
      '"I am really satisfied with it. I m good to go. It really saves me time and effort. It s is exactly what our business has been lacking. "',
  },
]
