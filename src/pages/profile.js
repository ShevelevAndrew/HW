import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleVisibleProfile, updateProfile } from "../store/profile";

export const ProfilePge = () => {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [isVisible, setisVisible] = React.useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateProfile({
        firstName: firstName,
        lastName: lastName,
        visible: isVisible,
      })
    );
  };

  return (
    <div>
      Profile Page
      <form onSubmit={handleSubmit}>
        <label className="profileinput">
          First name:
          <input type="text" onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <label className="profileinput">
          Last Name:
          <input type="text" onChange={(e) => setLastName(e.target.value)} />
        </label>
        <label className="profileinput">
          <input
            type="checkbox"
            defaultChecked={isVisible}
            onChange={() => setisVisible(!isVisible)}
          />
          Visible profile
        </label>
        <button type="submit">send</button>
      </form>
      {/* <button onClick={() => dispatch(toggleVisibleProfile())}>toggle</button> */}
      {profile.isVisibleProfile && (
        <>
          <h2>{profile.firstName}</h2>
          <h2>{profile.lastName}</h2>
        </>
      )}
    </div>
  );
};
