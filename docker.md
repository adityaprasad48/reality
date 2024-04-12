

docker login ghcr.io 

docker build . --platform linux/arm64/v8 -t ghcr.io/adityaprasad48/reality-next-linux_arm64_v8:latest

docker push ghcr.io/adityaprasad48/reality-next-linux_arm64_v8:latest

docker run -p 3000:3000 ghcr.io/adityaprasad48/reality-next-linux_arm64_v8:latest
docker login ghcr.io

Checking docker running or not
docker run hello-world

Add github actions for that if possible