
FROM node:8.11.3-alpine

RUN apk update && \
	apk add --update alpine-sdk && \
	npm install -g npm@5.6.0 && \
	apk del alpine-sdk && \
	rm -rf /tmp/* /var/cache/apk/* *.tar.gz ~/.npm && \
	npm cache verify --force && \
	sed -i -e "s/bin\/ash/bin\/sh/" /etc/passwd

WORKDIR /app

EXPOSE  3000

