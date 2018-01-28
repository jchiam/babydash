build-deploy:
	. config/.env && docker-compose up --build -d
