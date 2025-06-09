FROM node:18

# Install git
RUN apt-get update && apt-get install -y git

# Set working directory
WORKDIR /workspace

# Set environment variables
ENV NODE_ENV=development

# Expose ports
EXPOSE 3000
EXPOSE 5173 