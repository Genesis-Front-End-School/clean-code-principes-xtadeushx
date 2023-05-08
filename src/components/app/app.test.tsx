import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { App } from './App';

jest.mock('../../components/common/header/header', () => ({
  Header: jest.fn(() => <div>Header</div>),
}));
jest.mock('../../components/common/footer/footer', () => ({
  Footer: jest.fn(() => <div>Footer</div>),
}));
jest.mock('../../components/paginate/pagination', () => ({
  PaginatedCourses: jest.fn(() => <div>PaginatedCourses</div>),
}));
jest.mock('../../components/pages/not-found-page/not-found-page', () => ({
  NotFoundPage: jest.fn(() => <div>NotFoundPage</div>),
}));
jest.mock('../../components/pages/registration/registration', () => ({
  Registration: jest.fn(() => <div>Registration</div>),
}));
jest.mock('../../components/pages/login/login', () => ({
  Login: jest.fn(() => <div>Login</div>),
}));
jest.mock(
  '../../components/courses/components/course-details/course-details',
  () => ({ CourseDetails: jest.fn(() => <div>CourseDetails</div>) })
);

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders header, footer, and the paginated courses component for the root path', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('PaginatedCourses')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });

  it('renders the login component for the /login path', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });

  it('renders the registration component for the /registration path', () => {
    render(
      <MemoryRouter initialEntries={['/registration']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Registration')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });

  it('renders the not found page component for any other path', () => {
    render(
      <MemoryRouter initialEntries={['/unknown']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('NotFoundPage')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });

  it('renders the course details component for the /courses/:id path', () => {
    render(
      <MemoryRouter initialEntries={['/courses/123']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('CourseDetails')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });
});
