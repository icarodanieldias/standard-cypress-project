import { Random } from "./random.js";

const GeneratorName = {
    person: () => {
        return `${Random.getOneIn(firstNames)} ${Random.getOneIn(lastNames)} ${Random.getOneIn(lastNames)}`;
    },
    company: () => {
        return "";
    }

}

const firstNames = [
    "Miguel","Arthur","Heitor","Helena","Alice","Theo","Davi","Laura","Gabriel",
    "Gael","Bernardo","Samuel","Valentina","João Miguel","Enzo Gabriel","Heloísa",
    "Pedro","Lorenzo","Sophia","Maria Clara","Maria Júlia","Maria Eduarda","Lorena",
    "Lucas","Manuela","Cecília","Maria Cecília","Benício","Júlia", "Isabell"
];

const lastNames = [
    "Silva","Santos","Oliveira","Souza","Rodrigues","Gomes","Ribeiro","Martins",
    "Carvalho","Andrade","Barbosa","Barros","Borges","Campos","Rocha","Vieira",
    "Rossi","Mendes","Farias","Ferreira","Alves","Pereira","Lima","Pellegrini",
    "Schultz","LeBlanc","Antonelli","Diniz","Baumann","Fischer"
];
export { GeneratorName }