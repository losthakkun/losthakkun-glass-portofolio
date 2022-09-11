import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

//* Set the ThemeToggleButton to use motion.div as the base component
const ThemeToggleButton = () => {
	const { toggleColorMode } = useColorMode()

	return (
		<AnimatePresence exitBeforeEnter initial={false}>
			<motion.div
				exit={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.2 }}
				initial={{ y: -20, opacity: 0 }}
				style={{ display: 'inline-block' }}
				key={useColorModeValue('light', 'dark')}
			>
				<IconButton
					onClick={toggleColorMode}
					aria-label="Toggle theme"
					icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
					colorScheme={useColorModeValue('purple', 'orange')}
				></IconButton>
			</motion.div>
		</AnimatePresence>
	)
}

export default ThemeToggleButton
