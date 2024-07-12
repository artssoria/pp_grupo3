import Aspirantes from "./Aspirantes";
import Profesiones from "./Profesiones";
import Registro from "./Registro";

const ContentWrap = () => {
  return (
    <main className="content-wrap col-span-9 row-span-11 px-12 overflow-auto">
      <header className="preventa">
        <h2 className="text-2xl">Búsqueda y selección</h2>
        <p className="text-center text-lg">
          Encontramos talento para tu empresa, en todos los cargos
          administrativos, profesionales y técnicos.
        </p>
        <div>
          <img src="src/assets/img/banner.jpg" alt="Recursos Humanos" />
        </div>
      </header>
      <Aspirantes />
      <Profesiones />
      <Registro />
    </main>
  );
};

export default ContentWrap;
