const AppHeader = () => {
  return (
    <header className="px-8 flex bg-blue-800 text-white justify-between items-center py-3">
      <h1 className="font-bold text-2xl">Rick & Morty</h1>
      <nav>
        <ul className="flex gap-x-4">
          <li className="text-lg font-semibold">Home</li>
          <li className="text-lg font-semibold">Universe</li>
          <li className="text-lg font-semibold">News</li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
