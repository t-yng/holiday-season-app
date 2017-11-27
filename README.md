# README

## 環境構築
Dockerのコンテナを起動します

```
$ docker-compose up -d
```

## コンテナの起動確認
[http://127.0.0.1:3000](http://127.0.0.1:3000) にアクセスして、画面が表示されるかを確認する。

## コンテナの再構築
```
# マウントされているMySQLのデータを削除
$ rm -rf db/mysql

# コンテナを破棄
$ docker-compose down

# コンテナの再生成
$ docker-compose up -d
```

## アプリケーションコンテナに入る
```
$ docker-compose exec app bash
```
