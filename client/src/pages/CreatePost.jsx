/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormField } from "../components/FormField";

export const CreatePost /* eslint-disable no-unused-vars */ = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = () => {};
  const handleChange = () => {};
  const handleSupriseMe = () => {};

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w-[850px]">
          Create Imaginative and Visually Stunning Images Generated through
          GeniArt and Share Them With Communitiy
        </p>
      </div>
      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Your name"
            name="name"
            type="text"
            placeholder="Yash"
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            labelName="Prompt"
            name="prompt"
            type="text"
            placeholder="an armchair in the shape of an avocado"
            value={form.prompt}
            handleChange={handleChange}
            isSupriseMe
            handleSupriseMe={handleSupriseMe}
          />
        </div>
      </form>
    </section>
  );
};
