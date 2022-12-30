export interface EmailOptionType {
  from: string;
  to: string;
  cc?: string;
  bcc?: string;
  subject: string;
  text?: string;
  html?: string;
  attachments?: {
    filename?: string;
    content?: any;
    path?: string;
    href?: string;
    [props: string]: any;
  }[]
}