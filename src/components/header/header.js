import { NavLink } from "react-router-dom";
const menu = [
  { title: "Home", to: "/" },
  { title: "Chat", to: "/chat" },
  { title: "Profile", to: "/profile" },
  { title: "Gists Page", to: "/gists" },
];
export function Header() {
  return (
    <div className="header">
      header
      <ul className="menulist">
        {menu.map((item) => (
          <li key={item.title}>
            <NavLink to={item.to}>{item.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
