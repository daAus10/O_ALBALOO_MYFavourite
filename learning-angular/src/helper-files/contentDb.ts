import { Pokemon } from "./Pokemon";

export const POKEMONSTERS: Pokemon[] = [{
    id: 0,
    type: "Electric",
    name: "Pikachu",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp/220px-Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp.png",
    description: "Easily the most popular pokemon around",
    trainerName: "Ash",
    tags: ["Starter", "maincharacter"]
}, {
    id: 1,
    type: 'Normal',
    name: 'Eevee',
    imageUrl: "",
    description: "The normalest of types, an evolves into every type",
    tags: ["Gary's first pokemon"]
}, {
    id: 2,
    // type: 'dragon',
    name: 'Dragonite',
    imageUrl: '',
    description: "The third form of this pokemon",
    trainerName: 'Lance',
    tags: ["maildelivery"]
}];
