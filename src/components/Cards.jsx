export function Cards() {
  return (
    <div className="flex justify-items-center content-between justify-center gap-x-28  text-zinc-50">
      <div className="  shadow-lg md:shadow-xl md:shadow-white rounded-3xl gap-4 bg-stone-900 pt-1 p-10 pb-15  flex justify-evenly flex-col ">
        <h1 className="font-semibold text-3xl border-spacing-x-4 border-b-2 ">
          ESSENCIAL{" "}
        </h1>
        <span className="text-2xl font-light">R$3,95/mes</span>
        <div>
          <li>1 Website</li>
          <li>1GB de Armazenamento</li>
          <li>10GB de tranferencia</li>
        </div>
        <button className="rounded-lg p-1 m-1 text-1xl bg-zinc-100 text-zinc-950">
          ASSINE JÁ
        </button>
      </div>
      <div className="shadow-lg md:shadow-xl md:shadow-white rounded-3xl gap-4 bg-stone-900 pt-1 p-10 pb-15  flex justify-evenly flex-col ">
        <h1 className="font-semibold  text-3xl border-b-2 ">PREMIUM</h1>
        <span className="text-2xl font-light">R$7,95/mes</span>
        <div>
          <li>5 Website</li>
          <li>3GB de Armazenamento</li>
          <li>tranferencia ilimitada</li>
          <li>10 horas de suporte mensais</li>
        </div>
        <button className="rounded-lg p-1 m-1 text-1xl bg-zinc-100 text-zinc-950">
          ASSINE JÁ
        </button>
      </div>
      <div className="shadow-lg md:shadow-xl md:shadow-white rounded-3xl gap-4 bg-stone-900 pt-1 p-10 pb-15  flex justify-evenly flex-col ">
        <h1 className="font-semibold text-3xl border-b-2 ">GOLD</h1>
        <span className="text-2xl font-light">R$13,95/mes</span>
        <div>
          <li>10 Website</li>
          <li>30GB de Armazenamento</li>
          <li>tranferencia ilimitada</li>
          <li>30 horas de suporte mensais</li>
          <li>Email personalizado</li>
        </div>
        <button className="rounded-lg p-1 m-1 text-1xl bg-zinc-100 text-zinc-950">
          ASSINE JÁ
        </button>
      </div>
    </div>
  );
}
