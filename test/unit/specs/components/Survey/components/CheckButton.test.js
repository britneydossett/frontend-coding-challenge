import { shallowMount } from '@vue/test-utils'
import CheckButton from '@/components/Survey/components/CheckButton'

describe('CheckButton', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(CheckButton, {
      propsData: {
        text: 'Lorem ipsum',
        value: 'dummy-value',
        selected: false
      }
    })
  })

  // Complete the following statements by implementing tests for the described behaviours

  it('should exist as a component', () => {
    expect(wrapper.is(CheckButton)).toBe(true)
  })

  it('should render the text value passed as prop correctly', () => {
    expect(wrapper.text()).toContain('Lorem ipsum')
  })

  it('should not attach the dynamic "check-button--selected" class when the selected prop is set to false', () => {
    wrapper.setProps({ selected: false })
    expect(wrapper.classes('check-button--selected')).toBe(false)
  })

  it('should attach the dynamic "check-button--selected" class when the selected prop is set to true', () => {
    wrapper.setProps({ selected: true })
    expect(wrapper.classes('check-button--selected')).toBe(true)
  })
})
