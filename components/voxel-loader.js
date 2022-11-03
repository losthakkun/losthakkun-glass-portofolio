import * as REACT from 'react';
import {Box, Spinner} from '@chakra-ui/react';

export const VoxSpinner = () => (
	<Spinner
		size="xl"
		position="absolute"
		left="50%"
		top="50%"
		ml="calc(0px - var(--spinner-size) / 2)"
		mt="calc(0px - var(--spinner-size))"
	/>
);

export const VoxContainer = REACT.forwardRef(({children}, ref) => {
	return (
		<Box
			ref={ref}
			className="voxel-demo"
			m="auto"
			mt={['-20px', '-60px', '-120px']}
			mb={['-40px', '-140px', '-200px']}
			w={[280, 480, 640]}
			h={[280, 480, 640]}
			position="relative"
			zIndex={0}
		>
			{children}
		</Box>
	);
});

const Loader = () => {
	return (
		<VoxContainer>
			<VoxSpinner />
		</VoxContainer>
	);
};

export default Loader;
