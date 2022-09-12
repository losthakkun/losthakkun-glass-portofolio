import {motion} from 'framer-motion';
import {chakra, shouldForwardProp} from '@chakra-ui/react';

//* Set the chakra component to use motion.div as the base component
const StyledDiv = chakra(motion.div, {
	shouldForwardProp: prop => {
		return shouldForwardProp(prop) || prop === 'transition';
	},
});

//* Define section to receve the props and pass them to the StyledDiv component
const Section = ({children, delay = 0}) => (
	<StyledDiv
		mb={6}
		animate={{y: 0, opacity: 1}}
		initial={{y: 10, opacity: 0}}
		transition={{duration: 0.8, delay}}
	>
		{children}
	</StyledDiv>
);

export default Section;
