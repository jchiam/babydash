FROM bitwalker/alpine-elixir-phoenix:latest

ENV MIX_ENV prod
ENV KITTO_IP 0.0.0.0

RUN apk add --no-cache curl

RUN mkdir /dashboard
WORKDIR /dashboard

ADD ./mix.exs ./
ADD ./mix.lock ./
RUN mix deps.get

ADD ./package.json ./
RUN npm install --silent

ADD . /dashboard
RUN npm run build
RUN mix compile

EXPOSE 4000

CMD mix kitto.server
