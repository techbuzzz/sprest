System.register(["../../types/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, fileversions;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            /*********************************************************************************************************************************/
            // Methods
            /*********************************************************************************************************************************/
            exports_1("fileversions", fileversions = {
                // Deletes the object
                delete: {
                    requestType: index_1.RequestType.Delete
                },
                // Queries the collection
                query: {
                    argNames: ["oData"],
                    requestType: index_1.RequestType.OData
                }
            });
        }
    };
});
//# sourceMappingURL=fileVersions.js.map