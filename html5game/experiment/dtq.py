import http.server
import socketserver

# Define the port to serve on
PORT = 4040

# Create a handler that serves files from the current directory
Handler = http.server.SimpleHTTPRequestHandler

# Create the server
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving at http://localhost:{PORT}")
    httpd.serve_forever()
