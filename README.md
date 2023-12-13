# GrepIt-Backend

Backend for a Rapid-Fire / Trivia website to test your technical skills along with your buddies
"Grep" from your knowledge and score more to be on top of a leaderboard!

## 📚 Table Of Contents

- [How It Works](#🚀-how-it-works)
- [Features](#🌐-features)
- [Tech Stack](#⚡-tech-stack)
- [Dependencies](#📦-dependencies)
- [How To Setup](#🛠️-how-to-setup)
- [Reference Links](#🔗-reference-links)
- [Directory Structure](#📁-directory-structure)
- [Claim an Issue](#👆-claim-an-issue)
- [Communication](#💻-communication)
- [License](#🛡️-license)
- [Contribution Guidelines](#📋-contribution-guidelines)

## 🚀 How It Works:

-   Receive a prompt to enter a command or HTML tag or JS keywords.
-   Race against time to input the correct response.
-   Earn points for accuracy and speed.

## 🌐 Features:

-   Diverse challenges covering bash commands, HTML tags, and more.
-   Real-time scoring and leaderboard for competitive fun.
-   Educational and entertaining for beginners and experts alike.
-   Helps brush up your grasp on these topics.
-   Helps you "Grep" these commands from your knowledge-base!
-   Attempt to beat your own high-score, and practice for the same in the customizable practice-space! It's not always about competing everytime...

## ⚡ Tech Stack:

-   Nodejs (v20.5.0)
-   ExpressJS
-   

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

## 🔗 Reference Links:

### 🚀 Starter

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
├── 📄 app.js
├── 🧾 package.json
├── 🧾 package-lock.json
├──  ℹ️ README.md
└── src
    ├── config
    │   └── 📄 db.config.js
    ├── controllers
    │   └── 📄 userAuth.controllers.js
    ├── middlewares
    │   └── 📄 userAuth.middleware.js
    └── routes
        └── v1
            └── 📄 userAuth.routes.js

6 directories, 8 files
```

> [!NOTE]
> While adding new files make sure to have an entry here. It will be helpful to new contributors.

## 👆 Claim an issue:

Comment on the issue. In case of no activity on the issue even after 2 days, the issue will be reassigned. If you have difficulty approaching the issue, feel free to ask on our discord channel.

## 💻 Communication:

Whether you are working on a new feature or facing a doubt please feel free to ask us on our [discord](https://discord.gg/D9999YTkS8) channel. We will be happy to help you out.

## 🛡️ License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 📋 Contribution Guidelines:

Please help us follow the best practice to make it easy for the reviewer as well as the contributor. We want to focus on the code quality more than on managing pull request ethics.

-   People before code: If any of the following rules are violated, the pull-requests will be rejected. This is to create an easy and joyful onboarding process for new programmers and first-time contributors.

-   Avoid commiting after opening pull request and name the commit as something meaningful, it is highly recommened to follow.

-   Reference the issue numbers in the commit message if it resolves an open issue. Follow the pattern provided [here](.github/PULL_REQUEST_TEMPLATE.md).

-   Provide relevant screenshot/short video for easier review.

-   Pull Request older than 3 days with no response from the contributor shall be marked closed.

-   Avoid duplicate PRs, if need please comment on the older PR with the PR number of the follow-up (new PR) and close the obsolete PR yourself.

-   Be polite: Be polite to other community members.

## 🤝 Mentors

1.  **Bhupesh Dewangan**  
    *Opencode Bot Developer*  
    *The YT demonstrator guy ;-;*  
    `githubID:` [bhupesh98](https://github.com/bhupesh98)  
    `discordID:` bhupesh6726

2. **Vatsal Bhuva**  
    *Just an ordinary guy*  
    `githubID:` [VatsalBhuva11](https://github.com/VatsalBhuva11)  
    `discordID:` vbx11

## 💪 Thanks To All Contributors

All the contributor's github profile image will be displayed here, pick up the best one real quick.