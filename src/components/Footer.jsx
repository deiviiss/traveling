export default function Footer() {
  return (
    <footer className="w-full h-auto  bg-gray-200 p-6 space-y-2 pt-2 md:flex  md:justify-between md:px-20 items-center pb-20 md:py-6" id="about">
      <div>
        <p className="text-lg dark:text-gray-900">Acerca de</p>
        <p className="text-sm text-gray-500">Inversionistas</p>
        <p className="text-sm text-gray-500">Empleos</p>
        <p className="text-sm text-gray-500">Términos y Condiciones</p>
        <p className="text-sm text-gray-500">Platzi Travel, Inc.</p>
      </div>
      <div className="dark:text-gray-900">
        <span className="text-gray-900 font-bold text-lg mr-2">David</span>&copy; {new Date().getFullYear()} All Rights Reversed
      </div>
    </footer>
  );
}
