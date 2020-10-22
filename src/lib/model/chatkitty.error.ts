export abstract class ChatKittyError {
  protected constructor(public type: string, public message: string) {
  }
}

export class UnknownChatKittyError extends ChatKittyError {
  constructor() {
    super('UnknownChatKittyError', 'An unknown error has occurred.');
  }
}
