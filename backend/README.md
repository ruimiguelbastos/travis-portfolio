source venv/bin/activate

python manage.py runserver
python manage.py makemigrations projects
python manage.py migrate projects

#RUN lint
black {directory}
ruff format
ruff check
flake8 {directory}
