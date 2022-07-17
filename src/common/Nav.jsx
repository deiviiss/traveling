import Link from 'next/link';
import { useDark } from '@context/ProviderDark';

export default function Nav() {
  const navigations = [
    { label: 'Inicio', path: '#home' },
    { label: 'Recomendados', path: '#recomendados' },
    { label: 'Rentas destacadas', path: '#rentas_destacadas' },
    { label: 'Faqs', path: '#faqs' },
    { label: 'Sobre nosotros', path: '#about' },
  ];

  const { renderThemeChanger } = useDark();

  console.log(renderThemeChanger);

  return (
    <nav className="Nav">
      <h1 className="text-3xl font-bold text-primary capitalize dark:text-white">Traveling!</h1>

      <ul className="Nav--menu">
        {navigations.map((nav) => (
          <li key={nav.path} className="Nav--menu__item">
            <Link href={nav.path}>
              <a>{nav.label}</a>
            </Link>
          </li>
        ))}
      </ul>

      <div className="Nav--button">
        <Link href="#rentas_destacadas">
          <a className="px-5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </a>
        </Link>
        {renderThemeChanger()}
      </div>
    </nav>
  );
}
