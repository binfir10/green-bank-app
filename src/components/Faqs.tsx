import { useState } from 'react'

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const faqItems = [
    {
      title: 'What credit score do I need to apply for a credit card?',
      description:
        'The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.',
    },
    {
      title: ' How can I apply for a credit card online?',
      description:
        'To apply for a credit card online, you can visit the website of the credit card issuer or a trusted financial institution. Look for the "Apply Now" or "Get Started" button on the credit card page and follow the instructions to complete the application form. Make sure to provide accurate personal and financial information to increase your chances of approval.',
    },
    {
      title: 'Are there any annual fees associated with the credit card?',
      description:
        'The presence of annual fees depends on the specific credit card. Some credit cards may have an annual fee, while others may not. It is important to carefully review the terms and conditions of the credit card before applying to understand any associated fees.',
    },
    {
      title: 'How long does it take to receive the credit card once approved?',
      description:
        'The time it takes to receive the credit card once approved can vary depending on the credit card issuer. In general, it can take anywhere from a few days to a couple of weeks. Some credit card issuers may offer expedited shipping options for faster delivery.',
    },
    {
      title: ' How can I check my credit card balance and transactions?',
      description:
        'To check your credit card balance and transactions, you can usually do so through the online banking portal or mobile app provided by the credit card issuer. Log in to your account using your credentials and navigate to the section that displays your credit card information. From there, you should be able to view your balance and recent transactions.',
    },
    {
      title: ' What should I do if my credit card is lost or stolen?',
      description:
        'If your credit card is lost or stolen, it is important to take immediate action to protect yourself from unauthorized charges. Contact your credit card issuer as soon as possible to report the loss or theft. They will guide you through the process of canceling the card and issuing a new one. It is also a good idea to monitor your credit card statements for any suspicious activity.',
    },
    {
      title: 'Is my credit card information secure?',
      description:
        'Credit card issuers take various measures to ensure the security of your credit card information. They use encryption technology to protect your data during transmission and storage. Additionally, they may offer fraud protection services and monitor your account for suspicious activity. It is important to follow best practices such as keeping your login credentials confidential and regularly monitoring your credit card statements for any unauthorized charges.',
    },
  ]

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null)
    } else {
      setActiveIndex(index)
    }
  }

  return (
    <section className="faqs-container">
      <h3>FAQs</h3>
      <div className="faqs-card-container">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className={`faqs-card ${activeIndex === index ? 'active' : ''}`}>
            <button
              onClick={() => toggleAccordion(index)}
              className="faqs-title">
              <span>{item.title}</span>
              <span className="faqs-icon">
                {activeIndex === index ? '-' : '+'}
              </span>
            </button>

            <div
              className={`faqs-description ${
                activeIndex === index ? 'show' : 'hide'
              }`}>
              {item.description}
            </div>
          </div>
        ))}
      </div>
      <img src="/assets/dora-faqs.svg" alt="" />
    </section>
  )
}
