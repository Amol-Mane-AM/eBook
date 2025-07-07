import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext"; // Importing the ThemeContext
import light from '../icons/contrast_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg';
import dark from '../icons/dark_mode_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg';

/* eslint-disable jsx-a11y/anchor-is-valid */
function Nav() {

  const {theme,setTheme} = useContext(ThemeContext);
  console.log(theme);

  let themeStyle = {}
  debugger;
  //  if(theme === 'light')
  //   { 
  //       themeStyle = {
  //           color: "violet",
  //           backgroundColor: "violet",
  //           fontSize: "16px",
  //           padding: "10px",
  //       };
  //   }
  //   else{
  //       themeStyle = {
  //           color: "red ",
  //           backgroundColor: "red",
  //           fontSize: "16px",
  //           padding: "10px",
  //   }
  // };
  if (theme === 'light') {
    debugger;
    themeStyle = {
      color: "red",
      backgroundColor: "red",
      fontSize: "16px",
      padding: "10px",
    };
  } else {
    themeStyle = {
      color: "yellow",
      backgroundColor: "white",
      fontSize: "16px",
      padding: "10px",
    };
  }


  return (
    <>
      <header>
        <nav className="navbar navbar-expand-sm" style={themeStyle}>  
        {/* onClick={() => { setTheme(theme === 'light' ? 'dark' : 'light');}}>  */}

          <div className="container-fluid">

            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About Us</NavLink>

              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>

              </li>
              <li className="nav-item">
                {/* <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink> */}
                <a
                  className="nav-link"
                  href="https://portfolio-zeta-gold-w2k00w8yv1.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/product">Product</NavLink>

              </li>
              {

                theme === 'light' ? (
                  <li className="nav-item">
                    <img src={dark} alt="Dark Mode" onClick={() => setTheme('dark')} style={{ width: '24px', height: '24px' ,marginTop:'10px', marginLeft:'10px'}} />
                  </li>
                ) : (
                  <li className="nav-item">
                    <img src={light} alt="Light Mode" onClick={() => setTheme('light')} style={{ width: '24px', height: '24px' ,marginTop:'10px', marginLeft:'10px'}} />
                  </li>
                ) 
              }
            </ul>
          </div>

        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}
export default Nav;
