import { Box, chakra, Container, Heading, Image, useColorModeValue } from "@chakra-ui/react"

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
			<Box display={{ md: "flex" }}>
				<Heading as="h2" variant={"page-title"}>
					Alejandro Núñez Segoviano
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
						borderStyle="solid"
						borderRadius="full"
						display="inline-block"
						borderColor="whiteAlpha.800"
						
					>
						<ProfileImage
							alt="img"
							width="100%"
							height="100%"
							borderRadius="full"
							src="/images/losthakkun.png"
						/>
					</Box>
				</Box>
		</Container>
	)
}

export default Page
