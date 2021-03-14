import './index_bg.wasm';

import * as backend from './index_bg';

export const init = backend.init;
export const applyChanges = backend.applyChanges;
export const applyLocalChange = backend.applyLocalChange;
export const changes = backend.getChanges;
export const changesForActor = backend.getChangesForActor;
export const missingChanges = backend.getMissingChanges;
export const missingDeps = backend.getMissingDeps;
export const patch = backend.getPatch;
export const merge = backend.merge;