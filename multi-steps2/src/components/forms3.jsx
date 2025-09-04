import { motion } from "motion/react";
import { useState } from "react";
import { Button, DateField, ImageField, Join } from ".";

export const Forms3 = ({ setStep, form, setForm }) => {
  const [errors, setErrors] = useState({});
  const [preview, setPreview] = useState();

  function gotoNext() {
    const newErrors = {};

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    const imageRegex = /\.(jpg|jpeg|png)$/i;

    if (dateRegex.test(form.date)) {
      newErrors.date = null;
    } else {
      newErrors.date = "Please select a date.";
    }
    if (imageRegex.test(form.image)) {
      newErrors.image = null;
    } else {
      newErrors.image = "Image cannot be blank.";
    }
    setErrors(newErrors);

    if (!newErrors.date && !newErrors.image) {
      localStorage.setItem("my-form", JSON.stringify(form));

      setStep("fourth");
    }
  }

  function goBack() {
    setStep("second");
  }
  console.log(errors);

  function handleImageChange(e) {
    const file = e.target.files[0];
    const filePreview = URL.createObjectURL(file);
    setPreview(filePreview);
  }

  return (
    <motion.div
      className="inter w-full h-screen bg-[#F4F4F4] pt-[60px] flex justify-center box-border relative"
      initial={{ opacity: 0, right: -30 }}
      animate={{ opacity: 1, right: 0 }}
    >
      <div className="w-[480px] h-fit bg-white p-[32px] rounded-[8px] ">
        <Join></Join>
        <DateField
          label={"Date of birth"}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          error={errors.date}
          errors={errors}
        ></DateField>
        <ImageField
          label={"Profile image"}
          onChange={(e) => {
            handleImageChange(e);
            setForm({ ...form, image: e.target.files[0].name });
          }}
          error={errors.image}
          errors={errors}
          preview={preview}
        ></ImageField>
        <div className="flex gap-2">
          <Button variant="secondary" goBack={goBack}>
            Back
          </Button>
          <Button variant="primary" gotoNext={gotoNext}>
            Continue 3/3 <img className="w-6 h-6" src="chevron_right.svg" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
