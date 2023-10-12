import { LandingWrapper } from './LandingWrapper'
import { HeroSection } from './ui/HeroSection'
import { EmailSection } from './ui/EmailSection'

export default function IndexPage() {

	return (
		<LandingWrapper>
			<HeroSection />
			<EmailSection />
		</LandingWrapper>
	)
}
