import { Button, Input } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../store/profile";

export const ProfileForm = ({ firstName, lastName, visible }) => {
  const [form, setForm] = useState({
    firstName,
    lastName,
    visible: true,
  });
  const dispatch = useDispatch();

  const handleChangeForm = (e) => {
    const field = e.target.getAttribute("data-name");

    if (!!field) {
      setForm({
        ...form,
        [field]: e.target.value,
      });
    }
  };
  return (
    <div>
      <h1>Edit ProfileForm</h1>
      <Input
        onChange={handleChangeForm}
        inputProps={{ "data-name": "firstName" }}
        placeholder="firstname"
        value={form.firstName}
      />
      <Input
        onChange={handleChangeForm}
        inputProps={{ "data-name": "lastName" }}
        placeholder="lastname"
        value={form.lastName}
      />
      <Button onClick={() => dispatch(updateProfile(form))}>save</Button>
    </div>
  );
};
