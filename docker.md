

docker login ghcr.io 

docker build . --platform linux/amd64 -t ghcr.io/adityaprasad48/fabrication-next:latest

docker push ghcr.io/adityaprasad48/fabrication-next:latest

docker run -p 3000:3000 ghcr.io/adityaprasad48/fabrication-next:latest
docker login ghcr.io

Checking docker running or not
docker run hello-world

Add github actions for that if possible