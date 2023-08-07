// components/ContactForm.tsx

import React, { useState, ChangeEvent, FormEvent } from "react";
import nodemailer from "nodemailer";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const transporter = nodemailer.createTransport({
        service: "Gmail", // Remplace avec ton service de messagerie
        auth: {
          user: "ton-email@gmail.com", // Remplace avec ton adresse e-mail
          pass: "ton-mot-de-passe", // Remplace avec ton mot de passe
        },
      });

      await transporter.sendMail({
        from: "ton-email@gmail.com",
        to: "destinataire@example.com", // Remplace avec l'adresse e-mail du destinataire
        subject: "Nouveau message de contact",
        text: `Nom: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
      });

      console.log("E-mail envoyé avec succès !");
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'e-mail:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Champs du formulaire... */}
      <button type="submit">Envoyer</button>
    </form>
  );
};

ContactForm.propTypes = {
  // Ajoute ici les PropTypes pour les éventuelles props
};

export default ContactForm;
