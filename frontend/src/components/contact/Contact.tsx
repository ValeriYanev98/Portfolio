import type React from "react";
import styles from "./Contact.module.scss";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { EmailSchema } from "custom-validation";
import type { Email } from "custom-validation";
import axios, { type AxiosResponse } from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Email>({ resolver: zodResolver(EmailSchema), reValidateMode: "onBlur" });

  useEffect(() => {
    setValue("loadTime", Date.now()); // Set the initial load time when the form mounts.
  }, [setValue]);

  const sendEmail: SubmitHandler<Email> = async (data): Promise<void> => {
    const response: AxiosResponse<{ success: true }> = await axios.post(
      "https://api-portfolio.valeriyanev.com/send-email",
      { data },
      { headers: { "Content-Type": "application/json" } }
    );

    if (response.data.success) {
      setValue("email", "");
      setValue("name", "");
      setValue("message", "");
    }
  };

  return (
    <section className={styles.sectionContact}>
      <h3>Get in Touch</h3>
      <p>Feel free to reach out - I'm open to work!</p>

      <form onSubmit={handleSubmit(sendEmail)}>
        <div className={styles.sectionContactRowWrapper}>
          <label>Name: </label>
          <input {...register("name")} type="text" placeholder="Name..." />
          {errors && errors.name && <span>{errors.name.message}</span>}
        </div>
        <div className={styles.sectionContactRowWrapper}>
          <label>Email: </label>
          <input {...register("email")} type="email" placeholder="Email..." />
          {errors && errors.email && <span>{errors.email.message}</span>}
        </div>
        <div className={styles.sectionContactRowWrapper}>
          <label>Message: </label>
          <textarea {...register("message")} cols={50} rows={8} placeholder="Message..." />
          {errors && errors.message && <span>{errors.message.message}</span>}
        </div>

        <input {...register("botField")} autoComplete="off" style={{ display: "none" }} tabIndex={-1} />
        <input type="hidden" {...register("loadTime", { valueAsNumber: true })} />

        <button type="submit">Send Email</button>
      </form>
    </section>
  );
};

export default Contact;
