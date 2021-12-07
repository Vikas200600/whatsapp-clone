export interface Chat {
  senderId: number;
  receiverId: number;
  isReceived: boolean;
  message: string;
  time: string;
}
