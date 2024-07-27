import { animate, useMotionValue } from 'framer-motion'
import { useEffect } from 'react'
import useMeasure from 'react-use-measure'
import { motion } from 'framer-motion'

export default function Companies() {
  const [ref, { width }] = useMeasure()
  const xTranslate = useMotionValue(0)

  useEffect(() => {
    const finalPosition = -width / 2 - 8
    const controls = animate(xTranslate, [0, finalPosition], {
      ease: 'linear',
      duration: 25,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0,
    })
    return controls.stop
  }, [xTranslate, width])

  return (
    <section className="companies-container">
      <motion.div
        className="companies-motion "
        ref={ref}
        style={{ x: xTranslate }}>
        {dataCompanies.map(({ id, image, height, weigth }) => (
          <img
            src={`/assets/${image}`}
            alt="payment"
            className="companies-img"
            key={id}
            height={height}
            width={weigth}
          />
        ))}
      </motion.div>
    </section>
  )
}

const dataCompanies = [
  {
    id: 1,
    image: 'upwork.svg',
    height: 46,
    weigth: 189,
  },
  {
    id: 2,
    image: 'petal.svg',
    height: 42,
    weigth: 164,
  },
  {
    id: 3,
    image: 'rakuten.svg',
    height: 46,
    weigth: 220,
  },
  {
    id: 4,
    image: 'nyt.svg',
    height: 38,
    weigth: 162,
  },
  {
    id: 5,
    image: 'vice.svg',
    height: 35,
    weigth: 197,
  },
  {
    id: 6,
    image: 'dell.svg',
    height: 35,
    weigth: 197,
  },
  {
    id: 7,
    image: 'upwork.svg',
    height: 46,
  },
  {
    id: 8,
    image: 'petal.svg',
    height: 42,
  },
  {
    id: 9,
    image: 'rakuten.svg',
    height: 46,
  },
  {
    id: 10,
    image: 'nyt.svg',
    height: 38,
  },
  {
    id: 11,
    image: 'vice.svg',
    height: 34,
  },
  {
    id: 12,
    image: 'dell.svg',
    height: 35,
    weigth: 197,
  },
]
