import { useAppContext } from './contexts/appContext';
import { SocialLinks } from './social-links';

export const Footer = () => {
	const { publication } = useAppContext();

	return (
		<footer className="border-t py-5 dark:border-neutral-800 ">
			<div className="blog-footer-credits flex flex-col items-center justify-center">
				<div className="my-2 flex flex-col flex-wrap items-center">
					<SocialLinks />
					<p className="my-2 text-slate-600 dark:text-slate-300">
						Phan Dinh Nhat · &copy;{new Date().getFullYear()} {`${publication.title}'s Blog`}
					</p>
					<div className="flex flex-row items-center text-slate-600 dark:text-slate-300">
						Have a nice day!
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
