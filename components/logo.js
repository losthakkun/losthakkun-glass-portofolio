import {Text, useColorModeValue} from '@chakra-ui/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

//* Set the LogoBox style and transition properties
const LogoBox = styled.span`
	height: 30px;
	padding: 10px;
	font-size: 18px;
	font-weight: bold;
	line-height: 20px;
	align-items: center;
	display: inline-flex;
	img {
		transition: 200ms ease;
	}
	&:hover img {
		transform: rotate(20deg);
	}
`;

//* Set the Logo component
const Logo = () => {
	//* Import the logo image
	const devIcon = `/images/devicon${useColorModeValue('', '-dark')}.png`;

	//* Return the LogoBox component wrapped in a Link component
	return (
		<Link href="/" scroll={false}>
			<a>
				<LogoBox>
					<Image src={devIcon} width={22} height={22} alt="logo" />
					<Text
						ml={3}
						fontWeight="bold"
						fontFamily='M PLUS Rounded 1c", sans-serif'
						color={useColorModeValue('gray.800', 'whiteAlpha.900')}
					>
						Losthakkun
					</Text>
				</LogoBox>
			</a>
		</Link>
	);
};

export default Logo;
