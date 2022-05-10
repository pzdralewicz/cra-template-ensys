FROM node:14-alpine AS development
ENV NODE_ENV development
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install
# Copy app files
COPY . .
# Expose port
EXPOSE 3000
# Start the app
CMD [ "npm", "start" ]

FROM node:14-alpine AS builder
ENV NODE_ENV production
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY package-lock.json .
ENV GENERATE_SOURCEMAP=false
RUN npm install --production
# Copy app files
COPY . .
# Build the app
ARG KEYCLOAK_AUTH_URL
ARG KEYCLOAK_REALM
ARG KEYCLOAK_CLIENT_ID
ARG AG_GRID_KEY
ENV REACT_APP_KEYCLOAK_AUTH_URL=$KEYCLOAK_AUTH_URL
ENV REACT_APP_KEYCLOAK_REALM=$KEYCLOAK_REALM
ENV REACT_APP_KEYCLOAK_CLIENT_ID=$KEYCLOAK_CLIENT_ID
ENV REACT_APP_AG_GRID_KEY=$AG_GRID_KEY

RUN npm run build

# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production
# Copy built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]
