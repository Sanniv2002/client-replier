export interface MessageData {
  message: string;
  threadEmail?: string;
}

export interface MessageFormErrors {
  message?: string;
  threadEmail?: string;
}

export type MessageStatus = "idle" | "sending" | "success" | "error";
