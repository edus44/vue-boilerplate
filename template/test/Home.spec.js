import { shallow } from 'vue-test-utils'
import Home from '@/components/views/Home'

it('should have home text', async () => {
  const wrapper = shallow(Home)
  expect(wrapper.text()).toBe('Home')
})
