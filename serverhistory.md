 sudo apt get update
 sudo apt update

 sudo apt install net-tools

 docker -v

 sudo apt install docker.io

 
   docker -v
   systemctl is-active docker

   systemctl start docker
   
   docker run hello-world

   docker login
   groups
   sudo usermod -aG docker astra
   groups

   docker run hello-world

   sudo usermod -aG docker $USER
   sudo chmod 660 /var/run/docker.sock
   sudo systemctl restart docker

   docker run hello-world

   docker login ghcr.io

   docker run -p 3000:3000 ghcr.io/adityaprasad48/fabrication-next-linux_arm64_v8:latest