import React from 'react'
import { ToDoList } from '@/types/todoType';
import { GoTrash } from "react-icons/go";
import { MdModeEditOutline } from "react-icons/md";
import styles from "./card.module.css";
import Button from '../button/Button';

type cardProps = {
  data: any,
  handleDelete: (id: string) => void,
  handleEdit: (id: string) => void,

}

const CardList = ({ data, handleDelete, handleEdit }: cardProps) => {
    console.log(data);
    const list: ToDoList = data;
    const date = list.date.toString();
    
    

  return (
    <div className={styles.card}>
        <div className={styles.heading}>
            <h1>{list.title}</h1>
            <p>{date}</p>
        </div>
        <p>{list.description}</p>
        <div className={styles.button}>
            <Button styleClass='update' id={list.id} handleClick={handleEdit}><MdModeEditOutline /></Button>
            <Button styleClass='delete' id={list.id} handleClick={handleDelete}><GoTrash /></Button>
        </div>
    </div>
  )
}

export default CardList;