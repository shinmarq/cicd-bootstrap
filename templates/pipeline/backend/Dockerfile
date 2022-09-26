FROM node:16.17-alpine

WORKDIR /project/src/app

COPY package*.json yarn.lock .npmrc ./src ./
RUN yarn install --frozen-lockfile
RUN yarn build

COPY . .
RUN rm -f .npmrc

EXPOSE 8000
CMD ["yarn", "serve"]