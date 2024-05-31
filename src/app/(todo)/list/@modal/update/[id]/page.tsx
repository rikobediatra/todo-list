"use client"
import Modal from "@/components/modal/Modal";
import getDataTodo from "@/services/todo";
import styles from "./update.module.css";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { permanentRedirect, redirect, useRouter } from "next/navigation";

export default function UpdateTodo(props: any) {
  const { params } = props;
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    const fetchTodo = async () => {
        const res = await getDataTodo(`${process.env.NEXT_PUBLIC_API_URL}/api/getTodo/?id=` + params.id);
        setTitle(res.data.title);
        setDescription(res.data.description);
    }

    fetchTodo();
  }, [params])

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  const onChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  }
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("/api/updateTodo", {
        method: "POST",
        body: JSON.stringify({
            id: params.id,
            title,
            description
        }),
    });

    if (res.status === 200) {
      router.push('/create');
    }
  }

  return (
    <Modal>
      <div>
        <h1>Edit</h1>
      </div>
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.formInput}>
            <label htmlFor="title">Title</label>
            <input 
                type="text" 
                id="title" 
                value={title}
                placeholder={title}
                onChange={onChangeTitle}
            />
        </div>
        <div className={styles.formInput}>
            <label htmlFor="title">Description</label>
            <textarea 
                name="description" 
                id="description"
                value={description}
                placeholder={description}
                onChange={onChangeDescription}
            ></textarea>
        </div>
        <div className={styles.button}>
            <button type="submit">Update</button>
        </div>
      </form>
    </Modal>
  );
}
