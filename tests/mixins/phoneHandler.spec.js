import { phoneHandler } from '../../client/mixins/phoneHandler';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import contactMeModal from '@/components/Modals/contact-me-modal';
import Vuelidate from 'vuelidate';

const localVue = createLocalVue();

localVue.use(Vuelidate);

const INPUT_VALUE = 'zzzzz1234567890aaaa';
const OUTPUT_VALUE = '+1 2345-678-90';

describe('Phone Handler Mixin',   () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(contactMeModal, {
      localVue,
      mixins: [phoneHandler],
      mocks: {
        $nuxt: {
          $emit: jest.fn(),
          $on: jest.fn()
        }
      }});
  });

  test('If we pass an incorrect parameter. The function will work, but it will not make changes in the store', () => {
    expect(wrapper.vm.$data.phoneNumber).toBe(null);
    wrapper.vm.phoneChangeHandler([]);
    expect(wrapper.vm.$data.phoneNumber).toBe(null);
  });

  test('Should return phone without letter symbols and with mask', () => {
    expect(wrapper.vm.$data.phoneNumber).toBe(null);
    wrapper.vm.phoneChangeHandler({target: {value: INPUT_VALUE}});
    expect(wrapper.vm.$data.phoneNumber).toBe(OUTPUT_VALUE);
  });

  test('If the value is less than two, then there will be no plus symbol', () => {
    wrapper.vm.phoneChangeHandler({target: {value: '1'}});
    expect(wrapper.vm.$data.phoneNumber).toBe('1');
  });

  test('If the value is less than six, then there will be no hyphen symbol', () => {
    wrapper.vm.phoneChangeHandler({target: {value: '1111'}});
    expect(wrapper.vm.$data.phoneNumber).toBe('+1 111');
  });

  test('If the value is less than nine, then there will be only one hyphen symbol', () => {
    wrapper.vm.phoneChangeHandler({target: {value: '1111111'}});
    expect(wrapper.vm.$data.phoneNumber).toBe('+1 1111-11');
  });

  test('If we input very long value, then will stop updating at 27 characters', () => {
    wrapper.vm.phoneChangeHandler({target: {value: '12345678901234567890123456789012345678901234567890'}});
    expect(wrapper.vm.$data.phoneNumber).toBe('+1 2345-678-9012-345678901234567');
  });
});

