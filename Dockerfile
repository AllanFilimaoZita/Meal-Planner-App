FROM node:20-alpine AS build
WORKDIR /app
ARG VITE_SUPABASE_URL
ARG VITE_SUPABASE_ANON_KEY
ENV VITE_SUPABASE_URL=https://ostdzywitgtbzuhtxlod.supabase.co
ENV VITE_SUPABASE_PUBLISHABLE_KEY=sb_publishable_WrAyM3sbcrsnBQbj-2HIBw_Kml_DsOy
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build