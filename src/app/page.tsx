export default function Home() {
  return (
    <main className="bg-white text-black">

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl font-bold text-yellow-500 mb-4">
          ORTHONOBA
        </h1>

        <p className="text-xl max-w-2xl mb-6">
          Especialistas en dispositivos intraorales para apnea del sueño,
          deporte y ortodoncia digital.
        </p>

        <a
          href="https://wa.me/34667209395"
          target="_blank"
          className="bg-black text-white px-8 py-4 rounded-lg text-lg"
        >
          Contactar por WhatsApp
        </a>
      </section>

      {/* PROBLEMA + SOLUCIÓN */}
      <section className="py-20 px-6 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          Soluciones personalizadas para cada paciente
        </h2>
        <p className="text-lg">
          Tratamos problemas como apnea del sueño, bruxismo y protección deportiva
          mediante dispositivos diseñados digitalmente para máxima precisión y confort.
        </p>
      </section>

      {/* SERVICIOS */}
      <section className="py-20 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">
          Nuestros Servicios
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-xl mb-2">Apnea del sueño</h3>
            <p>Dispositivos de avance mandibular personalizados para mejorar la respiración y el descanso.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-xl mb-2">Deporte</h3>
            <p>Protectores bucales de alto rendimiento diseñados para máxima protección y comodidad.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-xl mb-2">Ortodoncia</h3>
            <p>Retenedores tipo Essix y soluciones digitales adaptadas a cada paciente.</p>
          </div>

        </div>
      </section>

      {/* DIFERENCIAL */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">
          ¿Por qué elegir ORTHONOBA?
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto text-left">

          <div>
            <h3 className="font-bold">+30 años experiencia</h3>
            <p>Amplia trayectoria en el sector odontológico.</p>
          </div>

          <div>
            <h3 className="font-bold">Diseño digital</h3>
            <p>Uso de tecnología avanzada para máxima precisión.</p>
          </div>

          <div>
            <h3 className="font-bold">Alta personalización</h3>
            <p>Adaptación total a cada caso clínico.</p>
          </div>

          <div>
            <h3 className="font-bold">Especialización</h3>
            <p>Enfoque en odontología del sueño y dispositivos funcionales.</p>
          </div>

        </div>
      </section>

      {/* PROFESIONALES */}
      <section className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Colaboración con clínicas dentales
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Trabajamos con odontólogos ofreciendo flujos digitales completos,
          desde archivos STL hasta planificación avanzada.
        </p>

        <a
          href="https://wa.me/34667209395"
          target="_blank"
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          Colaborar con nosotros
        </a>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Solicita información o valoración
        </h2>

        <a
          href="https://wa.me/34667209395"
          target="_blank"
          className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-bold"
        >
          Escribir por WhatsApp
        </a>
      </section>

    </main>
  );
}