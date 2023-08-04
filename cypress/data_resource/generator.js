import { GeneratorCPF } from "./cpf_generator";
import { GeneratorName } from "./name_generator";
import { GeneratorEmail } from "./email_generator";
import { GeneratorAddress } from "./address_generator";

const person =  GeneratorName.person();

const Generator = {
    cpf : GeneratorCPF.generate(),
    person : person,
    email : GeneratorEmail.generate(person),
    cep: GeneratorAddress.cep(),
    number: GeneratorAddress.number()
};

export { Generator };