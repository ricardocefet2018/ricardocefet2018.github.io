import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import MyToolbar from '../MyToolbar.vue';

// TODO ToolBar tests
describe('MyToolbar', () => {
  it('renders properly', () => {
    const wrapper = mount(MyToolbar);
    expect(wrapper.text()).toContain('Hello Vitest');
  });
});

