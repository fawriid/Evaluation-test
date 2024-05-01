export interface userStatus {
    time?: number;
    answers?: {
        [id: number]: [answer: string];
    };
}
