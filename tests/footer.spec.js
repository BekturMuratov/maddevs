import { shallowMount, createLocalVue } from '@vue/test-utils';
import Footer from '@/components/Footer';
import Vuelidate from 'vuelidate';

const localVue = createLocalVue();

localVue.use(Vuelidate);

describe('Footer', () => {
  let wrapper;

  beforeEach(() => {
    global.$nuxt = {
      $route: {
        name: '/'
      }
    };
    wrapper = shallowMount(Footer, {
      localVue
    });
  });

  // ------ IMPORTANT ----- //
  test('is a Vue instance', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  // --------------------- //

  it('correctly sets the route when mounted', () => {
    expect(wrapper.vm.$data.currentPageName).toBe('/');
  });

  test('correctly sets the current pages name and class', () => {
    const $route = {
      path: '/gdpr'
    };

    wrapper = shallowMount(Footer, {
      mocks: {
        $route
      }
    });

    wrapper.vm.$data.currentPageName = 'gdpr';
    expect(wrapper.vm.$route.path).toBe('/gdpr');
    expect(wrapper.vm.$data.currentPageName).toBe('gdpr');

    let wrapperClass = wrapper.findAll('.gdpr');
    expect(wrapperClass).toEqual({
      selector: '.gdpr'
    });
  });

  test('correctly sets the current pages name to /nda and class', () => {
    const $route = {
      path: '/nda'
    };

    wrapper = shallowMount(Footer, {
      mocks: {
        $route
      }
    });

    wrapper.vm.$data.currentPageName = 'nda';
    expect(wrapper.vm.$route.path).toBe('/nda');
    expect(wrapper.vm.$data.currentPageName).toBe('nda');

    let wrapperClass = wrapper.findAll('.nda');
    expect(wrapperClass).toEqual({
      selector: '.nda'
    });
  });

  test('correctly sets the current pages name to /privacy and class', () => {
    const $route = {
      path: '/privacy'
    };

    wrapper = shallowMount(Footer, {
      mocks: {
        $route
      }
    });

    wrapper.vm.$data.currentPageName = 'privacy';
    expect(wrapper.vm.$route.path).toBe('/privacy');
    expect(wrapper.vm.$data.currentPageName).toBe('privacy');

    let wrapperClass = wrapper.findAll('.privacy');
    expect(wrapperClass).toEqual({
      selector: '.privacy'
    });
  });
});
