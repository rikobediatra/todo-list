"use client"
import CardList from "@/components/cardList/CardList";
import getDataTodo from "@/services/todo";
import { ToDoList } from "@/types/todoType";
import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "./list.module.css";
import SearchBar from "@/components/searchBar/SearchBar";
import { useRouter } from "next/navigation";
import CircularIndeterminate from "@/components/loading/Loading";

function  ToDoListPage() {
    const [dataTodo, setDataTodo] = useState<ToDoList[]>([]);
    const [search, setSearch] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const router = useRouter();
    
    useEffect(() => {
        const fetchTodo = async () => {
            const res = await getDataTodo(`${process.env.NEXT_PUBLIC_API_URL}/api/getTodo`);
            setIsLoading(false);
            setDataTodo(res.data);
        }

        fetchTodo();
    }, []);

    const handleDelete = async (id: string) => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/deleteTodo?id=${id}`, {
            method: "DELETE"
            });

            if (res.ok) {
                const newData = dataTodo.filter(todo => todo.id !== id);
                setDataTodo(newData);
            }

        } catch (error) {
            return {message: error}
        }
    }

    const handleModalEdit = (id: string) => {
        router.push(`/list/update/${id}`);
    }

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const filteredTodo = dataTodo.filter(todo => todo.title.toLowerCase().includes(search.toLowerCase()));

    const renderedTodo = filteredTodo.map((data) => {
        return (
            <div key={data.id}>
                <CardList data={data} handleDelete={handleDelete} handleEdit={handleModalEdit}/>
            </div>
        );
    });

    return (
        <main className={styles.main}>
            <section className={styles.search}>
                <h1>Your List Activities !!!!</h1>
                <SearchBar search={search} handleSearchChange={handleSearchChange} />
            </section>
            <section className={styles.todos}>
                {isLoading && <CircularIndeterminate />}
                {renderedTodo}
            </section>
        </main>
    );
}

export default ToDoListPage;
