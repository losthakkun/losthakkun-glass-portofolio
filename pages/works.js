import {Container, Heading, SimpleGrid, Divider} from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import {WorkGridItem} from '../components/grid-item';

import thumbBatOptCheck from '../public/images/works/react-native-battery-optimization-check.png';

const Works = () => (
	<Layout title="Works">
		<Container>

			<Heading as="h3" fontSize={20} mb={4}>
				Works
			</Heading>

			<SimpleGrid columns={[1, 1, 2]} gap={6}>

				<Section>
					<WorkGridItem
						id="bat-opt-check"
						title="react-native-battery-optimization-check"
						thumbnail={thumbBatOptCheck}
					>
						A react-native solution to check if your app runs under battery optimization on Android
						devices and makes it easy for the user to disable it.
					</WorkGridItem>
				</Section>

				<Section>
					{/* <WorkGridItem
            id="walknote"
            title="walknote"
            thumbnail={thumbWalknote}
          >
            Music recommendation app for iOS
          </WorkGridItem> */}
				</Section>

			</SimpleGrid>

			<Section delay={0.2}>
				<Divider my={6} />
				<Heading as="h3" fontSize={20} mb={4}>
					Collaborations
				</Heading>
			</Section>

			<SimpleGrid columns={[1, 1, 2]} gap={6}>

				{/* <Section delay={0.3}>
					<WorkGridItem id="margelo" thumbnail={thumbMargelo} title="Margelo">
						A website of the elite app development and contracting agency based in Austria
					</WorkGridItem>
				</Section>

				<Section delay={0.3}>
					<WorkGridItem id="modetokyo" thumbnail={thumbModeTokyo} title="mode.tokyo">
						The mode magazine for understanding to personally enjoy Japan
					</WorkGridItem>
				</Section>

				<Section delay={0.3}>
					<WorkGridItem id="styly" thumbnail={thumbStyly} title="Styly">
						A VR Creative tools for fashion brands
					</WorkGridItem>
				</Section> */}

			</SimpleGrid>

		</Container>
	</Layout>
);

export default Works;
export {getServerSideProps} from '../components/chakra';
