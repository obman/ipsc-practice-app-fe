FROM node:18-alpine AS ipscfe

WORKDIR /app

COPY /src/package*.json ./
RUN npm install

COPY . .

ENV HOST=0.0.0.0

EXPOSE 3000

CMD ["npm", "start"]
