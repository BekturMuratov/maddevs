import CustomerRates from '@/components/About/CustomerRates.vue';
import {render, screen} from '@testing-library/vue';

describe('Customer Rates', () => {

  test('is a Vue instance', () => {
    const { container } = render(CustomerRates);

    expect(screen.getByText('10M+')).not.toBeNull();
    expect(container).toMatchSnapshot();
  });
});
