FROM node:16-buster AS base

WORKDIR /app

# ---------- Builder ----------
# Creates:
# - node_modules: production dependencies (no dev dependencies)
# - dist: A production build compiled with Babel
FROM base AS builder

COPY package*.json ./

COPY tsconfig.json ./

RUN npm install --force

COPY ./ /app/

ARG configuration=production

RUN npm run build:ssr -- --output-hashing=all

# ---------- Release ----------
FROM base AS release

COPY --from=builder /app/node_modules ./node_modules

COPY --from=builder /app/dist ./dist

USER root

RUN mv /app/dist/doi/server/main* /app/dist/doi/server/main.js

EXPOSE 4700

CMD ["node", "./dist/doi/server/main.js"]
