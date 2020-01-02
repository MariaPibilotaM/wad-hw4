import { mount } from '@vue/test-utils'
import List from "../../src/components/List";
import Item from '../../src/models/Item.js'


describe('List', () => {
    const wrapper = mount(List)

    it('Check if no item is provided -> displays text',()=>{
        expect(wrapper.html()).toContain('Add your first Todo task')
    })
    
    it('When an item is marked as done -> item is updated correctly', async () => {
        let empty = []
        expect(wrapper.props().list).toEqual(empty)

        let TestItem = new Item("NewItem")
        wrapper.props().list.push(TestItem)
        await wrapper.vm.$nextTick()
        expect(wrapper.props().list[0].done).toBe(false)
        wrapper.find('span').trigger('click')
        await wrapper.vm.$nextTick()
        expect(wrapper.props().list[0].done).toBe(true)
    })
});