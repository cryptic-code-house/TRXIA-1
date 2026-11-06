@echo off
title Launch TRXIA Website
echo ========================================================
echo               TRXIA LIFELINE NETWORK
echo ========================================================
echo.
echo Launching TRXIA in Google Chrome...
echo.

cd /d "%~dp0"

:: Open Chrome or default browser to localhost:3000
start "" "http://localhost:3000"

:: Start the Vite development server
echo Starting local web server on port 3000...
echo (Keep this window open while previewing the website)
echo.
call npm.cmd run dev -- --host 127.0.0.1 --port 3000
