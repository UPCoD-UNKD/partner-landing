import { Container } from "shared/ui/page-layout/Container"
import Header from "widgets/Header/Header"
import Banner from "./Banner/Banner"
import ParthnerList from "./parthner/ParthnerList"
import styled from "styled-components"

const HeroWrapper = styled.div`
	background: rgba(32, 32, 32, 1);
`
const partn = ['OLX', 'PROM', 'ROZETKA', 'ALLO', 'EVO', 'PROZORRO', 'MODNAKASTA', 'ZAKUPKI.COM.UA', 'asdas', 'dasda', 'dsadada', 'asdsada']

export const HeroSection = () => {
	return (
		<HeroWrapper>
				<Container>
					<Header />
					<Banner />
					<ParthnerList parthners={partn} />
				</Container>
			</HeroWrapper>
	)
}