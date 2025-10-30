@echo off
echo Setting up Git repository for TodoMate...
echo.

git init
git add .
git commit -m "Initial commit: TodoMate full-stack application"

echo.
echo Git repository initialized!
echo.
echo Next steps:
echo 1. Create a new repository on GitHub
echo 2. Copy the repository URL
echo 3. Run: git remote add origin YOUR_GITHUB_URL
echo 4. Run: git push -u origin main
echo.
pause