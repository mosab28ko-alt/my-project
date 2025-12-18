import { API_BASE_URL } from '../utils/constants';

// Help Center API functions

export const getHelpArticles = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/help-center/articles`);

        if (!response.ok) {
            throw new Error('Failed to fetch help articles');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching help articles:', error);
        throw error;
    }
};

export const getArticleById = async (articleId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/help-center/articles/${articleId}`);

        if (!response.ok) {
            throw new Error('Failed to fetch article');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching article:', error);
        throw error;
    }
};

export const searchArticles = async (query) => {
    try {
        const response = await fetch(`${API_BASE_URL}/help-center/search?q=${encodeURIComponent(query)}`);

        if (!response.ok) {
            throw new Error('Search failed');
        }

        return await response.json();
    } catch (error) {
        console.error('Error searching articles:', error);
        throw error;
    }
};

export const submitSupportTicket = async (ticketData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/help-center/tickets`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(ticketData),
        });

        if (!response.ok) {
            throw new Error('Failed to submit support ticket');
        }

        return await response.json();
    } catch (error) {
        console.error('Error submitting support ticket:', error);
        throw error;
    }
};
