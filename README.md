# DockerAppProject

Ce projet Docker permet de déployer plus simplement le projet [online-wallet-frontend](https://github.com/ClementRb/online-wallet-frontend) et [online-wallet-backend](https://github.com/ClementRb/online-wallet-backend) avec une base de donnée [mongoDB](https://www.mongodb.com/fr) en local.

La base de donnée mongo est basé sur une image [mongo](https://hub.docker.com/_/mongo) avec une la création d'une base **demodb**

Une [image](https://hub.docker.com/repository/docker/clementrb/online-wallet-backend) Docker de [online-wallet-frontend](https://github.com/ClementRb/online-wallet-frontend) est utilisé pour le frontend

l'[image](https://hub.docker.com/repository/docker/clementrb/online-wallet-backend) Docker de [online-wallet-backend](https://github.com/ClementRb/online-wallet-backend) est utilisé pour le backend

## Installation

Cloner le projet.

```bash
git clone https://github.com/ClementRb/DockerAppProject.git
```

## Utilisation

Il est recommandé de démarrer les 3 conteneurs dans 3 shell différents pour avoir une meilleur vue des conteneurs.

```bash
docker-compose up mongodb

docker-compose up backend

docker-compose up frontend

```

L'api est accessible à l'adresse [localhost:5000](localhost:5000), l'app est à l'adresse [localhost:3000](localhost:3000)

## License

[MIT](https://choosealicense.com/licenses/mit/)
