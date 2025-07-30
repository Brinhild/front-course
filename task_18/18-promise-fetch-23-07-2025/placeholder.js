const base_url = 'https://jsonplaceholder.typicode.com';
send.onclick = async () => {
    const name = username.value.trim();

    try {
        const userRes = await fetch(`${base_url}/users?username=${name}`);
        const users = await userRes.json();
        const user = users[0];

        if (!user) throw new Error('User not found');

        const todosRes = await fetch(`${base_url}/todos?userId=${user.id}&completed=false`);
        const todos = await todosRes.json();

        todos.forEach(todo => {
            const h1 = document.createElement('h1');
            h1.textContent = `ID=${todo.id} | Todo of user: ${name}, Title: ${todo.title}`;
            const h2 = document.createElement('h2');
            h2.textContent = `Completed: ${todo.completed}`;
            document.body.append(h1, h2);
        });
    } catch (err) {
        console.error(err);
        const h1 = document.createElement('h1');
        h1.textContent = 'Posts not found';
        document.body.append(h1);
    }
};
