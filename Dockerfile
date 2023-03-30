FROM python:3.10.0
WORKDIR /base
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY src/ /base/    
CMD [ "python", "main.py" ]