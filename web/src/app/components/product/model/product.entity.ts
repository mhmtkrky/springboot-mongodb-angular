import { ApplicationEntity } from '../../application/model/application.entity';

export class ProductEntity {
    id: number;
    name: string;
    description: string;
    url: string;
    apiType: string;
    used: boolean;
    application: ApplicationEntity;
}