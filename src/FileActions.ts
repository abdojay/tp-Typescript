// Imports
import { ActionDownload } from "./ActionDownload"
import { ActionPrint } from "./ActionPrint"
import { ServiceActions } from "./Services"

// FileActions
export class FileActions {
    static download(actionDownload: ActionDownload): void {
        ServiceActions.download(actionDownload.urlDownload)
    }

    static print(actionPrint: ActionPrint): void {
        ServiceActions.print(actionPrint.direcPath)
    }
}