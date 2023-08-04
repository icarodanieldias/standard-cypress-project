import { Random } from "./random.js";

const domains = ["@test.com","@googlo.co","@yahuu.go.br","@gev.bl","@test.bws.ti"];

const GeneratorEmail = {
    generate: (name) => {
        const formmatedName = name.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase();
        
        const index = Math.floor(Math.random() * 4);
        
        return strategies[index](formmatedName);
    }
};

const strategies = [small, medium, large];

function small(name) {
    const firstName = name.split(' ')[0];
    const domain = Random.getOneIn(domains);

    return firstName + domain;
};

function medium(name) {
    const names = name.split(' ');
    const firstName = names[0];
    const mediumName = names[1];
    const domain = Random.getOneIn(domains);

    return firstName + "." + mediumName + domain;
};

function large(name) {
    const names = name.split(' ');
    const firstName = names[0];
    const mediumName = names[1];
    const lastName = names[2];
    const domain = Random.getOneIn(domains);

    return firstName + "." + mediumName + "." + lastName + domain;
};



export { GeneratorEmail };