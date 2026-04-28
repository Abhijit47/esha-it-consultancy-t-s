// import SEO from '@/components/data/seo'
import About from './about'
import BannerOne from './banner'
import Blog from './blog'
import ChooseUs from './choose-us'
import Features from './features'
import Portfolio from './portfolio'
import Pricing from './pricing'
import Testimonial from './testimonial'
import WorkArea from './work'

const HomeOne = () => {
  // function handleMouseEnterTitle() {
  //   // Implement any logic you want when the mouse enters the title
  //   console.log('Mouse entered the title area')
  // }

  // function handleMouseLeaveTitle() {
  //   // Implement any logic you want when the mouse leaves the title
  //   console.log('Mouse left the title area')
  // }

  return (
    <main>
      {/* <SEO pageTitle="Technology" /> */}
      {/* <HeaderOne /> */}
      <BannerOne />
      <About />
      <ChooseUs />
      <Features />
      <Portfolio />
      <Pricing />
      <WorkArea />
      <Testimonial />
      <Blog />
      {/* <FooterOne /> */}
      {/* <ScrollToTop /> */}
      {/* <CustomCursor /> */}
    </main>
  )
}

export default HomeOne
