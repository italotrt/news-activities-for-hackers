import { fireEvent, render, screen } from '@testing-library/react';
import NavBar from '../../components/NavBar';
import Posts from '../../components/Posts';
import '@testing-library/jest-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import HomePage from '../HomePage';

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
    afterEach(() => {
        queryClient.clear();
        jest.restoreAllMocks();
    });

    test('fetches Posts details and fill component', async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <Posts />
            </QueryClientProvider>
        );

        const postsLoadingComponent = screen.getByText(/Loading posts/i);
        expect(postsLoadingComponent).toBeInTheDocument();

        const commentsButtons = await screen.findAllByText(/Comments/i, {}, { timeout: 5000 });
        expect(commentsButtons.length).toBeGreaterThan(0);
    });

    test('change Posts display type', async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <Posts />
            </QueryClientProvider>
        );

        const newPostsButton = await screen.findByText(/New Posts/i);
        expect(newPostsButton).toBeInTheDocument();
        fireEvent.click(newPostsButton);

        const postsLoadingComponent = screen.getByText(/Loading posts/i);
        expect(postsLoadingComponent).toBeInTheDocument();

        const commentsButtons = await screen.findAllByText(/Comments/i, {}, { timeout: 5000 });
        expect(commentsButtons.length).toBeGreaterThan(0);
    });

    test('renders error state when fetch fails', async () => {
        jest.spyOn(globalThis, 'fetch').mockResolvedValue({
            ok: false,
            status: 500,
            statusText: 'Internal Server Error',
        } as Response);

        render(
            <QueryClientProvider client={queryClient}>
                <HomePage />
            </QueryClientProvider>
        );

        const errorStateComponent = await screen.findByText(/There was a problem fetching the data./i);
        expect(errorStateComponent).toBeInTheDocument();
    });
});