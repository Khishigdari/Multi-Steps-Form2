"use client";
import React, { useState } from "react";
import { Forms } from "@/components";

export default function Home() {
  const [step, setStep] = useState("first");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirm: "",
    date: "",
    image: "",
  });

  if (step === "first") {
    return (
      <div>
        <Forms
          setStep={setStep}
          from={form}
          setForm={setForm}
          firstName={form.firstName}
          lastName={form.lastName}
          username={form.username}
          email={form.email}
          phone={form.phone}
          password={form.password}
          confirm={form.confirm}
          date={form.date}
          image={form.image}
        ></Forms>
      </div>
    );
  }
  if (step === "second") {
    return (
      <div>
        <Forms
          setStep={setStep}
          from={form}
          setForm={setForm}
          firstName={form.firstName}
          lastName={form.lastName}
          username={form.username}
          email={form.email}
          phone={form.phone}
          password={form.password}
          confirm={form.confirm}
          date={form.date}
          image={form.image}
        ></Forms>
      </div>
    );
  }
  if (step === "third") {
    return (
      <div>
        <Forms
          setStep={setStep}
          from={form}
          setForm={setForm}
          firstName={form.firstName}
          lastName={form.lastName}
          username={form.username}
          email={form.email}
          phone={form.phone}
          password={form.password}
          confirm={form.confirm}
          date={form.date}
          image={form.image}
        ></Forms>
      </div>
    );
  }
  if (step === "fourth") {
    return (
      <div>
        <Forms></Forms>
      </div>
    );
  }
}
