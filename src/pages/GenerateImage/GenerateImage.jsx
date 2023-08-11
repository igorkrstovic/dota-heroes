import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./GenerateImage.css";

import Nav from "../../components/Nav/Nav";
import BackBtn from "../../components/BackBtn/BackBtn";
import FormField from "../../components/FormField";
import Loader from "../../components/Loader";

import { preview } from "../../assets";
import { getRandomPrompt } from "../../utils";

const GenerateImage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch("http://localhost:8080/api/v1/dalle", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: form.prompt }),
        });

        const data = await response.json();

        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (error) {
        alert(error);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert("Please enter a prompt.");
    }
  };

  const handleSubmit = async () => {};

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  return (
    <div>
      <Nav />
      <div className="sm:ml-0 ml-[50px]">
        <BackBtn />
      </div>
      <section className="max-w-7xl mx-auto sm:px-0 px-5 ">
        <div>
          <h1 className="font-extrabold text-[#ffffff] ">
            Generate Your Dota 2 Hero
          </h1>
          <p className="sm:mt-40 mt-28 text-white text-[20px] max-w-[650px]">
            Create unique Dota 2 Heroe images generated through DALL-E AI
          </p>
        </div>
        <form className="max-w-3xl " onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5">
            <FormField
              type="text"
              name="prompt"
              placeholder="Add a prompt"
              value={form.prompt}
              handleChange={handleChange}
              isSurpriseMe
              handleSurpriseMe={handleSurpriseMe}
            />
            <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 sm:w-[400px] sm:h-[400px] w-[350px] h-[350px] p-3 flex justify-center items-center">
              {form.photo ? (
                <img
                  src={form.photo}
                  alt={form.prompt}
                  className="w-full h-full object-contain"
                />
              ) : (
                <img
                  scr={preview}
                  alt="preview"
                  className="w-9/12 h-9/12 object-contain opacity-40"
                />
              )}
              {generatingImg && (
                <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                  <Loader />
                </div>
              )}
            </div>
          </div>

          <div className="mt-5 flex gap-5 sm:ml-0 -ml-4">
            <button
              type="button"
              onClick={generateImage}
              className="demo_btn sm:w-1/3 w-2/3 hover:bg-white bg-black -ml-8 sm:scale-75 scale-[60%]"
            >
              {generatingImg ? "Generating..." : "Generate"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default GenerateImage;
