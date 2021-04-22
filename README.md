# DockerAppProject

Ce projet Docker permet de déployer plus simplement le projet [online-wallet-frontend](https://github.com/ClementRb/online-wallet-frontend) et [online-wallet-backend](https://github.com/ClementRb/online-wallet-backend) avec une base de donnée [mongoDB](https://www.mongodb.com/fr) en local.

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
