#!/bin/bash

cd /var/www/jdn

git checkout -- .
git pull

pip install -r /var/www/jdn/backend/config/requirements.txt

cd backend
uvicorn app.main:app --host 0.0.0.0 --reload --port 80