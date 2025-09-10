FROM denoland/deno:1.40.0

WORKDIR /app

# Copy function files
COPY . .

# Install dependencies
RUN deno cache index.ts

# Expose port
EXPOSE 8000

# Run the function
CMD ["deno", "run", "--allow-net", "--allow-env", "index.ts"]
