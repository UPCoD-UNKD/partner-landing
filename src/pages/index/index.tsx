import { LandingWrapper } from './LandingWrapper'
import { HeroSection } from './ui/HeroSection'
import { EmailSection } from './ui/EmailSection'
// import { QuoteSection } from './ui/QuoteSection'
// import styled from 'styled-components'
import { HowItWorks } from './ui/HowItWorks'
import { Footer } from './ui/Footer'
import { Offer } from './ui/Offer'

// const MarginedQuoteSection = styled(QuoteSection)`
// 	margin-top: 3.125rem;
// `

export default function IndexPage() {

	return (
		<LandingWrapper>
			<HeroSection />
			<EmailSection />
			{/* <QuoteSection title='наші клієнти говорять' quotes={[
				{
					name: 'Igor Komendantov',
					quoteText: 'З партнерською програмою я отримую знижки та пропозиції, які мені допомагають набувати бажаного майже за собівартістю, без накруток.',
					avatarURL: 'https://cdn-icons-png.flaticon.com/128/149/149071.png',
					position: 'Front-end developer'
				},
				{
					name: 'Igor Komendantov',
					quoteText: 'З партнерською програмою я отримую знижки та пропозиції, які мені допомагають набувати бажаного майже за собівартістю, без накруток.',
					avatarURL: 'https://cdn-icons-png.flaticon.com/128/149/149071.png',
					position: 'Front-end developer'
				},
			]} /> */}
			{/* <MarginedQuoteSection title='Наші бізнес партнери говорять' quotes={[
				{
					name: 'Igor Komendantov',
					quoteText: 'З партнерською програмою я отримую знижки та пропозиції, які мені допомагають набувати бажаного майже за собівартістю, без накруток.',
					avatarURL: 'https://cdn-icons-png.flaticon.com/128/149/149071.png',
					position: 'Front-end developer'
				},
				{
					name: 'Igor Komendantov',
					quoteText: 'З партнерською програмою я отримую знижки та пропозиції, які мені допомагають набувати бажаного майже за собівартістю, без накруток.',
					avatarURL: 'https://cdn-icons-png.flaticon.com/128/149/149071.png',
					position: 'Front-end developer'
				},


			]} /> */}
			<Offer />
			<HowItWorks steps={[
				{
					title: 'Автоматичне створення кабінету',
					body: 'Будьте впевнені в своїй успішності з нашим зручним і простим у використанні партнерським кабінетом.'
				},
				{
					title: 'Партнерка - для всіх сайтів',
					body: 'Незалежно від типу або розміру вашого сайту наша партнерська програма відкрита для всіх.'
				},
				{
					title: 'Миттєве підключення',
					body: 'Жодної складної реєстрації або очікування - просто підключіться і почніть отримувати вигоди негайно.'
				},
			]} />
			<Footer />
		</LandingWrapper>
	)
}
