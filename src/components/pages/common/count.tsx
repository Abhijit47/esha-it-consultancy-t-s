import CountUp from 'react-countup'

const Count = ({ number }: { number: number }) => {
  return (
    <>
      <CountUp end={number} autoAnimate={true} />
    </>
  )
}

export default Count
