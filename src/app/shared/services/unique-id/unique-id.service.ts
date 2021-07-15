import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UniqueService {

    private numberOfGeneratedIds = 0;

    public generateUniqueIdWithPrefix(prefix: string): string {
        const uniqueId = this.generateUniqueId();
        this.numberOfGeneratedIds++;
        return `${prefix}-${uniqueId}`;
    }

    private generateUniqueId(): string {
        return uuidv4();
    }

}