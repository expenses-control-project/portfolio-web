import { useEffect, useState } from "react";
import { Button, Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import logo from "../../assets/logo_ec.svg";
import ThemeButton from "../ThemeButton/ThemeButton";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50); // Cambia 50 por la altura específica que desees
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigate = (e: any, section: string) => {
    e.preventDefault(); // Evitar el comportamiento predeterminado del enlace
    const element = document.getElementById(section);
    if (element) {
      const offset = -120; // Ajusta este valor para controlar cuánto quieres subir
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth", // Añade un desplazamiento suave
      });
    }
  };

  return (
    <header
      className={` fixed inset-x-0 top-0 z-20 transition-all duration-100 ease-in-out 
      ${isScrolled ? "bg-slate-100 dark:bg-slate-900 shadow-lg" : "bg-transparent shadow-none"}`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img
              className="h-10 w-auto"
              src={logo}
              alt="logo expenses control"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <ThemeButton />
          <button
            type="button"
            className="m-2.5 inline-flex items-center justify-center rounded-md text-slate-900 dark:text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <ul className="hidden lg:flex lg:gap-x-12">
          <a
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-white cursor-pointer"
            onClick={(e) => {
              handleNavigate(e, "home-section");
            }}
          >
            Inicio
          </a>
          <a
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-white cursor-pointer"
            onClick={(e) => {
              handleNavigate(e, "services-section");
            }}
          >
            Servicios
          </a>
          <a
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-white cursor-pointer"
            onClick={(e) => {
              handleNavigate(e, "team-section");
            }}
          >
            Equipo
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/expenses-control-project"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-white cursor-pointer"
          >
            Documentación
          </a>
        </ul>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center ">
          <ThemeButton />
          <Link
            to="/users/login"
            className="text-sm font-semibold leading-6 dark:text-white text-gray-900"
          >
            <Button className="inline-flex items-center gap-2 rounded-md bg-cyan-500 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-cyan-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
              Acceder al sistema<span aria-hidden="true">&rarr;</span>
            </Button>
          </Link>
        </div>
      </nav>
      <Dialog
        className="lg:hidden relative z-40"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm dark:bg-gray-800 dark:border-gray-500 border-gray-300 sm:rounded-xl sm:border">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5 flex items-center">
              <h1 className=" ml-2 text-xl font-semibold leading-7 text-gray-900 dark:text-gray-50">
                Expenses Control
              </h1>
            </a>
            <button
              type="button"
              className="m-2.5 rounded-md p-2.5 z-2 text-gray-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-700 dark:divide-gray-500">
              <ul className="space-y-2 py-6">
                <a
                  className="-mx-3 block rounded-lg px-3 py-2 cursor-pointer text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-700"
                  onClick={(e) => {
                    handleNavigate(e, "home-section");
                    setMobileMenuOpen(false);
                  }}
                >
                  Inicio
                </a>
                <a
                  className="-mx-3 block rounded-lg px-3 py-2 cursor-pointer text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-700"
                  onClick={(e) => {
                    handleNavigate(e, "services-section");
                    setMobileMenuOpen(false);
                  }}
                >
                  Servicios
                </a>
                <a
                  className="-mx-3 block rounded-lg px-3 py-2 cursor-pointer text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-700"
                  onClick={(e) => {
                    handleNavigate(e, "team-section");
                    setMobileMenuOpen(false);
                  }}
                >
                  Equipo
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/expenses-control-project"
                  className="-mx-3 block rounded-lg px-3  cursor-pointerpy-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  Documentación
                </a>
              </ul>
              <div className="py-6 ">
                <Link to="/users/login">
                  <Button className=" w-full inline-flex items-center gap-2 rounded-md bg-cyan-500 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-cyan-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                    Acceso sistema <span aria-hidden="true">&rarr;</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default Header;
