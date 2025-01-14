import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm.jsx';

test('renders learn react link', () => {
  render(<BookingForm/>);
  const linkElement = screen.getByText("Book a reservation!");
  expect(linkElement).toBeInTheDocument();
});
