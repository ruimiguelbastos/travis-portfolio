# Requisites

Have docker and docker-compose installed.

# Setup

```bash
cd backend
cp .env.example .env
```
Fill .env with correct data

## Installation

On root folder

```bash
docker compose build
docker compose run api python manage.py migrate projects
```

## Start
On root folder
```bash
docker compose up
```

