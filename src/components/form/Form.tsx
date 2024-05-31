import React, { ChangeEvent, FormEvent } from 'react'
import styles from "./form.module.css";

type Props = {
    title: string,
    description: string,
    isLoading: boolean,
    handleTitleChange: (e: ChangeEvent<HTMLInputElement>) => void,
    handleDescChange: (e: ChangeEvent<HTMLTextAreaElement>) => void,
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void
}

function FormInput({title, handleTitleChange, description, handleDescChange, handleSubmit, isLoading}: Props) {
  return (
    <>
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.formInput}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={handleTitleChange}
              placeholder="Task title"
            />
          </div>
          <div className={styles.formInput}>
            <label htmlFor="">Description</label>
            <textarea 
            name="description"
            id="description"
            value={description}
            onChange={handleDescChange}
            placeholder="Write description task...."
            rows={10}
            >
            </textarea>
          </div>
          <div className={styles.button}>
            <button 
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Add Task"}
            </button>
          </div>
        </form>
    </>
  )
}

export default FormInput;