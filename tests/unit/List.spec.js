import { mount } from '@vue/test-utils'
import List from "../../src/components/List";


describe('List', () => {
    const wrapper = mount(List)

    const vm = wrapper.vm

    it('Check if no item is provided -> displays text',()=>{
        expect(wrapper.html()).toContain('Add your first Todo task')
    })
});
