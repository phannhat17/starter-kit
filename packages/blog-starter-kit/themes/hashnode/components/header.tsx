import ThemeToggleButton from './ThemeToggleButton';
import { useAppContext } from './contexts/appContext';
import HeaderBlogSearch from './header-blog-search';
import HeaderLeftSidebar from './header-left-sidebar';
import PublicationLogo from './publication-logo';
import PublicationNavLinks from './publication-nav-links';

type Props = {
	currentMenuId?: string | null;
	isHome: boolean;
};

export const Header = (props: Props) => {
	const { currentMenuId, isHome } = props;
	const { publication } = useAppContext();

	return (
		<header className="blog-header relative z-50 w-full border-b border-black/10 bg-white bg-opacity-70 dark:border-white/10 dark:bg-slate-900 dark:bg-opacity-70">
			<div className="container mx-auto px-2 md:px-4 2xl:px-10">
				<div className="relative z-40 flex flex-row items-center justify-between pt-2 md:mb-4">
					<div className="flex flex-row items-center">
						{/* Navigation for mobile view */}
						<div className="flex items-center justify-between dark:text-white md:hidden">
							<PublicationLogo publication={publication} size="xs" />
						</div>

						<div className="hidden md:block">
							<PublicationLogo publication={publication} size="xs" />
						</div>
					</div>

					<div className="mt-auto flex flex-row items-center dark:text-white md:mt-3">
						{/* Moved PublicationNavLinks here */}
						<div className="hidden md:block">
							<PublicationNavLinks
								isHome={isHome}
								currentActiveMenuItemId={currentMenuId}
								enabledPages={publication.preferences?.enabledPages}
								navbarItems={publication.preferences?.navbarItems || []}
							/>
						</div>
						<HeaderBlogSearch publication={publication} />
						<ThemeToggleButton />

						<div className="md:hidden">
							<HeaderLeftSidebar publication={publication} />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};
