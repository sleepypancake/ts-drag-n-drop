class ProjectInput {
    templateElement: HTMLTemplateElement | null;
    hostElement: HTMLDivElement | null;
    element: HTMLFormElement;

    constructor() {
        this.templateElement = <HTMLTemplateElement>document.getElementById('project-input') || null;
        this.hostElement = <HTMLDivElement>document.getElementById('app') || null; 

        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = <HTMLFormElement>importedNode.firstElementChild;
        this.attach();
    }

    private attach() {
        this.hostElement?.insertAdjacentElement('afterbegin', this.element);
    }
}

const prjInput = new ProjectInput()