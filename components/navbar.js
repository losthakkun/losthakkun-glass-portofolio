import Logo from './logo'
import NextLink from 'next/link'
import {
	Box,
	Menu,
	Link,
	Flex,
	Stack,
	Heading,
	MenuItem,
	MenuList,
	Container,
	MenuButton,
	IconButton,
	useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
//import { IoLogoGithub } from 'react-icons/io5'

//* LinkItem component for navbar
const LinkItem = ({ href, path, target, children, ...props }) => {
	const active = path === href
	const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
	return (
		<NextLink href={href} passHref scroll={false}>
			<Link
				{...props}
				p={2}
				target={target}
				bg={active ? 'grassTeal' : undefined}
				color={active ? '#202023' : inactiveColor}
			>
				{children}
			</Link>
		</NextLink>
	)
}

//* Set the Navbar component 4 handle transitions and navigation between pages
const Navbar = props => {
	const { path } = props

	return (
		<Box
			{...props}
			w="100%"
			as="nav"
			zIndex={2}
			position="fixed"
			css={{ backdropFilter: 'blur(10px)' }}
			bg={useColorModeValue('#ffffff40', '#20202380')}
		>
			<Container
				p={2}
				wrap="wrap"
				align="center"
				display="flex"
				maxW="container.md"
				justify="space-between"
			>
				<Flex align="center" mr={5}>
					<Heading as="h1" size="lg" letterSpacing={'tighter'}>
						<Logo />
					</Heading>
				</Flex>

				<Stack
					flexGrow={1}
					alignItems="center"
					mt={{ base: 4, md: 0 }}
					width={{ base: 'full', md: 'auto' }}
					display={{ base: 'none', md: 'flex' }}
					direction={{ base: 'column', md: 'row' }}
				>
					<LinkItem href="/works" path={path}>
						Works
					</LinkItem>
					<LinkItem href="/posts" path={path}>
						Posts
					</LinkItem>
					<LinkItem
						pl={2}
						path={path}
						target="_blank"
						style={{ gap: 4 }}
						alignItems="center"
						display="inline-flex"
						href="https://github.com/losthakkun/losthakkun-glass-portofolio"
					>
						{/* <IoLogoGithub /> */}
						Source
					</LinkItem>
				</Stack>

				<Box flex={1} align="right">
					<ThemeToggleButton />

					<Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
						<Menu isLazy id="navbar-menu">
							<MenuButton
								as={IconButton}
								variant="outline"
								aria-label="Options"
								icon={<HamburgerIcon />}
							/>
							<MenuList>
								<NextLink href="/" passHref>
									<MenuItem as={Link}>About</MenuItem>
								</NextLink>
								<NextLink href="/works" passHref>
									<MenuItem as={Link}>Works</MenuItem>
								</NextLink>
								<NextLink href="/posts" passHref>
									<MenuItem as={Link}>Posts</MenuItem>
								</NextLink>
								<MenuItem
									as={Link}
									href="https://github.com/losthakkun/losthakkun-glass-portofolio"
								>
									View Source
								</MenuItem>
							</MenuList>
						</Menu>
					</Box>
				</Box>
			</Container>
		</Box>
	)
}

export default Navbar
