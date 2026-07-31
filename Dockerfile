# Etapa 1 - Build
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ARG VITE_SUPABASE_URL
ARG VITE_SUPABASE_ANON_KEY

ENV VITE_SUPABASE_URL=https://ostdzywitgtbzuhtxlod.supabase.co
ENV VITE_SUPABASE_ANON_KEY=sb_publishable_WrAyM3sbcrsnBQbj-2HIBw_Kml_DsOy

RUN npm run build


# Etapa 2 - Servir com Nginx
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]