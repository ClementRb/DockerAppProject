# DockerAppProject

This Docker project allows for easier deployment of the [online-wallet-frontend](https://github.com/ClementRb/online-wallet-frontend) and [online-wallet-backend](https://github.com/ClementRb/online-wallet-backend) projects with a local [mongoDB](https://www.mongodb.com/fr) database.

The MongoDB database is based on an image [mongo](https://hub.docker.com/_/mongo) with the creation of a **demodb** database.

A Docker [image](https://hub.docker.com/repository/docker/clementrb/online-wallet-backend) of [online-wallet-frontend](https://github.com/ClementRb/online-wallet-frontend) is used for the frontend.

The Docker [image](https://hub.docker.com/repository/docker/clementrb/online-wallet-backend) of [online-wallet-backend](https://github.com/ClementRb/online-wallet-backend) is used for the backend.

## Installation

Clone the project.

```bash
git clone https://github.com/ClementRb/DockerAppProject.git
```

## Usage

It is recommended to start the 3 containers in 3 different shells to have a better view of the containers.

```bash
docker-compose up mongodb

docker-compose up backend

docker-compose up frontend

```

The API is accessible at the address [localhost:5000](localhost:5000), and the App at the address [localhost:3000](localhost:3000)

## License

[MIT](https://choosealicense.com/licenses/mit/)
