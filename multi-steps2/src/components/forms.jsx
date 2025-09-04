import { motion } from "motion/react";
import { useState } from "react";
import { Button, InputField, Join } from ".";

export const Forms = ({
  setStep,
  form,
  setForm,
  firstName,
  lastName,
  username,
}) => {
  const [errors, setErrors] = useState({});

  function gotoNext() {
    const newErrors = {};

    // const nameRegex = /^[A-Za-z]+\s[A-Za-z]+$/;
    const nameRegex = /^[a-z ,.'-]+$/i;

    if (nameRegex.test(firstName)) {
      newErrors.firstName = null;
    } else {
      newErrors.firstName =
        "First name cannot contain special characters or numbers.";
    }

    if (nameRegex.test(lastName)) {
      newErrors.lastName = null;
    } else {
      newErrors.lastName =
        "Last name cannot contain special characters or numbers.";
    }

    if (nameRegex.test(username)) {
      newErrors.username = null;
    } else {
      newErrors.username =
        "Username cannot contain special characters or numbers.";
    }

    setErrors(newErrors);

    if (!newErrors.firstName && !newErrors.lastName && !newErrors.username) {
      localStorage.setItem("my-form", JSON.stringify(form));

      setStep("second");
    }
  }
  console.log(form);

  return (
    <motion.div
      className="inter w-full h-screen bg-[#F4F4F4] pt-[60px] flex justify-center box-border relative"
      initial={{ opacity: 0, right: -30 }}
      animate={{ opacity: 1, right: 0 }}
    >
      <div className="w-[480px] h-fit bg-white p-[32px] rounded-[8px] ">
        <Join></Join>
        <InputField
          label={"First name"}
          // inputValue={firstName}
          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
          error={errors.firstName}
          value={firstName}
          placeholder="First name"
          // setErrors={setErrors}
          errors={errors}
        ></InputField>
        <InputField
          label={"Last name"}
          // inputValue={lastName}
          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          error={errors.lastName}
          value={lastName}
          placeholder="Last name"
          // setErrors={setErrors}
          errors={errors}
        ></InputField>
        <InputField
          label={"Username"}
          // inputValue={lastName}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          error={errors.username}
          value={username}
          placeholder="Username"
          // setErrors={setErrors}
          errors={errors}
        ></InputField>
        <div className="flex gap-2">
          <Button variant="primary" gotoNext={gotoNext}>
            Continue 1/3 <img className="w-6 h-6" src="chevron_right.svg" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
