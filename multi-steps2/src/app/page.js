"use client";
import React, { useEffect, useState } from "react";
import { Forms, Forms2, Forms3, Forms4 } from "@/components";

export default function Home() {
  const [step, setStep] = useState("first");
  // const localForm =
  //   typeof window !== "undefined" ? localStorage.getItem("my-form") : null;

  // console.log(localForm);

  const [form, setForm] = useState(
    // localForm
    //   ? JSON.parse(localForm)
    //   :
    {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      phone: "",
      password: "",
      confirm: "",
      date: "",
      image: "",
    }
  );

  useEffect(() => {
    const localForm = localStorage.getItem("my-form");
    if (localForm) {
      setForm(JSON.parse(localForm));
    }
  }, []);

  if (step === "first") {
    return (
      <div>
        <Forms
          setStep={setStep}
          form={form}
          setForm={setForm}
          firstName={form.firstName}
          lastName={form.lastName}
          username={form.username}
        ></Forms>
      </div>
    );
  }
  if (step === "second") {
    return (
      <div>
        <Forms2
          setStep={setStep}
          form={form}
          setForm={setForm}
          email={form.email}
          phone={form.phone}
          password={form.password}
          confirm={form.confirm}
        ></Forms2>
      </div>
    );
  }
  if (step === "third") {
    return (
      <div>
        <Forms3
          setStep={setStep}
          form={form}
          setForm={setForm}
          date={form.date}
          image={form.image}
        ></Forms3>
      </div>
    );
  }
  if (step === "fourth") {
    return (
      <div>
        <Forms4></Forms4>
      </div>
    );
  }
}
