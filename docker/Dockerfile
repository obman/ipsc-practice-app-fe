FROM node:18-alpine as ipscfe

# setup bash
RUN apk add --no-cache bash \
	git

USER node

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app/
WORKDIR /home/node/app/
COPY --chown=node:node ../src/package.json /home/node/app/package.json
RUN npm install

COPY --chown=node:node . .

ENV HOST 0.0.0.0
EXPOSE 3000
CMD [ "npm", "start" ]
