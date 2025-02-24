up-dev:
	docker-compose -f docker-compose.dev.yml up

up-prod:
	docker-compose -f docker-compose.prod.yml up

down:
	docker-compose -f docker-compose.dev.yml -f docker-compose.prod.yml down