import HeaderLink from "../navlink/Navlink";

function Header() {
   return (
      <header>
         <nav>
            <HeaderLink NavPath="/" NavName="Home" />
            <HeaderLink NavPath="/About" NavName="A propos" />
            <HeaderLink NavPath="/Projets" NavName="Projets" />
            <HeaderLink NavPath="/Contact" NavName="Contact" />
         </nav>
      </header>
   )
}

export default Header;