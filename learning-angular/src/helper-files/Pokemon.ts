export interface Pokemon {
    readonly id?: number;
    type?: string;
    name: string;
    imageUrl: string;
    description: string;
    trainerName?: string;
    tags?: string[];
}