import { Socket, io } from 'socket.io-client';

export class SocketApi {
  io!: Socket;

  createConnection = async () => {
    this.io = io(import.meta.env.VITE_APP_API_URL);

    this.io.on('connect', () => {
      console.log('CLIENT CONNECTED');
    });
  };
}

export const socket = new SocketApi();
