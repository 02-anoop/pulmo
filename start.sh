#!/bin/bash
# ========================================================
# PulmoAI - Local Development Startup Script
# ========================================================

set -e

PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "🫁 Starting PulmoAI Services..."

# 1. Check Backend .env
if [ ! -f "$PROJECT_DIR/backend/.env" ]; then
    cp "$PROJECT_DIR/backend/.env.example" "$PROJECT_DIR/backend/.env"
    echo "⚠️  Created backend/.env from template."
fi

# 2. Check Frontend .env
if [ ! -f "$PROJECT_DIR/frontend/.env" ]; then
    cp "$PROJECT_DIR/frontend/.env.example" "$PROJECT_DIR/frontend/.env"
    echo "⚠️  Created frontend/.env from template."
fi

# 3. Check Chatbot .env
if [ ! -f "$PROJECT_DIR/medical-chatbot/.env" ]; then
    cp "$PROJECT_DIR/medical-chatbot/.env.example" "$PROJECT_DIR/medical-chatbot/.env"
    echo "⚠️  Created medical-chatbot/.env from template."
fi

# Function to clean up background processes on CTRL+C
cleanup() {
    echo ""
    echo "🛑 Shutting down PulmoAI services..."
    kill $(jobs -p) 2>/dev/null || true
    exit 0
}
trap cleanup SIGINT SIGTERM EXIT

# Start Backend (Port 5001)
echo "🚀 [1/3] Starting Backend API on http://localhost:5001..."
cd "$PROJECT_DIR/backend"
npm run dev &
BACKEND_PID=$!

# Start Python Chatbot (Port 5002 - avoids macOS AirPlay collision on 5000)
if [ -d "$PROJECT_DIR/medical-chatbot/venv" ]; then
    echo "🤖 [2/3] Starting Medical Chatbot Service on http://localhost:5002..."
    cd "$PROJECT_DIR/medical-chatbot"
    PORT=5002 ./venv/bin/python app.py &
    CHATBOT_PID=$!
else
    echo "⚠️  Chatbot venv not found. Chatbot service skipped (Backend will use fallback)."
fi

# Start Frontend (Port 3000)
echo "💻 [3/3] Starting Frontend UI on http://localhost:3000..."
cd "$PROJECT_DIR/frontend"
npm start &
FRONTEND_PID=$!

echo ""
echo "✨ All services launched!"
echo "   - Frontend UI:  http://localhost:3000"
echo "   - Backend API:  http://localhost:5001"
echo "   - Chatbot RAG:  http://localhost:5000"
echo ""
echo "Press Ctrl+C to stop all services."

# Wait for processes
wait
