import PrimaxLogo from "../../assets/primax-logo-white.png";

export function NavBar() {
  return (
      <nav className="flex flex-col py-2 items-center justify-center sm:py-0">

        <a href="https://www.primaxacademia.com.br"
            target="_blank">
        <img
          className="w-40 sm:w-80 sm:p-3"
          src={PrimaxLogo}
          alt="logo da primax branco"
        />
        </a>
      </nav>
  );
}
