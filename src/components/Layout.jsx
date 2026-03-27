import { Link } from "react-router-dom";
import logo from "../assets/logo1.jpg";

export default function Layout() {
  return (
    <div className="containerLayout">
      {/*header*/}
      <header className="d-flex bg-secondary p-3 justify-content-between align-items-center">
        <img src={logo} alt="LOGO" />

        <nav className=" d-flex gap-3 ">
          <Link className="text-white" to="/">
            Home
          </Link>
          <Link className="text-white" to="/">
            client
          </Link>
          <Link className="text-white" to="/">
            devis
          </Link>
          <Link className="text-white" to="/">
            chantier
          </Link>
        </nav>
      </header>

      {/*main*/}
      <main>text main</main>

      {/*footer*/}
      <footer className="bg-secondary p-3 mt-4">
        &copy; Chantier Renovation ⚒️ - 2026
      </footer>
    </div>
  );
}
