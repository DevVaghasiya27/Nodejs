FROM ubuntu

RUN apt-get update
RUN apt-get install -y curl
RUN apt-get upgrade -y

RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install -y nodejs

WORKDIR/app

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install

COPY . .

ENTRYPOINT [ "node","index.js" ]