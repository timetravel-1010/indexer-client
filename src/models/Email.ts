import type { Address } from "cluster";

export interface Email {
    "Message-Id": string;
    "Date": string;
    "From": string;
    "To": Address[];
    "Cc": Address[];
    "Bcc": Address[];
    "Subject": string;
    "Mime-Version": string;
    "Content-Type": string;
    "content-Transfer-Encoding": string;
    "X-From": string;
    "X-To": Address[];
    "X-Cc": Address[];
    "X-Bcc": Address[];
    "X-Folder": string;
    "X-Origin": string;
    "X-FileName": string;
    "Body": string;
}
