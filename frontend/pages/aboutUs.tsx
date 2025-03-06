import CTASection from '@/components/landingPage/CTASection';
import HeroSection from '../components/aboutUsPage/heroSection'
import SecondSection from '../components/aboutUsPage/secondSection';
import TeamsSection from '@/components/aboutUsPage/teamsSection';
import WhoWeAreSection from '@/components/aboutUsPage/whoWeAreSection';
import MessageFromMDSection from '@/components/aboutUsPage/messageFromMDSection';
const AboutUs = () => {
    return <div>
            <HeroSection/>
            <SecondSection/>
            <WhoWeAreSection/>
            <MessageFromMDSection/>
            <TeamsSection/>
            <CTASection/>
        </div>;
    }

export default AboutUs;     