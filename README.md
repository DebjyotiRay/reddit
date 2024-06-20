# ReddIt-Backend

A quiz-hosting application, where a user can create a quiz-room, allowing multiple others to join the room. The questions can be set manually for that room, and the one with the most right answers win the top-spot on the leaderboard!

## 📚 Table Of Contents

-   [How It Works](#🚀-how-it-works)
-   [Features](#🌐-features)
-   [Tech Stack](#⚡-tech-stack)
-   [Dependencies](#📦-dependencies)
-   [How To Setup](#🛠️-how-to-setup)
-   [Reference Links](#🔗-reference-links)
-   [Directory Structure](#📁-directory-structure)
-   [Claim an Issue](#👆-claim-an-issue)
-   [Communication](#💻-communication)
-   [License](#🛡️-license)
-   [Contribution Guidelines](#📋-contribution-guidelines)
-   [Mentors](#🤝-Mentors)

## 🚀 How It Works:-

-   The creator has the option to create multiple MCQ type questions.
-   Other users can join the room entering the code.
-   Once the creator starts the quiz, each question will be displayed one-by-one, each having a timer and points awarded based on how fast one answers.
-   At the end of the quiz, you will be able to view a leaderboard. The creator can now restart the quiz (having the option to reset the questions).
-   Features can be implemented to archive the room and the leaderboard.

## ⚡ Tech Stack:

-   Nodejs (v20.5.0)
-   ExpressJS
-   MySQL

## 📦 Dependencies:

You need npm/yarn installed in your local machine in order to run this app.

## 🛠️ How To Setup

-   Make sure your machine is having internet connection.
-   Fork the repository.
-   Open shell (which ever your OS support) on your PC.
-   Change drive to the location where you want your project to be copied.
-   Clone it to your local setup by using command `git clone <forked-repo-link>`.
-   Once cloned, Run the following command in the root directory of the project `npm install`.
-   Make sure you have required enviornment variables saved in the `.env` file in the root of the project. A file `.env.example` is attached for reference.
-   After the process is completed, run the command `npm start` or `npm run dev`.
-   The backend will be live on `localhost:4000`.

```bash
  npm install
  npm start
```

## Reference Links:

-   [Download and install the latest version of Git.](https://git-scm.com/downloads)
-   [Set your username in Git.](https://help.github.com/articles/setting-your-username-in-git)
-   [Set your commit email address in Git.](https://help.github.com/articles/setting-your-commit-email-address-in-git)
-   [Setup Nodejs](https://nodejs.org/en/blog/release/v16.18.1/)

### 🖥️ Express.js

-   [Express Crash Course](https://www.youtube.com/watch?v=L72fhGm1tfE&ab_channel=TraversyMedia)
-   [Mastering Node.js](https://www.youtube.com/playlist?list=PLinedj3B30sDby4Al-i13hQJGQoRQDfPo)

### 🗃️ MySQL with Prisma ORM

-   [Get Started](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/connect-your-database-node-mysql)
-   [MySQL in prisma](https://www.prisma.io/docs/orm/overview/databases/mysql)
-   [YT Crash Course](https://www.youtube.com/watch?v=RebA5J-rlwg&pp=ygUad2ViIGRldiBzaW1wbGlmaWVkIHByaXNtYSA%3D)

### API Documentation

Kindly refer to this file [API_ENDPOINTS](API_ENDPOINTS.md) for easier understanding.
Update the `API_ENDPOINTS.md` file as you write/complete a controller function.

## 📁 Directory Structure:

```bash
.
├── API_ENDPOINTS.md
├── app.js
├── CONTRIBUTORS.md
├── LICENSE
├── package.json
├── package-lock.json
├── prisma
│   └── schema.prisma
├── README.md
└── src
    ├── config
    │   └── db.config.js
    ├── controllers
    │   ├── questions.controllers.js
    │   ├── room.controllers.js
    │   └── userAuth.controllers.js
    ├── middlewares
    │   └── userAuth.middleware.js
    ├── routes
    │   ├── index.routes.js
    │   └── v1
    │       ├── questions.routes.js
    │       ├── room.routes.js
    │       ├── userAuth.routes.js
    │       └── v1-main.js
    └── utils
        └── responseCodes.js

8 directories, 19 files

```

> [!NOTE]
> While adding new files make sure to have an entry here. It will be helpful to new contributors.

## 👆 Claim an issue:

Comment on the issue. In case of no activity on the issue even after 2 days, the issue will be reassigned. If you have difficulty approaching the issue, feel free to ask on our discord channel.

-   It is also requested to make your entry in [CONTRIBUTORS](CONTRIBUTORS.md) markdown file before submitting the PR.

## 💻 Communication:

Whether you are working on a new feature or facing a doubt please feel free to ask us on our [discord](https://discord.gg/D9999YTkS8) channel. We will be happy to help you out.

## 🛡️ License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
