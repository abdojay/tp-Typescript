import { ActionFile } from "./interfaces"

//- Action for downloading
export class ActionDownload implements ActionFile {
    urlDownload: string

    constructor(urlDownload: string) {
        this.urlDownload = urlDownload
    }
}