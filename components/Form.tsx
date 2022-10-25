import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";

// Images
import more1 from "../images/more1.png";

const Form = () => {
  const [state, handleSubmit] = useForm("xgeddnbp");

  if (state.succeeded) {
    return (
      <>
        <p className="mb-4">Спасибо, в ближайшее время мы свяжемся с вами!</p>
        <Image src={more1} width={572} height={305} placeholder="blur" alt="Дэмиан Херст, Физическая невозможность смерти в сознании живущего" />
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input id="email" type="email" name="email" className="w-full mt-1 mb-4 px-4 py-2 rounded-lg shadow-md text-black" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="phone">Телефон:</label>
      <input id="phone" type="text" name="phone" className="w-full mt-1 mb-4 px-4 py-2 rounded-lg shadow-md text-black" />
      <ValidationError prefix="Телефон" field="phone" errors={state.errors} />

      <label htmlFor="message">Сообщение:</label>
      <textarea id="message" name="message" className="w-full mt-1 mb-4 px-4 py-2 rounded-lg shadow-md text-black" />
      <ValidationError prefix="Сообщение" field="message" errors={state.errors} />

      <button type="submit" disabled={state.submitting} className="mt-1 mb-4 px-8 py-2 rounded-lg shadow-md text-black bg-white">
        Отправить
      </button>
    </form>
  );
};

export default Form;
