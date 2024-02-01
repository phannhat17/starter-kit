import Image from 'next/legacy/image';
import { twJoin } from 'tailwind-merge';
import { Publication } from '../generated/graphql';
import { resizeImage } from '../utils/image';

// TODO: this component name is confusing.
const PublicationMeta = (
	props: Pick<Publication, 'isTeam'> & {
		author: Pick<Publication['author'], 'name' | 'username' | 'followersCount' | 'profilePicture'>;
		aboutHTML?: string | null;
	},
) => {
	const { isTeam, aboutHTML, author } = props;
	const authorImageURL = resizeImage(
		author.profilePicture ||
			'https://cdn.hashnode.com/res/hashnode/image/upload/v1659089761812/fsOct5gl6.png',
		{ w: 400, h: 400, c: 'face' },
	);

	return (
		<div className="blog-author-card mx-auto px-2 py-8 md:px-8 md:py-10">
			<div className="flex flex-col flex-wrap items-center">
				<div className="mb-3">
					<a
						href="https://phannhat.vercel.app/"
						className="blog-author-area-photo block h-24 w-24 overflow-hidden rounded-full md:h-28 md:w-28"
					>
						<Image
							alt={author.name || 'Author'}
							className="block"
							width={112}
							height={112}
							src={authorImageURL}
						/>
					</a>
				</div>
				<div className="flex w-full flex-col items-center">
					<div className="flex flex-col items-center leading-snug text-black dark:text-white">
						<h1 className="blog-author-area-name font-heading mb-2 w-full text-2xl font-extrabold md:text-3xl">
							<a href="https://phannhat.vercel.app/">{author.name}</a>
						</h1>
						<div className="blog-follow-wrapper mb-2"></div>
					</div>
					{aboutHTML ? (
						<div
							className={twJoin(
								'prose dark:prose-dark text-center text-lg',
								isTeam ? 'lg:prose-xl max-w-full' : '',
							)}
							// eslint-disable-next-line react/no-danger
							dangerouslySetInnerHTML={{ __html: aboutHTML }}
						/>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default PublicationMeta;
