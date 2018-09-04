import { storiesOf } from '@storybook/vue'
import HelloWorld from '@/components/HelloWorld'

const stories = storiesOf('Main', module)

stories.add('HelloWorld', () => ({
  render: h => <HelloWorld msg={'Hi App'} />,
}))
