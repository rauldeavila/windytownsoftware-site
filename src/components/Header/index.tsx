import { HeaderContainer } from "./styles";
import Link from "next/link";

const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <ul>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
