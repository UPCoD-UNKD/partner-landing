import Header from 'widgets/Header/Header'
import Banner from 'widgets/Banner/Banner'
import ParthnerList from 'entities/parthner/ui/ParthnerList'
import { Container } from 'shared/ui/page-layout/Container'
import { LandingWrapper } from './LandingWrapper'
import styled from 'styled-components'

const HeroSection = styled.div`
	background: rgba(32, 32, 32, 1);
	height: 100dvh;
	overflow: hidden;
`

export default function IndexPage() {
	const partn = ['OLX', 'PROM', 'ROZETKA', 'ALLO', 'EVO', 'PROZORRO', 'MODNAKASTA', 'ZAKUPKI.COM.UA', 'asdas', 'dasda', 'dsadada', 'asdsada']

	return (
		<LandingWrapper>
			<HeroSection>
				<Container>
					<Header />
					<Banner />
					<ParthnerList parthners={partn} />
				</Container>
			</HeroSection>

			

		</LandingWrapper>
	)
}
