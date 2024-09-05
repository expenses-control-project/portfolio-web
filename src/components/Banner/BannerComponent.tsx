function BannerComponent() {
  return (
    <aside className=" flex flex-col items-center px-2 pb-20 lg:px-8 relative z-10">
      <div className=" mb-8 flex justify-center">
        <div
          className="relative text-center rounded-lg px-3 text-xl py-1 text-sm leading-6 text-gray-600 dark:text-gray-400 
           dark:hover:ring-gray-200"
        >
          ¿ Quieres explorar nuestro proyecto y saber como participar del mismo
          ?{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/expenses-control-project"
            className="font-semibold text-orange-600 group"
          >
            <span className="absolute inset-0" aria-hidden="true" />
            Ir al proyecto{" "}
            <span
              className="inline-block transform transition-transform duration-300 ease-in-out group-hover:translate-x-1"
              aria-hidden="true"
            >
              &rarr;
            </span>
          </a>
        </div>
      </div>
    </aside>
  );
}

export default BannerComponent;
