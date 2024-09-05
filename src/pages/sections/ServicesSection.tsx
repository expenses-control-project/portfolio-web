import Lottie from "lottie-react";

import establecimiento from "../../assets/lottie/establecimiento_animation.json";
import metricas from "../../assets/lottie/metrics_animation.json";
import ingresos from "../../assets/lottie/ingresos_animation.json";

const items = [
  {
    name: "Establecimientos",
    description:
      "Define diferentes establecimientos por rubros para poder llevar un mayor control en donde realiza sus gastos",
    animation: establecimiento,
  },
  {
    name: "Metricas",
    description:
      "Métricas detalladas proporcionando una visión clara de la situación financiera",
    animation: metricas,
  },
  {
    name: "Ingresos y Cuentas",
    description:
      "Registro de ingresos de diferentes fuentes como efectivo, cuentas bancarias y billeteras digitales",
    animation: ingresos,
  },
];

function ServicesSection() {
  return (
    <section id="services-section" className=" pb-10 mx-auto max-w-7xl px-6 lg:px-8 relative">
      <div className="mx-auto mb-5 max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight dark:text-gray-200 sm:text-4xl">
          Servicios
        </h2>
        <p className="text-lg leading-8 dark:text-gray-400">
          Nuestro sistema te permite realizar las siguiente acciones
        </p>
      </div>
      <div className="flex gap-5 flex-row flex-wrap justify-center">
        {items.map((item) => (
          <article
            key={item.name}
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <Lottie
              animationData={item.animation}
              style={{ maxWidth:"20rem", height: "10rem" }}
            />
            <h5 className="mb-2 mt-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
              {item.name}
            </h5>
            <p className="mb-3 font-normal text-center text-gray-700 dark:text-gray-400">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
