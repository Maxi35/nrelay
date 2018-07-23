import 'reflect-metadata';
import { PluginManager } from './../core/plugin-manager';
import { ILibraryInfo } from './../models/plugin-info';

export function Library(libInfo: ILibraryInfo): ClassDecorator {
    return (target: any) => {
        const params = Reflect.getMetadata('design:paramtypes', target) || [];
        const dependencies = params.map((type: any) => type.name);
        PluginManager.loadLibrary({
            info: libInfo,
            target,
            dependencies
        });
    };
}
