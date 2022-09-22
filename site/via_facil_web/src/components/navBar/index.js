import "./NavBar.css"
import { useState } from "react"
import { MenuItems } from "./MenuItems"

const NavBar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <div>
        <nav className="navigation">
      <a href="/" className="brand-name">
        LOGO
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        {/* hamburger svg code... */}
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>{item.title}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
    </div>
  )
}

export default NavBar