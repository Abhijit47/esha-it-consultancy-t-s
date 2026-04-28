// import SEO from '@/components/data/seo'
import FooterOne from '@/components/layout/footers/footer-one'
import HeaderOne from '@/components/layout/headers/header/header-one'
import ScrollToTop from '../../common/scroll/scroll-to-top'
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
  return (
    <div>
      {/* <SEO pageTitle="Technology" /> */}
      <HeaderOne />
      <BannerOne />
      <About />
      <ChooseUs />
      <Features />
      <Portfolio />
      <Pricing />
      <WorkArea />
      <Testimonial />
      <Blog />
      <FooterOne />
      <ScrollToTop />
    </div>
  )
}

export default HomeOne
