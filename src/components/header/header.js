import { signOut } from "firebase/auth";
import { auth } from "../../api/firebase";
import { NavLink } from "react-router-dom";

const menuWithsession = [
  { title: "Chat", to: "/chat" },
  { title: "Profile", to: "/profile" },
  { title: "Gists", to: "/gists" },
];

const menuWithoutsession = [
  { title: "Home", to: "/" },
  { title: "Signup", to: "/sign-up" },
  { title: "Login", to: "/login" },
];
export function Header({ session }) {
  return (
    <div className="header">
      {!!session && (
        <button
          onClick={() => {
            signOut(auth);
          }}
        >
          out
        </button>
      )}
      <ul className="menulist">
        {!!session &&
          menuWithsession.map((item) => (
            <li key={item.title}>
              <NavLink to={item.to}>{item.title}</NavLink>
            </li>
          ))}
        {!session &&
          menuWithoutsession.map((item) => (
            <li key={item.title}>
              <NavLink to={item.to}>{item.title}</NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
}
