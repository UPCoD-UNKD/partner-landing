import substract from 'shared/assets/img/subtract.svg'
import done from 'shared/assets/img/done.svg'
import submit from 'shared/assets/img/right_arrow.svg'
import { TextInput } from 'shared/ui/TextInput'
import { Wrapper } from './Wrapper'
import { Popup, PopupIcon, PopupMsg } from './Popup'
import { Title } from './Title'
import { Back } from './Back'
import { Form, Submit } from './Form'
import { Comments } from 'widgets/Coments'
import { Offer } from 'widgets/Offer'
import Header from 'widgets/Header/Header'
import Banner from 'widgets/Banner/Banner'
import ParthnerList from 'entities/parthner/ui/ParthnerList'
import { Container } from 'shared/ui/page-layout/Container'

export default function IndexPage() {
	const partn = ['OLX', 'PROM', 'ROZETKA', 'ALLO', 'EVO', 'PROZORRO', 'MODNAKASTA', 'ZAKUPKI.COM.UA']

	return (
		<Wrapper>
			<div style={{ background: 'rgba(32, 32, 32, 1)' }}>
				<Container>
					<Header />
					<Banner />
					<ParthnerList parthners={partn} />
				</Container>
			</div>

			<Popup>
				<PopupIcon src={done} alt="done" />
				<PopupMsg>
					Дякуємо, що приєднались до нас
				</PopupMsg>
			</Popup>
			<div>
				<Title>
					Перетворіть свій сайт на прибуткове джерело!
				</Title>
				<Back src={substract} alt="icon" />
				<Form action='#' className='Main__form'>
					<TextInput type="email" placeholder="Залиште свій e-mail" />
					<Submit>
						<img src={submit} alt="submit" />
					</Submit>
				</Form>
			</div>

			<Comments
				title='наші клієнти говорять'
			/>

			<Offer />
		</Wrapper>
	)
}
