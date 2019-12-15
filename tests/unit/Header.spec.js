// Import the mount() method from the test utils
// and the component you want to test
import { mount } from '@vue/test-utils'
import Header from "../../src/components/Header.vue";

describe('Header is rendered correctly', () => {
    // Now mount the component and you have the wrapper
    const wrapper = mount(Header)

    // Check that this component properly displays today's date

    it('Renders the correct date', () => {
        let today = new Date();
        let date = today.getDate() < 10 ?  `0${today.getDate()}` : today.getDate();
        let year = today.getFullYear() < 10 ?  `0${today.getFullYear()}` : today.getFullYear();

        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',	'November', 'December'];
        let month = months[today.getMonth()];

        let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let weekday = weekdays[today.getDay()];

        expect(wrapper.html()).toContain(date);
        expect(wrapper.html()).toContain(year);
        expect(wrapper.html()).toContain(month.slice(0,3).toUpperCase());
        expect(wrapper.html()).toContain(weekday.toUpperCase());
    })
});