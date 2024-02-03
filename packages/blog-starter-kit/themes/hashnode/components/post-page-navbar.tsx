import { forwardRef } from 'react';
import { twJoin } from 'tailwind-merge';
import ThemeToggleButton from './ThemeToggleButton';

/* eslint-disable no-nested-ternary */
import HeaderBlogSearch from './header-blog-search';
import HeaderLeftSidebar from './header-left-sidebar';
import PublicationNavLinks from './publication-nav-links';
import useStickyNavScroll from './use-sticky-nav-scroll';

import {
	Preferences,
	PublicationNavbarItem,
	RequiredPublicationFieldsFragment,
	User,
} from '../generated/graphql';
import PublicationLogo from './publication-logo';

type Props = {
	publication: Pick<
		RequiredPublicationFieldsFragment,
		'id' | 'title' | 'url' | 'links' | 'features' | 'isTeam'
	> & {
		author: Pick<User, 'id' | 'username' | 'name' | 'profilePicture'>;
	} & {
		preferences: Omit<Preferences, 'navbarItems'> & {
			navbarItems: Array<Omit<PublicationNavbarItem, 'series' | 'page'>>;
		};
	};
};

const PostPageNavbar = forwardRef<HTMLElement, Props>((props, ref) => {
	const { publication } = props;

	useStickyNavScroll({ elRef: ref });

	return (
		<div className="container mx-auto px-2 md:px-4 2xl:px-10">
			<div className="relative z-40 flex flex-row items-center justify-between pb-2 pt-4 md:mb-4">
				<div className="flex flex-row items-center">
					{/* Navigation for mobile view */}
					<div className="flex items-center justify-between dark:text-white md:hidden">
						<PublicationLogo publication={publication} size="xs" />
					</div>
					<div className="hidden md:block">
						<PublicationLogo publication={publication} size="xs" withProfileImage />
					</div>
				</div>

				<div className="mt-auto flex flex-row items-center dark:text-white md:mt-3">
					{/* Moved PublicationNavLinks here */}
					<div className="hidden md:block">
						<PublicationNavLinks
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
	);
});

PostPageNavbar.displayName = 'PostPageNavbar';

export default PostPageNavbar;
