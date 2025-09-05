import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Button, InputField, Join, PasswordField } from ".";

export const Forms2 = ({
  setStep,
  form,
  setForm,
  email,
  phone,
  password,
  confirm,
}) => {
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(form.email) || form.email === "") {
      newErrors.email = null;
    } else {
      newErrors.email = "Please provide a valid email address.";
    }
    setErrors({ ...errors, ...newErrors });
  }, [form.email]);

  useEffect(() => {
    const newErrors = {};
    const phoneRegex = /^\d{8}$/;

    if (phoneRegex.test(form.phone) || form.phone === "") {
      newErrors.phone = null;
    } else {
      newErrors.phone = "Please enter a valid phone number.";
    }
    setErrors({ ...errors, ...newErrors });
  }, [form.phone]);

  useEffect(() => {
    const newErrors = {};
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])(?!.*\s).{8,15}$/;

    if (passwordRegex.test(form.password) || form.password === "") {
      newErrors.password = null;
    } else {
      newErrors.password =
        "Password must include letters, numbers and special characters.";
    }

    setErrors({ ...errors, ...newErrors });
  }, [form.password]);

  useEffect(() => {
    const newErrors = {};

    if (form.password === form.confirm || form.confirm === "") {
      newErrors.confirm = null;
    } else {
      newErrors.confirm = "Passwords do not match. Please try again.";
    }
    // if (form.confirm === "") {
    //   newErrors.confirm = "Passwords do not match. Please try again.";
    // }
    setErrors({ ...errors, ...newErrors });
  }, [form.confirm]);

  function gotoNext() {
    const newErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{8}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])(?!.*\s).{8,15}$/;

    if (emailRegex.test(form.email)) {
      newErrors.email = null;
    } else {
      newErrors.email = "Please provide a valid email address.";
    }

    if (phoneRegex.test(form.phone)) {
      newErrors.phone = null;
    } else {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (passwordRegex.test(form.password)) {
      newErrors.password = null;
    } else {
      newErrors.password =
        "Password must include letters, numbers and special characters.";
    }

    if (form.password === form.confirm) {
      newErrors.confirm = null;
    } else {
      newErrors.confirm = "Passwords do not match. Please try again.";
    }
    if (form.confirm === "") {
      newErrors.confirm = "Passwords do not match. Please try again.";
    }

    setErrors(newErrors);

    if (
      !newErrors.email &&
      !newErrors.phone &&
      !newErrors.password &&
      !newErrors.confirm
    ) {
      localStorage.setItem("my-form", JSON.stringify(form));

      setStep("third");
    }
  }

  function goBack() {
    setStep("first");
  }
  console.log(errors);

  return (
    <motion.div
      className="inter w-full h-screen bg-[#F4F4F4] pt-[60px] flex justify-center box-border relative"
      initial={{ opacity: 0, right: -30 }}
      animate={{ opacity: 1, right: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-[480px] h-fit bg-white p-[32px] rounded-[8px] ">
        <Join></Join>
        <InputField
          label={"Email"}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          error={errors.email}
          value={email}
          placeholder="Email"
          errors={errors}
        ></InputField>
        <InputField
          label={"Phone number"}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          error={errors.phone}
          value={phone}
          placeholder="Phone number"
          errors={errors}
        ></InputField>
        <PasswordField
          label={"Password"}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          error={errors.password}
          value={password}
          placeholder="Password"
          errors={errors}
        ></PasswordField>
        <PasswordField
          label={"Confirm"}
          onChange={(e) => setForm({ ...form, confirm: e.target.value })}
          error={errors.confirm}
          value={confirm}
          placeholder="Confirm"
          errors={errors}
        ></PasswordField>
        <div className="flex gap-2">
          <Button variant="secondary" goBack={goBack}>
            Back
          </Button>
          <Button variant="primary" gotoNext={gotoNext}>
            Continue 2/3 <img className="w-6 h-6" src="chevron_right.svg" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
