import * as fs from 'fs';

import Handlebars, { template } from 'handlebars';

export const compileHtml = (token: string) => {
    const htmlTemplate = fs.readFileSync('src/public/email.html', 'utf-8');
    let compiledTemplate: any = Handlebars.compile(htmlTemplate);
    compiledTemplate = compiledTemplate({ insertToken: token });
    return compiledTemplate
}