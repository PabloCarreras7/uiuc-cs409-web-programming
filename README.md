# CS 409 — The Art of Web Programming (UIUC, Fall 2025)

My machine problems (MPs) for **CS 409: The Art of Web Programming** at the University of Illinois Urbana-Champaign, Fall 2025. The course goes from static HTML/CSS up to a full REST API with Node, Express and MongoDB, one MP at a time.

Each MP was originally its own repository. They are merged here with `git subtree`, so the **full commit history of every MP is preserved**.

## Authorship

- **From the course staff:** each MP's assignment specification (the `README.md` in each folder, below my summary), the starter code and build setup (webpack/CRA config, `package.json` scaffolding, GitHub Actions workflows), and in MP3 the database scripts (`database_scripts/`). Commits by the course staff appear in the history before my own.
- **Mine:** the implementation of each assignment, i.e. the commits authored by me. The "What I built" section at the top of each folder's README describes my part.

## Machine problems

| MP | Assignment | What I built | Technologies |
|----|------------|--------------|--------------|
| [MP0](mp0/) | The Basics | A personal profile card (photo, name, bio, links) laid out and styled to match a reference design. | HTML, CSS, webpack |
| [MP1](mp1/) | One Web Page To Rule Them All | **TastyBake**, a single-page bakery website with a sticky navbar that shrinks on scroll, a position indicator, smooth scrolling, an image carousel, product modals, embedded video and CSS animations. | HTML5, SCSS, vanilla JavaScript, webpack |
| [MP2](mp2/) | New Clear REACTive App | A recipe browser on top of TheMealDB API: list view with search-as-you-type and sorting, gallery view with category filters, and a detail view with previous/next navigation. | React, TypeScript, React Router, Axios |
| [MP3](mp3/) | APIed Piper | A REST API for a task manager: CRUD endpoints for users and tasks with `where`/`sort`/`select`/`skip`/`limit`/`count` query parameters, validation, proper status codes, and two-way sync between a user's `pendingTasks` and each task's assignee. | Node.js, Express, MongoDB, Mongoose |

## Running each MP

Each MP is a standalone project. Run the commands from its folder. You need [Node.js](https://nodejs.org/).

**MP0 and MP1** (webpack dev server)
```bash
cd mp0   # or mp1
npm install
npm start          # opens http://localhost:8080
```

**MP2** (Create React App)
```bash
cd mp2
npm install
npm start          # http://localhost:3000/mp2
```

**MP3** (Express + MongoDB)
```bash
cd mp3
npm install
cat > .env <<'EOF'
MONGODB_URI=<your MongoDB connection string>
PORT=3000
TOKEN=secret-starter-mern
EOF
npm start          # API at http://localhost:3000/api

# optional: seed / clear the database (scripts provided by the course)
python3 database_scripts/dbFill.py -u "localhost" -p 3000 -n 20 -t 100
python3 database_scripts/dbClean.py -u "localhost" -p 3000
```
`.env` is git-ignored. Never commit real credentials.

## Repository notes

- The `.github/workflows` inside each folder were used to deploy each MP to GitHub Pages from its original repository. GitHub only runs workflows from the root `.github/`, so they are inactive here and are kept for reference.
- Because of the subtree merge, each MP's history is recorded with paths relative to its original repo. To see an MP's history, use `git log --oneline <merge-commit>^2`, or browse it in the git log of the merge commit "Add mpN with full history via git subtree".
