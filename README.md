"# docker-template"

# Run Development

docker-compose --project-name movie_dev -f docker-compose.yml up --build

# Set up backend

docker-compose --project-name movie_dev -f docker-compose.yml run --rm composer install

docker-compose --project-name movie_dev -f docker-compose.yml run --rm artisan key:generate

docker-compose --project-name movie_dev -f docker-compose.yml run --rm artisan migrate:fresh --seed

docker-compose --project-name movie_dev -f docker-compose.yml run --rm artisan passport:install

docker-compose --project-name movie_dev -f docker-compose.yml run --rm artisan passport:key

# Artisan

docker-compose --project-name movie_dev -f docker-compose.yml run --rm artisan -----

# Composer

docker-compose --project-name movie_dev -f docker-compose.yml run --rm composer -----

# NPM - Backend

docker-compose --project-name movie_dev -f docker-compose.yml run --rm nodepackage -----

# PHPUnit Test

docker-compose --project-name movie_dev -f docker-compose.yml run --rm phpunit ----

docker-compose --project-name movie_dev -f docker-compose.yml run --rm phpunit --filter XXXXXXXXXX

# Remove a container/image

docker-compose --project-name movie_dev -f docker-compose.yml down

# Restart docker

sudo service docker restart

# Clear out volumes

docker system prune -a --volumes

# Get the log information about a container/image

docker logs <id>

# SSH into docker container

docker exec -it <name> ash
