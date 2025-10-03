import ContactForm from "@/components/ContactForm";
import React from "react";

const Page = () => {
  return (
    <div
      style={{ backgroundColor: "black" }}
      className="w-screen min-h-screen bg-cover bg-center flex items-center justify-center py-20 px-4"
    >
      <div
        style={{ backgroundColor: "black" }}
        className="min-h-[60%] w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] relative bg-cover bg-center rounded-xl border border-white p-6 sm:p-8"
      >
        <div className="w-full flex justify-center items-center">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Page;
