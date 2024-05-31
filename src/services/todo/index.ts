const getDataTodo = async(url: string) => {
    const res = await fetch(url, {
        cache: "no-cache",
        next: {
            // tags: ['todos'],
            revalidate: 5
        }
    });

    if (!res.ok) {
        throw new Error("Failed when fetching data");
    }

    return res.json();
};

export default getDataTodo;