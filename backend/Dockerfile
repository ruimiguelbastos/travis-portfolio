FROM python:3.9
ENV PYTHONUNBUFFERED=1
COPY ./ /backend
ARG ENV
WORKDIR /backend
RUN pip install -r requirements.txt django-cors-headers
