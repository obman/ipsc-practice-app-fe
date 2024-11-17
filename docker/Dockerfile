FROM node:18-alpine AS ipscfe

RUN mkdir -p /app/node_modules
WORKDIR /app
COPY /src/package*.json ./
RUN npm install

COPY . .

ENV HOST=0.0.0.0

EXPOSE 3030

CMD ["npm", "start"]
