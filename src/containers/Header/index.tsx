const Header = () => (
  <header className="mt-5">
    <nav className="flex items-center">
      <h1 className="text-4xl">Sneaker Store</h1>
      <div className="ms-72 bg-orange-200/50 p-2 rounded-xl">
        <ul className="flex text-2xl cursor-pointer">
          <li className="pe-10 ps-10 hover:text-white">What&apos;s new</li>
          <li className="pe-10 hover:text-white">Nike</li>
          <li className="pe-10 hover:text-white">Versace</li>
          <li className="pe-10 hover:text-white">Adidas</li>
          <li className="pe-10 hover:text-white">Prada</li>
        </ul>
      </div>
    </nav>
  </header>
)

export default Header
