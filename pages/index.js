import {Box, chakra, Container, Heading, Image, Link, useColorModeValue} from '@chakra-ui/react';
import Paragraph from '../components/paragraph';
import Section from '../components/section';
import NextLink from 'next/link';

const ProfileImage = chakra(Image, {
	shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop),
});

const Page = () => {
	return (
		<Container>
			<Box
				p={3}
				mb={6}
				borderRadius="lg"
				textAlign="center"
				css={{backdropFilter: 'blur(10px)'}}
				bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
			>
				Hello, I&apos;m a full-stack developer based on Mexico City.
			</Box>

			<Box display={{md: 'flex'}}>
				<Box flexGrow={1}>
					<Heading as="h2" variant="page-title">
						Aleandro Núñez Segoviano
					</Heading>
					<p>Developer, designer and tech enthusiast.</p>
				</Box>
				<Box ml={{md: 6}} flexShrink={0} textAlign="center" mt={{base: 4, md: 0}}>
					<Box
						w="100px"
						h="100px"
						borderWidth={2}
						overflow="hidden"
						borderRadius="full"
						borderStyle="solid"
						display="inline-block"
						borderColor="whiteAlpha.800"
					>
						<ProfileImage
							width="100%"
							height="100%"
							alt="Profile image"
							borderRadius="full"
							src="/images/losthakkun.png"
						/>
					</Box>
				</Box>
			</Box>

			<Section delay={0.2}>
				<Heading as="h3" variant="section-title">
					About me
				</Heading>
				<Paragraph>
					I&apos;m a full-stack developer with a passion for design and technology. I&apos;m
					cuurious about everything, I love to learn new things and I&apos;m always looking
					for new challenges.
				</Paragraph>
				<Paragraph>
					I&apos;m currently working as a full-stack developer at{' '}
					<NextLink href="https://www.voxpop.com.mx/" passHref scroll={false}>
						<Link>VoxPop</Link>
					</NextLink>
					. As part of a multidisciplinary team in charge of maintaining and
					modernizing the technological and digital part of the company
					and at the same time incorporating new tools, products, b2b and
					b2c solutions.
				</Paragraph>
				<Paragraph>
					I&apos;m also a freelance developer, I&apos;ve worked with clients on
					different projects, from web applications to mobile apps. Developing
					solutions that meet the needs of the project and fulfilling the client&apos;s
					objectives and the possibilities of improving their expectations.
					The projects take into account usability, available resources, scalability,
					analytics and continuous integration.
				</Paragraph>
			</Section>
		</Container>
	);
};

export default Page;
