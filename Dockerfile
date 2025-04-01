FROM node:22-alpine

RUN npm install -g pnpm


WORKDIR /app

# Copier les fichiers et installer les dépendances
COPY package.json pnpm-lock.yaml ./
#COPY package.json ./

#RUN pnpm install --frozen-lockfile
RUN rm pnpm-lock.yaml
RUN pnpm install


#RUN npm install

COPY . .

CMD ["npm", "run", "dev"]