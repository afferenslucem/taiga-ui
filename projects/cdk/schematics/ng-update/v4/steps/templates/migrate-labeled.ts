import type {UpdateRecorder} from '@angular-devkit/schematics';
import type {DevkitFileSystem} from 'ng-morph';

import {addImportToClosestModule} from '../../../../utils/add-import-to-closest-module';
import {findElementsByTagNames} from '../../../../utils/templates/elements';
import {findAttr} from '../../../../utils/templates/inputs';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import type {TemplateResource} from '../../../interfaces';
import {replaceAttrValues} from '../../../utils/templates';

export function migrateLabeled({
    resource,
    recorder,
    fileSystem,
}: {
    fileSystem: DevkitFileSystem;
    recorder: UpdateRecorder;
    resource: TemplateResource;
}): void {
    const template = getTemplateFromTemplateResource(resource, fileSystem);
    const templateOffset = getTemplateOffset(resource);

    replaceAttrValues({
        resource,
        fileSystem,
        recorder,
        data: [
            {
                attrNames: ['size'],
                valueReplacer: [
                    {from: 'l', to: 'm'},
                    {from: 'm', to: 's'},
                ],
                withTagNames: ['tui-checkbox-labeled', 'tui-radio-labeled'],
            },
        ],
    });

    const elements = findElementsByTagNames(template, [
        'tui-checkbox-labeled',
        'tui-radio-labeled',
    ]);

    elements.forEach(({sourceCodeLocation, tagName, attrs}) => {
        if (!sourceCodeLocation) {
            return;
        }

        const [, ngForAttrLocation] =
            Object.entries(sourceCodeLocation.attrs || {}).find(([name]) =>
                name.includes('*ngfor'),
            ) || [];
        const ngForAttr = findAttr(attrs, '*ngFor');

        addImportToClosestModule(
            resource.componentPath,
            tagName === 'tui-checkbox-labeled' ? 'TuiCheckbox' : 'TuiRadio',
            '@taiga-ui/kit',
        );

        recorder.insertRight(
            templateOffset + (sourceCodeLocation.startTag?.startOffset || 1) - 1,
            `<label${ngForAttr ? ` *ngFor="${ngForAttr.value}"` : ''} tuiLabel>`,
        );
        recorder.remove(
            templateOffset + (sourceCodeLocation.endTag?.startOffset ?? 0),
            `<${tagName}/>`.length,
        );
        recorder.insertRight(
            templateOffset + (sourceCodeLocation.endTag?.startOffset || 1),
            '</label>',
        );

        if (ngForAttrLocation) {
            recorder.remove(
                templateOffset + ngForAttrLocation.startOffset,
                ngForAttrLocation.endOffset - ngForAttrLocation.startOffset,
            );
        }
    });
}
