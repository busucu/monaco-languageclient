/* --------------------------------------------------------------------------------------------
 * Copyright (c) 2018-2022 TypeFox GmbH (http://www.typefox.io). All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
import type * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

declare module 'monaco-editor' {

    module instantiation {
        export interface ServiceIdentifier<T> {
            (...args: any[]): void;
            type: T;
        }
        export interface ServicesAccessor {
            get<T>(id: ServiceIdentifier<T>, isOptional?: typeof optional): T;
        }
        export interface IInstantiationService {
        }
        export function optional<T>(serviceIdentifier: ServiceIdentifier<T>): (target: Function, key: string, index: number) => void;
    }
}
