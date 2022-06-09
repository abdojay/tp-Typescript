// Imports
import * as WebRequest from 'web-request';

export class ServiceActions {
    static download(url: string): void {
        WebRequest.get(url);
    }

    static print(path: string): void {
    }
}