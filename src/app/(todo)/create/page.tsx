"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "./create.module.css";
import FormInput from "@/components/form/Form";
import ResField from "@/components/resField/ResField";

const CreateTodoPage = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [respon, setRespon] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(true);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const res = await fetch("/api/addTodo", {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
      }),
    });

    if (res.status === 200) {
      setIsLoading(false);
      resetInput();
      setRespon("Data Berhasil Ditambahkan");
      setIsSuccess(true);
      setResponTimeOut();
    } else {
      setIsLoading(false);
      setIsSuccess(false);
      setRespon("Gagal Menambah Data");
    }
  };

  const resetInput = () => {
    setTitle("");
    setDescription("");
  };

  const setResponTimeOut = () => {
    setTimeout(() => {
      setRespon("");
    }, 2000);
  };

  return (
    <section className={styles.create}>
      <div className={styles.card}>
        <h1>ADD NEW TASK !!</h1>
        <FormInput
          title={title}
          description={description}
          isLoading={isLoading}
          handleTitleChange={handleTitleChange}
          handleDescChange={handleDescChange}
          handleSubmit={handleSubmit}
        />
        {respon && <ResField isSuccess={isSuccess} message={respon}/>}
        
      </div>
    </section>
  );
};

export default CreateTodoPage;
