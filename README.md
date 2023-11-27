
# Task manager backend

Backend part of a task manager app, where user can create, get, update and delete tasks.


## Deployed url

  [https://task-manager-backend-ten.vercel.app/](https://task-manager-backend-ten.vercel.app/)



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL`=mongodb+srv://only_me:112022@cluster0.efpjwcu.mongodb.net/task-manager?retryWrites=true&w=majority

`JWT_SECRET`='secret_token'


## Installation

Install task-manager-backend with npm

```bash
  npm install task-manager-backend
  cd task-manager-backend
```
    
## Run Locally

Clone the project

```bash
  git clone https://github.com/Marufhossain112/task-manager-backend.git
```

Go to the project directory

```bash
  cd task-manager-backend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## API Reference

#### Create a task

```http
  Post /api/v1/tasks/create-task

```

#### Get all tasks

```http
  GET /api/v1/tasks
```

#### Get completed tasks

```http
  GET /api/v1/tasks/analytics/completed?day=7
```

| Query | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `day`      | `number` | **Required**.can query last 7 days completed tasks, you can use any number here instead of 7.  |

#### Get single task

```http
  GET /api/v1/tasks/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of task to fetch |

#### Update single task

```http
  Patch /api/v1/tasks/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of task to fetch |


#### Delete single task

```http
  Delete /api/v1/tasks/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of task to fetch |







## Tech Stack

**Database:** MongoDB

**Server:** Node, Express

