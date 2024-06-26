import Logo from "../assets/logoblack.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  // const bgImage = "url('src/assets/gymbg.jpg')";

  return (
    <>
      <header className="flex items-center justify-between  px-6 bg-white text-black text-sm md:text-base xl:text-xl transition-all ease-in-out">
        <div className="flex items-center -ml-4 mix-blend-multiply ">
          <img className="w-20 rounded-full mr-5" src={Logo} alt="" />
          <p className="scale-125 text- ">AthleticHub</p>
        </div>
        <nav>
          <ul className="flex items-center">
            <li className="mr-6">
              <a href="/" className="">
                Home
              </a>
            </li>

            <li className="mr-6">
              <a href="/services" className="">
                Services
              </a>
            </li>
            <li className="mr-6 hidden sm:inline">
              <a href="/about" className="">
                About
              </a>
            </li>
            <li className="mr-6">
              <a href="/membership" className="">
                Membership
              </a>
            </li>
            <li className="mr-6">
              <a href="/contact" className="">
                Contact
              </a>
            </li>
            <li className="">
              <FontAwesomeIcon className="text-xl" icon={faUserCircle} />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
