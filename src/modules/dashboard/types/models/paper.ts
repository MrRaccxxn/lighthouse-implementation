export interface IPaper {
    id: string;
    title: string;
    author: string;
    description: string;
    paperFile: any;
    thumbnail: any;
    uploadDate: Date;
}

export type IPaperForm = Omit<IPaper, "id" | "uploadDate">;
