import { render } from '@testing-library/react';
import Spinner, { TSpinner } from './loader';

describe('Spinner component', () => {
  it('renders the spinner without container', () => {
    const props: TSpinner = {
      isOverflowParent: false,
    };
    const { getByText } = render(<Spinner {...props} />);
    const spinnerElement = getByText('Loading...');
    expect(spinnerElement).toBeInTheDocument();
    expect(spinnerElement.parentElement?.classList.contains('container')).toBe(false);
  });
});