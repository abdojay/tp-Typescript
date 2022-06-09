import { ActionFile } from "./interfaces"

//- Action for printing
export class ActionPrint implements ActionFile {
    direcPath: string

    constructor(direcPath: string) {
        this.direcPath = direcPath
    }
}