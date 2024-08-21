# Makefile

# Variável para o comando docker-compose
DOCKER_COMPOSE = docker-compose

# Define a meta 'up' que executa 'docker-compose up -d'
up:
	@$(DOCKER_COMPOSE) up -d

# Define a meta 'down' que executa 'docker-compose stop'
down:
	@$(DOCKER_COMPOSE) stop

# Define a meta 'destroy' que executa 'docker-compose down'
destroy:
	@$(DOCKER_COMPOSE) down

# Define a meta 'start' que executa 'docker-compose start'
start:
	@$(DOCKER_COMPOSE) start

# Define a meta 'stop' que executa 'docker-compose stop'
stop:
	@$(DOCKER_COMPOSE) stop

.PHONY: up down destroy start stop
