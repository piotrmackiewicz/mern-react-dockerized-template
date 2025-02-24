# Development Stage
FROM node:22.13.1-alpine AS development

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]

# Builder Stage
FROM node:22.13.1-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

RUN npm i -g serve

COPY . .

RUN npm run build

# Production Stage 
FROM node:22.13.1-alpine AS production

WORKDIR /app

COPY --from=builder /app/dist ./

EXPOSE 3000

CMD [ "serve", "-s", "dist" ]