import surf from "../styles/header.module.css";
export default function Header() {
  return (
    <div>
      <header className={surf.header}>
        <div className={surf.nav}>
          <a className={surf.btn} href="/">
            HOME
          </a>
          <a className={surf.btn} href="/blogs">
            BLOGS
          </a>
        </div>
      </header>
    </div>
  );
}
