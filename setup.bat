@echo off
echo Setting up TodoMate Full Stack Application...
echo.

echo Installing Backend Dependencies...
cd backend
call npm install
if %errorlevel% neq 0 (
    echo Failed to install backend dependencies
    pause
    exit /b 1
)

echo.
echo Installing Frontend Dependencies...
cd ..\frontend
call npm install
if %errorlevel% neq 0 (
    echo Failed to install frontend dependencies
    pause
    exit /b 1
)

echo.
echo Setup completed successfully!
echo.
echo To start the application:
echo 1. Start MongoDB service
echo 2. Run 'npm run dev' in the backend folder
echo 3. Run 'npm start' in the frontend folder
echo.
pause