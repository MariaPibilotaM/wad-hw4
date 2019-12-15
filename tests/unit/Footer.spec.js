import { mount } from '@vue/test-utils'
import Footer from "../../src/components/Footer";

describe('Footer', () => {
    const wrapper = mount(Footer);
    it("Clicking button changes 'open' property", () =>{
        wrapper.find('span').trigger('click');
        expect(wrapper.vm.$data.open);
    } );
})