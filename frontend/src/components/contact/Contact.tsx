import React from "react";
import styles from "./Contact.module.scss";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { EmailSchema } from "custom-validation";
import type { Email } from "custom-validation";
import axios, { type AxiosResponse } from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import DOMPurify from "dompurify";

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
    const sanitizedMessage = DOMPurify.sanitize(data.message);

    const sanitizedData: Email = {
      botField: data.botField,
      email: data.email,
      loadTime: data.loadTime,
      message: sanitizedMessage,
      name: data.name,
    };

    const response: AxiosResponse<{ success: true }> = await axios.post(
      "https://api-portfolio.valeriyanev.com/send-email",
      { data: sanitizedData },
      { headers: { "Content-Type": "application/json" } }
    );

    if (response.data.success) {
      setValue("email", "");
      setValue("name", "");
      setValue("message", "");
    }
  };

  return (
    <section className={styles.sectionContact} id="contact">
      <h3 className={styles.heading}>Get in Touch</h3>
      <p className={styles.secondaryText}>Feel free to reach out - I'm open to work!</p>

      <form onSubmit={handleSubmit(sendEmail)} className={styles.form}>
        <div className={styles.rowWrapper}>
          <div>
            <label className={styles.label} htmlFor="name">
              Name:
            </label>

            {errors && errors.name && <span className={styles.error}>{errors.name.message}</span>}
          </div>
          <input {...register("name")} type="text" placeholder="Name..." className={styles.input} id="name" />
        </div>
        <div className={styles.rowWrapper}>
          <div>
            <label className={styles.label} htmlFor="email">
              Email:
            </label>

            {errors && errors.email && <span className={styles.error}>{errors.email.message}</span>}
          </div>

          <input {...register("email")} type="email" placeholder="Email..." className={styles.input} id="email" />
        </div>
        <div className={styles.rowWrapper}>
          <div>
            <label className={styles.label} htmlFor="message">
              Message:
            </label>

            {errors && errors.message && <span className={styles.error}>{errors.message.message}</span>}
          </div>

          <textarea
            {...register("message")}
            cols={50}
            rows={8}
            placeholder="Message..."
            className={styles.input}
            id="message"
          />
        </div>

        <input {...register("botField")} autoComplete="off" style={{ display: "none" }} tabIndex={-1} />
        <input type="hidden" {...register("loadTime", { valueAsNumber: true })} />

        <button type="submit" className={styles.button}>
          Send Email
        </button>
      </form>
    </section>
  );
};

export default Contact;
