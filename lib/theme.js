import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
	global: props => ({
		body: {
			bg: mode('#f0e7db', '#202023')(props)
		}
	})
}

const components = {
	Heading: {
		variants: {
			'section-title': {
				fontSize: 20,
				marginTop: 3,
				marginBottom: 4,
				textUnderlineOffset: 6,
				textDecorationThickness: 4,
				textDecoration: 'underline',
				textDecorationColor: '#525252',
			}
		}
	},
	Link: {
		baseStyle: props => ({
			textUnderlineOffset: 3,
			color: mode('#3d7aed', '#ff63c3')(props),
		})
	}
}

const fonts = {
	heading: "'M PLUS Rounded 1c'"
}

const colors = {
	grassTeal: '#88ccca'
}

const config = {
	initialColorMode: 'dark',
	useSystemColorMode: true,
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
