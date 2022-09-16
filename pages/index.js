import {Box, chakra, Container, Heading, Image, Link, useColorModeValue} from '@chakra-ui/react';
import NextLink from 'next/link';

import { BioSection, BioYear } from '../components/bio';
import Paragraph from '../components/paragraph';
import Section from '../components/section';

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
					curious about everything, I love to learn new things, and I&apos;m always looking
					for new challenges.
				</Paragraph>
				<Paragraph>
					I&apos;m currently working as a full-stack developer at{' '}
					<NextLink href="https://www.voxpop.com.mx/" passHref scroll={false}>
						<Link target="_blank">VoxPop</Link>
					</NextLink>
					. As part of a multidisciplinary team in charge of maintaining and
					modernizing the technological and digital part of the company
					and at the same time incorporating new tools, products, b2b and
					b2c solutions.
				</Paragraph>
				<Paragraph>
					I&apos;m also working as a freelance developer, I&apos;ve worked with clients on
					different projects, from web applications to mobile apps. Developing
					solutions that meet the needs of the project and fulfilling the client&apos;s
					objectives and the possibilities of improving their expectations.
					The projects take into account usability, available resources, scalability,
					analytics and continuous integration.
				</Paragraph>
			</Section>

			<Section delay={0.2}>
				<Heading as="h3" variant="section-title">
					Bio
				</Heading>
				<BioSection>
					<BioYear>1988</BioYear>
					<br />
					Born in CDMX, México.
				</BioSection>
				<BioSection>
					<BioYear>2013</BioYear>
					<br />
					I started working as a Support Technician on site at{' '}
					<NextLink href="https://www.voxpop.com.mx/" passHref scroll={false}>
						<Link target="_blank">VoxPop</Link>
					</NextLink>.
					Collaborating in Assembly, configuration, installation, and
					maintenance of dedicated equipment for music on wholesale and retail stores.
				</BioSection>
				<BioSection>
					<BioYear>2017</BioYear>
					<br />
					I was promoted to the development and IT area to collaborate in the
					development of new technologies in software and hardware to offer
					customized solutions to our clients.
				</BioSection>
				<BioSection>
					<BioYear>2019 to present</BioYear>
					<br />
					Continuing with the creation of new technologies and experimenting
					with digital solutions. I have focused on the development of
					mobile applications. In order to improve the integration of
					new products and services. As well as digitizing maintenance,
					administration and sales processes.
				</BioSection>
			</Section>

			<Section delay={0.3}>
				<Heading as="h3" variant="section-title">
					I ♥
				</Heading>
				<Paragraph>
					Programming, New technologies, Design,
					Art, Music,{' '}
					<Link href="https://www.tumblr.com/blog/losthakkun-blog/" target="_blank">
						Drawing,
						Photography
					</Link>
					, DIY projects, Physics, HiEnd audio,
					and projects that creatively engage several of my interests.
				</Paragraph>
			</Section>

		</Container>
	);
};

export default Page;
