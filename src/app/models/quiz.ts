export interface CreateQuestion {
    content: string;
    topic_id: number;
    package_ids: number[];
    answers: Answer[];
}

export interface GetQuestion {
    id: number;
    content: string;
    topic: Topic;
    package: PackageModel[];
    answers: Answer[];
}

export interface Answer {
    content: string;
    is_correct?: boolean;
    explonation?: string;
}
export interface Topic {
    id?: number;
    name: string;
}
export interface PackageModel {
    id?: number;
    name: string;
}