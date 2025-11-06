import type React from "react";
import styles from "./Contact.module.scss";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { EmailSchema } from "custom-validation";
import type { Email } from "custom-validation";
import axios, { type AxiosResponse } from "axios";
import { zodResolver } from "@hookform/resolvers/zod";

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Email>({ resolver: zodResolver(EmailSchema), reValidateMode: "onBlur" });

  const sendEmail: SubmitHandler<Email> = async (data): Promise<void> => {
    console.log(data);

    const response = await axios.post(
      "http://localhost:3000/send-email",
      { data },
      { headers: { "Content-Type": "application/json" } }
    );

    console.log(response);
  };

  return (
    <section className={styles.sectionContact}>
      <h3>Get in Touch</h3>
      <p>Feel free to reach out - I'm open to work!</p>

      <form onSubmit={handleSubmit(sendEmail)}>
        <div className={styles.sectionContactRowWrapper}>
          <label>Name: </label>
          <input {...register("name")} type="text" />
          {errors && errors.name && <span>{errors.name.message}</span>}
        </div>
        <div className={styles.sectionContactRowWrapper}>
          <label>Email: </label>
          <input {...register("email")} type="text" />
          {errors && errors.email && <span>{errors.email.message}</span>}
        </div>
        <div className={styles.sectionContactRowWrapper}>
          <label>Message: </label>
          <textarea {...register("message")} cols={50} rows={8} />
          {errors && errors.message && <span>{errors.message.message}</span>}
        </div>

        <button type="submit">Send Email</button>
      </form>
    </section>
  );
};

export default Contact;
