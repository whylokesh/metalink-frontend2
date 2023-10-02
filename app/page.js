 // import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { ComplexNavbar } from './components/navbar/page';
import { DrawerWithNavigation } from './components/sidebarDrawer/page';
import { CarouselCustomNavigation } from './components/carousel/page';
import { CardDefault } from './components/card/page';
import { FeaturedProducts } from './components/featuredProducts/page';
import { ProfileBlogCard } from './components/profileCard/page';
import { PopularCreators } from './components/popularCreators/page';
import { CreateEarnCard } from './components/createEarnCard/page';
import { TestimonialSection } from './components/testimonialSection/page';
import { FooterWithSocialLinks } from './components/footer/page';

config.autoAddCss = false;

export default function Home() {
  return (
    <>
      <ComplexNavbar/>
      <DrawerWithNavigation/>
      <CarouselCustomNavigation/>
      <FeaturedProducts/>
      <PopularCreators/>
      <CreateEarnCard/> 
      <TestimonialSection/>
      <FooterWithSocialLinks/>
    </>
  );
}
