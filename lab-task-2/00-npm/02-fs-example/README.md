# FS Module Example: Synchronous vs. Asynchronous Directory Reading

This project demonstrates how to read the contents of a directory using the core Node.js `fs` (file system) module. 

It highlights the crucial difference between **synchronous (blocking)** and **asynchronous (non-blocking)** programming in Node.js.

## Files Included

### 1. `read-dir-example.js` (Asynchronous - Recommended)
This file uses `fs.readdir()`, which is **asynchronous**. 
- When Node.js starts reading the directory, it doesn't wait for the process to finish. 
- Instead, it continues executing the remaining lines of code in the background.
- Once the directory reading is completely done, a special function called a **callback function** is triggered to handle the results (or errors).
- **Why is this better?** Because your program doesn't freeze or get "blocked" while waiting for file operations. It can do other things in the meantime!

### 2. `read-dir-example-sync.js` (Synchronous - Not Recommended)
This file uses `fs.readdirSync()`, which is **synchronous**.
- When Node.js reaches this line, it completely stops (blocks) the execution of all further code until it finishes reading the directory.
- **Why is this bad?** If you are reading a very large directory or the hard drive is slow, your entire application will freeze during that exact moment. For web servers handling multiple users, this means no other user can get a response until the operation finishes.

## How to Run the Code

Make sure you have [Node.js](https://nodejs.org/) installed on your computer.

1. Open your terminal or command prompt.
2. Navigate to this project folder (`02-fs-example`).
3. Run the asynchronous example:
   ```bash
   node read-dir-example.js
   ```
   **Notice the output order:** Step 2 prints *before* the file list! This proves the code didn't wait.

4. Run the synchronous example:
   ```bash
   node read-dir-example-sync.js
   ```
   **Notice the output order:** It prints strictly in order (1, 2, then 3) because the code waited for `readdirSync()` to finish before moving on.
