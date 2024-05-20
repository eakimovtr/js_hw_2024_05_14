const userList = document.getElementById('list-group');

type User = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error! Status: ${response.status}`);
    }

    const result = await response.json() as User[];

    return result;
  } catch (error) {
    alert(error);
  }
}

getUsers().then((users) => printUsers(users));

function printUsers(users: User[]): void {
    users.forEach(user => {
        userList.innerHTML += createUserElement(user);
    });
}

function createUserElement(user: User): string {
  const userElement = `
    <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${user.id}</h5>
        </div>
        <p class="mb-1">${user.title}</p>
        <small>${user.body}</small>
    </a>
    <hr>
    `;

    return userElement;
}
