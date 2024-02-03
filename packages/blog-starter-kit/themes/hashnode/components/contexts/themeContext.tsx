import { create } from 'zustand';

type ThemeState = {
	theme: 'light' | 'dark';
	toggleTheme: () => void;
};

const getInitialTheme = (): 'light' | 'dark' => {
	// Check if running in the browser environment
	if (typeof window !== 'undefined') {
		// Attempt to get the stored theme from localStorage
		const storedTheme = localStorage.getItem('theme');

		// If a theme is stored, use it
		if (storedTheme) {
			return storedTheme as 'light' | 'dark';
		}

		// If no theme is stored, use the system preference
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		return prefersDark ? 'dark' : 'light';
	}

	// Default theme if not in the browser environment
	return 'light';
};

export const useThemeStore = create<ThemeState>((set) => ({
	theme: getInitialTheme(),
	toggleTheme: () => {
		set((state) => {
			const newTheme = state.theme === 'light' ? 'dark' : 'light';

			// Persist the new theme to localStorage if in browser environment
			if (typeof window !== 'undefined') {
				localStorage.setItem('theme', newTheme);
			}

			return { theme: newTheme };
		});
	},
}));
