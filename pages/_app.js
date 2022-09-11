import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "../components/fonts";
import Layout from "../components/layouts/main";
import theme from "../lib/theme";

//* Set WebSite 4 wrapper
const Website = ({ Component, pageProps, router }) => {
	//* Wrap the ChakraProvider around the Layout component */
	return (
		<ChakraProvider theme={theme}>
			{/* //* Add the Fonts component to the app */}
			<Fonts />
			{/* //* Add the Layout component to the app */}
			<Layout router={router}>
				<Component {...pageProps} key={router.route} />
			</Layout>
		</ChakraProvider>
	);
}

export default Website;
