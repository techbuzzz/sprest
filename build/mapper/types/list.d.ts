import { IBase } from "../../utils/types";
import { Types } from "../..";
import { IContentType, IContentTypeResults, IContentTypes, IListItem, IListItemProps, IListItemQueryResult, IListItemResult, IListItemResults, IListItems, IView, IViewQueryResult, IViewResult, IViewResults, IViews } from ".";
/**
 * List Creation Information
 */
export interface IListCreationInformation {
    /** The list template type. */
    BaseTemplate: number;
    /** The list schema xml. */
    CustomSchemaXml?: string;
    /** The list of data source properties. */
    DataSourceProperties?: Array<string>;
    /** The list description. */
    Description?: string;
    /** The list document template type. */
    DocumentTemplateType?: number;
    /** Option to display the list on the quick launch. */
    QuickLaunchOption?: number;
    /** The list template feature id. */
    TemplateFeatureId?: string;
    /** The list name. */
    Title: string;
}
/**
 * List Data Parameters
 */
export interface IListDataParameters {
    /** List Data Parameters */
    AddRequiredFields?: boolean;
    AllowMultipleValueFilterForTaxonomyFields?: boolean;
    DatesInUtc?: boolean;
    ExpandGroups?: boolean;
    FirstGroupOnly?: boolean;
    FolderServerRelativeUrl?: string;
    ImageFieldsToTryRewriteToCdnUrls?: string;
    OverrideViewXml?: string;
    Paging?: string;
    RenderOptions?: number;
    ReplaceGroup?: boolean;
    ViewXml?: string;
    /** List Data Override Parameters */
    CascDelWarnMessage?: string;
    CustomAction?: string;
    DrillDown?: string;
    Field?: string;
    FieldInternalName?: string;
    Filter?: string;
    FilterData?: string;
    FilterData1?: string;
    FilterData10?: string;
    FilterData2?: string;
    FilterData3?: string;
    FilterData4?: string;
    FilterData5?: string;
    FilterData6?: string;
    FilterData7?: string;
    FilterData8?: string;
    FilterData9?: string;
    FilterField?: string;
    FilterField1?: string;
    FilterField10?: string;
    FilterField2?: string;
    FilterField3?: string;
    FilterField4?: string;
    FilterField5?: string;
    FilterField6?: string;
    FilterField7?: string;
    FilterField8?: string;
    FilterField9?: string;
    FilterFields?: string;
    FilterFields1?: string;
    FilterFields10?: string;
    FilterFields2?: string;
    FilterFields3?: string;
    FilterFields4?: string;
    FilterFields5?: string;
    FilterFields6?: string;
    FilterFields7?: string;
    FilterFields8?: string;
    FilterFields9?: string;
    FilterLookupId?: string;
    FilterLookupId1?: string;
    FilterLookupId10?: string;
    FilterLookupId2?: string;
    FilterLookupId3?: string;
    FilterLookupId4?: string;
    FilterLookupId5?: string;
    FilterLookupId6?: string;
    FilterLookupId7?: string;
    FilterLookupId8?: string;
    FilterLookupId9?: string;
    FilterOp?: string;
    FilterOp1?: string;
    FilterOp10?: string;
    FilterOp2?: string;
    FilterOp3?: string;
    FilterOp4?: string;
    FilterOp5?: string;
    FilterOp6?: string;
    FilterOp7?: string;
    FilterOp8?: string;
    FilterOp9?: string;
    FilterValue?: string;
    FilterValue1?: string;
    FilterValue10?: string;
    FilterValue2?: string;
    FilterValue3?: string;
    FilterValue4?: string;
    FilterValue5?: string;
    FilterValue6?: string;
    FilterValue7?: string;
    FilterValue8?: string;
    FilterValue9?: string;
    FilterValues?: string;
    FilterValues1?: string;
    FilterValues10?: string;
    FilterValues2?: string;
    FilterValues3?: string;
    FilterValues4?: string;
    FilterValues5?: string;
    FilterValues6?: string;
    FilterValues7?: string;
    FilterValues8?: string;
    FilterValues9?: string;
    GroupString?: string;
    HasOverrideSelectCommand?: string;
    ID?: string;
    InplaceFullListSearch?: string;
    InplaceSearchQuery?: string;
    IsCSR?: string;
    IsGroupRender?: string;
    IsXslView?: string;
    ListViewPageUrl?: string;
    OverrideScope?: string;
    OverrideSelectCommand?: string;
    PageFirstRow?: string;
    PageLastRow?: string;
    RootFolder?: string;
    SortDir?: string;
    SortDir1?: string;
    SortDir10?: string;
    SortDir2?: string;
    SortDir3?: string;
    SortDir4?: string;
    SortDir5?: string;
    SortDir6?: string;
    SortDir7?: string;
    SortDir8?: string;
    SortDir9?: string;
    SortField?: string;
    SortField1?: string;
    SortField10?: string;
    SortField2?: string;
    SortField3?: string;
    SortField4?: string;
    SortField5?: string;
    SortField6?: string;
    SortField7?: string;
    SortField8?: string;
    SortField9?: string;
    SortFields?: string;
    SortFieldValues?: string;
    View?: string;
    ViewCount?: string;
    ViewId?: string;
    ViewPath?: string;
    WebPartId?: string;
}
/**
 * List Data Source
 */
export interface IListDataSource {
    Properties: Array<string>;
}
/**
 * List Data Stream
 */
export interface IListDataStream<RowProps = IListItemProps> {
    FilterFields?: string;
    FilterLink: string;
    FirstRow: number;
    FolderPermissions: string;
    ForceNoHierarchy: string;
    HierarchyHasIndention: string;
    LastRow: number;
    Row: Array<RowProps>;
    RowLimit: number;
}
/**
 * List Template
 */
export interface IListTemplate {
    AllowsFolderCreation: boolean;
    Description: string;
    FeatureId: string;
    Hidden: boolean;
    ImageUrl: string;
    InternalName: string;
    IsCustomTemplate: boolean;
    ListTemplateTypeKind: number;
    Name: string;
    OnQuickLaunch: boolean;
    Unique: boolean;
}
/**
 * List Methods
 */
export interface IListMethods {
    /**
     * Creates unique role assignments for the securable object.
     * @param copyRoleAssignments - True to copy the role assignments from the parent securable object; false to remove the inherited role assignments except one that contains the current user.
     * @param clearSubScopes - True to make all child securable objects inherit role assignments from the current object; false (default) to leave role assignments unchanged for child securable objects that do not inherit role assignments from their parent object.
     */
    breakRoleInheritance(copyRoleAssignments: any, clearSubScopes: any): any;
    /**
     * Deletes the list.
     */
    delete(): IBase;
    /**
     * Returns the collection of changes from the change log that have occurred within the list, based on the specified query.
     * @param query - The change query.
     */
    getChanges(query: any): IBase;
    /**
     * Returns the list item with the specified list item identifier.
     * @param id - The list item id.
     */
    getItemById(id: any): IListItem & IBase<IListItem, IListItemResult, IListItemQueryResult>;
    /**
     * Returns a collection of items from the list based on the view xml.
     * @param viewXml - The view xml CAML query.
     */
    getItems(viewXml: any): IBase<IListItems, IListItemResults>;
    /**
     * Returns a collection of items from the list based on the specified query.
     * @camlQuery - The caml query.
     */
    getItemsByQuery(camlQuery: any): IBase<IListItems, IListItemResults>;
    /**
     * Returns a collection of items from the list based on the specified query.
     * @query - The query that contains the change token.
     */
    getListItemChangesSinceToken(query: Types.SP.ComplexTypes.ChangeLogItemQuery): IBase<IListItems, IListItemResults>;
    /**
     * Returns a collection of lookup fields that use this list as a data source and that have FieldLookup.IsRelationship set to true.
     */
    getRelatedFields(): IBase;
    /**
     * Gets the effective user permissions for the current user.
     * @param loginName - The user login name.
     */
    getUserEffectivePermissions(loginName: any): IBase;
    /**
     * Returns the list view with the specified view identifier.
     * @param viewId - The view id.
     */
    getViewById(viewId: any): IView & IBase<IView, IViewResult, IViewQueryResult>;
    /**
     * Moves the list to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    recycle(): IBase;
    /**
     * Renders the list data.
     * @param viewXml - A CAML query that defines the items and fields that you want returned.
     */
    renderListData(viewXml: any): IBase;
    /**
     * Renders the list form data.
     * @param itemId - The item id.
     * @param formId - The identifier of the form.
     * @param mode - The SP.ControlMode of the control used to display the item.
     */
    renderListFormData(itemId: any, formId: any, mode: number): IBase;
    /**
     * Reserves a list item ID for idempotent list item creation.
     */
    reserveListItemId(): IBase;
    /**
     * Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.
     */
    resetRoleInheritance(): IBase;
    /**
     * Updates it's properties.
     * @param data - The list properties to update.
     */
    update(data: any): IBase;
}
/**
 * List Properties
 */
export interface IListProps {
    /** Gets a value that specifies whether the list supports content Types.SP. */
    AllowContentTypes: boolean;
    AllowDeletion: boolean;
    /** Gets the list definition type on which the list is based. Represents a ListTemplateType value. See ListTemplateType in the .NET client object model reference for template type values. */
    BaseTemplate: number;
    /** Gets the base type for the list. Represents an SP.BaseType value: Generic List = 0; Document Library = 1; Discussion Board = 3; Survey = 4; Issue = 5. */
    BaseType: number;
    /**
     * Gets a value that specifies the override of the web application's BrowserFileHandling property at the list level. Represents an SP.BrowserFileHandling value: Permissive = 0; Strict = 1.
     */
    BrowserFileHandling: number;
    /** Gets or sets a value that specifies whether content types are enabled for the list. */
    ContentTypesEnabled: boolean;
    /** Gets a value that specifies when the list was created. */
    Created: string;
    CurrentChangeToken: Types.SP.IStringValue;
    /** Gets a value that specifies the default workflow identifier for content approval on the list. Returns an empty GUID if there is no default content approval workflow. */
    DefaultContentApprovalWorkflowId: string;
    /** Gets or sets a value that specifies the description of the list. */
    Description: string;
    /** Gets or sets a value that specifies the reading order of the list. Returns ""NONE"", ""LTR"", or ""RTL"". */
    Direction: string;
    /** Gets or sets a value that specifies the server-relative URL of the document template for the list. Returns a server-relative URL if the base type is DocumentLibrary, otherwise returns null. */
    DocumentTemplateUrl: string;
    /** Gets or sets a value that specifies the minimum permission required to view minor versions and drafts within the list. Represents an SP.DraftVisibilityType value: Reader = 0; Author = 1; Approver = 2. */
    DraftVersionVisibility: number;
    EnableAssignToEmail: boolean;
    /** Gets or sets a value that specifies whether list item attachments are enabled for the list. */
    EnableAttachments: boolean;
    /** Gets or sets a value that specifies whether new list folders can be added to the list. */
    EnableFolderCreation: boolean;
    /** Gets or sets a value that specifies whether minor versions are enabled for the list. */
    EnableMinorVersions: boolean;
    /** Gets or sets a value that specifies whether content approval is enabled for the list. */
    EnableModeration: boolean;
    /** Gets or sets a value that specifies whether historical versions of list items and documents can be created in the list. */
    EnableVersioning: boolean;
    /**  */
    EntityTypeName: string;
    ExcludeFromOfflineClient: boolean;
    FileSavePostProcessingEnabled: boolean;
    /** Gets or sets a value that indicates whether forced checkout is enabled for the document library. */
    ForceCheckout: boolean;
    /** Gets a value that specifies whether the list is an external list. */
    HasExternalDataSource: boolean;
    /** Gets or sets a Boolean value that specifies whether the list is hidden. If true, the server sets the OnQuickLaunch property to false. */
    Hidden: boolean;
    /** Gets the GUID that identifies the list in the database. */
    Id: string;
    /** Gets a value that specifies the URI for the icon of the list. */
    ImageUrl: string;
    /**  */
    IrmEnabled: boolean;
    /**  */
    IrmExpire: boolean;
    /**  */
    IrmReject: boolean;
    /** Gets or sets a value that specifies a flag that a client application can use to determine whether to display the list. */
    IsApplicationList: boolean;
    /** Gets a value that specifies whether the list is a gallery. */
    IsCatalog: boolean;
    /**  */
    IsPrivate: boolean;
    /** Gets a value that specifies the number of list items in the list. */
    ItemCount: number;
    /** Gets a value that specifies the last time a list item was deleted from the list. */
    LastItemDeletedDate: string;
    /** Gets a value that specifies the last time a list item, field, or property of the list was modified. */
    LastItemModifiedDate: string;
    ListExperienceOptions: number;
    /**  */
    ListItemEntityTypeFullName: string;
    MajorVersionLimit: number;
    MajorWithMinorVersionsLimit: number;
    /** Gets or sets a value that indicates whether the list in a Meeting Workspace site contains data for multiple meeting instances within the site. */
    MultipleDataList: boolean;
    /** Gets or sets a value that specifies that the crawler must not crawl the list. */
    NoCrawl: boolean;
    /** Gets a value that specifies the server-relative URL of the site that contains the list. */
    ParentWebUrl: string;
    ParserDisabled: boolean;
    ReadSecurity: number;
    /** Gets a value that indicates whether folders can be created within the list. */
    ServerTemplateCanCreateFolders: boolean;
    /** Gets a value that specifies the feature identifier of the feature that contains the list schema for the list. Returns an empty GUID if the list schema is not contained within a feature. */
    TemplateFeatureId: string;
    /** Gets or sets the displayed title for the list. Its length must be <= 255 characters. */
    Title: string;
}
/**
 * List Query Properties
 */
export interface IListQueryProps {
    /**
     * Gets the content types that are associated with the list.
     */
    ContentTypes(): IContentTypes;
    /**
     * Gets the content types that are associated with the list.
     * @param id - The id of the content type.
     */
    ContentTypes(id: string): IContentType;
    /**
     * Gets the data source associated with the list, or null if the list is not a virtual list. Returns null if the HasExternalDataSource property is false.
     */
    DataSource(): IBase<Array<string>>;
    /**
     * Gets a value that specifies the location of the default display form for the list. Clients specify a server-relative URL, and the server returns a site-relative URL
     */
    DefaultDisplayFormUrl(): IBase<string>;
    /**
     * Gets a value that specifies the URL of the edit form to use for list items in the list. Clients specify a server-relative URL, and the server returns a site-relative URL.
     */
    DefaultEditFormUrl(): IBase<string>;
    /**
     * Gets a value that specifies the location of the default new form for the list. Clients specify a server-relative URL, and the server returns a site-relative URL.
     */
    DefaultNewFormUrl(): IBase<string>;
    /**
     * Gets the default list view.
    */
    DefaultView(): IView;
    DescriptionResouce(): IBase<Types.SP.IResourcePath>;
    /**
     * Gets a value that specifies the effective permissions on the list that are assigned to the current user.
     */
    EffectiveBasePermissions(): IBase<Types.SP.IBasePermissions>;
    /**
     * Gets a value that specifies the effective permissions on the list that are for the user export interface.
    */
    EffectiveBasePermissionsForUI(): IBase<Types.SP.IBasePermissions>;
    /**
     * Gets the event receivers associated with the list.
    */
    EventReceivers(): Types.SP.IEventReceivers;
    /**
     * Gets the event receiver associated with the list.
     * @param id - The id of the event receiver.
    */
    EventReceivers(id: string): Types.SP.IEventReceiver;
    /**
     * Gets the fields in the list.
     */
    Fields(): Types.SP.IFields;
    /**
     * Gets the field in the list.
     * @param internalNameOrTitle - The internal name or title of the field.
     */
    Fields(internalNameOrTitle: string): Types.SP.IField;
    /**
     * Gets the object where role assignments for this object are defined. If role assignments are defined directly on the current object, the current object is returned.
     */
    FirstUniqueAncestorSecurableObject(): IBase<string>;
    /**
     * Gets the list forms in the list.
     */
    Forms(): IBase;
    /**
     * Gets the list form in the list.
     * @param id - The id of the form.
     */
    Forms(id: string): IBase;
    /**
     * Gets a value that specifies whether the role assignments are uniquely defined for this securable object or inherited from a parent securable object.
     */
    HasUniqueRoleAssignments(): IBase;
    /**
     * Gets a value that specifies the information rights management settings.
    */
    InformationRightsManagementSettings(): IBase;
    /**
     * Gets a value that indicates whether the list is designated as a default asset location for images or other files which the users upload to their wiki pages.
     */
    IsSiteAssetsLibrary(): IBase<boolean>;
    /**
     * Gets the list items in the list.
     */
    Items(): IListItems;
    /**
     * Gets the list item in the list.
     * @param id - The id of the list item.
     */
    Items(id: number): IListItem;
    /**
     * Gets or sets a value that specifies whether the list appears on the Quick Launch of the site. If true, the server sets the Hidden property to false.
     */
    OnQuickLaunch(): IBase<boolean>;
    /**
     * Gets a value that specifies the site that contains the list.
     */
    ParentWeb(): Types.SP.IWeb;
    /**
     * Gets the role assignments for the securable object.
     */
    RoleAssignments(): Types.SP.IRoleAssignments;
    /**
     * Gets the role assignments for the securable object.
     * @param id - The role assignment id.
     */
    RoleAssignments(id: string): Types.SP.IRoleAssignment;
    /**
     * Gets the root folder of the list.
     */
    RootFolder(): Types.SP.IFolder;
    /**
     * Gets the file in the root folder of the list.
     * @param url - The url of the file within the root folder.
     */
    RootFolder(url: string): Types.SP.IFile;
    /**
     * Gets a value that specifies the list schema of the list.
     */
    SchemaXml(): IBase<string>;
    Subscriptions(): IBase<IBase>;
    TitleResource(): IBase<Types.SP.IResourcePath>;
    /**
     * Gets the user custom actions for the list.
     */
    UserCustomActions(): Types.SP.IUserCustomActions;
    /**
     * Gets the user custom action(s) for the list.
     * @param id - The id of the user custom action.
     */
    UserCustomActions(id: string): Types.SP.IUserCustomAction;
    /**
     * Gets or sets a value that specifies the data validation criteria for a list item. Its length must be <= 1023.
     */
    ValidationFormula(): IBase<string>;
    /**
     * Gets or sets a value that specifies the error message returned when data validation fails for a list item. Its length must be <= 1023.
     */
    ValidationMessage(): IBase<string>;
    /**
     * Gets the views in the list.
     */
    Views(): IViews;
    /**
     * Gets the view in the list.
     * @param id - The id of the view.
     */
    Views(id: string): IView;
    /**
     * Gets a value that specifies the collection of all workflow associations for the list.
     */
    WorkflowAssociations(): IBase<string>;
    WriteSecurity(): IBase<number>;
}
/**
 * List Query Result
 */
export interface IListQueryResult extends IListMethods, IListProps {
    /**
     * Gets the content types that are associated with the list.
     */
    ContentTypes: IContentTypeResults;
    /**
     * Gets the data source associated with the list, or null if the list is not a virtual list. Returns null if the HasExternalDataSource property is false.
     */
    DataSource: IListDataSource;
    /**
     * Gets a value that specifies the location of the default display form for the list. Clients specify a server-relative URL, and the server returns a site-relative URL
     */
    DefaultDisplayFormUrl: string;
    /**
     * Gets a value that specifies the URL of the edit form to use for list items in the list. Clients specify a server-relative URL, and the server returns a site-relative URL.
     */
    DefaultEditFormUrl: string;
    /**
     * Gets a value that specifies the location of the default new form for the list. Clients specify a server-relative URL, and the server returns a site-relative URL.
     */
    DefaultNewFormUrl: string;
    /**
     * Gets the default list view.
    */
    DefaultView: IViewResult;
    /**
     * Gets the URL of the default view for the list.
     */
    DefaultViewUrl: string;
    DescriptionResouce: Types.SP.IResourcePath;
    /**
     * Gets a value that specifies the effective permissions on the list that are assigned to the current user.
     */
    EffectiveBasePermissions: Types.SP.IBasePermissions;
    /**
     * Gets a value that specifies the effective permissions on the list that are for the user export interface.
    */
    EffectiveBasePermissionsForUI: Types.SP.IBasePermissions;
    /**
     * Gets the event receivers associated with the list.
    */
    EventReceivers: Types.SP.IEventReceiverResults;
    /**
     * Gets the fields in the list.
     */
    Fields: Types.SP.IFieldResults;
    /**
     * Gets the object where role assignments for this object are defined. If role assignments are defined directly on the current object, the current object is returned.
     */
    FirstUniqueAncestorSecurableObject: Types.SP.IWebResult;
    /**
     * Gets the list forms in the list.
     */
    Forms: Types.SP.IResults<Types.SP.IForm>;
    /**
     * Gets a value that specifies whether the role assignments are uniquely defined for this securable object or inherited from a parent securable object.
     */
    HasUniqueRoleAssignments: boolean;
    /**
     * Gets a value that specifies the information rights management settings.
    */
    InformationRightsManagementSettings: Types.SP.IInformationRightsManagementSettings;
    /**
     * Gets a value that indicates whether the list is designated as a default asset location for images or other files which the users upload to their wiki pages.
     */
    IsSiteAssetsLibrary: boolean;
    /**
     * Gets the list items in the list.
     */
    Items: IListItemResults;
    /**
     * Gets or sets a value that specifies whether the list appears on the Quick Launch of the site. If true, the server sets the Hidden property to false.
     */
    OnQuickLaunch: boolean;
    /**
     * Gets a value that specifies the site that contains the list.
     */
    ParentWeb: Types.SP.IWebResult;
    /**
     * Gets the role assignments for the securable object.
     */
    RoleAssignments: Types.SP.IRoleAssignmentResults;
    /**
     * Gets the root folder of the list.
     */
    RootFolder: Types.SP.IFolderResult;
    /**
     * Gets a value that specifies the list schema of the list.
     */
    SchemaXml: string;
    Subscriptions: Types.SP.IResults<Types.SP.ISubscription>;
    TitleResource: Types.SP.IResourcePath;
    /**
     * Gets the user custom actions for the list.
     */
    UserCustomActions: Types.SP.IUserCustomActionResults;
    /**
     * Gets or sets a value that specifies the data validation criteria for a list item. Its length must be <= 1023.
     */
    ValidationFormula: string;
    /**
     * Gets or sets a value that specifies the error message returned when data validation fails for a list item. Its length must be <= 1023.
     */
    ValidationMessage: string;
    /**
     * Gets the views in the list.
     */
    Views: IViewResults;
    /**
     * Gets a value that specifies the collection of all workflow associations for the list.
     */
    WorkflowAssociations: Types.SP.IResults<string>;
    WriteSecurity: number;
}
/**
 * List Result
 */
export interface IListResult extends IListMethods, IListProps, IListQueryProps, IBase<IList, IListResult, IListQueryResult> {
}
/**
 * List
 */
export interface IList extends IListMethods, IListQueryProps, IBase<IList, IListResult, IListQueryResult> {
}
