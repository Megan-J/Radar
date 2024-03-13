# CS-160

all commands written below are for mac

### Server (backend)

- to activate the virtual environment for backend, use the command

```bash
cd server
source venv/bin/activate
```

- install flask and dependencies:

```bash
cd server
pip3 install flask
pip3 install -U flask-cors
pip3 install -U Flask-SQLAlchemy
pip3 install -U mysql-connector-python

```

- to run the server:

```bash
cd server
python3 app.py
```

- to stop the server:

```bash
cd server
^C
```

- to deactivate environment:
```bash
cd server
deactivate
```

### Client (frontend)

- to run the client server

```bash
cd client
npm run dev
```
- do npm install if dependencies not installed yet

