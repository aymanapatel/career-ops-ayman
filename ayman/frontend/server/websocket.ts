import { WebSocketServer, WebSocket } from 'ws';

export function setupWebSocket(wss: WebSocketServer) {
  wss.on('connection', (ws) => {
    console.log('WebSocket client connected');
    ws.send(JSON.stringify({ type: 'connected', message: 'Welcome to live compiler' }));

    ws.on('close', () => {
      console.log('WebSocket client disconnected');
    });
  });
}

export function broadcast(wss: WebSocketServer, message: object) {
  const data = JSON.stringify(message);
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
}
