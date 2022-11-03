import NextLink from 'next/link';
import {Heading, Box, Image, Link, Badge} from '@chakra-ui/react';
import {ChevronRightIcon} from '@chakra-ui/icons';

//* Set title component
export const Title = ({children}) => (
	<Box>
		<NextLink href="/works" passHref>
			<Link>Works</Link>
		</NextLink>
		<span>
			{' '}
			<ChevronRightIcon />{' '}
		</span>
		<Heading display="inline-block" as="h3" fontSize={20} mb={4}>
			{children}
		</Heading>
	</Box>
);

//* Set image component
export const WorkImage = ({src, alt}) => (
	<Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
);

//* Set badge component
export const Meta = ({children}) => (
	<Badge colorScheme="green" mr={2}>
		{children}
	</Badge>
);
