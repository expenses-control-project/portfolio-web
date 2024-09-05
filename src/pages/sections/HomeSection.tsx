function HomeSection() {
  return (
    <section id="home-section" className=" relative z-10">
      <div className="mx-auto max-w-2xl px-10 py-32 sm:py-48 lg:py-24 2xl:py-48">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            <span className=" bg-gradient-to-r from-cyan-400 to-lime-500 bg-clip-text text-transparent">
              Gestiona tus gastos.
            </span>{" "}
            <span className=" bg-gradient-to-r from-lime-500 to-cyan-400 bg-clip-text text-transparent">
              Construye tu futuro.
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            <strong>Expenses Control</strong> es tu sistema de gestión de gastos
            para controlar tus finanzas personales. De{" "}
            <strong>código abierto</strong> y disponible para cualquier
            dispositivo.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Crear una cuenta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
