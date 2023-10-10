import Header from 'widgets/Header/Header'
import Banner from 'widgets/Banner/Banner'
import ParthnerList from 'entities/parthner/ui/ParthnerList'
import { Container } from 'shared/ui/page-layout/Container'
import { LandingWrapper } from './LandingWrapper'

export default function IndexPage() {
	const partn = ['OLX', 'PROM', 'ROZETKA', 'ALLO', 'EVO', 'PROZORRO', 'MODNAKASTA', 'ZAKUPKI.COM.UA', 'asdas', 'dasda', 'dsadada', 'asdsada']

	return (
		<LandingWrapper>
			<div style={{ background: 'rgba(32, 32, 32, 1)' }}>
				<Container>
					<Header />
					<Banner />
					<ParthnerList parthners={partn} />
				</Container>
			</div>

		</LandingWrapper>
	)
}
