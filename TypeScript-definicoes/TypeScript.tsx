/*TypeScript


================= Type Assertion =======================

Ele vai indicar para outro objeto a tipagem conforme outro objeto. Muito usado para consumir APIs

Por exemplo.

Criamos um objeto:

type UserResponse = {
    uuid: Number,
    name: String,
    avatar: String,
}

E agora vamos criar um novo objeto e indicar que ele será igual ao objeto acima usando o termo "as" + (nome do elemento/objeto)

let qualquerNome = {} as UserResponse
qualquerNome.avatar
qualquerNome.name
qualquerNome.uuid

================= Criando tipagem para Objetos com Type =====================

** Observação: SEMPRE quando for criar um tipo, considere colocar sempre começando com letra maiúscula! 
=== Exemplo: ===

type Point = {
    x: number,
    y: number;
}

function printCoord(points: Point){
    console.log(`O eixo X é ${points.x}`);
    console.log(`O eixo Y é ${points.y}`)
}

printCoord({x: 101, y: 50})


=== Exemplo 2: ===

type User = {
    id: number,
    email: string,
    age: number,
    isAdmin: boolean;
}

const newUser = User;
newUser.email


=================== Tipagem Opcional =======================

Algumas propriedades podem ser opcionais em alguns momentos.. E para deixarmos ela opcional, na tipagem devemos usar o '?'
No exemplo abaixo, não precisariamos ficar falando que todo usuário não é admin. É mais facil a gente indicar quem será o admin, então no nosso objeto ele será por padrão false.

=== Por exemplo:===



type User = {
    name: string,
    age: number,
    id: number,
    isAdmin?: boolean;
}

let newUser: User = {
    name: 'Matheus',
    age: 29,
    id: 91827,
}


===================== União/Intersecção entre tipos =================

Para unirmos 2 tipos, podemos fazer criando um novo tipo e atribuindo os outros tipos à ele com o '&'

=== Exemplo: ===

type User = {
    id: number,
    name: string;
}

type Char = {
    level: number,
    nickname: string;
}

type PlayerInfo = User & Char;

let info:PlayerInfo = {
    id: 123,
    level: 36,
    name: 'Matheus',
    nickname: 'Matz',
}


===================== Declarando Tipagem usando Interface ============

Interface também serve para criarmos tipagens.
*/

interface User {
    name: string,
    id: number,
}

const newUser: User ={
    id: 123,
    name: 'Matheus'
}

