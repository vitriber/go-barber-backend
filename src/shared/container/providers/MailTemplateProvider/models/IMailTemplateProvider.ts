import IParseMailTemplateDTO from '../dtos/IParseMailTemplateDRO';

export default interface IMailTemplateProvider {
    parse(data: IParseMailTemplateDTO): Promise<string>;
}
