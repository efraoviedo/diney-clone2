import Link from "next/link";
import Image from "next/image";
import logo from "../public/ldisney.png";

const NavBar = ({ account }) => {
  return (
    <div className="navbar">
      <div className="logo-wrapper">
        <Link href="/">
          <Image src={logo} alt="Disney Logo" width={120} height={80} />
        </Link>
      </div>

      <div className="account-info">
        <p>Welcome {account.username}</p>
        <Image className="avatar" src={account.avatar.url} width={198} height={120} alt="avatar" />
      </div>
    </div>
  );
};

export default NavBar;
