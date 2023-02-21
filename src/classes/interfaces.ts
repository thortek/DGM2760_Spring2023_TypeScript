interface Explainable {
    explain(phrase: string): void;
}

let snippet1: Explainable;

snippet1 = {
    //id: 293423944,
    //title: 'Interfaces',
    //explanation: `My explanation of interfaces`,
    //code: `interface CodeSnippet {... blah blah blah ...}`,
    explain(phrase: string) {
        console.log(`${phrase} is an interface`)
    }
}

class ExampleCodeSnippet implements Explainable {
    id: number;
    title: string;
    explanation: string;
    code: string;
    explain(phrase: string): void {
        throw new Error("Method not implemented.");
    }
}
