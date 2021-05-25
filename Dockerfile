FROM hayd/alpine-deno:1.10.2

EXPOSE 1993

WORKDIR /app

# Prefer not to run as root.
USER deno

# Cache the dependencies as a layer (the following two steps are re-run only when deps.ts is modified).
# Ideally cache deps.ts will download and compile _all_ external files used in main.ts.
COPY ./backend/deps.ts /backend/deps.ts
COPY ./backend/import_map.json /backend/import_map.json
COPY ./backend/main.ts /backend/main.ts
RUN deno cache --import-map=/backend/import_map.json /backend/deps.ts

#ADD FILE CHANGES
ADD ./backend/ /backend/

# Compile to cache
RUN deno cache --import-map=/backend/import_map.json /backend/main.ts
CMD PORT=1993 deno run --allow-net --import-map=/backend/import_map.json --allow-env /backend/main.ts