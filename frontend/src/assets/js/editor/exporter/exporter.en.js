// Data Use Statement Compliance Checker (DUCK)
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
var editorModule = angular.module("duck.editor");

/**
 * Exports documents in US-EN.
 */
editorModule.run(function (DocumentExporter) {

    /**
     * Exports US-EN text.
     */
    DocumentExporter.register("text/plain", "en", function (document) {
        var text = "";
        document.statements.forEach(function (statement) {
            text = text + statement.useScope + " uses " + statement.qualifier + " " + statement.dataCategory + " from " + statement.sourceScope
                + " to " + statement.action + " the" + " " + statement.resultScope + ".\n\n";
        });
        return new Blob([text], {type: 'text/plain;charset=utf-8'});
    });

});