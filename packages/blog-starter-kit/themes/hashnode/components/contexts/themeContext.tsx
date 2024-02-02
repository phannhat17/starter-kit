import create from 'zustand';

// Define a type for your store's state
type ThemeState = {
	theme: 'light' | 'dark';
	toggleTheme: () => void;
};

// Use the type in your store definition
export const useThemeStore = create<ThemeState>((set) => ({
	theme: 'light', // Default theme
	toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
}));
