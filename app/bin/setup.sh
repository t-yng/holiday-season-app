#!/bin/sh

# モジュールのインストール
# docker-compose exec app yarn install
yarn install

# サーバーの起動
# docker-compose exec app npm run start
npm run start