export class MessageService {
  messages: string[] = [];

  public publish(message: string): void {
    this.messages.push(message);
  }

  public clear(): void {
    this.messages = [];
  }  
}
