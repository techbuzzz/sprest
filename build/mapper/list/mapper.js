"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../../types");
/**
 * Content Type
 */
exports.contenttype = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/
    properties: [
        "FieldLinks|fieldlinks|('[Name]')|fieldlink", "Fields|fields|/getByInternalNameOrTitle('[Name]')|field", "WorkflowAssociations"
    ],
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Deletes the content type.
    delete: {
        requestType: types_1.RequestType.Delete
    },
    // Updates it's properties.
    update: {
        metadataType: "SP.ContentType",
        name: "",
        requestMethod: "MERGE",
        requestType: types_1.RequestType.PostWithArgsInBody
    }
};
/**
 * Content Types
 */
exports.contenttypes = {
    // Adds a content type to the collection.
    add: {
        metadataType: "SP.ContentType",
        name: "",
        requestType: types_1.RequestType.PostWithArgsInBody
    },
    // Adds an existing content type to this collection.
    addAvailableContentType: {
        argNames: ["contentTypeId"],
        requestType: types_1.RequestType.PostWithArgsInBody
    },
    // Gets a content type by id.
    getById: {
        argNames: ["id"],
        requestType: types_1.RequestType.GetWithArgsValueOnly,
        returnType: "contenttype"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: types_1.RequestType.OData
    }
};
/**
 * Field
 */
exports.field = {
    // Deletes the object
    delete: {
        requestType: types_1.RequestType.Delete
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: types_1.RequestType.OData
    },
    // Sets the value of the ShowInDisplayForm property for this field.
    setShowInDisplayForm: {
        argNames: ["showInForm"],
        requestType: types_1.RequestType.PostWithArgsValueOnly
    },
    // Sets the value of the ShowInEditForm property for this field.
    setShowInEditForm: {
        argNames: ["showInForm"],
        requestType: types_1.RequestType.PostWithArgsValueOnly
    },
    // Sets the value of the ShowInNewForm property for this field.
    setShowInNewForm: {
        argNames: ["showInForm"],
        requestType: types_1.RequestType.PostWithArgsValueOnly
    },
    // Updates it's properties.
    update: {
        inheritMetadataType: true,
        name: "",
        requestMethod: "MERGE",
        requestType: types_1.RequestType.PostWithArgsInBody
    }
};
/**
 * Field Links
 */
exports.fieldlinks = {
    // Adds a field link to the collection.
    add: {
        argNames: ["data"],
        metadataType: "SP.FieldLink",
        name: "",
        requestType: types_1.RequestType.PostWithArgsInBody
    },
    // Gets a field link by it's id.
    getById: {
        argNames: ["id"],
        requestType: types_1.RequestType.GetWithArgsValueOnly,
        returnType: "fieldlink"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: types_1.RequestType.OData
    }
};
/**
 * Fields
 */
exports.fields = {
    // Adds a field to the field collection.
    add: {
        metadataType: "SP.Field",
        name: "",
        requestType: types_1.RequestType.PostWithArgsInBody
    },
    // Adds a field to the field collection.
    addField: {
        argNames: ["parameters"],
        metadataType: "SP.FieldCreationInformation",
        name: "addField",
        requestType: types_1.RequestType.PostWithArgsInBody
    },
    // Adds a secondary lookup field that depends on a primary lookup field for its relationship to the list where it gets its information.
    addDependentLookupField: {
        argNames: ["displayname", "primarylookupfieldid", "showfield"],
        requestType: types_1.RequestType.PostWithArgs
    },
    // Creates a field based on the specified schema, Boolean value, and field options.
    // Set the option to addFieldInternalNameHint - 8 to ensure the internal name in the schema xml is not altered.
    createFieldAsXml: {
        argNames: ["schemaXml"],
        requestType: types_1.RequestType.PostWithArgsInBody,
        data: {
            parameters: {
                __metadata: { type: "SP.XmlSchemaFieldCreationInformation" },
                Options: 8,
                SchemaXml: "[[schemaXml]]"
            }
        }
    },
    // Gets the field with the specified ID.
    getById: {
        argNames: ["id"],
        requestType: types_1.RequestType.PostWithArgsValueOnly,
        returnType: "field"
    },
    // Returns the first Field object with the specified internal name or title from the collection.
    getByInternalNameOrTitle: {
        argNames: ["internalNameOrTitle"],
        requestType: types_1.RequestType.PostWithArgsValueOnly,
        returnType: "field"
    },
    // Returns the first field object in the collection based on the title of the specified field.
    getByTitle: {
        argNames: ["title"],
        requestType: types_1.RequestType.PostWithArgsValueOnly,
        returnType: "field"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: types_1.RequestType.OData
    }
};
/**
 * Items
 */
exports.items = {
    // Adds an item to the list item collection.
    add: {
        metadataType: function (obj) {
            return (obj.parent && obj.parent["ListItemEntityTypeFullName"]) || "SP.ListItem";
        },
        name: "",
        requestType: types_1.RequestType.PostWithArgsInBody
    },
    // Gets an item by its id.
    getById: {
        argNames: ["id"],
        requestType: types_1.RequestType.GetWithArgsValueOnly,
        returnType: "listitem"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: types_1.RequestType.OData
    }
};
/**
 * List
 */
exports.list = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/
    properties: [
        "BrowserFileHandling", "ContentTypes|contenttypes|('[Name]')|contenttype", "CreatablesInfo", "DefaultView|view",
        "DescriptionResource", "EventReceivers|eventreceivers|('[Name]')|eventreceiver", "Fields|fields|/getByInternalNameOrTitle('[Name]')|field",
        "FirstUniqueAncestorSecurableObject", "Forms|forms|('[Name]')|form", "InformationRightsManagementSettings",
        "Items|items|([Name])|item", "ParentWeb", "RoleAssignments|roleassignments|([Name])|roleassignment",
        "RootFolder|folder|/getByUrl('[Name]')|file", "Subscriptions", "TitleResource",
        "UserCustomActions|usercustomactions|('[Name]')|usercustomaction", "Views|views|('[Name]')|view", "WorkflowAssociations"
    ],
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Creates unique role assignments for the securable object.
    breakRoleInheritance: {
        argNames: ["copyroleassignments", "clearsubscopes"],
        requestType: types_1.RequestType.PostWithArgs
    },
    // Deletes the object
    delete: {
        requestType: types_1.RequestType.Delete
    },
    // Returns the collection of changes from the change log that have occurred within the list, based on the specified query.
    getChanges: {
        argNames: ["query"],
        metadataType: "SP.ChangeQuery",
        requestType: types_1.RequestType.PostWithArgsInBody
    },
    // Returns an item based on the id.
    getItemById: {
        argNames: ["id"],
        requestType: types_1.RequestType.GetWithArgsValueOnly,
        returnType: "item"
    },
    // Returns a collection of items from the list based on the view xml.
    getItems: {
        argNames: ["viewXml"],
        requestType: types_1.RequestType.PostWithArgsInBody,
        data: {
            query: {
                __metadata: { type: "SP.CamlQuery" },
                ViewXml: "[[viewXml]]"
            }
        }
    },
    // Returns a collection of items from the list based on the specified query.
    getItemsByQuery: {
        argNames: ["camlQuery"],
        name: "getItems",
        requestType: types_1.RequestType.PostWithArgsInBody,
        data: {
            query: {
                __metadata: { type: "SP.CamlQuery" },
                ViewXml: "<View>[[camlQuery]]</View>"
            }
        }
    },
    // Returns a collection of items from the list based on the specified query.
    getListItemChangesSinceToken: {
        argNames: ["query"],
        metadataType: "SP.ChangeLogItemQuery",
        requestType: types_1.RequestType.PostWithArgsInBody
    },
    // Returns a collection of lookup fields that use this list as a data source and that have FieldLookup.IsRelationship set to true.
    getRelatedFields: {
        requestType: types_1.RequestType.Get
    },
    // Gets the effective user permissions for the current user.
    getUserEffectivePermissions: {
        argNames: ["loginName"],
        name: "getUserEffectivePermissions(@user)?@user='[[loginName]]'",
        requestType: types_1.RequestType.GetReplace
    },
    // Returns the list view with the specified view identifier.
    getViewById: {
        argNames: ["viewId"],
        name: "getView",
        requestType: types_1.RequestType.GetWithArgsValueOnly,
        returnType: "view"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: types_1.RequestType.OData
    },
    // Moves the list to the Recycle Bin and returns the identifier of the new Recycle Bin item.
    recycle: {
        requestType: types_1.RequestType.Post
    },
    // Renders the list data.
    renderListData: {
        argNames: ["viewXml"],
        name: "renderListData(@v)?@v='<View>[[viewXml]]</View>'",
        requestType: types_1.RequestType.PostReplace
    },
    // Renders the list form data.
    // Types of modes: 1 - Display, 2 - Edit, 3 - New
    renderListFormData: {
        argNames: ["itemid", "formid", "mode"],
        requestType: types_1.RequestType.PostWithArgs
    },
    // Reserves a list item ID for idempotent list item creation.
    reserveListItemId: {
        requestType: types_1.RequestType.Post
    },
    // Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.
    resetRoleInheritance: {
        requestType: types_1.RequestType.Post
    },
    // Updates it's properties.
    update: {
        metadataType: "SP.List",
        name: "",
        requestMethod: "MERGE",
        requestType: types_1.RequestType.PostWithArgsInBody
    }
};
/**
 * List Item
 */
exports.listitem = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/
    properties: [
        "AttachmentFiles|attachmentfiles|('[Name]')|attachment", "ContentType|contenttype", "FieldValuesAsHtml", "FieldValuesAsText", "FieldValuesForEdit",
        "File|file", "FirstUniqueAncestorSecurableObject", "Folder|folder", "GetDlpPolicyTip", "ParentList|list",
        "Properties|propertyvalues", "RoleAssignments|roleassignments|roleassignments|([Name])|roleassignment"
    ],
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Adds the attachment that is represented by the specified file name and byte array to the list item.
    //{ name: "addAttachmentFile", "function": function (file) { var thisObj = this; var promise = new Promise(); getFileInfo(file).done(function (name, buffer) { if (name && buffer) { thisObj.addAttachment(name, buffer).done(function (file) { promise.resolve(file); }); } else { promise.resolve(); } }); return promise; } },
    // Creates unique role assignments for the securable object.
    breakRoleInheritance: {
        argNames: ["copyroleassignments", "clearsubscopes"],
        requestType: types_1.RequestType.PostWithArgs
    },
    // Deletes the object
    delete: {
        requestType: types_1.RequestType.Delete
    },
    // Gets the effective permissions that a specified user has on the list item.
    getUserEffectivePermissions: {
        argNames: ["loginName"],
        name: "getUserEffectivePermissions(@user)?@user='[[loginName]]'",
        requestType: types_1.RequestType.GetReplace
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: types_1.RequestType.OData
    },
    // Moves the list item to the Recycle Bin and returns the identifier of the new Recycle Bin item.
    recycle: {
        requestType: types_1.RequestType.Post
    },
    // Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.
    resetRoleInheritance: {
        requestType: types_1.RequestType.Post
    },
    // Updates it's properties.
    update: {
        inheritMetadataType: true,
        name: "",
        requestMethod: "MERGE",
        requestType: types_1.RequestType.PostWithArgsInBody
    },
    // Validates and sets the values of the specified collection of fields for the list item.
    validateUpdateListItem: {
        argNames: ["formValues", "bNewDocumentUpdate"],
        requestType: types_1.RequestType.PostWithArgsInBody
    }
};
/**
 * Lists
 */
exports.lists = {
    // Adds a list to the list collection.
    add: {
        metadataType: "SP.List",
        name: "",
        requestType: types_1.RequestType.PostWithArgsInBody
    },
    // Gets a list that is the default asset location for images or other files, which the users upload to their wiki pages.
    ensureSiteAssetsLibrary: {
        requestType: types_1.RequestType.Post
    },
    // Gets a list that is the default location for wiki pages.
    ensureSitePagesLibrary: {
        requestType: types_1.RequestType.Post
    },
    // Returns the list with the specified list identifier.
    getById: {
        argNames: ["id"],
        requestType: types_1.RequestType.GetWithArgsValueOnly,
        returnType: "list"
    },
    // Returns the list with the specified title from the collection.
    getByTitle: {
        argNames: ["title"],
        requestType: types_1.RequestType.GetWithArgsValueOnly,
        returnType: "list"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: types_1.RequestType.OData
    }
};
/**
 * Version
 */
exports.version = {
    // Gets the version with the specified ID.
    getById: {
        argNames: ["id"],
        requestType: types_1.RequestType.GetWithArgsValueOnly,
        returnType: "version"
    },
    // Deletes all versions in the collection.
    deleteAll: {
        requestType: types_1.RequestType.Post
    },
    // Deletes a version, by the specified id.
    deleteById: {
        argNames: ["id"],
        requestType: types_1.RequestType.PostWithArgsValueOnly
    },
    // Deletes a version, by the specified label.
    deleteByLabel: {
        argNames: ["label"],
        requestType: types_1.RequestType.PostWithArgsValueOnly
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: types_1.RequestType.OData
    },
    // Restores a version, by the specified label.
    restoreByLabel: {
        argNames: ["label"],
        requestType: types_1.RequestType.PostWithArgsValueOnly
    }
};
/**
 * View
 */
exports.view = {
    /*********************************************************************************************************************************/
    // Properties
    /*********************************************************************************************************************************/
    properties: [
        "ViewFields|viewfieldcollection"
    ],
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    // Deletes the object
    delete: {
        requestType: types_1.RequestType.Delete
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: types_1.RequestType.OData
    },
    // Returns the list view as HTML.
    renderAsHtml: {
        requestType: types_1.RequestType.Get
    },
    // Updates it's properties.
    update: {
        metadataType: "SP.View",
        name: "",
        requestMethod: "MERGE",
        requestType: types_1.RequestType.PostWithArgsInBody
    }
};
/**
 * View Field Collection
 */
exports.viewfieldcollection = {
    // Adds the field with the specified field internal name or display name to the collection.
    addViewField: {
        argNames: ["fieldName"],
        requestType: types_1.RequestType.PostWithArgsValueOnly
    },
    // Moves the field with the specified field internal name to the specified position in the collection.
    moveViewFieldTo: {
        argNames: ["field", "index"],
        requestType: types_1.RequestType.PostWithArgsInBody
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: types_1.RequestType.OData
    },
    // Removes all the fields from the collection.
    removeAllViewFields: {
        requestType: types_1.RequestType.Post
    },
    // Removes the field with the specified field internal name from the collection.
    removeViewField: {
        argNames: ["fieldName"],
        requestType: types_1.RequestType.GetWithArgsValueOnly
    }
};
/**
 * Views
 */
exports.views = {
    // Adds a view to the view collection.
    add: {
        metadataType: "SP.View",
        name: "",
        requestType: types_1.RequestType.PostWithArgsInBody
    },
    // Gets the list view with the specified ID.
    getById: {
        argNames: ["id"],
        requestType: types_1.RequestType.GetWithArgsValueOnly,
        returnType: "view"
    },
    // Gets the list view with the specified title.
    getByTitle: {
        argNames: ["title"],
        requestType: types_1.RequestType.GetWithArgsValueOnly,
        returnType: "view"
    },
    // Queries the collection
    query: {
        argNames: ["oData"],
        requestType: types_1.RequestType.OData
    }
};
//# sourceMappingURL=mapper.js.map