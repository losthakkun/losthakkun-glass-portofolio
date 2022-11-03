import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="bat-opt-check">
    <Container>
      <Title>
        react-native-battery-optimization-check <Badge>2022</Badge>
      </Title>
      {/* <Center my={6}>
        <Image src="/images/works/bat-opt-check_icon.png" alt="icon" />
      </Center> */}
      <P>
        A react-native solution to check if your app runs under battery
        optimization on Android devices and makes it easy
        for the user to disable it.
      </P>
      <br />
      <P>
        I created this package because I needed a solution to check if my app runs
        under battery optimization on Android devices and make it easy for the
        user to disable it. Based on the{' '}
        <Link
          href="https://github.com/rasheedk/react-native-disable-battery-optimizations-android"
          isExternal
        >
          @rasheedk/react-native-disable-battery-optimizations-android
          <ExternalLinkIcon mx="2px" />
        </Link>{' '}
        package, which is no longer maintained, I created a new package that
        works with the latest react-native version and is easier to install and use.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>React Native</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React Native / Yarn / Android / Npm</span>
        </ListItem>
        <ListItem>
          <Meta>Download</Meta>
          <Link href="https://github.com/losthakkun/react-native-battery-optimization-check">
            v1.0.8
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Last update</Meta>
          <span>2002/08/19</span>
        </ListItem>
        <ListItem>
          <Meta>Manual</Meta>
          <Link href="https://github.com/losthakkun/react-native-battery-optimization-check#readme">Readme.md</Link>
        </ListItem>
      </List>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/react-native-battery-optimization-check.png" alt="bat-opt-check" />
        <WorkImage src="/images/works/react-native-battery-optimization-check.png" alt="bat-opt-check" />
      </SimpleGrid>
      <WorkImage src="/images/works/react-native-battery-optimization-check.png" alt="bat-opt-check" />
      <WorkImage src="/images/works/react-native-battery-optimization-check.png" alt="bat-opt-check" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
