import { NativescriptEpubFolioCommon } from './common';
import { Application } from '@nativescript/core';
export class EpubFolio extends NativescriptEpubFolioCommon {
    constructor() {
        super();
        this.folioReader = com.folioreader.FolioReader.get();
    }
    get() {
        var PackageManager = android.content.pm.PackageManager;
        var pkg = Application.android.context.getPackageManager().getPackageInfo(Application.android.context.getPackageName(), PackageManager.GET_META_DATA);
        return pkg.versionName;
    }
    open(fileName) {
        this.folioReader.openBook(fileName);
    }
}
//# sourceMappingURL=index.android.js.map