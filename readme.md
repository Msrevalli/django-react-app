python3 -m venv venv
source venv/bin/activate
deactivate
python manage.py runserver

npm install
npm cache clean --force
rm -rf node_modules
rm package-lock.json
npm install

npm start
