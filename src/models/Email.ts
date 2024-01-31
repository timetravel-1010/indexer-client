export interface Email {
    messageId: string;
    date: string;
    from: string;
    to: string[];
    cc: string[];
    bcc: string[];
    subject: string;
    mimeVersion: string;
    contentType: string;
    contentTransferEncoding: string;
    xFrom: string;
    xTo: string[];
    xcc: string[];
    xbcc: string[];
    xFolder: string;
    xOrigin: string;
    xFileName: string;
    body: string;
}
