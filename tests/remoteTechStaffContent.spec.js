import {
  mount
} from '@vue/test-utils';
import RemoteTechStaffContent from '@/components/Services/RemoteTechStaffContent';

describe('Remote tech staff content', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(RemoteTechStaffContent, {
      propsData: {
        title: 'Title',
        subTitle: 'Sub title',
        paragraph: 'Paragraph',
        buttonInnerText: 'Button inner text'
      }
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

  test('correctly props data', () => {
    expect(wrapper.props().title).toBe('Title');
    expect(wrapper.props().subTitle).toBe('Sub title');
    expect(wrapper.props().paragraph).toBe('Paragraph');
    expect(wrapper.props().buttonInnerText).toBe('Button inner text');
  });
});
