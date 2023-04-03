docker stop $(docker ps -a -q)
docker system prune -a -f
docker build -t angular-nginx-csp .
docker run --name angular-nginx-csp -d -p 8080:80 angular-nginx-csp