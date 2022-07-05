import { mount } from '@vue/test-utils';
import TodoList from './TodoList.vue';

describe('testing a TodoList component', () => {
  const TODO_ITEMS = [
    { id: 1, text: 'first task', isComplete: false },
    { id: 2, text: 'second task', isComplete: false },
    { id: 3, text: 'third task', isComplete: false },
  ];

  it('renders a todo list', () => {
    const wrapper = mount(TodoList);

    const list = wrapper.get('[data-test="todo-list"]');

    expect(list.exists()).toBe(true);
  });

  it('renders 3 items in list', () => {
    const wrapper = mount(TodoList, {
      data: () => ({
        todoItems: TODO_ITEMS,
      }),
    });

    const items = wrapper.findAll('[data-test="item"]');

    expect(items).toHaveLength(TODO_ITEMS.length);
  });

  it('adds one todo item to list', async () => {
    const wrapper = mount(TodoList, {
      data: () => ({
        todoItems: TODO_ITEMS,
      }),
    });

    await wrapper.get('[data-test="input"]').get('input').setValue('new');
    await wrapper.find('[data-test="add-button"]').trigger('click');

    expect(wrapper.findAll('[data-test="item"]')).toHaveLength(TODO_ITEMS.length + 1);
  });

  it('delete one todo item from list', async () => {
    const wrapper = mount(TodoList, {
      data: () => ({
        todoItems: TODO_ITEMS,
      }),
    });

    await wrapper.find('[data-test="item"]').find('[data-test="delete-item"]').trigger('click');

    expect(wrapper.findAll('[data-test="item"]')).toHaveLength(TODO_ITEMS.length - 1);
  });
});
