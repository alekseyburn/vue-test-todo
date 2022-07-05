import { mount } from '@vue/test-utils';
import TodoItem from './TodoItem.vue';

describe('testing a TodoItem component', () => {
  const PROPS_MOCK = {
    id: 1,
    isComplete: false,
    text: 'test',
  };

  it('renders a todo item', () => {
    const wrapper = mount(TodoItem, {
      props: PROPS_MOCK,
    });

    const todo = wrapper.get('[data-test="todo-item"]');

    expect(todo.exists()).toBe(true);
  });

  it('renders text in todo', () => {
    const wrapper = mount(TodoItem, {
      props: PROPS_MOCK,
    });

    const todoText = wrapper.get('[data-test="text"]');

    expect(todoText.text()).toBe(PROPS_MOCK.text);
  });

  it('marked todo as completed when isComplete is true', () => {
    const COMPLETED_CLASS = 'todo-item__text--complete';
    const wrapper = mount(TodoItem, {
      props: { ...PROPS_MOCK, isComplete: true },
    });

    const todoText = wrapper.get('[data-test="text"]');

    expect(todoText.classes()).toContain(COMPLETED_CLASS);
  });

  it('unmarked todo as completed when isComplete is false', () => {
    const COMPLETED_CLASS = 'todo-item__text--complete';
    const wrapper = mount(TodoItem, {
      props: PROPS_MOCK,
    });

    const todoText = wrapper.get('[data-test="text"]');

    expect(todoText.classes()).not.toContain(COMPLETED_CLASS);
  });

  it('emit toggleComplete event with id param when trigger button', async () => {
    const wrapper = mount(TodoItem, {
      props: PROPS_MOCK,
    });

    await wrapper.get('[data-test="toggle-complete"]').trigger('click');

    expect(wrapper.emitted().toggleComplete[0]).toEqual([PROPS_MOCK.id]);
  });

  it('emit deleteItem event with id param when trigger button', async () => {
    const wrapper = mount(TodoItem, {
      props: PROPS_MOCK,
    });

    await wrapper.get('[data-test="delete-item"]').trigger('click');

    expect(wrapper.emitted().deleteItem[0]).toEqual([PROPS_MOCK.id]);
  });
});
