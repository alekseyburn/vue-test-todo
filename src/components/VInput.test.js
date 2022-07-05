import { mount } from '@vue/test-utils';
import VInput from './VInput.vue';

describe('testing an input component', () => {
  it('renders an input', () => {
    const wrapper = mount(VInput);

    const input = wrapper.get('[data-test="input"]');

    expect(input.exists()).toBe(true);
  });

  it('sets the value', async () => {
    const wrapper = mount(VInput);
    const TEST_VALUE = 'test value';

    const input = wrapper.get('[data-test="input"]');
    await input.setValue(TEST_VALUE);

    expect(input.element.value).toBe(TEST_VALUE);
  });
});
