import { ThemeProvider as StyledProvider } from 'styled-components'
import { PropsWithChildren } from 'react'
import { GlobalStyle } from './GlobalStyles'

export const ThemeProvider = ({ children }: PropsWithChildren) => {
	const theme = {}

	return (
		<StyledProvider theme={theme}>
			<GlobalStyle />
			{children}
		</StyledProvider>
	)
}