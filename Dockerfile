FROM zorbash/kitto

ENV MIX_ENV prod

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

CMD MIX_ENV=prod KITTO_IP=0.0.0.0 mix kitto.server
