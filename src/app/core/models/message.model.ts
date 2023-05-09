import { MessageNotification } from "./message-notification.model"

export interface Message {
    title: string
    notifications: MessageNotification[]
}