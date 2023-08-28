export function Header() {
  return (
    <header>
      <div className="flex justify-between mx-auto mt-2 items-center text-white bg-stone-900 w-3/5 h-20 rounded p-3  ">
        <h1 className="text-4xl p-2 font-semibold ">Myserver</h1>
        <ul className="[&>li:hover]:opacity-30 pr-7 relative  flex items-center gap-4 cursor-pointer ">
          <li>Home</li>
          <li>Planos</li>
          <li>Suporte</li>
          <li>Contato</li>
        </ul>
      </div>
    </header>
  );
}
