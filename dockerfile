# Stage 1: Build Angular app
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Build Angular app in production mode
RUN npm run build -- --configuration=production

# Stage 2: Serve app with Nginx
FROM nginx:stable-alpine

# Clean default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy build output to Nginx public folder
COPY --from=builder /app/dist/social-media-tool-ui/browser /usr/share/nginx/html

# Copy custom nginx config if needed (for SPA routing)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
