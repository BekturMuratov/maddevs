import { render, fireEvent, screen } from '@testing-library/vue';
import UIButton from '@/components/ui/UIButton';

describe('UIButton component', () => {
  test('should render correctly with slot', () => {
    const { container } = render(UIButton, {
      slots: {
        default: 'It is a button'
      }
    });

    expect(screen.getByText('It is a button')).not.toBeNull();
    expect(container).toMatchSnapshot();    
  });

  test('should render correctly without slot', () => {
    const { container } = render(UIButton);

    expect(screen.queryByText('It is a button')).toBeNull();
    expect(container).toMatchSnapshot(); 
  });

  test('should render correctly with loading prop', () => {
    const { container } = render(UIButton, {
      props: {
        loading: true
      }
    });

    expect(screen.queryByText('Waiting...')).not.toBeNull();
    expect(container).toMatchSnapshot(); 
  });

  test('should correctly handle click', async () => {
    const { emitted } = render(UIButton, {
      slots: {
        default: 'Button'
      }
    });

    const btn = screen.getByText('Button');
    await fireEvent.click(btn);
    expect(emitted().click.length).toBe(1);
  });

  test('should not handle click if disabled', async () => {
    const { emitted } = render(UIButton, {
      props: {
        disabled: true
      },
      slots: {
        default: 'Button'
      }
    });

    const btn = screen.getByText('Button');
    await fireEvent.click(btn);
    expect(emitted().click).not.toBeDefined();
  });
});
