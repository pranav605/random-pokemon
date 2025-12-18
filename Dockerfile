FROM node:22-slim AS builder

WORKDIR /app

COPY . .

RUN npm install && \
    npm run build && \
    npm install -g serve


FROM nginx:1.19-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]