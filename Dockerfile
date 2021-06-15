FROM hayd/alpine-deno:1.10.2 
# https://github.com/hayd/deno-docker/blob/master/alpine.dockerfile
EXPOSE 1993

WORKDIR /app
#add git
RUN apk add git
# Prefer not to run as root.
USER deno

# Cache the dependencies as a layer (the following two steps are re-run only when deps.ts is modified).
# Ideally cache deps.ts will download and compile _all_ external files used in main.ts.
COPY ./. /
RUN deno cache --import-map=/backend/import_map.json /backend/config/deps.ts

#ADD FILE CHANGES
ADD ./. /

# Compile to cache
RUN deno cache --import-map=/backend/import_map.json /backend/server.ts /backend/main.ts

CMD PORT=1993 deno run --allow-net --import-map=/backend/import_map.json --allow-env --allow-read --unstable --watch /backend/server.ts
