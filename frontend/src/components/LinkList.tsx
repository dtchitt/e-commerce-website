import LinkItem from './LinkItem';

const LinkList = () => {
	const links = [
		{ label: 'Products', link: '/product' },
		{ label: 'Diablo II', link: '/diabloii/products' },
		{ label: 'Path of Exile', link: '/poe/products' },
		{ label: 'World of Warcraft', link: '/wow/products' },
	];

	const linkList = links.map((item) => <LinkItem label={item.label} link={item.link} />);

	return <>{linkList}</>;
};

export default LinkList;