import { Box, chakra, Container, Heading, Image, Link, useColorModeValue } from "@chakra-ui/react"
import Paragraph from "../components/paragraph"
import Section from "../components/section"
import NextLink from 'next/link'

const ProfileImage = chakra(Image, {
	shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop),
})

const Page = () => {
	return (
		<Container>
			<Box
				p={3}
				mb={6}
				borderRadius="lg"
				textAlign="center"
				css={{ backdropFilter: 'blur(10px)' }}
				bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
			>
				Hello, I&apos;m a full-stack developer based on Mexico City.
			</Box>

			<Box display={{ md: 'flex' }}>
				<Box flexGrow={1}>
					<Heading as="h2" variant="page-title">
						Aleandro Núñez Segoviano
					</Heading>
					<p>Developer, designer and tech enthusiast.</p>
				</Box>
				<Box
					ml={{ md: 6 }}
					flexShrink={0}
					textAlign="center"
					mt={{ base: 4, md: 0 }}
				>
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
					I&apos;m a full-stack developer based on Mexico City. I&apos;m
					currently working as a freelancer and I&apos;m looking for
					opportunities to work on interesting projects.

					I&apos;m a self-taught developer, I&apos;ve been working on
					projects for more than 5 years. I&apos;m passionate about
					technology and I&apos;m always learning new things and {` `}
					<NextLink href="/works/inkdrop" passHref scroll={false}>
            <Link>Inkdrop</Link>
          </NextLink>
          .
				</Paragraph>
			</Section>
		</Container>
	)
}

export default Page
