// Imports
import { FileActions } from "./FileActions"
import { ActionDownload } from "./ActionDownload"
import { ActionPrint } from "./ActionPrint"

// Declarations
const pdfDownloadURL = "https://www.orimi.com/pdf-test.pdf"
const pdfPrintDirect = "./"

const actionDownload = new ActionDownload(pdfDownloadURL)
const actionPrint = new ActionPrint(pdfPrintDirect)

// main
FileActions.download(actionDownload)
FileActions.print(actionPrint)


