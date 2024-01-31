import { useAppContext } from './contexts/appContext';
import PublicationSocialLinks from './publication-social-links';

function PublicationFooter(props: any) {
	const { publication } = useAppContext();
	const { authorName, title } = props;

	return (
		<footer className="blog-footer-area -mt-px border-t bg-slate-100 px-5 py-5 text-center text-slate-800 dark:border-slate-800 dark:bg-black dark:text-slate-500 md:px-10 md:py-12 lg:py-5">
			<div className="blog-footer-credits flex flex-col items-center justify-center">
				<div className="my-2 flex flex-col flex-wrap items-center">
					<PublicationSocialLinks links={publication.links} />
					<p className="my-2 text-slate-600 dark:text-slate-300">
						Phan Dinh Nhat • &copy;{new Date().getFullYear()} {title || `${authorName}'s Blog`}
					</p>
					<p className="text-slate-600 dark:text-slate-300">Have a nice day!</p>
				</div>
			</div>
		</footer>
	);
}

export default PublicationFooter;
