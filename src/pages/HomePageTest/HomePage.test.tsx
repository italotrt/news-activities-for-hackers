import { fireEvent, render, screen } from '@testing-library/react';
import NavBar from '../../components/NavBar';
import Posts from '../../components/Posts';
import '@testing-library/jest-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
        },
    },
});

describe('testNavBarComponent', () => {
    test('renders NavBar', () => {
        render(<NavBar />);
        const navBarElement = screen.getByText(/Hacker News/i);
        expect(navBarElement).toBeInTheDocument();
    });

    test('renders Login button', () => {
        render(<NavBar />);
        const loginButtonElement = screen.getByText(/Login/i);
        expect(loginButtonElement).toBeInTheDocument();
    });

    test ('expand Nav Bar side menu', () => {
        render(<NavBar />);
        const menuButtonElement = screen.getByLabelText(/menu/i);
        expect(menuButtonElement).toBeInTheDocument();
        fireEvent.click(menuButtonElement);
        const guidelinesElement = screen.getByText(/Guidelines/i);
        expect(guidelinesElement).toBeInTheDocument();
    });
});

describe('testPostComponent', () => {
    test('renders Posts component', async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <Posts />
            </QueryClientProvider>
        );

        const postsLoadingComponent = screen.getByText(/Loading posts/i);
        expect(postsLoadingComponent).toBeInTheDocument();
    });
});