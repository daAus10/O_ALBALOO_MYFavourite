export interface Pokemon {
    id: number;
    type: string;
    name: string;
    imageUrl: string;
    description: string;
    trainerName?: string;
}