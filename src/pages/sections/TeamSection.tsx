import github_icon from "../../assets/github-mark-white.svg";
import linkedin_icon from "../../assets/linkedin_icon.svg";

function TeamSection() {
  return (
    <section id="team-section" className=" py-32 mx-auto max-w-7xl px-6 lg:px-8 w-100 z-10 relative">
      <div className="mx-auto mb-5 max-w-2xl lg:mx-0">
        <h2 className="text-gray-950text-3xl font-bold tracking-tight dark:text-gray-200 sm:text-4xl">
          Equipo del Proyecto
        </h2>
        <p className="text-gray-700 dark:text-gray-400">Un grupo dedicado de colaboradores que trabajan juntos para construir y mantener este proyecto de código abierto. Conoce a las personas que están detrás del código.</p>
        <div className=" flex flex-row sm:justify-between justify-center gap-5 flex-wrap mt-5 items-center">
          <article className="max-w-sm flex flex-col items-center sm:items-start">
            <img
              className=" rounded-full"
              src="https://avatars.githubusercontent.com/u/162456552?v=4"
              alt=""
              width={150}
              height={150}
            />
            <h1 className=" text-gray-950 dark:text-gray-50">Leonardo La Rosa</h1>
            <h2 className="text-gray-700 dark:text-gray-300">Co-Founder / Backend Developer</h2>
            <div className="mt-2 flex flex-row items-center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className=" relative"
                href="https://github.com/LeonardoLaRosa1190"
              >
                <img
                  src={github_icon}
                  alt="Pagina de github"
                  width={40}
                  height={40}
                  className="relative z-10"
                />
                <div className=" absolute content-none top-1 bottom-0 left-2 right-2 bg-gray-900 rounded-full"></div>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/leonardo-la-rosa-60962a216/"
              >
                <img
                  src={linkedin_icon}
                  alt="Pagina de linkedin"
                  width={50}
                  height={50}
                />
              </a>
            </div>
          </article>
          <article className="max-w-sm flex flex-col items-center sm:items-start">
            <img
              className="rounded-full"
              src="https://avatars.githubusercontent.com/u/73118144?s=400&u=ea7086fdc31228adf3b20414c194a6f7097b53fc&v=4"
              alt=""
              width={150}
              height={150}
            />
            <h1 className=" text-gray-950 dark:text-gray-50">Uciel Daró</h1>
            <h2 className="text-gray-700 dark:text-gray-300">Co-Founder / Frontend Developer</h2>
            <div className="mt-2 flex flex-row items-center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Uciel89"
                className="relative"
              >
                <img
                  src={github_icon}
                  alt="Pagina de github"
                  width={40}
                  height={40}
                  className="relative z-10"
                />
                <div className=" absolute content-none top-1 bottom-0 left-2 right-2 bg-gray-900 rounded-full"></div>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                
                href="https://www.linkedin.com/in/uciel-dar%C3%B3/"
              >
                <img
                  src={linkedin_icon}
                  alt="Pagina de linkedin"
                  width={50}
                  height={50}
                />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
