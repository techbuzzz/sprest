declare module "definitions/complexTypes" {
    import { Results, SPTypes } from "definitions/index";
    /**
     * App License
     */
    export interface AppLicense {
        RawXMLLicenseToken: string;
    }
    /**
     * App License Collection
     */
    export interface AppLicenseCollection {
        Items: AppLicense;
    }
    /**
     * App Properties
     */
    export interface AppProperties {
        AppSettingsEnabled: boolean;
        Description: string;
        EulaUrl: string;
        IsAnonymous: boolean;
        IsDisabled: boolean;
        ManagedDeploymentEnabled: boolean;
        ManagePermissionsEnabled: boolean;
        ManageSeatsEnabled: boolean;
        MonitoringEnabled: boolean;
        Publisher: string;
        RemoveEnabled: boolean;
        SideLoadEnabled: boolean;
        SupportUrl: string;
        ViewInMarketPlaceEnabled: boolean;
    }
    /**
     * App Site Context
     */
    export interface AppSiteContext {
        SiteUrl: string;
    }
    /**
     * App View Creation Information
     */
    export interface AppViewCreationInfo {
        AppId: string;
        Title: string;
    }
    /**
     * Attachment Creation Information
     */
    export interface AttachmentCreationInformation {
        FileName: string;
    }
    /**
     * Base Permissions
     */
    export interface BasePermissions {
        High: number;
        Low: number;
    }
    /**
     * Caml Query
     */
    export interface CamlQuery {
        /** A value that indicates whether the query returns dates in Coordinated Universal Time (UTC) format. */
        DatesInUtc: boolean;
        /** A value that specifies the server relative URL of a list folder from which results will be returned. */
        FolderServerRelativeUrl: string;
        /** A value that specifies the information required to get the next page of data for the list view. */
        ListItemCollectionPosition: ListItemCollectionPosition;
        /** A value that specifies the XML schema that defines the list view. */
        ViewXml: string;
    }
    /**
     * Change Log Item Query
     */
    export interface ChangeLogItemQuery {
        ChangeToken: string;
        Contains: string;
        Query: string;
        QueryOptions: string;
        RowLimit: string;
        ViewFields: string;
        ViewName: string;
    }
    /**
     * Change Query
     */
    export interface ChangeQuery {
        Activity: boolean;
        Add: boolean;
        Alert: boolean;
        ChangeTokenEnd: ChangeToken;
        ChangeTokenStart: ChangeToken;
        ContentType: boolean;
        DeleteObject: boolean;
        FetchLimit: number;
        Field: boolean;
        File: boolean;
        Folder: boolean;
        Group: boolean;
        GroupMembershipAdd: boolean;
        GroupMembershipDelete: boolean;
        Item: boolean;
        LatestFirst: boolean;
        List: boolean;
        Move: boolean;
        Navigation: boolean;
        RecursiveAll: boolean;
        Rename: boolean;
        RequireSecurityTrim: boolean;
        Restore: boolean;
        RoleAssignmentAdd: boolean;
        RoleAssignmentDelete: boolean;
        RoleDefinitionAdd: boolean;
        RoleDefinitionDelete: boolean;
        RoleDefinitionUpdate: boolean;
        SecurityPolicy: boolean;
        Site: boolean;
        SystemUpdate: boolean;
        Update: boolean;
        User: boolean;
        View: boolean;
        Web: boolean;
    }
    /**
     * Change Token
     */
    export interface ChangeToken {
        StringValue: string;
    }
    /**
     * Content Type Creation Information
     */
    export interface ContentTypeCreationInformation {
        /** The content type description. */
        Description?: string;
        /** The content type group. */
        Group?: string;
        /** The content type id. */
        Id?: string;
        /** The content type name. */
        Name: string;
    }
    /**
     * Content Type Id
     */
    export interface ContentTypeId {
        StringValue: string;
    }
    /**
     * Context Web Information
     */
    export interface ContextWebInformation {
        FormDigestTimeoutSeconds: number;
        FormDigestValue: string;
        LibraryVersion: string;
        SiteFullUrl: string;
        SupportedSchemaVersions: String;
        WebFullUrl: string;
    }
    /**
     * Copy Job Progress
     */
    export interface CopyJobProgress {
        JobState: number;
        Logs: String;
    }
    /**
     * Copy Migration Information
     */
    export interface CopyMigrationInfo {
        EncryptionKey: any;
        JobId: string;
        JobQueueUri: string;
    }
    /**
     * Copy Migration Options
     */
    export interface CopyMigrationOptions {
        IgnoreVersionHistory: boolean;
    }
    /**
     * Creatable Item Information
     */
    export interface CreatableItemInfo {
        DocumentTemplate: number;
        FileExtension: string;
        ItemType: string;
    }
    /**
     * Creatable Item Information Collection
     */
    export interface CreatableItemInfoCollection {
        Items: CreatableItemInfo;
    }
    /**
     * Custom Action Element
     */
    export interface CustomActionElement {
        CommandUIExtension: string;
        EnabledScript: string;
        ImageUrl: string;
        Location: string;
        RegistrationId: string;
        RegistrationType: number;
        RequireSiteAdministrator: boolean;
        Rights: BasePermissions;
        Title: string;
        UrlAction: string;
    }
    /**
     * Custom Action Element Collection
     */
    export interface CustomActionElementCollection {
        Items: CustomActionElement;
    }
    /**
     * Custom Result
     */
    export interface CustomResult {
        GroupTemplateId: string;
        ItemTemplateId: string;
        Properties: KeyValue;
        ResultTitle: string;
        ResultTitleUrl: string;
        Table: SimpleDataTable;
        TableType: string;
    }
    /**
     * Document Library Information
     */
    export interface DocumentLibraryInformation {
        AbsoluteUrl: string;
        Modified: string;
        ModifiedFriendlyDisplay: string;
        ServerRelativeUrl: string;
        Title: string;
    }
    /**
     * Encryption Option
     */
    export interface EncryptionOption {
        AES256CBCKey: any;
    }
    /**
     * Event Receiver Definition Creation Information
     */
    export interface EventReceiverDefinitionCreationInformation {
        /** The event receiver type. */
        EventType: SPTypes.EventReceiverType | number;
        /** The strong name of the assembly that is used for receiving events. */
        ReceiverAssembly?: string;
        /** A string that represents the class that is used for receiving events. */
        ReceiverClass?: string;
        /** The name of the event receiver. */
        ReceiverName: string;
        /** The URL of a web service that is used for receiving events. */
        ReceiverUrl?: string;
        /** An integer that represents the relative sequence of the event. */
        SequenceNumber?: number;
        /** The execution synchronization of the event receiver. */
        Synchronization?: number;
    }
    /**
     * Field Attachment File
     */
    export interface FieldAttachmentFile {
        FileName: string;
        FileNameAsPath: ResourcePath;
        ServerRelativePath: ResourcePath;
        ServerRelativeUrl: string;
    }
    /**
     * Field Attachment Files
     */
    export interface FieldAttachmentFiles {
        results: Array<FieldAttachmentFile>;
    }
    /**
     * Field Calculation Error Value
     */
    export interface FieldCalculationErrorValue {
        ErrorMessage: string;
    }
    /**
     * Field Creation Information
     */
    export interface FieldCreationInformation {
        /** The choices. */
        Choices?: {
            results: Array<string>;
        };
        /** The field type. */
        FieldTypeKind: SPTypes.FieldType | number;
        /** Indicates whether only the first eight characters are used for the field name. */
        IsCompactName?: boolean;
        /** The name of the source lookup field. */
        LookupFieldName?: string;
        /** The ID of the target list for the source lookup field. */
        LookupListId?: any;
        /** The ID of the site that contains the list that is the source for the lookup field value. */
        LookupWebId?: any;
        /** A value that specifies whether the field requires a value. */
        Required?: boolean;
        /** A value that specifies the display name of the field. */
        Title: string;
    }
    /**
     * Field Geolocation Value
     */
    export interface FieldGeolocationValue {
        __metadata?: {
            type: string;
        };
        Altitude: number;
        Latitude: number;
        Longitude: number;
        Measure: number;
    }
    /**
     * Field Lookup Value
     */
    export interface FieldLookupValue {
        __metadata?: {
            type: string;
        };
        LookupId: number;
        LookupValue: string;
    }
    /**
     * Field Multi-Choice
     */
    export interface FieldMultiChoiceValue {
        __metadata?: {
            type: string;
        };
        results: Array<string>;
    }
    /**
     * Field Multi-Lookup
     */
    export interface FieldMultiLookupValue {
        __metadata?: {
            type: string;
        };
        results: Array<FieldLookupValue>;
    }
    /**
     * Field Rating Scale Question Answer
     */
    export interface FieldRatingScaleQuestionAnswer {
        __metadata?: {
            type: string;
        };
        Answer: number;
        Question: string;
    }
    /**
     * Field Url Value
     */
    export interface FieldUrlValue {
        __metadata?: {
            type: string;
        };
        Description: string;
        Url: string;
    }
    /**
     * Field User Value
     */
    export interface FieldUserValue {
        __metadata?: {
            type: string;
        };
        ContentTypeDisp?: string;
        Created?: string;
        Department?: string;
        Email?: string;
        FirstName?: string;
        ID?: number;
        ImnName?: string;
        JobTitle?: string;
        LastName?: string;
        MobilePhone?: string;
        Modified?: string;
        NameWithPicture?: string;
        NameWithPictureAndDetails?: string;
        Office?: string;
        SipAddress?: string;
        Title?: string;
        UserName?: string;
        WorkPhone?: string;
    }
    /**
     * File Collection Add Parameters
     */
    export interface FileCollectionAddParameters {
        Overwrite: boolean;
    }
    /**
     * File Creation Information
     */
    export interface FileCreationInformation {
        Content: any;
        Overwrite: boolean;
        Url: string;
    }
    /**
     * Folder Collection Add Parameters
     */
    export interface FolderCollectionAddParameters {
        Overwrite: boolean;
    }
    /**
     * Group Creation Information
     */
    export interface GroupCreationInformation {
        /** The group description. */
        Description?: string;
        /** The group name. */
        Title: string;
    }
    /**
     * Hashtag
     */
    export interface Hashtag {
        Actor: string;
        Application: string;
        Label: string;
        Timestamp: string;
    }
    /**
     * Ingestion Task Key
     */
    export interface IngestionTaskKey {
        IngestionTableAccountKey: string;
        IngestionTableAccountName: string;
        JobId: string;
        TaskId: string;
        TenantName: string;
    }
    /**
     * Key Value
     */
    export interface KeyValue {
        Key: string;
        Value: string;
        ValueType: string;
    }
    /**
     * Language
     */
    export interface Language {
        DisplayName: string;
        LanguageTag: string;
        Lcid: number;
    }
    /**
     * List Creation Information
     */
    export interface ListCreationInformation {
        /** The list template type. */
        BaseTemplate: SPTypes.ListTemplateType | number;
        /** The list schema xml. */
        CustomSchemaXml?: string;
        /** The list of data source properties. */
        DataSourceProperties?: KeyValue;
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
     * List Data Source
     */
    export interface ListDataSource {
        Properties: KeyValue;
    }
    /**
     * List Data Validation Exception Value
     */
    export interface ListDataValidationExceptionValue {
        FieldFailures: ListDataValidationFailure;
        ItemFailures: ListDataValidationFailure;
    }
    /**
     * List Data Validation Failure
     */
    export interface ListDataValidationFailure {
        DisplayName: string;
        Message: string;
        Name: string;
        Reason: number;
        ValidationType: number;
    }
    /**
     * List Item Collection Position
     */
    export interface ListItemCollectionPosition {
        PagingInfo: string;
    }
    /**
     * List Item Creation Information
     */
    export interface ListItemCreationInformation {
        FolderUrl: string;
        LeafName: string;
        UnderlyingObjectType: number;
    }
    /**
     * List Item Form Update Value
     */
    export interface ListItemFormUpdateValue {
        ErrorMessage: string;
        FieldName: string;
        FieldValue: string;
        HasException: boolean;
    }
    /**
     * Menu Node
     */
    export interface MenuNode {
        CustomProperties: KeyValue;
        FriendlyUrlSegment: string;
        IsDeleted: boolean;
        IsHidden: boolean;
        Key: any;
        string: any;
        Nodes: MenuNode;
        NodeType: number;
        SimpleUrl: string;
        Title: string;
    }
    /**
     * Menu State
     */
    export interface MenuState {
        FriendlyUrlPrefix: string;
        Nodes: MenuNode;
        SimpleUrl: string;
        SPSitePrefix: string;
        SPWebPrefix: string;
        StartingNodeKey: string;
        StartingNodeTitle: string;
        Version: string;
    }
    /**
     * Method Information
     */
    export interface MethodInformation {
        IsBeta: boolean;
        Name: string;
        Parameters: ParameterInformation;
        ReturnTypeFullName: string;
    }
    /**
     * Navigation Node Creation Information
     */
    export interface NavigationNodeCreationInformation {
        AsLastNode: boolean;
        IsExternal: boolean;
        Title: string;
        Url: string;
    }
    /**
     * Parameter Information
     */
    export interface ParameterInformation {
        Name: string;
        ParameterTypeFullName: string;
    }
    /**
     * Personal Result Suggestion
     */
    export interface PersonalResultSuggestion {
        HighlightedTitle: string;
        IsBestBet?: boolean;
        Title: string;
        Url: string;
    }
    /**
     * Property Information
     */
    export interface PropertyInformation {
        ExcludeFromDefaultRetrieval: boolean;
        IsBeta: boolean;
        Name: string;
        PropertyTypeFullName: string;
        ReadOnly: boolean;
    }
    /**
     * Provisioned Migration Containers Information
     */
    export interface ProvisionedMigrationContainersInfo {
        DataContainerUri: string;
        EncryptionKey: any;
        MetadataContainerUri: string;
    }
    /**
     * Provisioned Migration Queue Info
     */
    export interface ProvisionedMigrationQueueInfo {
        JobQueueUri: string;
    }
    /**
     * Query Property
     */
    export interface QueryProperty {
        Name: string;
        Value: QueryPropertyValue;
    }
    /**
     * Query Property Value
     */
    export interface QueryPropertyValue {
        BoolVal?: boolean;
        IntVal?: number;
        QueryPropertyValueTypeIndex?: number;
        StrArray?: String;
        StrVal?: string;
    }
    /**
     * Query Result
     */
    export interface QueryResult {
        CustomResults: CustomResult;
        QueryId: string;
        QueryRuleId?: string;
        RefinementResults: RefinementResults;
        RelevantResults: RelevantResults;
        SpecialTermResults: SpecialTermResults;
    }
    /**
     * Query Suggestion Query
     */
    export interface QuerySuggestionQuery {
        IsPersonal?: boolean;
        Query: string;
    }
    /**
     * Query Suggestion Range
     */
    export interface QuerySuggestionRange {
        Length?: number;
        Start?: number;
    }
    /**
     * Query Suggestion Results
     */
    export interface QuerySuggestionResults {
        PeopleNames: String;
        PersonalResults: PersonalResultSuggestion;
        Queries: QuerySuggestionQuery;
    }
    /**
     * Recycle Bin Queue Information
     */
    export interface RecycleBinQueueInformation {
        IsAscending: boolean;
        ItemState: number;
        OrderBy: number;
        PagingInfo: string;
        RowLimit: number;
        ShowOnlyMyItems: boolean;
    }
    /**
     * Refinement Results
     */
    export interface RefinementResults {
        GroupTemplateId: string;
        ItemTemplateId: string;
        Property: KeyValue;
        Refiners: Refiner;
        ResultTitle: string;
        ResultTitleUrl: string;
    }
    /**
     * Refiner
     */
    export interface Refiner {
        Entries: RefinerEntry;
        Name: string;
    }
    /**
     * Refineer Entry
     */
    export interface RefinerEntry {
        RefinementCount?: number;
        RefinementName: string;
        RefinementToken: string;
        RefinementValue: string;
    }
    /**
     * Relevant Results
     */
    export interface RelevantResults {
        GroupTemplateId: string;
        ItemTemplateId: string;
        Properties: KeyValue;
        ResultTitle: string;
        ResultTitleUrl: string;
        RowCount: number;
        Table: SimpleDataTable;
        TotalRows: number;
        TotalRowsIncludingDuplicates: number;
    }
    /**
     * Reordering Rule
     */
    export interface ReorderingRule {
        Boost?: number;
        MatchType?: SPTypes.ReorderingRuleMatchType | number;
        MatchValue: string;
    }
    /**
     * Reordering Rules Creation Information
     */
    export interface ReorderingRulesCreationInformation {
        Boost?: number;
        MatchType?: SPTypes.ReorderingRuleMatchType | number;
        MatchValue: string;
    }
    /**
     * Related Item
     */
    export interface RelatedItem {
        IconUrl: string;
        ItemId: number;
        ListId: string;
        Title: string;
        Url: string;
        WebId: string;
    }
    /**
     * Render List Context Menu Data Parameters
     */
    export interface RenderListContextMenuDataParameters {
        CascDelWarnMessage: string;
        CustomAction: string;
        Field: string;
        ID: string;
        InplaceFullListSearch: string;
        InplaceSearchQuery: string;
        IsCSR: string;
        IsXslView: string;
        ItemId: string;
        ListViewPageUrl: string;
        OverrideScope: string;
        RootFolder: string;
        View: string;
        ViewCount: string;
    }
    /**
     * Render List Data Override Parameters
     */
    export interface RenderListDataOverrideParameters {
        CascDelWarnMessage: string;
        CustomAction: string;
        DrillDown: string;
        Field: string;
        FieldInternalName: string;
        Filter: string;
        FilterData: string;
        FilterData1: string;
        FilterData2: string;
        FilterData3: string;
        FilterData4: string;
        FilterData5: string;
        FilterData6: string;
        FilterData7: string;
        FilterData8: string;
        FilterData9: string;
        FilterData10: string;
        FilterField: string;
        FilterField1: string;
        FilterField2: string;
        FilterField3: string;
        FilterField4: string;
        FilterField5: string;
        FilterField6: string;
        FilterField7: string;
        FilterField8: string;
        FilterField9: string;
        FilterField10: string;
        FilterFields: string;
        FilterFields1: string;
        FilterFields2: string;
        FilterFields3: string;
        FilterFields4: string;
        FilterFields5: string;
        FilterFields6: string;
        FilterFields7: string;
        FilterFields8: string;
        FilterFields9: string;
        FilterFields10: string;
        FilterLookupId: string;
        FilterLookupId1: string;
        FilterLookupId2: string;
        FilterLookupId3: string;
        FilterLookupId4: string;
        FilterLookupId5: string;
        FilterLookupId6: string;
        FilterLookupId7: string;
        FilterLookupId8: string;
        FilterLookupId9: string;
        FilterLookupId10: string;
        FilterOp: string;
        FilterOp1: string;
        FilterOp2: string;
        FilterOp3: string;
        FilterOp4: string;
        FilterOp5: string;
        FilterOp6: string;
        FilterOp7: string;
        FilterOp8: string;
        FilterOp9: string;
        FilterOp10: string;
        FilterValue: string;
        FilterValue1: string;
        FilterValue2: string;
        FilterValue3: string;
        FilterValue4: string;
        FilterValue5: string;
        FilterValue6: string;
        FilterValue7: string;
        FilterValue8: string;
        FilterValue9: string;
        FilterValue10: string;
        FilterValues: string;
        FilterValues1: string;
        FilterValues2: string;
        FilterValues3: string;
        FilterValues4: string;
        FilterValues5: string;
        FilterValues6: string;
        FilterValues7: string;
        FilterValues8: string;
        FilterValues9: string;
        FilterValues10: string;
        GroupString: string;
        HasOverrideSelectCommand: string;
        ID: string;
        InplaceFullListSearch: string;
        InplaceSearchQuery: string;
        IsCSR: string;
        IsGroupRender: string;
        IsXslView: string;
        ListViewPageUrl: string;
        OverrideScope: string;
        OverrideSelectCommand: string;
        PageFirstRow: string;
        PageLastRow: string;
        RootFolder: string;
        SortDir: string;
        SortDir1: string;
        SortDir2: string;
        SortDir3: string;
        SortDir4: string;
        SortDir5: string;
        SortDir6: string;
        SortDir7: string;
        SortDir8: string;
        SortDir9: string;
        SortDir10: string;
        SortField: string;
        SortField1: string;
        SortField2: string;
        SortField3: string;
        SortField4: string;
        SortField5: string;
        SortField6: string;
        SortField7: string;
        SortField8: string;
        SortField9: string;
        SortField10: string;
        SortFields: string;
        SortFieldValues: string;
        View: string;
        ViewCount: string;
        ViewId: string;
        WebPartId: string;
    }
    /**
     * Render List Data Parameters
     */
    export interface RenderListDataParameters {
        AllowMultipleValueFilterForTaxonomyFields: boolean;
        DatesInUtc: boolean;
        ExpandGroups: boolean;
        FirstGroupOnly: boolean;
        FolderServerRelativeUrl: string;
        OverrideViewXml: string;
        Paging: string;
        RenderingOptions: number;
        ViewXml: string;
    }
    /**
     * Render List Filter Data Parameters
     */
    export interface RenderListFilterDataParameters {
        ExcludeFieldFilteringHtml: boolean;
        FieldInternalName: string;
        OverrideScope: string;
        ProcessQStringToCAML: string;
        ViewId: string;
    }
    /**
     * Resource Path
     */
    export interface ResourcePath {
        DecodedUrl: string;
    }
    /**
     * Role Definition Creation Information
     */
    export interface RoleDefinitionCreationInformation {
        BasePermissions: BasePermissions;
        Description: string;
        Name: string;
        Order: number;
    }
    /**
     * Search Request
     */
    export interface SearchRequest {
        BlockDedupeMode?: number;
        /** A Boolean value that specifies whether to perform result type processing for the query. */
        BypassResultTypes?: boolean;
        /** The type of the client that issued the query. */
        ClientType?: string;
        /** The managed properties that are used to determine how to collapse individual search  Results are collapsed into one or a specified number of results if they match any of the individual collapse specifications. Within a single collapse specification, results are collapsed if their properties match all individual properties in the collapse specification. */
        CollapseSpecification?: string;
        /** The locale ID (LCID) for the query (see Locale IDs Assigned by Microsoft). */
        Culture?: number;
        /** The preferred number of characters to display in the hit-highlighted summary generated for a search result. */
        DesiredSnippetLength?: number;
        /** A Boolean value that specifies whether the query uses the FAST Query Language (FQL). */
        EnableFql?: boolean;
        /** A Boolean value that specifies whether the result tables that are returned for the result block are mixed with the result tables that are returned for the original query. */
        EnableInterleaving?: boolean;
        /** A Boolean value that specifies whether the exact terms in the search query are used to find matches, or if nicknames are used also. */
        EnableNicknames?: boolean;
        /** A Boolean value that specifies whether the phonetic forms of the query terms are used to find matches. */
        EnablePhonetic?: boolean;
        /** A Boolean value that specifies whether the hit highlighted properties can be ordered. */
        EnableOrderingHitHighlightedProperty?: boolean;
        /** A Boolean value that specifies whether to enable query rules for the query. */
        EnableQueryRules?: boolean;
        /** A Boolean value that specifies whether to sort search  */
        EnableSorting?: boolean;
        /** A Boolean value that specifies whether stemming is enabled. */
        EnableStemming?: boolean;
        /** A Boolean value that specifies whether to return block rank log information in the BlockRankLog property of the interleaved result table. A block rank log contains the textual information on the block score and the documents that were de-duplicated. */
        GenerateBlockRankLog?: boolean;
        /** The additional query terms to append to the query. */
        HiddenConstraints?: string;
        /** The number of properties to show hit highlighting for in the search  */
        HitHighlightedMultivaluePropertyLimit?: number;
        /** The properties to highlight in the search result summary when the property value matches the search terms entered by the user. */
        HithighlightedProperties?: Results.String;
        /** The maximum number of characters to display in the hit-highlighted summary generated for a search result. */
        MaxSnippetLength?: number;
        QLSQuerySession?: string;
        /** The GUID for the user who submitted the search query. */
        PersonalizationData?: string;
        /** A Boolean value that specifies whether to return best bet results for the query. */
        ProcessBestBets?: boolean;
        /** A Boolean value that specifies whether to return personal favorites with the search  */
        ProcessPersonalFavorites?: boolean;
        /** Additional properties for the query. */
        Properties?: KeyValue;
        /** Custom tags that identify the query. You can specify multiple query tags, separated by semicolons. */
        QueryTag?: string;
        /** A string that contains the text that replaces the query text, as part of a query transform. */
        QueryTemplate?: string;
        /** The location of the queryparametertemplate.xml file. This file is used to enable anonymous users to make Search REST queries. */
        QueryTemplatePropertiesUrl?: string;
        /** A string that contains the text for the search query */
        Querytext: string;
        /** The ID of the ranking model to use for the query. */
        RankingModelId?: string;
        /** The set of refinement filters used when issuing a refinement query. For GET requests, the RefinementFilters parameter is specified as an FQL filter. For POST requests, the RefinementFilters parameter is specified as an array of FQL filters. */
        RefinementFilters?: Results.String;
        /** The set of refiners to return in a search result. */
        Refiners?: string;
        /** Special rules for reordering search  These rules can specify that documents matching certain conditions are ranked higher or lower in the  */
        ReorderingRules?: Array<ReorderingRulesCreationInformation>;
        /** The URL for the search results page. */
        ResultsUrl?: string;
        /** The maximum number of rows overall that are returned in the search  Compared to RowsPerPage, RowLimit is the maximum number of rows returned overall. */
        RowLimit?: number;
        /** The maximum number of rows to return per page. Compared to RowLimit, RowsPerPage refers to the maximum number of rows to return per page, and is used primarily when you want to implement paging for search  */
        RowsPerPage?: number;
        /** The managed properties to return in the search  To return a managed property, set the property's retrievable flag to true in the search schema. */
        SelectProperties?: Results.String;
        /** The list of properties by which the search results are ordered. */
        SortList?: Results.Object;
        /** The result source ID to use for executing the search query. */
        SourceId?: string;
        /** The first row that is included in the search results that are returned. You use this parameter when you want to implement paging for search  */
        StartRow?: number;
        /** The number of characters to display in the result summary for a search result. */
        SummaryLength?: number;
        /** The amount of time in milliseconds before the query request times out. The default value is 30000. */
        Timeout?: number;
        TimeZoneId?: number;
        TotalRowsExactMinimum?: number;
        /** A Boolean value that specifies whether duplicate items are removed from the  */
        TrimDuplicates?: boolean;
        TrimDuplicatesIncludeId?: boolean;
        /** The locale identifier (LCID) of the user export interface (see Locale IDs Assigned by Microsoft). */
        UIlanguage?: number;
        UseOLSQuery?: number;
    }
    /**
     * Search Result
     */
    export interface SearchResult {
        ElapsedTime?: number;
        PrimaryQueryResult: QueryResult;
        Properties: KeyValue;
        SecondaryQueryResults: QueryResult;
        SpellingSuggestion: string;
        TriggeredRules?: String;
    }
    /**
     * Search Suggestion
     */
    export interface SearchSuggestion {
        ClientType?: string;
        /** The locale ID (LCID) for the query (see Locale IDs Assigned by Microsoft). */
        Culture?: number;
        /** A Boolean value that specifies whether stemming is enabled. */
        EnableStemming?: boolean;
        /** A Boolean value that specifies whether to turn on query rules for this query. */
        EnableQueryRules?: boolean;
        /** A Boolean value that specifies whether to capitalize the first letter in each term in the returned query suggestions. */
        fCapitalizeFirstLetters?: boolean;
        /** A Boolean value that specifies whether to hit-highlight or format in bold the query suggestions. */
        fHitHighlighting?: boolean;
        /** A Boolean value that specifies whether to return query suggestions for prefix matches. */
        fPrefixMatchAllTerms?: boolean;
        /** A Boolean value that specifies whether to retrieve pre-query or post-query suggestions. */
        fPreQuerySuggestions?: boolean;
        /** The number of query suggestions to retrieve. Must be greater than zero (0). The default value is 5. */
        iNumberOfQuerySuggestions?: number;
        /** The number of personal results to retrieve. Must be greater than zero (0). The default value is 5. */
        iNumberOfResultSuggestions?: number;
        OLSQuerySession?: string;
        /** A string that contains the text for the search query */
        Querytext: string;
        /** A Boolean value that specifies whether to include people names in the returned query suggestions. */
        ShowPeopleNameSuggestions?: boolean;
        SourceId?: string;
        UseOLSQuery?: boolean;
    }
    /**
     * Shared User
     */
    export interface SharedWithUser {
        Email: string;
        Name: string;
    }
    /**
     * Shared User Collection
     */
    export interface SharedWithUserCollection {
        Items: SharedWithUser;
    }
    /**
     * Sharing Link Information
     */
    export interface SharingLinkInfo {
        Expiration: string;
        IsActive: boolean;
        LinkKind: number;
        Url: string;
    }
    /**
     * Simple Data Row
     */
    export interface SimpleDataRow {
        Cells: Results.DataRow;
    }
    /**
     * Simple Data Table
     */
    export interface SimpleDataTable {
        Rows: KeyValue;
    }
    /**
     * Social Actor
     */
    export interface SocialActor {
        AccountName: string;
        ActorType?: number;
        CanFollow?: boolean;
        ContentUri: string;
        EmailAddress: string;
        FollowedContentUri: string;
        Id: string;
        ImageUri: string;
        IsFollowed?: boolean;
        LibraryUri: string;
        Name: string;
        PersonSiteUri: string;
        Status?: number;
        StatusText: string;
        TagGuid?: string;
        Title: string;
        Uri: string;
    }
    /**
     * Social Attachment
     */
    export interface SocialAttachment {
        AttachmentKind?: number;
        ClickAction: SocialAttachmentAction;
        ContentUri: string;
        Description: string;
        Height?: number;
        Length?: number;
        Name: string;
        PreviewHeight?: number;
        PreviewUri: string;
        PreviewWidth?: number;
        Uri: string;
        Width?: number;
    }
    /**
     * Social Attachment Action
     */
    export interface SocialAttachmentAction {
        ActionKind?: number;
        ActionUri: string;
        Height?: number;
        Width?: number;
    }
    /**
     * Social Data Item
     */
    export interface SocialDataItem {
        AccountName?: string;
        ItemType?: string;
        Text: string;
        Uri: string;
    }
    /**
     * Social Data Overlay
     */
    export interface SocialDataOverlay {
        ActorIndexes?: Number;
        Index?: number;
        Length?: number;
        LinkUri: string;
        OverlayType?: number;
    }
    /**
     * Social Exception Details
     */
    export interface SocialExceptionDetails {
        InternalErrorCode?: number;
        InternalMessage: string;
        InternalStackTrace: string;
        InternalTypeName: string;
        Status?: number;
    }
    /**
     * Social Feed Options
     */
    export interface SocialFeedOptions {
        MaxThreadCount?: number;
        NewerThan?: string;
        OlderThan?: string;
        SortOrder?: number;
    }
    /**
     * Social Feed
     */
    export interface SocialFeed {
        Attributes?: number;
        NewestProcessed?: string;
        OldestProcessed?: string;
        Threads: SocialThread;
        UnreadMentionCount?: number;
    }
    /**
     * Social Feed Manager
     */
    export interface SocialFeedManager {
        Owner: SocialActor;
        PersonalSitePortalUri?: string;
    }
    /**
     * Social Following Manager
     */
    export interface SocialFollowingManager {
        FollowedDocumentsUri?: string;
        FollowedSitesUri: string;
    }
    /**
     * Social Link
     */
    export interface SocialLink {
        Text: string;
        Uri: string;
    }
    /**
     * Social Post
     */
    export interface SocialPost {
        Attachment: SocialAttachment;
        Attributes?: number;
        AuthorIndex?: number;
        CreatedTime?: string;
        Id?: string;
        LikerInfo?: SocialPostActorInfo;
        ModifiedTime?: string;
        Overlays: SocialDataOverlay;
        PostType?: number;
        PreferredImageUri: string;
        Source: SocialLink;
        Text: string;
    }
    /**
     * Social Post Actor Info
     */
    export interface SocialPostActorInfo {
        IncludesCurrentUser?: boolean;
        Indexes?: Number;
        TotalCount?: number;
    }
    /**
     * Social Post Creation Data
     */
    export interface SocialPostCreationData {
        Attachment?: SocialAttachment;
        ContentItems?: SocialDataItem;
        ContentText: string;
        DefinitionData?: SocialPostDefinitionData;
        SecurityUris?: String;
        Source?: SocialLink;
        UpdateStatusText?: boolean;
    }
    /**
     * Social Post Definition Data
     */
    export interface SocialPostDefinitionData {
        Items: SocialPostDefinitionDataItem;
        Name: string;
    }
    /**
     * Social Post Definition Data Item
     */
    export interface SocialPostDefinitionDataItem {
        AccountName: string;
        ItemType?: number;
        PlaceholderName: string;
        TagGuid?: string;
        Text: string;
        Uri: string;
    }
    /**
     * Social Post Reference
     */
    export interface SocialPostReference {
        Digest: SocialThread;
        Post: SocialPost;
        ThreadId: string;
        ThreadOwnerIndex?: number;
    }
    /**
     * Social Rest Following Manager
     */
    export interface SocialRestFollowingManager {
        FollowedDocumentsUri?: string;
        FollowedSitesUri: string;
        MyFollowedDocumentsUri: string;
        MyFollowedSitesUri: string;
        SocialActor: SocialActor;
    }
    /**
     * Social Rest Post Creation Data
     */
    export interface SocialRestPostCreationData {
        ID: string;
        creationData: SocialPostCreationData;
    }
    /**
     * Social Thread
     */
    export interface SocialThread {
        Actors: SocialActor;
        Attributes?: number;
        Id: string;
        OwnerIndex?: number;
        PermaLink: string;
        PostReference: SocialPostReference;
        Replies: SocialPost;
        RootPost: SocialPost;
        Status?: number;
        ThreadType?: number;
        TotalReplyCount?: number;
    }
    /**
     * Sort
     */
    export interface Sort {
        Direction?: number;
        Property: string;
    }
    /**
     * SP Invitation Creation Result
     */
    export interface SPInvitationCreationResult {
        Email: string;
        InvitationLink: string;
        Lcid: number;
    }
    /**
     * Special Term Result
     */
    export interface SpecialTermResult {
        Description: string;
        IsVisualBestBet?: boolean;
        PiSearchResultId: string;
        RenderTemplateId: string;
        Title: string;
        Url: string;
    }
    /**
     * Special Term Results
     */
    export interface SpecialTermResults {
        GroupTemplateId: string;
        ItemTemplateId: string;
        Properties: KeyValue;
        ResultTitle: string;
        ResultTitleUrl: string;
    }
    /**
     * String Collection
     */
    export interface StringCollection {
        Id4a81de82eeb94d6080ea5bf63e27023a?: string;
        Items: String;
    }
    /**
     * Subweb Query
     */
    export interface SubwebQuery {
        ConfigurationFilter: number;
        WebTemplateFilter: number;
    }
    /**
     * Tenant App Information
     */
    export interface TenantAppInformation {
        AppPrincipalId: string;
        AppWebFullUrl: string;
        CreationTime: string;
        IconAbsoluteUrl: string;
        IconFallbackAbsoluteUrl: string;
        Id: string;
        LaunchUrl: string;
        PackageFingerprint: any;
        ProductId: string;
        RemoteAppUrl: string;
        Status: number;
        Title: string;
    }
    /**
     * Time Zone Information
     */
    export interface TimeZoneInformation {
        Bias: number;
        DaylightBias: number;
        StandardBias: number;
    }
    /**
     * Upgrade Info
     */
    export interface UpgradeInfo {
        ErrorFile: string;
        Errors: number;
        LastUpdated: string;
        LogFile: string;
        RequestDate: string;
        RetryCount: number;
        StartTime: string;
        Status: number;
        UpgradeType: number;
        Warnings: number;
    }
    /**
     * Usage Information
     */
    export interface UsageInfo {
        Bandwidth: number;
        DiscussionStorage: number;
        Hits: number;
        Storage: number;
        StoragePercentageUsed: number;
        Visits: number;
    }
    /**
     * User Creation Information
     */
    export interface UserCreationInformation {
        Email?: string;
        LoginName: string;
        Title?: string;
    }
    /**
     * User Custom Action Information
     */
    export interface UserCustomActionCreationInformation {
        /** A value that specifies an implementation specific XML fragment that determines user export interface properties of the custom action. */
        CommandUIExtension?: string;
        /** The description of the custom action. */
        Description?: string;
        /** A value that specifies an implementation-specific value that determines the position of the custom action in the page. */
        Group?: string;
        /** The URL of the image associated with the custom action. */
        ImageUrl?: string;
        /** The location of the custom action. */
        Location?: string;
        /** The name of the custom action. */
        Name: string;
        /** The value that specifies the identifier of the object associated with the custom action. */
        RegistrationId?: string;
        /** The value that specifies the type of object associated with the custom action. Represents an SP.UserCustomActionRegistrationType value. */
        RegistrationType?: SPTypes.UserCustomActionRegistrationType | number;
        /** The value that specifies the permissions needed for the custom action. */
        Rights?: any;
        /** The value that specifies the ECMAScript to be executed when the custom action is performed. */
        ScriptBlock?: string;
        /** A value that specifies the URI of a file which contains the ECMAScript to execute on the page. */
        ScriptSrc?: string;
        /** The value that specifies an implementation-specific value that determines the order of the custom action that appears on the page. */
        Sequence?: number;
        /** The display title of the custom action. */
        Title?: string;
        /** The URL, URI, or ECMAScript (JScript, JavaScript) function associated with the action. */
        Url?: string;
    }
    /**
     * User Id Information
     */
    export interface UserIdInfo {
        NameId: string;
        NameIdIssuer: string;
    }
    /**
     * View Creation Information
     */
    export interface ViewCreationInformation {
        /** The relative url to the jslink */
        JSLink?: string;
        /** The new list view is a paged view. */
        Paged?: boolean;
        /** The new list view is a personal view. If the value is false, the new list view is a public view. */
        PersonalView?: boolean;
        /** The maximum number of list items that the new list view displays on a visual page of the list view. */
        RowLimit?: number;
        /** Option to set as default view. */
        SetAsDefaultView?: boolean;
        /** The name of the view. */
        Title: string;
        /** The query for the new list view. */
        ViewQuery?: string;
        /** The view type. */
        ViewTypeKind?: SPTypes.ViewType | number;
    }
    /**
     * Visualization
     */
    export interface Visualization {
        DefaultScreen: VisualizationStyleSet;
        DetailView: VisualizationStyleSet;
        MediumScreen: VisualizationStyleSet;
        SmallScreen: VisualizationStyleSet;
        VisualizationAppInfo: VisualizationAppInfo;
        VisualizationType: number;
    }
    /**
     * Visualization App Information
     */
    export interface VisualizationAppInfo {
        DesignUri: string;
        Id: string;
        RuntimeUri: string;
    }
    /**
     * Visualization Field
     */
    export interface VisualizationField {
        InternalName: string;
        Style: string;
    }
    /**
     * Visualization Style Set
     */
    export interface VisualizationStyleSet {
        AspectRatio: string;
        BackgroundColor: string;
        Fields: VisualizationField;
        MinHeight: string;
    }
    /**
     * Web Creation Information
     */
    export interface WebCreationInformation {
        /** The description of the new site. */
        Description?: string;
        /** The locale ID that specifies the language of the new site. */
        Language?: number;
        /** A value that specifies the title of the new site. */
        Title: string;
        /** The URL leaf name of the new site. The URL must not contain the following:
            The characters ~, ", #, %, &, *, :, <, >, ?, \, {, |, or }
            The string \x7f
            Consecutive . or / characters
            Starting ., /, or _ characters
            Ending . or / characters
        */
        Url: string;
        /** A value that specifies whether the new site will inherit permissions from its parent site. */
        UseSamePermissionsAsParentSite?: boolean;
        /** A value that specifies the name of the site template to be used for creating the new site. Use the GetAvailableWebTemplates method to get the names of available web templates on the site. */
        WebTemplate: string;
    }
    /**
     * Web Information Creation Information
     */
    export interface WebInfoCreationInformation {
        Description?: string;
        Language?: number;
        Title: string;
        Url: string;
        UseUniquePermissions?: boolean;
        WebTemplate: string;
    }
    /**
     * Web Request Information
     */
    export interface WebRequestInfo {
        Body: string;
        Headers: KeyValue;
        StatusCode: number;
    }
    /**
     * Web Response Information
     */
    export interface WebResponseInfo {
        Body: string;
        Headers: KeyValue;
        StatusCode: number;
    }
    /**
     * Xml Schema Field Creation Information
     */
    export interface XmlSchemaFieldCreationInformation {
        Options: number;
        SchemaXml: string;
    }
}
declare module "definitions/contentType/contentType" {
    import { IBase, IFieldResult, IFields, IFieldLink, IFieldLinks, IListResult, IResourcePath, IResults, IStringValue, IWebResult } from "definitions/index";
    /**
     * Content Type Methods
     */
    export interface IContentTypeMethods {
        /**
         * Deletes the content type.
         */
        delete(): IBase;
        /**
         * Updates it's properties.
         * @param data - The content type properties to update.
         */
        update(data: any): IBase;
    }
    /**
     * Content Type Properties
     */
    export interface IContentTypeProps {
        /** Gets or sets a description of the content type. */
        Description: string;
        /** Gets or sets a value that specifies the name of a custom display form template to use for list items that have been assigned the content type. */
        DisplayFormTemplateName: string;
        /** Gets or sets a value that specifies the URL of a custom display form to use for list items that have been assigned the content type. */
        DisplayFormUrl: string;
        /** Gets or sets a value that specifies the file path to the document template used for a new list item that has been assigned the content type. */
        DocumentTemplate: string;
        /** Gets a value that specifies the URL of the document template assigned to the content type. */
        DocumentTemplateUrl: string;
        /** Gets or sets a value that specifies the name of a custom edit form template to use for list items that have been assigned the content type. */
        EditFormTemplateName: string;
        /** Gets or sets a value that specifies the URL of a custom edit form to use for list items that have been assigned the content type. */
        EditFormUrl: string;
        /** Gets or sets a value that specifies the content type group for the content type. */
        Group: string;
        /** Gets or sets a value that specifies whether the content type is unavailable for creation or usage directly from a user export interface. */
        Hidden: boolean;
        /** Gets a value that specifies an identifier for the content type. */
        Id: IStringValue;
        /** Gets or sets the JSLink for the content type custom form template. The JSLink property is not supported on Survey or Events lists. A SharePoint calendar is an Events list. */
        JSlink: string;
        MobileDisplayFormUrl: string;
        MobileEditFormUrl: string;
        MobileNewFormUrl: string;
        /** Gets or sets a value that specifies the name of the content type. */
        Name: string;
        /** Gets or sets a value that specifies the name of the content type. */
        NewFormTemplateName: string;
        /** Gets or sets a value that specifies the name of the content type. */
        NewFormUrl: string;
        /** Gets or sets a value that specifies whether changes to the content type properties are denied. */
        Readonly: boolean;
        /** Gets a value that specifies the XML Schema representing the content type. */
        SchemaXml: string;
        /** Gets a non-localized version of the XML schema that defines the content type. */
        SchemaXmlWithResourceTokens: string;
        /** Gets a value that specifies a server-relative path to the content type scope of the content type. */
        Scope: string;
        /** Gets or sets whether the content type can be modified. */
        Sealed: boolean;
        /** A string representation of the value of the Id. */
        StringId: string;
    }
    /**
     * Content Type Query Properties
     */
    export interface IContentTypeQueryProps {
        DescriptionResource(): IBase;
        /**
         * Gets the column (also known as field) references in the content type.
         */
        FieldLinks(): IFieldLinks;
        /**
         * Gets the column (also known as field) reference in the content type.
         * @param guid - The guid of the field link.
         */
        FieldLinks(guid: string): IBase<IFieldLink>;
        /**
         * Gets the fields for the content type.
         */
        Fields(): IFields;
        /**
         * Gets the field for the content type.
         * @param internalNameOrTitle - The internal name or title of the field.
         */
        Fields(internalNameOrTitle: string): IFields;
        NameResource(): IBase;
        /** Gets the parent content type of the content type. */
        Parent(): IContentTypeMethods;
        /**
         * Gets a value that specifies the collection of workflow associations for the content type.
         */
        WorkflowAssociations(): IBase;
    }
    /**
     * Content Type Query Result
     */
    export interface IContentTypeQueryResult extends IContentTypeMethods, IContentTypeProps {
        DescriptionResource: IResourcePath;
        /**
         * Gets the column (also known as field) references in the content type.
         */
        FieldLinks: IResults<IFieldLink>;
        /**
         * Gets the fields for the content type.
         */
        Fields: IResults<IFieldResult>;
        NameResource: IResourcePath;
        /** Gets the parent content type of the content type. */
        Parent: IListResult | IWebResult;
        /**
         * Gets a value that specifies the collection of workflow associations for the content type.
         */
        WorkflowAssociations: IResults<any>;
    }
    /**
     * Content Type Result
     */
    export interface IContentTypeResult extends IContentTypeMethods, IContentTypeProps, IContentTypeQueryProps, IBase<IContentType, IContentTypeResult, IContentTypeQueryResult> {
    }
    /**
     * Content Type
     */
    export interface IContentType extends IContentTypeMethods, IContentTypeQueryProps, IBase<IContentType, IContentTypeResult, IContentTypeQueryResult> {
    }
}
declare module "definitions/contentType/contentTypes" {
    import { IBase, IBaseCollection, IContentType, IContentTypeCreationInformation, IContentTypeQueryResult, IContentTypeResult } from "definitions/index";
    /**
     * Methods
     */
    export interface IContentTypesMethods {
        /**
         * Adds a content type to the collection.
         * @param parameters - The content type creation information.
         */
        add(parameters: IContentTypeCreationInformation): IBase<IContentType, IContentTypeResult>;
        /**
         * Adds an existing content type to this collection.
         * @param contentTypeId - The content type id to add.
         */
        addAvailableContentType(contentTypeId: any): IBase<IContentType, IContentTypeResult>;
        /**
         * Gets a content type by id.
         * @param id - The content type id.
         */
        getById(id: any): IContentType & IBase<IContentType, IContentTypeResult, IContentTypeQueryResult>;
        /**
         * Method to get the next set of results.
         */
        next(): IBase<IContentTypes, IContentTypeResults>;
    }
    /**
     * Content Types
     */
    export interface IContentTypes extends IContentTypesMethods, IBaseCollection<IContentType, IContentTypeResult, IContentTypeQueryResult> {
    }
    /**
     * Content Type Results
     */
    export interface IContentTypeResults extends IContentTypesMethods, IBaseCollection<IContentTypeResult, IContentTypeResult, IContentTypeQueryResult> {
    }
}
declare module "definitions/contentType/index" {
    export * from "definitions/contentType/contentType";
    export * from "definitions/contentType/contentTypes";
}
declare module "definitions/customAction/userCustomAction" {
    import { IBase, IBasePermissions, IUserCustomActionMethods, SPTypes } from "definitions/index";
    /**
     * User Custom Action Methods
     */
    export interface IUserCustomActionMethods {
        /**
         * Deletes the user custom action.
         */
        delete(): IBase;
    }
    /**
     * User Custom Action Properties
     */
    export interface IUserCustomActionProps {
        /** Gets or sets a value that specifies an implementation specific XML fragment that determines user export interface properties of the custom action. */
        CommandUIExtension: string;
        /** Gets or sets the description of the custom action. */
        Description: string;
        /** Gets or sets a value that specifies an implementation-specific value that determines the position of the custom action in the page. */
        Group: string;
        /** Gets a value that specifies the identifier of the custom action. */
        Id: string;
        /** Gets or sets the URL of the image associated with the custom action. */
        ImageUrl: string;
        /** Gets or sets the location of the custom action. */
        Location: string;
        /** Gets or sets the name of the custom action. */
        Name: string;
        /** Gets or sets the value that specifies the identifier of the object associated with the custom action. */
        RegistrationId: string;
        /** Gets or sets the value that specifies the type of object associated with the custom action. */
        RegistrationType: SPTypes.UserCustomActionRegistrationType | number;
        /** Gets or sets the value that specifies the permissions needed for the custom action. */
        Rights: IBasePermissions;
        /** Gets a value that specifies the scope of the custom action. */
        Scope: number;
        /** Gets or sets the value that specifies the ECMAScript to be executed when the custom action is performed. */
        ScriptBlock: string;
        /** Gets or sets a value that specifies the URI of a file which contains the ECMAScript to execute on the page. */
        ScriptSrc: string;
        /** Gets or sets the value that specifies an implementation-specific value that determines the order of the custom action that appears on the page. */
        Sequence: number;
        /** Gets or sets the display title of the custom action. */
        Title: string;
        /** Gets or sets the URL, URI, or ECMAScript (JScript, JavaScript) function associated with the action. */
        Url: string;
        /** Gets a value that specifies an implementation specific version identifier. */
        VersionOfUserCustomAction: string;
    }
    /**
     * User Custom Action Query Properties
     */
    export interface IUserCustomActionQueryProps {
    }
    /**
     * User Custom Action Query Result
     */
    export interface IUserCustomActionQueryResult extends IUserCustomActionMethods, IUserCustomActionProps {
    }
    /**
     * User Custom Action Result
     */
    export interface IUserCustomActionResult extends IUserCustomActionMethods, IUserCustomActionProps, IUserCustomActionQueryProps, IBase<IUserCustomAction, IUserCustomActionResult, IUserCustomActionQueryResult> {
    }
    /**
     * User Custom Action
     */
    export interface IUserCustomAction extends IUserCustomActionMethods, IUserCustomActionQueryProps, IBase<IUserCustomAction, IUserCustomActionResult, IUserCustomActionQueryResult> {
    }
}
declare module "definitions/customAction/userCustomActions" {
    import { IBase, IBaseCollection, IUserCustomAction, IUserCustomActionCreationInformation, IUserCustomActionQueryResult, IUserCustomActionResult } from "definitions/index";
    /**
     * Methods
     */
    export interface IUserCustomActionsMethods {
        /**
         * Adds a custom actino to the user custom action collection.
         * @param parameters - The user custom action information.
         */
        add(parameters: IUserCustomActionCreationInformation): IBase<IUserCustomAction, IUserCustomActionResult>;
        /**
         * Deletes all custom actions in the collection.
         */
        clear(): IBase;
        /**
         * Returns the custom action with the specified identifier.
         * @param id - The ID of the user custom action to get.
         */
        getById(id: any): IUserCustomAction & IBase<IUserCustomAction, IUserCustomActionResult, IUserCustomActionQueryResult>;
        /**
         * Method to get the next set of results.
         */
        next(): IBase<IUserCustomActions, IUserCustomActionResults>;
    }
    /**
     * User Custom Actions
     */
    export interface IUserCustomActions extends IUserCustomActionsMethods, IBaseCollection<IUserCustomAction, IUserCustomActionResult, IUserCustomActionQueryResult> {
    }
    /**
     * User Custom Action Results
     */
    export interface IUserCustomActionResults extends IUserCustomActionsMethods, IBaseCollection<IUserCustomActionResult, IUserCustomActionResult, IUserCustomActionQueryResult> {
    }
}
declare module "definitions/customAction/index" {
    export * from "definitions/customAction/userCustomAction";
    export * from "definitions/customAction/userCustomActions";
}
declare module "definitions/eventReceiver/eventReceiver" {
    import { IBase, SPTypes } from "definitions/index";
    /**
     * Event Receiver Methods
     */
    export interface IEventReceiverMethods {
        /**
         * Deletes the event receiver.
         */
        delete(): IBase;
        /**
         * Updates it's properties.
         * @param data - The field properties to update.
         */
        update(data: any): IBase;
    }
    /**
     * Event Receiver Properties
     */
    export interface IEventReceiverProps {
        /** Specifies the type of event. */
        EventType: SPTypes.EventReceiverType | number;
        /** The strong name of the assembly that is used for receiving events. */
        ReceiverAssembly?: string;
        /** A string that represents the class that is used for receiving events. */
        ReceiverClass?: string;
        /** The unique identifier of the event receiver. */
        ReceiverId?: string;
        /** The name of the event receiver. */
        ReceiverName: string;
        /** The URL of a web service that is used for receiving events. */
        ReceiverUrl?: string;
        /** An integer that represents the relative sequence of the event. */
        SequenceNumber?: number;
        /** The execution synchronization of the event receiver. */
        Synchronization?: SPTypes.EventReceiverSynchronizationType | number;
    }
    /**
     * Event Receiver Query Properties
     */
    export interface IEventReceiverQueryProps {
    }
    /**
     * Event Receiver Query Result
     */
    export interface IEventReceiverQueryResult extends IEventReceiverMethods, IEventReceiverProps {
    }
    /**
     * Event Receiver Result
     */
    export interface IEventReceiverResult extends IEventReceiverMethods, IEventReceiverProps, IEventReceiverQueryProps, IBase<IEventReceiver, IEventReceiverResult, IEventReceiverQueryResult> {
    }
    /**
     * Event Receiver
     */
    export interface IEventReceiver extends IEventReceiverMethods, IEventReceiverQueryProps, IBase<IEventReceiver, IEventReceiverResult, IEventReceiverQueryResult> {
    }
}
declare module "definitions/eventReceiver/eventReceivers" {
    import { IBase, IBaseCollection, IEventReceiver, IEventReceiverDefinitionCreationInformation, IEventReceiverQueryResult, IEventReceiverResult } from "definitions/index";
    /**
     * Methods
     */
    export interface IEventReceiversMethods {
        /**
         * Adds an event receiver to the collection.
         * @param parameters - The event receiver definition creation information.
         */
        add(parameters: IEventReceiverDefinitionCreationInformation): IBase<IEventReceiver, IEventReceiverResult>;
        /**
         * Gets an event receiver in the collection.
         * @param id - The id of the event receiver.
         */
        getById(id: string): IEventReceiver & IBase<IEventReceiver, IEventReceiverResult, IEventReceiverQueryResult>;
        /**
         * Method to get the next set of results.
         */
        next(): IBase<IEventReceivers, IEventReceiverResults>;
    }
    /**
     * Event Receivers
     */
    export interface IEventReceivers extends IEventReceiversMethods, IBaseCollection<IEventReceiver, IEventReceiverResult, IEventReceiverQueryResult> {
    }
    /**
     * Event Receiver Results
     */
    export interface IEventReceiverResults extends IEventReceiversMethods, IBaseCollection<IEventReceiverResult, IEventReceiverResult, IEventReceiverQueryResult> {
    }
}
declare module "definitions/eventReceiver/index" {
    export * from "definitions/eventReceiver/eventReceiver";
    export * from "definitions/eventReceiver/eventReceivers";
}
declare module "definitions/field/field" {
    import { IBase, IResourcePath, SPTypes } from "definitions/index";
    /**
     * Field Methods
     */
    export interface IFieldMethods {
        /**
         * Deletes the field.
         */
        delete(): IBase;
        /**
         * Sets the value of the ShowInDisplayForm property for this field.
         * @param showInForm - Flag to show the field in the display form.
         */
        setShowInDisplayForm(showInForm: any): IBase;
        /**
         * Sets the value of the ShowInEditForm property for this field.
         * @param showInForm - Flag to show the field in the display form.
         */
        setShowInEditForm(showInForm: any): IBase;
        /**
         * Sets the value of the ShowInNewForm property for this field.
         * @param showInForm - Flag to show the field in the display form.
         */
        setShowInNewForm(showInForm: any): IBase;
        /**
         * Updates it's properties.
         * @param data - The field properties to update.
         */
        update(data: any): IBase;
    }
    /**
     * Field Properties
     */
    export interface IFieldProps {
        AutoIndexed: boolean;
        /** Gets a value that specifies whether the field can be deleted. */
        CanBeDeleted: boolean;
        /** Gets or sets a value that specifies the default value for the field. */
        DefaultValue: string;
        /** Gets or sets a value that specifies the description of the field. */
        Description: string;
        /** Gets or sets a value that specifies the reading order of the field. */
        Direction: string;
        /** Gets or sets a value that specifies whether to require unique field values in a list or library column. */
        EnforceUniqueValues: boolean;
        /** Gets the name of the entity property for the list item entity that uses this field. */
        EntityPropertyName: string;
        /** Gets or sets a value that specifies the type of the field. Represents a FieldType value. See FieldType in the .NET client object model reference for a list of field type values. */
        FieldTypeKind: SPTypes.FieldType | number;
        /** Gets a value that specifies whether list items in the list can be filtered by the field value. */
        Filterable: boolean;
        /** Gets a Boolean value that indicates whether the field derives from a base field type. */
        FromBaseType: boolean;
        /** Gets or sets a value that specifies the field group. */
        Group: string;
        /** Gets or sets a value that specifies whether the field is hidden in list views and list forms. */
        Hidden: boolean;
        /** Gets a value that specifies the field identifier. */
        Id: string;
        /** Gets or sets a Boolean value that specifies whether the field is indexed. */
        Indexed: boolean;
        /** Gets a value that specifies the field internal name. */
        InternalName: string;
        /** Gets or sets the name of an external JS file containing any client rendering logic for fields of this type. */
        JSLink: string;
        /** Gets or sets a value that specifies whether the value of the field is read-only. */
        ReadOnlyField: boolean;
        /** Gets or sets a value that specifies whether the field requires a value. */
        Required: boolean;
        /** Gets or sets a value that specifies the XML schema that defines the field. */
        Schemaxml: string;
        /** Gets a value that specifies the server-relative URL of the list or the site to which the field belongs. */
        Scope: string;
        /** Gets a value that specifies whether properties on the field cannot be changed and whether the field cannot be deleted. */
        Sealed: boolean;
        /** Gets a value that specifies whether list items in the list can be sorted by the field value. */
        Sortable: boolean;
        /** Gets or sets a value that specifies a customizable identifier of the field. */
        StaticName: string;
        /** Gets or sets value that specifies the display name of the field. */
        Title: string;
        /** Gets or sets a value that specifies the type of the field. */
        TypeAsString: string;
        /** Gets a value that specifies the display name for the type of the field. */
        TypeDisplayName: string;
        /** Gets a value that specifies the description for the type of the field. */
        TypeShortDescription: string;
        /** Gets or sets a value that specifies the data validation criteria for the value of the field. */
        ValidationFormula: string;
        /** Gets or sets a value that specifies the error message returned when data validation fails for the field. */
        ValidationMessage: string;
    }
    /**
     * Field Query Properties
     */
    export interface IFieldQueryProps {
        DescriptionResource(): IBase<IResourcePath>;
        TitleResource(): IBase<IResourcePath>;
    }
    /**
     * Field Query Result
     */
    export interface IFieldQueryResult extends IFieldMethods, IFieldProps {
        DescriptionResource: IResourcePath;
        TitleResource: IResourcePath;
    }
    /**
     * Field Result
     */
    export interface IFieldResult extends IFieldMethods, IFieldProps, IFieldQueryProps, IBase<IField, IFieldResult, IFieldQueryResult> {
    }
    /**
     * Field
     */
    export interface IField extends IFieldMethods, IFieldQueryProps, IBase<IField, IFieldResult, IFieldQueryResult> {
    }
    /**
     * Base Choice Field
     */
    export interface IFieldBaseChoice extends IFieldResult {
        /** A value that specifies values that are available for selection in the field. */
        Choices: {
            results: Array<string>;
        };
        /** A value that specifies whether the field can accept values other than those specified by the Choices property. */
        FillInChoice: boolean;
        /** A value that specifies the internal values corresponding to Choices. */
        Mappings: string;
    }
    /**
     * Calculated Field
     */
    export interface IFieldCalculated extends IFieldResult {
        /** The date and time format that is displayed in the field. */
        DateFormat: SPTypes.DateFormat | number;
        /** A value that specifies the formula for the field. */
        Formula: string;
        /** A value that specifies the output format for the field. */
        OutputType: SPTypes.FieldType | number;
    }
    /**
     * Choice Field
     */
    export interface IFieldChoice extends IFieldBaseChoice {
        /** Determines whether to display the choice field as option buttons (also known as "radio buttons") or as a drop-down list. */
        EditFormat: SPTypes.ChoiceFormatType | number;
    }
    /**
     * Computed Field
     */
    export interface IFieldComputed extends IFieldResult {
        /** A value that specifies whether a lookup field can reference the field. */
        EnableLookup: boolean;
    }
    /**
     * Currency Field
     */
    export interface IFieldCurrency extends IFieldNumber {
        /** A value that specifies the language code identifier (LCID) used to format the value of the field. */
        CurrencyLocaleId: SPTypes.LocaleLCIDType | number;
    }
    /**
     * Date/Time Field
     */
    export interface IFieldDateTime extends IFieldResult {
        /** A value that specifies the calendar type of the field. */
        DateTimeCalendarType: SPTypes.CalendarType | number;
        /** The format of the date and time that is displayed in the field. */
        DisplayFormat: SPTypes.DateFormat | number;
        /** Represents a date and time friendly format. */
        FriendlyDisplayFormat: SPTypes.FriendlyDateFormat | number;
    }
    /**
     * Lookup Field
     */
    export interface IFieldLookup extends IFieldResult {
        /** A value that specifies whether the lookup field allows multiple values. You cannot set a deletion constraint on a lookup field that allows multiple values. */
        AllowMultipleValues: boolean;
        /** Flag to determine if this is a dependent lookup field. */
        IsDependentLookup: boolean;
        /** A value that specifies whether this lookup field is returned by SP.List.getRelatedFields from the list being looked up to. Always returns false if the field represents a secondary column in a multiple-column lookup. Secondary columns are not discoverable from the source list. */
        IsRelationship: boolean;
        /** A value that specifies the internal field name of the field used as the lookup values. */
        LookupField: string;
        /** A value that specifies the list identifier of the list that contains the field to use as the lookup values. */
        LookupList: string;
        /** The ID of the Web site that contains the list that is the source of this field's value. */
        LookupWebId: string;
        /** A value that specifies the primary lookup field identifier if this is a dependent lookup field. Otherwise, it is an empty string. */
        PrimaryFieldId: string;
        /** A value that specifies the delete behavior of the lookup field. */
        RelationshipDeleteBehavior: SPTypes.RelationshipDeleteBehaviorType | number;
    }
    /**
     * Managed Metadata Field
     */
    export interface IFieldManagedMetadata extends IFieldLookup {
        /** Flag to determine if the anchor is valid. */
        IsAnchorValid: boolean;
        /** Flag to determine if this is a keyword. */
        IsKeyword: boolean;
        /** Flag to determine if the path is rendered. */
        IsPathRendered: boolean;
        /** Flag to determine if the term set is valid. */
        IsTermSetValid: boolean;
        /** A valid that specifies if the term is pinned to filters pane. */
        PinnedToFiltersPane: boolean;
        /** A value that specifies if the term is shown in the filters pane. */
        ShowInFiltersPane: number;
        /** The term store id. */
        SspId: string;
        /** The term set id. */
        TermSetId: string;
        /** Flag to determine if the field was created by the user. */
        UserCreated: boolean;
    }
    /**
     * Multi-Choice Field
     */
    export interface IFieldMultiChoice extends IFieldBaseChoice {
    }
    /**
     * Note Field
     */
    export interface IFieldNote extends IFieldResult {
        /** A value that specifies whether a hyperlink is allowed as a value of the field. */
        AllowHyperlink: boolean;
        /** A value that specifies whether all changes to the value of the field are displayed in list forms. */
        AppendOnly: boolean;
        /** A value that specifies the number of lines of text to display for the field. */
        NumberOfLines: number;
        /** A value that specifies whether the field supports a subset of rich formatting. */
        RestrictedMode: boolean;
        /** A value that specifies whether the field supports rich formatting. */
        RichText: boolean;
        /** A value that specifies whether an implementation specific mechanism for linking wiki pages is supported. */
        WikiLinking: boolean;
    }
    /**
     * Number Field
     */
    export interface IFieldNumber extends IFieldResult {
        /** A value that specifies the minimum allowed value for the field. */
        MaximumValue: number;
        /** A value that specifies the minimum allowed value for the field. */
        MinimumValue: number;
    }
    /**
     * Rating Scale Field
     */
    export interface IFieldRatingScale extends IFieldBaseChoice {
        /** A value that specifies the end number for the rating scale. */
        GridEndNumber: number;
        /** A value that specifies the display text corresponding to the choice in the rating scale that indicates the non-applicable option. */
        GridNAOptionText: string;
        /** A value that specifies the start number for the rating scale. */
        GridStartNumber: number;
        /** A value that specifies the display text corresponding to the average of the rating scale. */
        GridTextRangeAverage: string;
        /** A value that specifies the display text corresponding to the maximum of the rating scale. */
        GridTextRangeHigh: string;
        /** A value that specifies the display text corresponding to the minimum of the rating scale. */
        GridTextRangeLow: string;
        /** A value that specifies the number of options in the rating scale. */
        RangeCount: number;
    }
    /**
     * Text Field
     */
    export interface IFieldText extends IFieldResult {
        /** A value that specifies the maximum number of characters allowed in the value of the field. */
        MaxLength: number;
    }
    /**
     * URL Field
     */
    export interface IFieldUrl extends IFieldResult {
        /** A value that specifies the display format for the value in the field. */
        DisplayFormat: SPTypes.UrlFormatType | number;
    }
    /**
     * User Field
     */
    export interface IFieldUser extends IFieldLookup {
        /** A value that specifies whether to display the name of the user in a survey list. */
        AllowDisplay: boolean;
        /** A value that specifies whether presence is enabled on the field. */
        Presence: boolean;
        /** A value that specifies the identifier of the SharePoint group whose members can be selected as values of the field. */
        SelectionGroup: number;
        /** A value that specifies whether users and groups or only users can be selected. */
        SelectionMode: SPTypes.FieldUserSelectionType | number;
    }
}
declare module "definitions/field/fieldLinks" {
    import { IBase, IBaseCollection, IFieldLink } from "definitions/index";
    /**
     * Field Links
     */
    export interface IFieldLinks extends IBaseCollection<IFieldLink, IFieldLink, IFieldLink> {
        /**
         * Adds a content type to the collection.
         * @param data - The field link properties.
         */
        add(data: any): IBase<IFieldLink>;
        /**
         * Gets the field link by its id.
         * @param id - The id of the field.
         */
        getById(id: any): IFieldLink & IBase<IFieldLink>;
        /**
         * Method to get the next set of results.
         */
        next(): IBase<IFieldLinks>;
    }
}
declare module "definitions/field/fields" {
    import { IBase, IBaseCollection, IField, IFieldCreationInformation, IFieldQueryResult, IFieldResult } from "definitions/index";
    /**
     * Methods
     */
    export interface IFieldsMethods {
        /**
         * Adds a field to the field collection.
         * @param parameters - The field properties.
         */
        add(parameters: IField): IBase<IField, IFieldResult>;
        /**
         * Adds a field to the field collection.
         * @param parameters - The field creation information.
         */
        addField(parameters: IFieldCreationInformation): IBase<IField, IFieldResult>;
        /**
         * Adds a secondary lookup field that depends on a primary lookup field for its relationship to the list where it gets its information.
         * @param displayName - The title of the new field.
         * @param primaryLookupField - The ID of the lookup field to associate this dependent lookup field with.
         * @param showField - The name of the field from the target list to include data from.
         */
        addDependentLookupField(displayName: any, primaryLookupField: any, showField: any): IBase<IField, IFieldResult>;
        /**
         * Creates a field based on the specified schema, Boolean value, and field options.
         * Set the option to addFieldInternalNameHint - 8 to ensure the internal name in the schema xml is not altered.
         * @param schemaXml - The schema XML definition of the field.
         */
        createFieldAsXml(schemaXml: any): IBase<IField, IFieldResult>;
        /**
         * Gets the field with the specified ID.
         * @param id - The field id.
         */
        getById(id: any): IField & IBase<IField, IFieldResult, IFieldQueryResult>;
        /**
         * Returns the first Field object with the specified internal name or title from the collection.
         * @param internalNameOrTitle - The internal name or title of the field.
         */
        getByInternalNameOrTitle(internalNameOrTitle: any): IField & IBase<IField, IFieldResult, IFieldQueryResult>;
        /**
         * Returns the first field object in the collection based on the title of the specified field.
         * @param title - The title of the field.
         */
        getByTitle(title: any): IField & IBase<IField, IFieldResult, IFieldQueryResult>;
        /**
         * Method to get the next set of results.
         */
        next(): IBase<IFields, IFieldResults>;
    }
    /**
     * Fields
     */
    export interface IFields extends IFieldsMethods, IBaseCollection<IField, IFieldResult, IFieldQueryResult> {
    }
    /**
     * Field Results
     */
    export interface IFieldResults extends IFieldsMethods, IBaseCollection<IFieldResult, IFieldResult, IFieldQueryResult> {
    }
}
declare module "definitions/field/index" {
    export * from "definitions/field/field";
    export * from "definitions/field/fieldLinks";
    export * from "definitions/field/fields";
}
declare module "definitions/file/file" {
    import { IBase, IFileVersionResult, IFileVersions, IInformationRightsManagementSettings, IListItemResult, IPropertyValues, IResourcePath, IResults, IUser, IUserResult, SPTypes } from "definitions/index";
    /**
     * File Methods
     */
    export interface IFileMethods {
        /**
         * Approves the file submitted for content approval with the specified comment.
         * @param comment - The comment for the approval. It's length must be <= 1023.
         */
        approve(comment: any): IBase;
        /**
         * Stops the chunk upload session without saving the uploaded data. If the file doesn’t already exist in the library, the partially uploaded file will be deleted. Use this in response to user action (as in a request to cancel an upload) or an error or exception.
         * Use the uploadId value that was passed to the StartUpload method that started the upload session.
         * This method is currently available only on Office 365.
         * @param uploadId - The unique id of the upload session.
         */
        cancelupload(uploadId: any): IBase;
        /**
         * Checks the file in to a document library based on the check-in type.
         * @param comment - The comment for the check-in. Its length must be <= 1023.
         * @param checkInType - The check-in type: MinorCheckIn - 0; MajorCheckIn - 1; OverwriteCheckIn - 2
         */
        checkin(comment: any, checkInType: any): IBase;
        /**
         * Checks out the file from a document library based on the check-out type.
         */
        checkout(): IBase;
        /**
         * Returns the file content.
         */
        content(): IBase;
        /**
         * Continues the chunk upload session with an additional fragment. The current file content is not changed.
         * Use the uploadId value that was passed to the StartUpload method that started the upload session.
         * This method is currently available only on Office 365.
         * @param uploadId - The unique id of the upload session.
         * @param fileOffset - The size of the offset into the file where the fragment starts.
         */
        continueUpload(uploadId: any, fileOffset: any): IBase;
        /**
         * Copies the file to the destination URL.
         * @param strNewUrl - The absolute URL or server relative URL of the destination file path to copy to.
         * @param bOverWrite - True to overwrite a file with the same name in the location.
         */
        copyTo(strNewUrl: any, bOverWrite: any): IBase;
        /**
         * Deletes the File.
         */
        delete(): IBase;
        /**
         * Denies approval for a file that was submitted for content approval.
         * Only documents in lists that are enabled for content approval can be denied.
         * @param comment - The comment for the denial. It's length must be <= 1023.
         */
        deny(comment: any): IBase;
        /**
         * Uploads the last file fragment and commits the file. The current file content is changed when this method completes.
         * Use the uploadId value that was passed to the StartUpload method that started the upload session.
         * This method is currently available only on Office 365.
         * @param uploadId - The unique id of the upload session.
         * @param fileOffset - The size of the offset into the file where the fragment starts.
         */
        finishUpload(uploadId: any, fileOffset: any): IBase;
        /**
         * Specifies the control set used to access, modify, or add Web Parts associated with this Web Part Page and view.
         * An exception is thrown if the file is not an ASPX page.
         * @param scope - The webpart personalization scope: User - 0; Shared - 1
         */
        getlimitedwebpartmanager(scope: any): IBase;
        /**
         * Moves the file to the specified destination URL.
         * @param newUrl - The absolute url or server relative url of the destination file path to move to.
         * @param flags - The move operation: Overwrite - 1; AllowBrokenThickets (Move even if supporting files are separated from the file) - 8;
         */
        moveTo(newUrl: any, flags: any): IBase;
        /**
         * Opens the file as a stream.
         */
        openBinaryStream(): IBase;
        /**
         * Submits the file for content approval with the specified comment.
         * @param comment - The comment for the published file. It's length must be <= 1023.
         */
        publish(comment: any): IBase;
        /**
         * Moves the file to the Recycle Bin and returns the identifier of the new Recycle Bin item.
         */
        recycle(): IBase;
        /**
         * Saves the file as a stream.
         * @param stream - The binary stream of the file.
         */
        saveBinaryStream(stream: any): IBase;
        /**
         * Starts a new chunk upload session and uploads the first fragment. The current file content is not changed when this method completes.
         * The method is idempotent (and therefore does not change the result) as long as you use the same values for uploadId and stream.
         * The upload session ends either when you use the CancelUpload method or when you successfully complete the upload session by passing the rest of the file contents through the ContinueUpload and FinishUpload methods.
         * @param uploadId - The unique id of the upload session.
         */
        startUpload(uploadId: any): IBase;
        /**
         * Reverts an existing checkout for the file.
         */
        undoCheckOut(): IBase;
        /**
         * Removes the file from content approval or unpublish a major version.
         * @param comment - The comment for the unpublish operation. Its length must be <= 1023.
         */
        unpublish(comment: any): IBase;
        /**
         * Updates it's properties.
         * @param data - The file properties to update.
         */
        update(data: any): IBase;
    }
    /**
     * File Properties
     */
    export interface IFileProps {
        /** Gets a value that returns the comment used when a document is checked in to a document library. */
        CheckInComment: string;
        /** Gets a value that indicates how the file is checked out of a document library. Represents an SP.CheckOutType value: . The checkout state of a file is independent of its locked state. */
        CheckOutType: SPTypes.CheckOutType | number;
        /** Returns internal version of content, used to validate document equality for read purposes. */
        ContentTag: string;
        /** Gets a value that specifies the customization status of the file. Represents an SP.CustomizedPageStatus value: None = 0; Uncustomized = 1; Customized = 2. */
        CustomizedPageStatus: number;
        /** Gets a value that specifies the ETag value. */
        ETag: string;
        /** Gets a value that specifies whether the file exists. */
        Exists: boolean;
        /** Gets the size of the file in bytes, excluding the size of any Web Parts that are used in the file. */
        Length: number;
        /** Gets a value that specifies the publishing level of the file. Represents an SP.FileLevel value: Published = 1; Draft = 2; Checkout = 255. */
        Level: number;
        LinkingUrl: string;
        /** Gets a value that specifies the major version of the file. */
        MajorVersion: number;
        /** Gets a value that specifies the minor version of the file. */
        MinorVersion: number;
        /** Gets the name of the file including the extension. */
        Name: string;
        ServerRelativePath: IResourcePath;
        /** Gets the relative URL of the file based on the URL for the server. */
        ServerRelativeUrl: string;
        SiteId: string;
        /** Gets a value that specifies when the file was created. */
        TimeCreated: string;
        /** Gets a value that specifies when the file was last modified. */
        TimeLastModified: string;
        /** Gets a value that specifies the display name of the file. */
        Title: string;
        /** Gets a value that specifies the implementation-specific version identifier of the file. */
        UiVersion: number;
        /** Gets a value that specifies the implementation-specific version identifier of the file. */
        UiVersionLabel: string;
        UniqueId: string;
        WebId: string;
    }
    /**
     * File Query Properties
     */
    export interface IFileQueryProps {
        /**
         * Gets a value that specifies the user who added the file.
         */
        Author(): IUser;
        /**
         * Gets a value that returns the user who has checked out the file.
         */
        CheckedOutByUser(): IUser;
        EffectiveInformationRightsManagementSettings(): IBase;
        InformationRightsManagementSettings(): IBase;
        /**
         * Gets a value that specifies the list item field values for the list item corresponding to the file.
         */
        ListItemAllFields(): IBase;
        /**
         * Gets a value that returns the user that owns the current lock on the file.
         */
        LockedByUser(): IUser;
        /**
         * Gets a value that returns the user who last modified the file.
         */
        ModifiedBy(): IUser;
        /**
         * Property Bag
         */
        Properties(): IBase<IPropertyValues>;
        VersionEvents(): IBase;
        /**
         * Gets a value that returns a collection of file version objects that represent the versions of the file.
         */
        Versions(): IBase<IFileVersions>;
    }
    /**
     * File Query Result
     */
    export interface IFileQueryResult extends IFileMethods, IFileProps {
        /**
         * Gets a value that specifies the user who added the file.
         */
        Author: IUserResult;
        /**
         * Gets a value that returns the user who has checked out the file.
         */
        CheckedOutByUser: IUserResult;
        EffectiveInformationRightsManagementSettings: IBase;
        InformationRightsManagementSettings: IInformationRightsManagementSettings;
        /**
         * Gets a value that specifies the list item field values for the list item corresponding to the file.
         */
        ListItemAllFields: IListItemResult;
        /**
         * Gets a value that returns the user that owns the current lock on the file.
         */
        LockedByUser: IUserResult;
        /**
         * Gets a value that returns the user who last modified the file.
         */
        ModifiedBy: IUserResult;
        /**
         * Property Bag
         */
        Properties: IPropertyValues;
        VersionEvents: IResults<any>;
        /**
         * Gets a value that returns a collection of file version objects that represent the versions of the file.
         */
        Versions: IResults<IFileVersionResult>;
    }
    /**
     * File Result
     */
    export interface IFileResult extends IFileMethods, IFileProps, IFileQueryProps, IBase<IFile, IFileResult, IFileQueryResult> {
    }
    /**
     * File
     */
    export interface IFile extends IFileMethods, IFileQueryProps, IBase<IFile, IFileResult, IFileQueryResult> {
    }
}
declare module "definitions/file/files" {
    import { IBase, IBaseCollection, IFile, IFileQueryResult, IFileResult, SPTypes } from "definitions/index";
    /**
     * Methods
     */
    export interface IFilesMethods {
        /**
         * Methods
         */
        /**
         * Adds a file to this collection.
         * @param overwrite - true to overwrite the file if it already exists; otherwise false.
         * @param url - The folder-relative URL of the file.
         * @param content - The contents of the file. The maximum size of a binary file that you can add by using the REST API is 2 GB.
         */
        add(overwrite: any, url: any, content: any): IBase<IFile, IFileResult>;
        /**
         * Adds a ghosted file to an existing list or document library.
         * @param urlOfFile - The server-relative URL where you want to save the file.
         * @param templateFileType - The SP.TemplateFileType to use to create the file.
         */
        addTemplateFile(urlOfFile: any, templateFileType: SPTypes.FileTemplateType): IBase<IFile, IFileResult>;
        /**
         * Get the file at the specified URL.
         * @param serverRelativeUrl - The name or server relative url of the file.
         */
        getByUrl(serverRelativeUrl: any): IFile & IBase<IFile, IFileResult, IFileQueryResult>;
        /**
         * Method to get the next set of results.
         */
        next(): IBase<IFiles>;
    }
    /**
     * Files
     */
    export interface IFiles extends IFilesMethods, IBaseCollection<IFile, IFileResult, IFileQueryResult> {
    }
    /**
     * File Results
     */
    export interface IFileResults extends IFilesMethods, IBaseCollection<IFileResult, IFileResult, IFileQueryResult> {
    }
}
declare module "definitions/file/fileVersion" {
    import { IBase, IUser, IUserResult } from "definitions/index";
    /**
     * File Version Methods
     */
    export interface IFileVersionMethods {
        /**
         * Deletes the file version.
         */
        delete(): any;
    }
    /**
     * File Version Properties
     */
    export interface IFileVersionProps {
        /** Gets a value that specifies the check-in comment. */
        CheckInComment: string;
        /** Gets a value that specifies the creation date and time for the file version. */
        Created: string;
        /** Gets the internal identifier for the file version. */
        ID: number;
        /** Gets a value that specifies whether the file version is the current version. */
        IsCurrentVersion: string;
        /**  */
        Size: number;
        /** Gets a value that specifies the relative URL of the file version based on the URL for the site or subsite. */
        Url: string;
        /** Gets a value that specifies the implementation specific identifier of the file. Uses the majorVersionNumber.minorVersionNumber format, for example: 1.2. */
        VersionLabel: string;
    }
    /**
     * File Version Query Properties
     */
    export interface IFileVersionQueryProps {
        /**
         * Gets a value that specifies the user that represents the creator of the file version.
         */
        CreatedBy(): IUser;
    }
    /**
     * File Version Query Result
     */
    export interface IFileVersionQueryResult extends IFileVersionMethods, IFileVersionProps {
        /**
         * A value that specifies the user that represents the creator of the file version.
         */
        CreatedBy: IUserResult;
    }
    /**
     * File Version Result
     */
    export interface IFileVersionResult extends IFileVersionMethods, IFileVersionProps, IFileVersionQueryProps, IBase<IFileVersion, IFileVersionResult, IFileVersionQueryResult> {
    }
    /**
     * File Version
     */
    export interface IFileVersion extends IFileVersionMethods, IFileVersionQueryProps, IBase<IFileVersion, IFileVersionResult, IFileVersionQueryResult> {
    }
}
declare module "definitions/file/fileVersions" {
    import { IBase, IBaseCollection, IFileVersion, IFileVersionQueryResult, IFileVersionResult } from "definitions/index";
    /**
     * File Versions
     */
    export interface IFileVersions extends IBaseCollection<IFileVersion, IFileVersionResult, IFileVersionQueryResult> {
        /**
         * Method to get the next set of results.
         */
        next(): IBase<IFileVersions>;
    }
}
declare module "definitions/file/folder" {
    import { IBase, IFile, IFileResults, IFiles, IFolderResults, IFolders, IListItem, IListItemResults, IPropertyValues, IResourcePath, IStringValue } from "definitions/index";
    /**
     * Folder Methods
     */
    export interface IFolderMethods {
        /**
         * Deletes the folder.
         */
        delete(): IBase;
        /**
         * Get the folder at the specified URL.
         * @param serverRelativeUrl - The server-relative URL of the folder.
         */
        getByUrl(serverRelativeUrl: any): IFolder & IBase<IFolder, IFolderResult, IFolderQueryResult>;
        /**
         * Moves the list folder to the Recycle Bin and returns the identifier of the new Recycle Bin item.
         */
        recycle(): IBase;
        /**
         * Updates it's properties.
         * @param data - The file properties to update.
         */
        update(data: any): IBase;
    }
    /**
     * Folder Properties
     */
    export interface IFolderProps {
        /** Specifies the sequence in which content types are displayed. */
        ContentTypeOrder: IStringValue;
        /** Gets a value that specifies whether the file exists. */
        Exists: boolean;
        /** Gets a value that specifies the count of items in the list folder. */
        ItemCount: number;
        /** Indicates whether the folder is enabled for WOPI default action. */
        IsWOPIEnabled: boolean;
        /** Gets the name of the folder. */
        Name: string;
        ServerRelativePath: IResourcePath;
        /** Gets the server-relative URL of the list folder. */
        ServerRelativeUrl: string;
        TimeCreated: string;
        TimeLastModified: string;
        /** Gets or sets a value that specifies the content type order. */
        UniqueContentTypeOrder: IStringValue;
        UniqueId: string;
        /** Gets or sets a value that specifies folder-relative URL for the list folder welcome page. */
        WelcomePage: string;
    }
    /**
     * Folder Query Properties
     */
    export interface IFolderQueryProps {
        /**
         * Gets the files contained in the folder.
         */
        Files(): IFiles;
        /**
         * Gets the file contained in the folder.
         * @param url - The url of the file within the current folder.
         */
        Files(url: string): IFile;
        /**
         * Gets the folders contained in the list folder.
         */
        Folders(): IFolders;
        /**
         * Gets the folder contained in the list folder.
         * @param url - The url of the sub-folder within the current folder.
         */
        Folders(url: string): IFolderMethods;
        /**
         * Specifies the list item field (2) values for the list item corresponding to the file.
         */
        ListItemAllFields(): IBase<IListItem>;
        /**
         * Gets the parent list folder of the folder.
         */
        ParentFolder(): IFolderMethods;
        /**
         * Property Bag
         */
        Properties(): IBase<IPropertyValues>;
        StorageMetrics(): IBase;
    }
    /**
     * Folder Query Result
     */
    export interface IFolderQueryResult extends IFolderMethods, IFolderProps {
        /**
         * Gets the files contained in the folder.
         */
        Files: IFileResults;
        /**
         * Gets the folders contained in the list folder.
         */
        Folders: IFolderResults;
        /**
         * Specifies the list item field (2) values for the list item corresponding to the file.
         */
        ListItemAllFields: IListItemResults;
        /**
         * Gets the parent list folder of the folder.
         */
        ParentFolder: IFolderResult;
        /**
         * Property Bag
         */
        Properties: IPropertyValues;
        StorageMetrics: any;
    }
    /**
     * Folder Result
     */
    export interface IFolderResult extends IFolderMethods, IFolderProps, IFolderQueryProps, IFolderQueryProps, IBase<IFolder, IFolderResult, IFolderQueryResult> {
    }
    /**
     * Folder
     */
    export interface IFolder extends IFolderMethods, IFolderQueryProps, IBase<IFolder, IFolderResult, IFolderQueryResult> {
    }
}
declare module "definitions/file/folders" {
    import { IBase, IBaseCollection, IFolder, IFolderQueryResult, IFolderResult } from "definitions/index";
    /**
     * Methods
     */
    export interface IFoldersMethods {
        /**
         * Adds the folder that is located at the specified URL to the collection.
         * @param url - The path where you want to add the folder (including the name of the new folder) as a fully-qualified URL, server-relative URL, or site-relative URL.
         */
        add(url: any): IBase<IFolder, IFolderResult>;
        /**
         * Get the file at the specified URL.
         * @param serverRelativeUrl - The server-relative URL of the folder.
         */
        getbyurl(serverRelativeUrl: any): IFolder & IBase<IFolder, IFolderResult, IFolderQueryResult>;
        /**
         * Method to get the next set of results.
         */
        next(): IBase<IFolders, IFolderResults>;
    }
    /**
     * Folders
     */
    export interface IFolders extends IFoldersMethods, IBaseCollection<IFolder, IFolderResult, IFolderQueryResult> {
    }
    /**
     * Folder Results
     */
    export interface IFolderResults extends IFoldersMethods, IBaseCollection<IFolderResult, IFolderResult, IFolderQueryResult> {
    }
}
declare module "definitions/file/index" {
    export * from "definitions/file/file";
    export * from "definitions/file/files";
    export * from "definitions/file/fileVersion";
    export * from "definitions/file/fileVersions";
    export * from "definitions/file/folder";
    export * from "definitions/file/folders";
}
declare module "definitions/lib/results" {
    import { ComplexTypes } from "definitions/index";
    /**
     * App License
     */
    export interface AppLicense {
        /** The collection of app licenses. */
        results: Array<AppLicense>;
    }
    /**
     * Content Type Id
     */
    export interface ContentTypeId {
        /** The collection of content type ids. */
        results: Array<ComplexTypes.ContentTypeId>;
    }
    /**
     * Creatable Item Information
     */
    export interface CreatableItemInfo {
        /** The collection of creatable item information. */
        results: Array<ComplexTypes.CreatableItemInfoCollection>;
    }
    /**
     * Custom Action Element
     */
    export interface CustomActionElement {
        /** The collection of custom action elements. */
        results: Array<CustomActionElement>;
    }
    /**
     * Custom Result
     */
    export interface CustomResult {
        /** The collection of custom results. */
        results: Array<CustomResult>;
    }
    /**
     * Data Row
     */
    export interface DataRow {
        /** The collection of data rows. */
        results: Array<ComplexTypes.SimpleDataRow>;
    }
    /**
     * Key/Value
     */
    export interface KeyValue {
        /** The collection of key-value pairs. */
        results: Array<KeyValue>;
    }
    /**
     * List Data Validation Failure
     */
    export interface ListDataValidationFailure {
        /** The collection of list data validation failures. */
        results: Array<ListDataValidationFailure>;
    }
    /**
     * Menu Node
     */
    export interface MenuNode {
        /** The collection of menu nodes. */
        results: Array<MenuNode>;
    }
    /**
     * Number
     */
    export interface Number {
        /** The collection of numbers. */
        results: Array<number>;
    }
    /**
     * Object
     */
    export interface Object {
        /** A collection of objects. */
        results: Array<object>;
    }
    /**
     * Parameter Information
     */
    export interface ParameterInformation {
        /** The collection of parameter information. */
        results: Array<ParameterInformation>;
    }
    /**
     * Personal Result Suggestion
     */
    export interface PersonalResultSuggestion {
        /** The collection of personal result suggestions. */
        results: Array<PersonalResultSuggestion>;
    }
    /**
     * Query Result
     */
    export interface QueryResult {
        /** The collection of custom results. */
        results: Array<QueryResult>;
    }
    /**
     * Query Suggestion Query
     */
    export interface QuerySuggestionQuery {
        /** The collection of query suggestion queries. */
        results: Array<QuerySuggestionQuery>;
    }
    /**
     * Refiner
     */
    export interface Refiner {
        /** The collection of refiners. */
        results: Array<Refiner>;
    }
    /**
     * Refiner Entry
     */
    export interface RefinerEntry {
        /** The collection of refiner entries. */
        results: Array<RefinerEntry>;
    }
    /**
     * Shared User
     */
    export interface SharedWithUser {
        /** The collection of shared users. */
        results: Array<SharedWithUser>;
    }
    /**
     * Social Actor
     */
    export interface SocialActor {
        /** The collection of social actors. */
        results: Array<SocialActor>;
    }
    /**
     * Social Data Item
     */
    export interface SocialDataItem {
        /** The collection of social data items. */
        results: Array<SocialDataItem>;
    }
    /**
     * Social Data Overlay
     */
    export interface SocialDataOverlay {
        /** The collection of social data overlays. */
        results: Array<SocialDataOverlay>;
    }
    /**
     * Social Post
     */
    export interface SocialPost {
        /** The collection of social posts. */
        results: Array<SocialPost>;
    }
    /**
     * Social Post Definition Data Item
     */
    export interface SocialPostDefinitionDataItem {
        /** The collection of social post definition data items. */
        results: Array<SocialPostDefinitionDataItem>;
    }
    /**
     * Social Thread
     */
    export interface SocialThread {
        /** The collection of social threads. */
        results: Array<SocialThread>;
    }
    /**
     * String Collection
     */
    export interface String {
        /** The collection of strings. */
        results: Array<string>;
    }
    /**
     * Visualization Field
     */
    export interface VisualizationField {
        /** The collection of visualization fields. */
        results: Array<VisualizationField>;
    }
}
declare module "definitions/lib/sptypes" {
    /**
     * Calendar Types
     */
    export type CalendarType = {
        /** Gregorian (localized) */
        Gregorian;
        /** Japanese Emperor Era */
        JapaneseEmperorEra;
        /** Taiwan Calendar */
        TaiwanCalendar;
        /** Korean Tangun Era */
        KoreanTangunEra;
        /** Hijri (Arabic Lunar) */
        Hijri;
        /** Thai */
        Thai;
        /** Hebrew Lunar */
        HebrewLunar;
        /** Gregorian (Middle East French) */
        GregorianMiddleEastFrench;
        /** Gregorian (Arabic) */
        GregorianArabic;
        /** Gregorian (Transliterated English) */
        GregorianTransliteratedEnglish;
        /** Gregorian (Transliterated French) */
        GregorianTransliteratedFrench;
        /** Korean and Japanese Lunar */
        KoreanandJapaneseLunar;
        /** Chinese Lunar */
        ChineseLunar;
        /** Saka Era */
        SakaEra;
    };
    /**
     * Check Out Types
     */
    export type CheckOutType = {
        /** Online */
        Online;
        /** Offline */
        Offline;
        /** None */
        None;
    };
    /**
     * Choice Format Types
     */
    export type ChoiceFormatType = {
        /** Dropdown */
        Dropdown;
        /** Radio buttons */
        RadioButtons;
    };
    /**
     * Control Modes
     */
    export type ControlMode = {
        /** A placeholder value in the export typeeration indicating that it has no valid display mode from one of the other export typeeration values. */
        Invalid;
        /** Specifies that the control is in display mode. */
        Display;
        /** Specifies that the control is in edit mode. */
        Edit;
        /** Specifies that the control is in New mode. */
        New;
    };
    /**
     * Date Format
     */
    export type DateFormat = {
        /** Displays only the date. */
        DateOnly;
        /** Displays the date and time. */
        DateTime;
    };
    /**
     * Draft Visibility Types
     */
    export type DraftVisibilityType = {
        /** export typeeration whose values specify that the minimum permission is approver. */
        Approver;
        /** export typeeration whose values specify that the minimum permission is author. */
        Author;
        /** export typeeration whose values specify that the minimum permission is reader. */
        Reader;
    };
    /**
     * Event Receiver Types
     */
    export type EventReceiverType = {
        /** Event that occurs before an item has been added. */
        ItemAdding;
        /** Event that occurs before an item is updated. */
        ItemUpdating;
        /** Event that occurs before an item is deleted. */
        ItemDeleting;
        /** Event that occurs before an item has been checked in. */
        ItemCheckingIn;
        /** Event that occurs before an item is checked out. */
        ItemCheckingOut;
        /** Event that occurs before an item is unchecked out. */
        ItemUncheckingOut;
        /** Event that occurs before an attachment has been added to an item. */
        ItemAttachmentAdding;
        /** Event that occurs before an attachment has been removed from the item. */
        ItemAttachmentDeleting;
        /** Event that occurs before a file is moved. */
        ItemFileMoving;
        /** Event that occurs before a document version is deleted. */
        ItemVersionDeleting;
        /** Event that occurs before a field is added to a list. */
        FieldAdding;
        /** Event that occurs before a field is updated. */
        FieldUpdating;
        /** Event that occurs before a field is removed from a list. */
        FieldDeleting;
        /** Event that occurs before a list is created. */
        ListAdding;
        /** Event that occurs before a list is deleted. */
        ListDeleting;
        /** Event that occurs before a site collection is deleted. */
        SiteDeleting;
        /** Event that occurs before a site is deleted. */
        WebDeleting;
        /** Event that occurs before a site URL has been changed. */
        WebMoving;
        /** Event that occurs before a new site is created. */
        WebAdding;
        /** Event that occurs before a security group is added. */
        GroupAdding;
        /** Event that occurs before a security group is updated. */
        GroupUpdating;
        /** Event that occurs before a security group is deleted. */
        GroupDeleting;
        /** Event that occurs before a user is added to a security group. */
        GroupUserAdding;
        /** Event that occurs before a user is deleted from a security group. */
        GroupUserDeleting;
        /** Event that occurs before a role definition is added. */
        RoleDefinitionAdding;
        /** Event that occurs before a role definition is updated. */
        RoleDefinitionUpdating;
        /** Event that occurs before a role definition is deleted. */
        RoleDefinitionDeleting;
        /** Event that occurs before a role assignment is added. */
        RoleAssignmentAdding;
        /** Event that occurs before a role assignment is deleted. */
        RoleAssignmentDeleting;
        /** Event that occurs before an inheritance is broken. */
        InheritanceBreaking;
        /** Event that occurs before an inheritance is restored. */
        InheritanceResetting;
        /** Event that occurs before a workflow starts running. */
        WorkflowStarting;
        /** Event that occurs after an item has been added. */
        ItemAdded;
        /** Event that occurs after an item has been updated. */
        ItemUpdated;
        /** Event that occurs after an item has been deleted. */
        ItemDeleted;
        /** Event that occurs after an item has been checked in. */
        ItemCheckedIn;
        /** Event that occurs after an item has been checked out. */
        ItemCheckedOut;
        /** Event that occurs after an item has been unchecked out. */
        ItemUncheckedOut;
        /** Event that occurs after an attachment has been added to the item. */
        ItemAttachmentAdded;
        /** Event that occurs after an attachment has been removed from the item. */
        ItemAttachmentDeleted;
        /** Event that occurs after a file has been moved. */
        ItemFileMoved;
        /** Event that occurs after a file is transformed from one type to another. */
        ItemFileConverted;
        /** Event that occurs after a document version is deleted. */
        ItemVersionDeleted;
        /** Event that occurs after a field has been added. */
        FieldAdded;
        /** Event that occurs after a field has been updated. */
        FieldUpdated;
        /** Event that occurs after a field has been removed. */
        FieldDeleted;
        /** Event that occurs after a list has been created. */
        ListAdded;
        /** Event that occurs after a list has been deleted. */
        ListDeleted;
        /** Event that occurs after a site collection has been deleted. */
        SiteDeleted;
        /** Event that occurs after a site has been deleted. */
        WebDeleted;
        /** Event that occurs after a site URL has been changed. */
        WebMoved;
        /** Event that occurs after a new site has been created, but before that new site is provisioned. */
        WebProvisioned;
        /** Event that occurs happens after a security group is added. */
        GroupAdded;
        /** Event that occurs after a security group is updated. */
        GroupUpdated;
        /** Event that occurs after a security group is deleted. */
        GroupDeleted;
        /** Event that occurs after a user is added to a security group. */
        GroupUserAdded;
        /** Event that occurs after a user is deleted from a security group. */
        GroupUserDeleted;
        /** Event that occurs after a role definition is added. */
        RoleDefinitionAdded;
        /** Event that occurs after a role definition is updated. */
        RoleDefinitionUpdated;
        /** Event that occurs after a role definition is deleted. */
        RoleDefinitionDeleted;
        /** Event that occurs after a role assignment is added. */
        RoleAssignmentAdded;
        /** Event that occurs after a role definition is deleted. */
        RoleAssignmentDeleted;
        /** Event that occurs after an inheritance is broken. */
        InheritanceBroken;
        /** Event that occurs after an inheritance is restored. */
        InheritanceReset;
        /** Event that occurs after a workflow has started running. */
        WorkflowStarted;
        /** Event that occurs after a workflow has been postponed. */
        WorkflowPostponed;
        /** Event that occurs after a workflow has completed running. */
        WorkflowCompleted;
        /** Event that occurs when an instance of an external content type has been added. */
        EntityInstanceAdded;
        /** Event that occurs when an instance of an external content type has been updated. */
        EntityInstanceUpdated;
        /** Event that occurs when an instance of an external content type has been deleted. */
        EntityInstanceDeleted;
        /** Event that occurs after an app is installed. */
        AppInstalled;
        /** Event that occurs after an app is upgraded. */
        AppUpgraded;
        /** Event that occurs before an app is uninstalled. */
        AppUninstalling;
        /** Event that occurs after a list receives an e-mail message. */
        EmailReceived;
        /** Identifies workflow event receivers, and is therefore not a true event type. */
        ContextEvent;
    };
    /**
     * Event Receiver Synchronization Types
     */
    export type EventReceiverSynchronizationType = {
        /** Event to be triggered asynchronously. */
        Asynchronous;
        /** Event to be triggered synchronously. */
        Synchronization;
    };
    /**
     * Field Types
     */
    export type FieldType = {
        /** Specifies that the field indicates whether a meeting in a calendar list is an all-day event. */
        AllDayEvent;
        /** Specifies that the field indicates whether the list item has attachments. */
        Attachments;
        /** Specifies that the field contains a Boolean value. */
        Boolean;
        /** Specifies that the field is a calculated field. */
        Calculated;
        /** Specifies that the field contains a single value from a set of specified values. */
        Choice;
        /** Specifies that the field is a computed field. */
        Computed;
        /** Specifies that the field contains a content type identifier as a value. */
        ContentTypeId;
        /** Specifies that the field contains a monotonically increasing integer. */
        Counter;
        /** Specifies that the field contains a link between projects in a Meeting Workspace site. */
        CrossProjectLink;
        /** Specifies that the field contains a currency value. */
        Currency;
        /** Specifies that the field contains a date and time value or a date-only value. */
        DateTime;
        /** Specifies that the type of the field was set to an invalid value. */
        Error;
        /** Specifies that the field contains the leaf name of a document as a value. */
        File;
        /** Specifies that the field contains geographical location values. */
        Geolocation;
        /** Specifies that the field contains rating scale values for a survey list. */
        GridChoice;
        /** Specifies that the field contains a GUID value. */
        Guid;
        /** Specifies that the field contains an integer value. */
        Integer;
        /** Must not be used. */
        Invalid;
        /** Specifies that the field is a lookup field. */
        Lookup;
        /** Must not be used. */
        MaxItems;
        /** Specifies that the field indicates moderation status. */
        ModStat;
        /** Specifies that the field contains one or more values from a set of specified values. */
        MultiChoice;
        /** Specifies that the field contains multiple lines of text. */
        Note;
        /** Specifies that the field contains a floating-point number value. */
        Number;
        /** Specifies that the field separates questions in a survey list onto multiple pages. */
        PageSeparator;
        /** Specifies that the field indicates whether a meeting in a calendar list recurs. */
        Recurrence;
        /** Specifies that the field contains a single line of text. */
        Text;
        /** Specifies that the field indicates the position of a discussion item in a threaded view of a discussion board. */
        ThreadIndex;
        /** Specifies that the field indicates the thread for a discussion item in a threaded view of a discussion board. */
        Threading;
        /** Specifies that the field contains a URI and an optional description of the URI. */
        URL;
        /** Specifies that the field contains one or more users and groups as values. */
        User;
        /** Specifies that the field contains the most recent event in a workflow instance. */
        WorkflowEventType;
        /** Specifies that the field indicates the status of a workflow instance on a list item. */
        WorkflowStatus;
    };
    /**
     * Field User Selection Types
     */
    export type FieldUserSelectionType = {
        /** People only. */
        PeopleOnly;
        /** People and groups. */
        PeopleAndGroups;
    };
    /**
     * File Template Types
    */
    export type FileTemplateType = {
        /** export typeeration whose value specifies default form template. */
        FormPage;
        /** export typeeration whose value specifies default view template. */
        StandardPage;
        /** export typeeration whose value specifies default wiki template. */
        WikiPage;
    };
    /**
     * Friendly Date Format
     */
    export type FriendlyDateFormat = {
        /** Unspecified */
        Unspecified;
        /** Disabled (standard absolute) */
        Disabled;
        /** Relative (standard friendly relative) */
        Relative;
    };
    /**
     * List Template Types
    */
    export type ListTemplateType = {
        /** Access Request List */
        AccessRequest;
        /** Administrator Tasks */
        AdminTasks;
        /** Agenda (Meeting) */
        Agenda;
        /** App Data Catalog */
        AppDataCatalog;
        /** Announcements */
        Announcements;
        /** Call Track */
        CallTrack;
        /** Categories (Blog) */
        Categories;
        /** Circulation */
        Circulation;
        /** Comments (Blog) */
        Comments;
        /** Contacts */
        Contacts;
        /** Custom grid for a list */
        CustomGrid;
        /** Data connection library for sharing information about external data connections */
        DataConnectionLibrary;
        /** Data sources for a site */
        DataSources;
        /** Decisions (Meeting) */
        Decision;
        /** Design Catalog */
        DesignCatalog;
        /** Draft Apps library in Developer Site */
        DeveloperSiteDraftApps;
        /** Discussion board */
        DiscussionBoard;
        /** Document library */
        DocumentLibrary;
        /** Calendar */
        Events;
        /** External */
        ExternalList;
        /** Facility */
        Facility;
        /** Project Tasks */
        GanttTasks;
        /** Custom list */
        GenericList;
        /** Health Reports */
        HealthReports;
        /** Health Rules */
        HealthRules;
        /** Help Library */
        HelpLibrary;
        /** Holidays */
        Holidays;
        /** Workspace Pages (Meeting) */
        HomePageLibrary;
        /** IME (Input Method Editor) Dictionary */
        IMEDic;
        /** Issue tracking */
        IssueTracking;
        /** Links */
        Links;
        /** List Template gallery */
        ListTemplateCatalog;
        /** Master Page gallery */
        MasterPageCatalog;
        /** Maintenance Logs Library */
        MaintenanceLogs;
        /** Objectives (Meeting) */
        MeetingObjective;
        /** Meeting Series (Meeting) */
        Meetings;
        /** Attendees (Meeting) */
        MeetingUser;
        /** My Site Document Library */
        MySiteDocumentLibrary;
        /** Posts (Blog) */
        Posts;
        /** No Code Public Workflow */
        NoCodePublic;
        /** No Code Workflows */
        NoCodeWorkflows;
        /** Picture library */
        PictureLibrary;
        /** Solutions */
        SolutionCatalog;
        /** Survey */
        Survey;
        /** Tasks */
        Tasks;
        /** Tasks with Timeline and Hierarchy */
        TasksWithTimelineAndHierarchy;
        /** Text Box (Meeting) */
        TextBox;
        /** Themes */
        ThemeCatalog;
        /** Things To Bring (Meeting) */
        ThingsToBring;
        /** Timecard */
        Timecard;
        /** User Information */
        UserInformation;
        /** Wiki Page Library */
        WebPageLibrary;
        /** Web Part gallery */
        WebPartCatalog;
        /** Site template gallery */
        WebTemplateCatalog;
        /** Whereabouts */
        Whereabouts;
        /** Workflow History */
        WorkflowHistory;
        /** Custom Workflow Process */
        WorkflowProcess;
        /** XML Form library */
        XMLForm;
    };
    /**
     * Locale LCID Types
     */
    export type LocaleLCIDType = {
        Afrikaans;
        Albanian;
        ArabicAlgeria;
        ArabicBahrain;
        ArabicEgypt;
        ArabicIraq;
        ArabicJordan;
        ArabicLebanon;
        ArabicLibya;
        ArabicMorocco;
        ArabicOman;
        ArabicQatar;
        ArabicSaudiArabia;
        ArabicSyria;
        ArabicTunisia;
        ArabicUAE;
        ArabicYemen;
        Armenian;
        AzeriCyrillic;
        AzeriLatin;
        Basque;
        Belarusian;
        Bulgarian;
        Catalan;
        ChineseHongKongSAR;
        ChineseMacaoSAR;
        ChinesePRC;
        ChineseSingapore;
        ChineseTaiwan;
        CroatianCroatia;
        Czech;
        Danish;
        Divehi;
        DutchBelgium;
        DutchNetherlands;
        EnglishAustralia;
        EnglishBelize;
        EnglishCanada;
        EnglishCaribbean;
        EnglishIreland;
        EnglishJamaica;
        EnglishNewZealand;
        EnglishPhilippines;
        EnglishSouthAfrica;
        EnglishTrinidad;
        EnglishUnitedKingdom;
        EnglishUnitedStates;
        EnglishZimbabwe;
        Estonian;
        Faeroese;
        Finnish;
        FrenchBelgium;
        FrenchCanada;
        FrenchFrance;
        FrenchLuxembourg;
        FrenchMonaco;
        FrenchSwitzerland;
        Galician;
        Georgian;
        GermanAustria;
        GermanGermany;
        GermanLiechtenstein;
        GermanLuxembourg;
        GermanSwitzerland;
        Greek;
        Gujarati;
        HebrewIsrael;
        HindiIndia;
        Hungarian;
        Icelandic;
        Indonesian;
        ItalianItaly;
        ItalianSwitzerland;
        Japanese;
        Kannada;
        Kazakh;
        Konkani;
        Korean;
        KyrgyzCyrillic;
        Latvian;
        Lithuanian;
        MacedonianFYROM;
        Malay;
        MalayBruneiDarussalam;
        Marathi;
        MongolianCyrillic;
        NorwegianBokmal;
        NorwegianNynorsk;
        PersianIran;
        Polish;
        PortugueseBrazil;
        PortuguesePortugal;
        Punjabi;
        Romanian;
        Russian;
        Sanskrit;
        SerbianCyrillic;
        SerbianLatin;
        Slovak;
        Slovenian;
        SpanishArgentina;
        SpanishBolivia;
        SpanishChile;
        SpanishColombia;
        SpanishCostaRica;
        SpanishDominicanRepublic;
        SpanishEcuador;
        SpanishElSalvador;
        SpanishGuatemala;
        SpanishHonduras;
        SpanishMexico;
        SpanishNicaragua;
        SpanishPanama;
        SpanishParaguay;
        SpanishPeru;
        SpanishPuertoRico;
        SpanishSpain;
        SpanishUruguay;
        SpanishVenezuela;
        Swahili;
        Swedish;
        SwedishFinland;
        Syriac;
        Tamil;
        Tatar;
        Telugu;
        ThaiThailand;
        Turkish;
        Ukrainian;
        UrduPakistan;
        UzbekCyrillic;
        UzbekLatin;
        Vietnamese;
    };
    /**
     * Page Types
     */
    export type PageType = {
        /** export typeeration whose values specify a page that is the default view for a list. */
        DefaultView;
        /** export typeeration whose values specify a page suitable for display within a dialog box on a client computer. */
        DialogView;
        /** export typeeration whose values specify a list form for displaying a list item. */
        DisplayForm;
        /** export typeeration whose values specify a list form for displaying a list item, suitable for display within a dialog box on a client computer. */
        DisplayFormDialog;
        /** export typeeration whose values specify a list form for editing a list item. */
        EditForm;
        /** export typeeration whose values specify a list form for editing a list item, suitable for display within a dialog box on a client computer. */
        EditFormDialog;
        /** export typeeration whose values specify a page that does not correspond to a list view or a list form. */
        Invalid;
        /** export typeeration whose values specify a list form for creating a new list item. */
        NewForm;
        /** export typeeration whose values specify a list form for creating a new list item, suitable for display within a dialog box on a client computer. */
        NewFormDialog;
        /** export typeeration whose values specify a page that is a list view and is not the default view for a list. */
        NormalView;
        /** export typeeration whose values specify the total number of valid page types. */
        Page_MAXITEMS;
        /** export typeeration whose values specify a list form for displaying or editing a list item and represented by a form template (.xsn) file. */
        SolutionForm;
        /** export typeeration whose values specify a page that is a list view. */
        View;
    };
    /**
     * Master Page Gallery Types
     */
    /**
     * Page Layout Types
     */
    /**
     * Personal Site Capabilities
     */
    export type PersonalSiteCapabilities = {
        Education;
        Guest;
        MyTasksDashboard;
        None;
        Profile;
        Social;
        Storage;
    };
    /**
     * Principal Sources
     */
    export type PrincipalSources = {
        /** Search all principal sources. */
        All;
        /** Search the current membership provider. */
        MembershipProvider;
        /** Search no principal sources. */
        None;
        /** Search the current role provider. */
        RoleProvider;
        /** Search the user information list. */
        UserInfoList;
        /** Search active directory. */
        Windows;
    };
    /**
     * Principal Types
     */
    export type PrincipalTypes = {
        /** Return all entity types. */
        All;
        /** Return distribution list entity types. */
        DistributionList;
        /** Return no principal types. */
        None;
        /** Return security group entity types. */
        SecurityGroup;
        /** Return sharepoint group entity types. */
        SharePointGroup;
        /** Return user entity types. */
        User;
    };
    /**
     * Relationship Delete Behavior Types
     */
    export type RelationshipDeleteBehaviorType = {
        /** No relationship behavior is applied. */
        None;
        /** Cascade behavior. */
        Cascade;
        /** Restrict behavior. */
        Restrict;
    };
    /**
     * Reordering Rule Match Types
     */
    export type ReorderingRuleMatchType = {
        ResultContainsKeyword;
        TitleContainsKeyword;
        TitleMatchesKeyword;
        UrlStartsWith;
        UrlExactlyMatches;
        ContentTypeIs;
        FileExtensionMatches;
        ResultHasTag;
        ManualCondition;
    };
    /**
     * Role Types
     */
    export type RoleType = {
        /** Has all rights from other roles, plus rights to manage roles and view usage analysis data. Includes all rights in the WebDesigner role, plus the following: ManageListPermissions, ManageRoles, ManageSubwebs, ViewUsageData. The Administrator role cannot be customized or deleted, and must always contain at least one member. Members of the Administrator role always have access to, or can grant themselves access to, any item in the Web site. */
        Administrator;
        /** Has Reader rights, plus rights to add items, edit items, delete items, manage list permissions, manage personal views, personalize Web Part Pages, and browse directories. Includes all rights in the Reader role, plus the following: AddDelPrivateWebParts, AddListItems, BrowseDirectories, CreatePersonalGroups, DeleteListItems, EditListItems, ManagePersonalViews, UpdatePersonalWebParts. Contributors cannot create new lists or document libraries, but they can add content to existing lists and document libraries. */
        Contributor;
        /** Has Contributor rights, plus rights to manage lists. Includes all rights in the Contributor role. Editors can create new lists or document libraries. */
        Editor;
        /** Has limited rights to view pages and specific page elements. This role is used to give users access to a particular page, list, or item in a list, without granting rights to view the entire site. Users cannot be added explicitly to the Guest role; users who are given access to lists or document libraries by way of per-list permissions are added automatically to the Guest role. The Guest role cannot be customized or deleted. */
        Guest;
        /** export typeeration whose values specify that there are no rights on the Web site. */
        None;
        /** Has rights to view items, personalize Web parts, use alerts, and create a top-level Web site using Self-Service Site Creation. A reader can only read a site; the reader cannot add content. When a reader creates a site using Self-Service Site Creation, the reader becomes the site owner and a member of the Administrator role for the new site. This does not affect the user's role membership for any other site. Rights included: CreateSSCSite, ViewListItems, ViewPages. */
        Reader;
        /** Has Contributor rights, plus rights to cancel check out, delete items, manage lists, add and customize pages, define and apply themes and borders, and link style sheets. Includes all rights in the Contributor role, plus the following: AddAndCustomizePages, ApplyStyleSheets, ApplyThemeAndBorder, CancelCheckout, ManageLists.WebDesigners can modify the structure of the site and create new lists or document libraries. */
        WebDesigner;
    };
    /**
     * URL Format Types
     */
    export type UrlFormatType = {
        /** Hyperlink */
        Hyperlink;
        /** Image */
        Image;
    };
    /**
     * URL Zones
     */
    export type URLZones = {
        /** Search the custom zone. */
        Custom;
        /** Search the default zone. */
        Default;
        /** Search the extranet zone. */
        Extranet;
        /** Search the internet zone. */
        Internet;
        /** Search the intranet zone. */
        Intranet;
    };
    /**
     * User Custom Action Registration Types
     */
    export type UserCustomActionRegistrationType = {
        /** export typeeration whose values specify that the object association is not specified. */
        None;
        /** export typeeration whose values specify that the custom action is associated with a list. */
        List;
        /** export typeeration whose values specify that the custom action is associated with a content type. */
        ContentType;
        /** export typeeration whose values specify that the custom action is associated with a ProgID. */
        ProgId;
        /** export typeeration whose values specify that the custom action is associated with a file extension. */
        FileType;
    };
    /**
     * View Types
     */
    export type ViewType = {
        /** export typeeration whose values specify a calendar list view type. */
        Calendar;
        /** export typeeration whose values specify a chart list view type. */
        Chart;
        /** export typeeration whose values specify a Gantt chart list view type. */
        Gantt;
        /** export typeeration whose values specify a datasheet list view type. */
        Grid;
        /** export typeeration whose values specify an HTML list view type. */
        Html;
        /** export typeeration whose values specify a list view type that displays recurring events. */
        Recurrence;
    };
}
declare module "definitions/lib/base" {
    import { IRequestInfo, IRequestType, IResults, ODataQuery } from "definitions/index";
    /**
     * The base class
     */
    export interface IBase<Type = any, Result = Type, QueryResult = Result> {
        /**
         * Properties
         */
        /** True, if the object exists, false otherwise. */
        existsFl: boolean;
        /** The parent object, which created this object. */
        parent: any;
        /** The response */
        response: string;
        /** The request type */
        requestType: IRequestType;
        /**
         * Method to execute the request as a batch.
         * Currently available in SharePoint Online only.
         * @param callback - The method to be executed after the request completes.
         */
        batch(callback?: (value?: Result, ...args) => any): Type;
        /**
         * Method to execute the request as a batch.
         * Currently available in SharePoint Online only.
         * @param appendFl - Flag to execute the request as part of a change set.
         */
        batch(appendFl?: boolean): Type;
        /**
         * Method to wait for the requests to complete.
         * @param callback - The method to be executed after the request completes.
         */
        done(callback?: (...args) => any): any;
        /**
         * Method to wait for the requests to complete.
         * @param callback - The method to be executed after the request completes.
         */
        done(callback?: (value?: Result, ...args) => any): any;
        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?: (value?: Result, ...args) => any): Type;
        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl: boolean): Type;
        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback: (value?: Result, ...args) => any, waitFl: boolean): Type;
        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): Result;
        /**
         * Method to get the request information.
         */
        getInfo(): IRequestInfo;
        /**
         * Queries the collection.
         * @param oData - The OData information.
         */
        query(query: ODataQuery): IBase<Result, QueryResult>;
        /**
         * Method to execute this request and previous ones to complete.
         * @param resolve - Method to execute for successful requests.
         * @param reject - Method to execute for unsuccessful requests.
         */
        then(resolve?: (value?: Result) => void, reject?: (value?: Result) => void): PromiseLike<Result>;
    }
    /**
     * Base Collection
     */
    export interface IBaseCollection<Type = any, Result = Type, QueryResult = Result> extends IResults<Type>, IBase<IResults<Result>, IResults<Result>, IResults<QueryResult>> {
    }
}
declare module "definitions/lib/contextInfo" {
    import { IBase, IBasePermissions, IContextWebInfo } from "definitions/lib/index";
    /**
     * Context Information
     */
    export interface IContextInformation {
        /**
         * Properties
         */
        /** Alerts Enabled */
        alertsEnabled: boolean;
        /** Allow Silverlight Prompt */
        allowSilverlightPrompt: boolean;
        /** Client Server Time Delta */
        clientServerTimeDelta: number;
        /** Cross Domain Photos Enabled */
        crossDomainPhotosEnabled: boolean;
        /** Current Culture Name */
        currentCultureName: string;
        /** Current Language */
        currentLanguage: string;
        /** Current UI Culture Name */
        currentUICultureName: string;
        /** Document */
        document: HTMLDocument;
        /** Environment */
        env: string;
        /** True if the _spPageContextInfo object exists, flase otherwise. */
        existsFl: boolean;
        /** Has Manage Web Permissions */
        hasManageWebPermissions: boolean;
        /** Is Anonymous Guest User */
        isAnonymousGuestUser: boolean;
        /** Is App Web */
        isAppWeb: boolean;
        /** Is Site Administrator */
        isSiteAdmin: boolean;
        /** Layouts Url */
        layoutsUrl: string;
        /** Page Item Id */
        pageItemId: number;
        /** Page List Id */
        pageListId: string;
        /** Page Personalization Scope */
        pagePersonalizationScope: number;
        /** Profile Url */
        profileUrl: string;
        /** Server Request Path */
        serverRequestPath: string;
        /** Site Absolute Url */
        siteAbsoluteUrl: string;
        /** Site Client Tag */
        siteClientTag: string;
        /** Site Server Relative Url */
        siteServerRelativeUrl: string;
        /** System User Key */
        systemUserKey: string;
        /** Tenant App Version */
        tenantAppVersion: string;
        /** Theme Cache Token */
        themeCacheToken: string;
        /** Update From Digest Page Loaded */
        updateFromDigestPageLoaded: Date;
        /** User Id */
        userId: number;
        /** User Login Name */
        userLoginName: string;
        /** Web Absolute Url */
        webAbsoluteUrl: string;
        /** Web Language */
        webLanguage: number;
        /** Web Logo Url */
        webLogoUrl: string;
        /** Web Permissions Mask */
        webPermMask: IBasePermissions;
        /** Web Server Relative Url */
        webServerRelativeUrl: string;
        /** Web Template */
        webTemplate: string;
        /** Web Title */
        webTitle: string;
        /** Web UI Version */
        webUIVersion: number;
        /** Window */
        window: {
            $REST: any;
            addEventListener: any;
            clearInterval: any;
            document: HTMLDocument;
            setInterval: any;
            SP: any;
            SPClientTemplates: any;
        };
        /**
         * Methods
         */
        /**
         * Method to get the web context information.
         * @param url - The relative url of the web.
         */
        getWeb(url: string): IBase<IContextWebInfo>;
    }
}
declare module "definitions/lib/email" {
    import { ComplexTypes, IBase } from "definitions/index";
    /**
     * Email Properties
     */
    export interface EmailProperties {
        /** A collection of additional email headers. */
        AdditionalHeaders?: Array<ComplexTypes.KeyValue>;
        /** A string or collection of email addresses to blind carbon copy the email to. */
        BCC?: string | Array<string>;
        /** A value that specifies the body of the email. */
        Body: string;
        /** A string or collection of email addresses to carbon copy the email to. */
        CC?: string | Array<string>;
        /** A value that specifies the email address of the sender. */
        From: string;
        /** A string or collection of email addresses to send the email to. */
        To: string | Array<string>;
        /** A value that specifies the email subject. */
        Subject: string;
    }
    /**
     * Email
     */
    export interface IEmail {
        /**
         * Properties
         */
        /**
         * Methods
         */
        /**
         * Method to send an email.
         * @param properties - The email information.
         */
        send(properties: EmailProperties): IBase;
    }
}
declare module "definitions/lib/helper" {
    import { IContentTypeResult, IContentTypeCreationInformation, IFieldResult, IFileResult, IFolderResult, IListQueryResult, IListResult, IListCreationInformation, IPromise, IUserCustomActionCreationInformation, IView, IViewResult, IWebResult } from "definitions/index";
    /**
     * App Helper Methods
     */
    export interface IHelperApp {
        /**
         * Method to copy a file from the app web to the host web.
         * @param srcFileUrl - The source file url, relative to the app web.
         * @param dstFolder - The destination folder.
         * @param overwriteFl - Flag to overwrite the file in the destination folder, if it already exists. This value is falst by default.
         * @param rootWebFl - Flag to target the root web of the site collection, otherwise the host web.
         */
        copyFileToHostWeb(srcFileUrl: string, dstFolder: IFolderResult, overwriteFl?: boolean, rootWebFl?: boolean): IPromise;
        /**
         * Method to copy a file from the app web to the host web.
         * @param srcFileUrl - The source file url, relative to the app web.
         * @param dstFolderUrl - The destination folder url, relative to the host web.
         * @param overwriteFl - Flag to overwrite the file in the destination folder, if it already exists. This value is falst by default.
         * @param rootWebFl - Flag to target the root web of the site collection, otherwise the host web.
         */
        copyFileToHostWeb(srcFileUrl: string, dstFolderUrl: string, overwriteFl?: boolean, rootWebFl?: boolean): IPromise;
        /**
         * Method to copy a file from the app web to the host web
         * @param fileUrls - An array of source file urls, relative to the app web.
         * @param folderUrls - An array of destination folder urls, relative to the host web.
         * @param rootWebFl - Flag to target the root web of the site collection, otherwise the host web.
         */
        copyFilesToHostWeb(fileUrls: Array<string>, folderUrls: Array<string>, overwriteFl?: boolean, rootWebFl?: boolean): IPromise;
        /**
         * Method to create sub-folders.
         * @param folder - The app web relative url to the source file.
         * @param subFolderUrl - The host web relative url of the destination folder.
         */
        createSubFolders(folder: IFolderResult, subFolderUrl: string): IPromise;
        /**
         * Method to get the file content.
         * @param web - The web containing the files.
         * @param fileUrls - An array of file urls, relative to the web.
         * @param createFl - Flag to create the folder, if it doesn't exist.
         */
        getFolder(web: IWebResult, folderUrl: string, createFl?: boolean): IPromise;
        /**
         * Method to remove empty folders
         * @param web - The web containing the files.
         * @param folderUrls - An array of folder urls, relative to the web.
         */
        removeEmptyFolders(web: IWebResult, folderUrls: Array<string>): IPromise;
        /**
         * Method to remove files from a web.
         * @param web - The web containing the files.
         * @param fileUrl - The file url, relative to the web.
         */
        removeFile(web: IWebResult, fileUrl: string): IPromise;
        /**
         * Method to remove files from a web.
         * @param web - The web containing the files.
         * @param fileUrls - An array of file urls, relative to the web.
         */
        removeFiles(web: IWebResult, fileUrls: Array<string>): IPromise;
    }
    /**
     * JSLink Helper Methods
     */
    export interface IHelperJSLink {
        /**
         * Disables edit for the specified field.
         * @param ctx - The client context.
         * @param field - The field to disable edit.
         * @param requireValueFl - Flag to only disable the field, if a value exists.
         */
        disableEdit(ctx: any, field: any, requireValueFl?: boolean): string;
        /**
         * Disable quick edit for the specified field.
         * @param ctx - The client context.
         * @param field - The field to disable edit.
         */
        disableQuickEdit(ctx: any, field: any): any;
        /**
         * Returns the list view.
         * @param ctx - The client context.
         */
        getListView(ctx: any): any;
        /**
         * Returns the list view items.
         * @param ctx - The client context.
         */
        getListViewItems(ctx: any): any;
        /**
         * Returns the selected list view items
         */
        getListViewSelectedItems(): any;
        /**
         * Returns the webpart containing the JSLink field/form/view.
         * @param ctx - The client context.
         */
        getWebPart(ctx: any): any;
        /**
         * Hides the specified field.
         * @param ctx - The client context.
         * @param field - The field to hide.
         */
        hideField(ctx: any, field: any): any;
        /**
         * Removes the field and html from the page.
         * @param ctx - The client context.
         * @param field - The field to remove.
         */
        removeField(ctx: any, field: any): any;
        /**
         * Method to render the default html for a field.
         * @param ctx - The client context.
         * @param field - The form field.
         * @param formType - The form type. (Display, Edit, New or View)
         */
        renderField(ctx: any, field: any, formType?: number): any;
    }
    /**
     * Loader
     */
    export interface ILoader {
        /**
         * Waits for the SharePoint core libraries to be loaded.
         * @param callback - The callback function.
         * @param timeout - The max time (ms) to wait for the libraries to be loaded.
         * @param loadLibraries - Flag to load the core libraries manually.
         */
        waitForSPLibs(callback: any, timeout?: number, loadLibraries?: boolean): any;
    }
    /**
     * SharePoint Configuration - Content Type Information
     */
    export interface ISPCfgContentTypeInfo extends IContentTypeCreationInformation {
        /**
         * The content type. (This value is set internally.)
         */
        ContentType?: IContentTypeResult;
        /**
         * The field references.
         */
        FieldRefs?: Array<string>;
        /**
         * The JSLink property.
         */
        JSLink?: string;
        /**
         * The parent content type name, required if different then the name.
         */
        ParentName?: string;
        /**
         * The url of the web containing the parent content type, required if the parent content type doesn't exist in the current web.
         */
        ParentWebUrl?: string;
        /**
         * Event triggered after the content type is created.
         */
        onCreated?: (ct: IContentTypeResult) => void;
        /**
         * Event triggered after the content type is updated.
         */
        onUpdated?: (ct: IContentTypeResult) => void;
    }
    /**
     * SharePoint Configuration - Custom Action Information
     */
    export interface ISPCfgCustomActionInfo {
        /**
         * Custom actions to be created at the site collection level.
         */
        Site?: Array<IUserCustomActionCreationInformation>;
        /**
         * Custom actions to be created at the web level.
         */
        Web?: Array<IUserCustomActionCreationInformation>;
    }
    /**
     * SharePoint Configuration - Field Information
     */
    export interface ISPCfgFieldInfo {
        /**
         * The internal field name.
         */
        Name: string;
        /**
         * The schema definition of the field.
         */
        SchemaXml: string;
        /**
         * Event triggered after the field is created.
         */
        onCreated?: (field: IFieldResult) => void;
        /**
         * Event triggered after the field is updated.
         */
        onUpdated?: (field: IFieldResult) => void;
    }
    /**
     * SharePoint Configuration - List Information
     */
    export interface ISPCfgListInfo {
        /** The content types. */
        ContentTypes?: Array<ISPCfgContentTypeInfo>;
        /** The custom list fields. */
        CustomFields?: Array<ISPCfgFieldInfo>;
        /** The list creation information. */
        ListInformation: IListCreationInformation;
        /** The title display name. */
        TitleFieldDisplayName?: string;
        /** The user custom actions. */
        UserCustomActions?: Array<IUserCustomActionCreationInformation>;
        /** The view information. */
        ViewInformation?: Array<ISPCfgViewInfo>;
        /**
         * Event triggered after the list is created or updated.
         */
        onCreated?: (list: IListResult) => void;
        /**
         * Event triggered after the list is updated.
         */
        onUpdated?: (list: IListQueryResult) => void;
    }
    /**
     * SharePoint Configuration - View Information
     */
    export interface ISPCfgViewInfo {
        /** The JSLink property. */
        JSLink?: string;
        /** The view fields. */
        ViewFields?: Array<string>;
        /** The view name. */
        ViewName: string;
        /** The view query. */
        ViewQuery?: string;
        /**
         * Event triggered after the view is created or updated.
         */
        onCreated?: (view: IViewResult) => void;
        /**
         * Event triggered after the view is updated.
         */
        onUpdated?: (view: IView) => void;
    }
    /**
     * SharePoint Configuration - WebPart Information
     */
    export interface ISPCfgWebPartInfo {
        /** The file name of the webpart. */
        FileName: string;
        /** The webpart group. */
        Group?: string;
        /** The webpart xml */
        XML: string;
        /**
         * Event triggered after the webpart file is created.
         */
        onCreated?: (file: IFileResult) => void;
        /**
         * Event triggered after the webpart file is updated.
         */
        onUpdated?: (file: IFileResult) => void;
    }
    /**
     * SharePoint Configuration Methods
     */
    export interface ISPConfig {
        /**
         * Constructor
         * @param cfg - The SharePoint configuration information.
         * @param webUrl - An optional string representing the relative web url.
         */
        new (cfg: ISPConfigProps, webUrl?: string): any;
        /**
         * Method to install the configuration
         * @param callback - An optional function called after the execution completes.
         */
        install(callback?: () => void): any;
        /**
         * Method to install by the configuration type.
         * @param cfgType - The configuration type.
         * @param callback - An optional function called after the execution completes.
         * @param targetName - The target configuration type to install.
         */
        installByType(cfgType: ISPConfigTypes, callback?: any, targetName?: string): any;
        /**
         * Method to install a specific content type
         * @param ctName - The content type to install.
         * @param callback - An optional function called after the execution completes.
         */
        installContentType(ctName: string, callback?: any): any;
        /**
         * Method to install a specific list
         * @param listName - The list to install.
         * @param callback - An optional function called after the execution completes.
         */
        installList(listName: string, callback?: any): any;
        /**
         * Method to install a specific site custom action
         * @param caName - The site user custom action to install.
         * @param callback - An optional function called after the execution completes.
         */
        installSiteCustomAction(caName: string, callback?: any): any;
        /**
         * Method to install a specific web custom action
         * @param caName - The web user custom action to install.
         * @param callback - An optional function called after the execution completes.
         */
        installWebCustomAction(caName: string, callback?: any): any;
        /**
         * Method to install the configuration
         * @param callback - An optional function called after the execution completes.
         */
        uninstall(callback?: () => void): any;
        /**
         * Method to uninstall by the configuration type.
         * @param cfgType - The configuration type.
         * @param callback - An optional function called after the execution completes.
         * @param targetName - The target configuration type to uninstall.
         */
        uninstallByType(cfgType: ISPConfigTypes, callback?: any, targetName?: string): any;
        /**
         * Method to uninstall a specific content type
         * @param ctName - The content type to uninstall.
         * @param callback - An optional function called after the execution completes.
         */
        uninstallContentType(ctName: string, callback?: any): any;
        /**
         * Method to uninstall a specific list
         * @param listName - The list to uninstall.
         * @param callback - An optional function called after the execution completes.
         */
        uninstallList(listName: string, callback?: any): any;
        /**
         * Method to uninstall a specific site custom action
         * @param caName - The site user custom action to uninstall.
         * @param callback - An optional function called after the execution completes.
         */
        uninstallSiteCustomAction(caName: string, callback?: any): any;
        /**
         * Method to uninstall a specific web custom action
         * @param caName - The web user custom action to uninstall.
         * @param callback - An optional function called after the execution completes.
         */
        uninstallWebCustomAction(caName: string, callback?: any): any;
    }
    /**
     * SharePoint Configuration - Properties
     */
    export interface ISPConfigProps {
        /** The content types. */
        ContentTypes?: Array<ISPCfgContentTypeInfo>;
        /** The custom action configuration. */
        CustomActionCfg?: ISPCfgCustomActionInfo;
        /** The site column configuration. */
        Fields?: Array<ISPCfgFieldInfo>;
        /** The list configuration. */
        ListCfg?: Array<ISPCfgListInfo>;
        /** The web part configuration. */
        WebPartCfg?: Array<ISPCfgWebPartInfo>;
    }
    /**
     * SharePoint Configuration - Types
     */
    export interface ISPConfigTypes {
        /** Fields */
        Fields: number;
        /** Content Types */
        ContentTypes: number;
        /** Lists */
        Lists: number;
        /** Site User Custom Actions */
        SiteUserCustomActions: number;
        /** Web User Custom Actions */
        WebUserCustomActions: number;
    }
    /**
     * Export the Helper Interface
     */
    export interface IHelper {
        /**
         * App-Model helper methods
         */
        App: IHelperApp;
        /**
         * JSLink helper methods
         */
        JSLink: IHelperJSLink;
        /**
         * Loader
         */
        Loader: ILoader;
        /**
         * Web helper methods
         */
        SPConfig: ISPConfig;
    }
}
declare module "definitions/lib/jsLink" {
    /**
     * Fields Template
     */
    export interface IFieldTemplate {
        DisplayForm?: any;
        EditForm?: any;
        Name: string;
        NewForm?: any;
        View?: any;
    }
    /**
     * Templates
     */
    export interface ITemplates {
        Body?: any;
        Footer?: any;
        Fields?: Array<IFieldTemplate>;
        Group?: any;
        Header?: any;
        Item?: any;
        OnPostRender?: any;
        OnPreRender?: any;
    }
    /**
     * JS Link Template
     */
    export interface IJSLink {
        BaseViewID?: number | string;
        ListTemplateType?: number;
        OnPostRender?: any;
        OnPreRender?: any;
        Templates?: ITemplates;
    }
}
declare module "definitions/lib/methodInfo" {
    /**
     * Method Information Settings
     */
    export interface IMethodInfo {
        argNames?: Array<string>;
        argValues?: Array<any>;
        data?: any;
        getAllItemsFl?: boolean;
        inheritMetadataType?: boolean;
        metadataType?: string;
        name: string;
        replaceEndpointFl?: boolean;
        requestMethod?: string;
        requestType: number;
        returnType?: string;
    }
}
declare module "definitions/lib/oData" {
    /**
     * OData Settings
     */
    export interface ODataQuery {
        /** An optional custom query string */
        Custom?: string;
        /** The properties to expand. */
        Expand?: Array<string>;
        /** The filters. */
        Filter?: string;
        /**
         * Flag to get all items.
         * Use this flag to get past the 5000 limit.
         */
        GetAllItems?: boolean;
        /** The order by fields. */
        OrderBy?: Array<string>;
        /** The fields to select. */
        Select?: Array<string>;
        /** The number of results to skip. */
        Skip?: number;
        /** The max number of results to return. */
        Top?: number;
    }
}
declare module "definitions/lib/promise" {
    /**
     * The promise class
     */
    export interface IPromise {
        /**
         * Constructor
         * @param callback - The method to be executed after the promise completes.
         */
        new (callback?: (...args) => void): any;
        /**
         * Method to set the callback method of the promise.
         * @param callback - The method to be executed after the promise completes.
         */
        done(callback?: (...args) => void): any;
        /**
         * Method to set this promise as completed.
         * @param args - The arguments to pass to the callback.
         */
        resolve(...args: any[]): any;
    }
}
declare module "definitions/lib/requestType" {
    export type IRequestType = {
        Custom;
        Delete;
        Merge;
        OData;
        Get;
        GetBuffer;
        GetWithArgs;
        GetWithArgsInBody;
        GetWithArgsInQS;
        GetWithArgsValueOnly;
        GetReplace;
        Post;
        PostWithArgs;
        PostWithArgsInBody;
        PostWithArgsInQS;
        PostWithArgsValueOnly;
        PostReplace;
    };
}
declare module "definitions/lib/rest" {
    import { IContextInformation, IEmail, IHelper, IList, IPeopleManager, IPeoplePicker, IProfileLoader, ISearch, ISite, ISocialFeed, ITargetInfo, IUserProfile, IWeb } from "definitions/index";
    /**
     * SharePoint REST Library
     */
    export interface IREST {
        /**
         * A reference to the _spPageContextInfo global variable.
         */
        ContextInfo: IContextInformation;
        /**
         * False by default.
         */
        DefaultRequestToHostFl: boolean;
        /**
         * Use this api to send emails.
         */
        Email: IEmail;
        /**
         * Helper methods.
         */
        Helper: IHelper;
        /**
         * Use this api to interact with SharePoint lists and libraries.
         * @param listName - The name of the list.
         * @param targetInfo - (Optional) The target information.
         */
        List: (listName: string, targetInfo?: ITargetInfo) => IList;
        /**
         * Use this api to interact with SharePoint user profiles.
         * @param targetInfo - (Optional) The target information.
         */
        PeopleManager: (targetInfo?: ITargetInfo) => IPeopleManager;
        /**
         * Use this api to search for users.
         * @param settings - The search settings.
         */
        PeoplePicker: (settings?: ITargetInfo) => IPeoplePicker;
        /**
         * Use this api to interact with the user profile loader.
         * @param targetInfo - (Optional) The target information.
         */
        ProfileLoader: (targetInfo?: ITargetInfo) => IProfileLoader;
        /**
         * Use this api to interact with the SharePoint search service.
         * @param url - The optional url to execute the search against.
         * @param settings - The search settings.
         */
        Search: (url?: string, settings?: ITargetInfo) => ISearch;
        /**
         * Use this api to interact with a SharePoint site collection.
         * @param url - (Optional) The site url.
         * @param targetInfo - (Optional) The target information.
         */
        Site: (url?: string, targetInfo?: ITargetInfo) => ISite;
        /**
         * Use this api to interact with the current user's social profile.
         */
        SocialFeed: ISocialFeed;
        /**
         * Use this api to interact with the current user's profile.
         * @param targetInfo - (Optional) The target information.
         */
        UserProfile: (targetInfo?: ITargetInfo) => IUserProfile;
        /**
         * Use this api to interact with a SharePoint web.
         * @param url - (Optional) The web url.
         * @param targetInfo - (Optional) The target information.
         */
        Web: (url?: string, targetInfo?: ITargetInfo) => IWeb;
    }
}
declare module "definitions/lib/search" {
    import { ComplexTypes, IBase, ITargetInfo } from "definitions/index";
    /**
     * Search
     */
    export interface ISearch extends IBase<ISearch, ComplexTypes.SearchResult> {
        /**
         * Constructor
         * @param url - The optional url to execute the search against.
         * @param settings - The search settings.
         */
        new (url?: string, settings?: ITargetInfo): ISearch;
        /** Method to execute a search query.
         * @param settings - The search request settings.
        */
        postquery(settings: ComplexTypes.SearchRequest): IBase<ComplexTypes.SearchResult>;
        /** Method to execute a search query.
         * @param settings - The search request settings.
        */
        searchquery(settings: ComplexTypes.SearchRequest): IBase<ComplexTypes.SearchResult>;
        /** Method to execute a search suggestion.
         * @param settings - The search suggest settings.
        */
        suggest(settings: ComplexTypes.SearchSuggestion): IBase<ComplexTypes.QuerySuggestionResults>;
    }
}
declare module "definitions/lib/targetInfo" {
    /**
     * Request Information
     */
    export interface IRequestInfo {
        /** The data being sent in the body of the request. */
        data?: object;
        /** The request method (GET/POST) */
        method: string;
        /** The url of the request. */
        url: string;
    }
    /**
     * Target Information
     */
    export interface ITargetInfo {
        /** True if the expected request returns an array buffer. */
        bufferFl?: boolean;
        /** The method to execute after the asynchronous request executes. */
        callback?: () => void;
        /** The data to be passed in the body of the request. */
        data?: any;
        /** True to default the request to the web api, site api otherwise. */
        defaultToWebFl?: boolean;
        /** The endpoint of the request. */
        endpoint?: string;
        /** The method to execute. */
        method?: string;
        /** True to override the default request to host flag. */
        overrideDefaultRequestToHostFl?: boolean;
        /** The request digest to use for the request. */
        requestDigest?: string;
        /** The request header. */
        requestHeader?: object;
        /** The request information. */
        requestInfo?: object;
        /** The url of the site/web to execute the request against. */
        url?: string;
    }
}
declare module "definitions/lib/types" {
    import { IUser, SPTypes } from "definitions/index";
    /**
     * App Tiles
     */
    export interface IAppTiles {
        AppId: string;
        AppPrincipalId: string;
        AppSource: number;
        AppStatus: number;
        AppType: number;
        AssetId: string;
        BaseTemplate: number;
        ChildCount: number;
        ContentMarket: string;
        CustomSettingsUrl: string;
        Description: string;
        IsCorporateCatalogSite: boolean;
        LastModified: string;
        LastModifiedDate: string;
        ProductId: string;
        Target: string;
        Thumbnail: string;
        Title: string;
        Version: number;
    }
    /**
     * Attachment
     */
    export interface IAttachment {
        /** The filename. */
        FileName: string;
        /** The filename as a path. */
        FileNameAsPath: IResourcePath;
        /** The server relative path. */
        ServerRelativePath: IResourcePath;
        /** The server relative url. */
        ServerRelativeUrl: string;
    }
    /**
     * Audit
     */
    export interface IAudit {
        AuditFlags: number;
    }
    /**
     * Base Permissions
     */
    export interface IBasePermissions {
        High: number;
        Low: number;
    }
    /**
     * Contains Confidential Information
     */
    export interface IContainsConfidentialInfo {
        ContainsConfidentialInfo: boolean;
        ContainsConfidentialInfoLearnMoreUrl: string;
        ExternalSharingTipsEnabled: boolean;
        ExternalSharingTipsInfoLearnMoreUrl: string;
    }
    /**
     * Content Type Creation Information
     */
    export interface IContentTypeCreationInformation {
        /** The content type description. */
        Description?: string;
        /** The content type group. */
        Group?: string;
        /** The content type id. */
        Id?: string;
        /** The content type name. */
        Name: string;
    }
    /**
     * Context Information
     */
    export interface IContextInfo {
        FormDigestTimeoutSeconds: number;
        FormDigestValue: string;
        LibraryVersion: string;
        SiteFullUrl: string;
        SupportedSchemaVersions: IResults<string>;
        WebFullUrl: string;
    }
    /**
     * Entity Data
     */
    export interface IEntityData {
        /** Account Name */
        AccountName: string;
        /** Department. */
        Department: string;
        /** EMail */
        Email: string;
        /** */
        IsAltSecIdPresent: boolean;
        /** Mobile Phone */
        MobilePhone: string;
        /** Object ID */
        ObjectId: string;
        /** Principal Type */
        PrincipalType: string;
        /** SharePoint User ID */
        SPUserID: string;
        /** Title */
        Title: string;
    }
    /**
     * Event Receiver Definition Creation Information
     */
    export interface IEventReceiverDefinitionCreationInformation {
        /** The event receiver type. */
        EventType: SPTypes.EventReceiverType | number;
        /** The strong name of the assembly that is used for receiving events. */
        ReceiverAssembly?: string;
        /** A string that represents the class that is used for receiving events. */
        ReceiverClass?: string;
        /** The name of the event receiver. */
        ReceiverName: string;
        /** The URL of a web service that is used for receiving events. */
        ReceiverUrl?: string;
        /** An integer that represents the relative sequence of the event. */
        SequenceNumber?: number;
        /** The execution synchronization of the event receiver. */
        Synchronization?: number;
    }
    /**
     * Feature
     */
    export interface IFeature {
        DefinitionId: string;
    }
    /**
     * Field Creation Information
     */
    export interface IFieldCreationInformation {
        /** The choices. */
        Choices?: {
            results: Array<string>;
        };
        /** The field type. */
        FieldTypeKind: SPTypes.FieldType | number;
        /** Indicates whether only the first eight characters are used for the field name. */
        IsCompactName?: boolean;
        /** The name of the source lookup field. */
        LookupFieldName?: string;
        /** The ID of the target list for the source lookup field. */
        LookupListId?: any;
        /** The ID of the site that contains the list that is the source for the lookup field value. */
        LookupWebId?: any;
        /** A value that specifies whether the field requires a value. */
        Required?: boolean;
        /** A value that specifies the display name of the field. */
        Title: string;
    }
    /**
     * Field Link
     */
    export interface IFieldLink {
        DisplayName: string;
        FieldInternalName: string;
        Hidden: boolean;
        Id: string;
        Name: string;
        ReadOnly: boolean;
        Required: boolean;
        ShowInDisplayForm: boolean;
    }
    /**
     * Group Creation Information
     */
    export interface IGroupCreationInformation {
        /** The group description. */
        Description?: string;
        /** The group name. */
        Title: string;
    }
    /**
     * Form
     */
    export interface IForm {
        Id: string;
        ResourcePath: IResourcePath;
        ServerRelativeUrl: string;
        FormType: number;
    }
    /**
     * Information Rights Management Settings
     */
    export interface IInformationRightsManagementSettings {
        AllowPrint: boolean;
        AllowScript: boolean;
        AllowWriteCopy: boolean;
        DisableDocumentBrowserView: boolean;
        DocumentAccessExpireDays: number;
        DocumentLibraryProtectionExpireDate: string;
        EnableDocumentAccessExpire: boolean;
        EnableDocumentBrowserPublishingView: boolean;
        EnableGroupProtection: boolean;
        GroupName: string;
        LicenseCacheExpireDays: number;
        PolicyDescription: string;
        PolicyTitle: string;
        TemplateId: string;
    }
    /**
     * List Creation Information
     */
    export interface IListCreationInformation {
        /** The list template type. */
        BaseTemplate: SPTypes.ListTemplateType | number;
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
     * List Data Source
     */
    export interface IListDataSource {
        Properties: Array<string>;
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
     * Navigation
     */
    export interface INavigation {
        QuickLaunch: IResults<INavigationNode>;
        TopNavigationBar: IResults<INavigationNode>;
    }
    /**
     * Navigation Node
     */
    export interface INavigationNode {
        Id: number;
        IsDocLib: boolean;
        IsExternal: boolean;
        IsVisible: boolean;
        ListTemplateType: number;
        Title: string;
        Url: string;
    }
    /**
     * People Picker Query
     */
    export interface IPeoplePickerQuery {
        /** True to allow the email address. */
        AllowEmailAddresses?: boolean;
        /** True to allow multiple entities.  */
        AllowMultipleEntities?: boolean;
        /** True to allow all url zones. */
        AllUrlZones?: boolean;
        /** True to enable claim providers. */
        EnabledClaimProviders?: boolean;
        /** True to force claims. */
        ForceClaims?: boolean;
        /** Maximum entity suggestions. */
        MaximumEntitySuggestions: number;
        /** The principal source. */
        PrincipalSource?: number;
        /** The principal type. */
        PrincipalType?: number;
        /** The query string. This value must be >= 3 characters. */
        QueryString?: string;
        /** Required flag. */
        Required?: boolean;
        /** The SharePoint group id. */
        SharePointGroupID?: number;
        /** The url zone. */
        UrlZone?: number;
        /** Url zone specified flag. */
        UrlZoneSpecified?: boolean;
        /** The web. */
        Web?: any;
        /** The web application id. */
        WebApplicationID?: any;
    }
    /**
     * People Picker Resolve User
     */
    export interface IPeoplePickerResolveUser {
        ClientPeoplePickerResolveUser: Array<IPeoplePickerUser>;
    }
    /**
     * People Picker Search User
     */
    export interface IPeoplePickerSearchUser {
        ClientPeoplePickerSearchUser: Array<IPeoplePickerUser>;
    }
    /**
     * People Picker User
     */
    export interface IPeoplePickerUser {
        /** Description */
        Description: string;
        /** Display Text */
        DisplayText: string;
        /** The user entity data. */
        EntityData: IEntityData;
        /** Entity Type */
        EntityType: string;
        /** Flag to determine if the search user is resolved. */
        IsResolved: boolean;
        /** The search value. */
        Key: string;
        /** An array of un-resolved user entities. */
        MultipleMatches: Array<IEntityData>;
        /** Provider Display Name */
        ProviderDisplayName: string;
        /** Provider Name */
        ProviderName: string;
    }
    /**
     * Recycle Bin Item
     */
    export interface IRecycleBinItem {
        Author: IUser;
        AuthorEmail: string;
        AuthorName: string;
        DeletedBy: IUser;
        DeletedByEmail: string;
        DeletedByName: string;
        DeletedDate: string;
        DeletedDateLocalFormatted: string;
        DirName: string;
        DirNamePath: IResourcePath;
        Id: string;
        ItemState: number;
        ItemType: number;
        LeafName: string;
        LeafNamePath: IResourcePath;
        Size: string;
        Title: string;
    }
    /**
     * Regional Settings
     */
    export interface IRegionalSettings {
        AdjustHijriDays: number;
        AlternateCalendarType: number;
        AM: string;
        CalendarType: number;
        Collation: number;
        CollationLCID: number;
        DateFormat: number;
        DateSeparator: string;
        DecimalSeparator: string;
        DigitGrouping: string;
        FirstDayOfWeek: number;
        FirstWeekOfYear: number;
        IsEastAsia: boolean;
        IsRightToLeft: boolean;
        IsUIRightToLeft: boolean;
        ListSeparator: string;
        LocaleId: number;
        NegativeSign: string;
        NegNumberMode: number;
        PM: string;
        PositiveSign: string;
        ShowWeeks: boolean;
        ThousandSeparator: string;
        Time24: boolean;
        TimeMarkerPosition: number;
        TimeSeparator: string;
        WorkDayEndHour: number;
        WorkDays: number;
        WorkDayStartHour: number;
    }
    /**
     * Resource Path
     */
    export interface IResourcePath {
        DecodedUrl: string;
    }
    /**
     * Results
     */
    export interface IResults<P> {
        /** The collection data */
        results: Array<P>;
    }
    /**
     * String Value
     */
    export interface IStringValue {
        StringValue: string;
    }
    /**
     * Subscription
     */
    export interface ISubscription {
    }
    /**
     * Theme Information
     */
    export interface IThemeInfo {
        AccessibleDescription: string;
        ThemeBackgroundImageUri: string;
    }
    /**
     * Upgrade Info
     */
    export interface IUpgradeInfo {
        ErrorFile: string;
        Errors: number;
        LastUpdated: string;
        LogFile: string;
        RequestDate: string;
        RetryCount: number;
        StartTime: string;
        Status: number;
        UpgradeType: number;
        Warnings: number;
    }
    /**
     * Usage Information
     */
    export interface IUsageInfo {
        Bandwidth: number;
        DiscussionStorage: number;
        Hits: number;
        Storage: number;
        StoragePercentageUsed: number;
        Visits: number;
    }
    /**
     * User Creation Information
     */
    export interface IUserCreationInformation {
        Email?: string;
        LoginName: string;
        Title?: string;
    }
    /**
     * User Custom Action Information
     */
    export interface IUserCustomActionCreationInformation {
        /** A value that specifies an implementation specific XML fragment that determines user export interface properties of the custom action. */
        CommandUIExtension?: string;
        /** The description of the custom action. */
        Description?: string;
        /** A value that specifies an implementation-specific value that determines the position of the custom action in the page. */
        Group?: string;
        /** The URL of the image associated with the custom action. */
        ImageUrl?: string;
        /** The location of the custom action. */
        Location?: string;
        /** The name of the custom action. */
        Name: string;
        /** The value that specifies the identifier of the object associated with the custom action. */
        RegistrationId?: string;
        /** The value that specifies the type of object associated with the custom action. Represents an SP.UserCustomActionRegistrationType value. */
        RegistrationType?: SPTypes.UserCustomActionRegistrationType | number;
        /** The value that specifies the permissions needed for the custom action. */
        Rights?: any;
        /** The value that specifies the ECMAScript to be executed when the custom action is performed. */
        ScriptBlock?: string;
        /** A value that specifies the URI of a file which contains the ECMAScript to execute on the page. */
        ScriptSrc?: string;
        /** The value that specifies an implementation-specific value that determines the order of the custom action that appears on the page. */
        Sequence?: number;
        /** The display title of the custom action. */
        Title?: string;
        /** The URL, URI, or ECMAScript (JScript, JavaScript) function associated with the action. */
        Url?: string;
    }
    /**
     * Version
     */
    export interface IVersion {
        /** The check-in comment. */
        CheckInComment: string;
        /** The created date. */
        Created: string;
        /** The version id. */
        ID: number;
        /** Flag determining if this is the current version. */
        IsCurrentVersion: boolean;
        /** The file length. */
        Length: number;
        /** The file size. */
        Size: number;
        /** The file url. */
        Url: string;
        /** The version label. */
        VersionLabel: string;
    }
    /**
     * View Creation Information
     */
    export interface IViewCreationInformation {
        /** The relative url to the jslink */
        JSLink?: string;
        /** The new list view is a paged view. */
        Paged?: boolean;
        /** The new list view is a personal view. If the value is false, the new list view is a public view. */
        PersonalView?: boolean;
        /** The maximum number of list items that the new list view displays on a visual page of the list view. */
        RowLimit?: number;
        /** Option to set as default view. */
        SetAsDefaultView?: boolean;
        /** The name of the view. */
        Title: string;
        /** The query for the new list view. */
        ViewQuery?: string;
        /** The view type. */
        ViewTypeKind?: SPTypes.ViewType | number;
    }
    /**
     * Visualization
     */
    export interface IVisualization {
        DefaultScreen: IVisualizationStyleSet;
        DetailView: IVisualizationStyleSet;
        MediumScreen: IVisualizationStyleSet;
        SmallScreen: IVisualizationStyleSet;
        VisualizationAppInfo: IVisualizationAppInfo;
        VisualizationType: number;
    }
    /**
     * Visualization App Information
     */
    export interface IVisualizationAppInfo {
        DesignUri: string;
        Id: string;
        RuntimeUri: string;
    }
    /**
     * Visualization Field
     */
    export interface IVisualizationField {
        InternalName: string;
        Style: string;
    }
    /**
     * Visualization Style Set
     */
    export interface IVisualizationStyleSet {
        AspectRatio: string;
        BackgroundColor: string;
        Fields: IVisualizationField;
        MinHeight: string;
    }
    /**
     * Web Context Information
     */
    export interface IContextWebInfo {
        GetContextWebInformation: IContextInfo;
    }
    /**
     * Web Creation Information
     */
    export interface IWebCreationInformation {
        /** The description of the new site. */
        Description?: string;
        /** The locale ID that specifies the language of the new site. */
        Language?: number;
        /** A value that specifies the title of the new site. */
        Title: string;
        /** The URL leaf name of the new site. The URL must not contain the following:
            The characters ~, ", #, %, &, *, :, <, >, ?, \, {, |, or }
            The string \x7f
            Consecutive . or / characters
            Starting ., /, or _ characters
            Ending . or / characters
        */
        Url: string;
        /** A value that specifies whether the new site will inherit permissions from its parent site. */
        UseSamePermissionsAsParentSite?: boolean;
        /** A value that specifies the name of the site template to be used for creating the new site. Use the GetAvailableWebTemplates method to get the names of available web templates on the site. */
        WebTemplate: string;
    }
    /**
     * Web Information
     */
    export interface IWebInfo {
        Configuration: number;
        Created: string;
        Description: string;
        Id: string;
        Language: number;
        LastItemModifiedDate: string;
        LastItemUserModifiedDate: string;
        ServerRelativeUrl: string;
        Title: string;
        WebTemplate: string;
        WebTemplateId: number;
    }
    /**
     * Workflow Template
     */
    export interface IWorkflowTemplate {
        AllowManual: boolean;
        AssociationUrl: string;
        AutoStartChange: boolean;
        AutoStartCreate: boolean;
        Description: string;
        Id: string;
        IsDeclarative: boolean;
        Name: string;
        PermissionsManual: IBasePermissions;
    }
}
declare module "definitions/lib/index" {
    import * as Results from "definitions/lib/results";
    import * as SPTypes from "definitions/lib/sptypes";
    export * from "definitions/lib/base";
    export * from "definitions/lib/contextInfo";
    export * from "definitions/lib/email";
    export * from "definitions/lib/helper";
    export * from "definitions/lib/jsLink";
    export * from "definitions/lib/methodInfo";
    export * from "definitions/lib/oData";
    export * from "definitions/lib/promise";
    export * from "definitions/lib/requestType";
    export * from "definitions/lib/rest";
    export * from "definitions/lib/search";
    export * from "definitions/lib/targetInfo";
    export * from "definitions/lib/types";
    export { Results, SPTypes };
}
declare module "definitions/list/attachments" {
    import { IAttachment, IBase, IBaseCollection } from "definitions/index";
    /**
     * Methods
     */
    export interface IAttachmentFilesMethods {
        /**
         * Adds the attachment that is represented by the specified file name and byte array to the list item.
         * @param fileName - The filename of the attachment.
         * @param content - The contents of the file. The maximum size of a binary file that you can add by using the REST API is 2 GB.
         */
        add(fileName: any, content: any): IBase<IAttachment>;
        /**
         * Method to get the next set of results.
         */
        next(): IBase<IAttachmentFiles>;
    }
    /**
     * Attachment Files
     */
    export interface IAttachmentFiles extends IAttachmentFilesMethods, IBaseCollection<IAttachment, IAttachmentFiles, IAttachment> {
    }
}
declare module "definitions/list/item" {
    import { IAttachment, IAttachmentFiles, IAttachmentFilesMethods, IBase, IBasePermissions, IContentType, IContentTypeResult, IFile, IFileResult, IFolder, IFolderResult, IList, IListResult, IPropertyValues, IResults, IRoleAssignment, IRoleAssignmentResults, IRoleAssignments } from "definitions/index";
    /**
     * List Item Methods
     */
    export interface IListItemMethods {
        /**
         * Creates unique role assignments for the securable object.
         * @param copyRoleAssignments - True to copy the role assignments from the parent securable object; false to remove the inherited role assignments except one that contains the current user.
         * @param clearSubScopes - True to make all child securable objects inherit role assignments from the current object; false (default) to leave role assignments unchanged for child securable objects that do not inherit role assignments from their parent object.
         */
        breakRoleInheritance(copyRoleAssignments: any, clearSubScopes: any): IBase;
        /**
         * Deletes the list item.
         */
        delete(): IBase;
        /**
         * Gets the effective permissions that a specified user has on the list item.
         * @param loginName - The login name.
         */
        getUserEffectivePermissions(loginName: any): IBase;
        /**
         * Moves the list item to the Recycle Bin and returns the identifier of the new Recycle Bin item.
         */
        recycle(): IBase;
        /**
         * Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.
         */
        resetRoleInheritance(): IBase;
        /**
         * Updates it's properties.
         * @param data - The list properties to update.
         */
        update(data: any): IBase;
        /**
         * Validates and sets the values of the specified collection of fields for the list item.
         * @param formValues - The fields to change and their new values. Pass this parameter in the request body, as shown in the request example.
         * @param bNewDocumentUpdate - True if the list item is a document being updated after upload; otherwise false. Pass this parameter in the request body, as shown in the request example, or in the URI path.
         */
        validateUpdateListItem(formValues: any, bNewDocumentUpdate: any): any;
    }
    /**
     * List Item Properties
     */
    export interface IListItemProps {
        /**
         * Gets a value that specifies the display name of the list item.
         */
        DisplayName: string;
        /** Gets a value that specifies the effective permissions on the list item that are assigned to the current user. */
        EffectiveBasePermissions: IBasePermissions;
        /** Gets the effective base permissions for the current user, as they should be displayed in UI. */
        EffectiveBasePermissionsForUI: IBasePermissions;
        /** Gets a value that specifies whether the list item is a file or a list folder. Represents an SP.FileSystemObjectType value: Invalid = -1; File = 0; Folder = 1; Web = 2. */
        FileSystemObjectType: number;
        IconOverlay: string;
        /** Gets a value that specifies the list item identifier. */
        Id: number;
        ServerRedirectedEmbedUrl: string;
    }
    /**
     * List Item Query Properties
     */
    export interface IListItemQueryProps {
        /**
         * Get the attachment collection.
         */
        AttachmentFiles(): IAttachmentFiles;
        /**
         * Gets the specified attachment file.
         * @param fileName - The filename of the attachment.
         */
        AttachmentFiles(fileName: string): IBase<IAttachment>;
        /**
         * Gets a value that specifies the content type of the list item.
         */
        ContentType(): IContentType;
        /**
         * Gets the values for the list item as HTML.
         */
        FieldValuesAsHtml(): IBase;
        /**
         * Gets the list item's field values as a collection of string values.
         */
        FieldValuesAsText(): IBase;
        /**
         * Gets the formatted values to be displayed in an edit form.
         */
        FieldValuesForEdit(): IBase;
        /**
         * Gets the file that is represented by the item from a document library.
         */
        File(): IFile;
        /**
         * Gets the object where role assignments for this object are defined. If role assignments are defined directly on the current object, the current object is returned.
         */
        FirstUniqueAncestorSecurableObject(): IBase<string>;
        /**
         * Gets a folder object that is associated with a folder item.
         */
        Folder(): IFolder;
        GetDlpPolicyTip(): IBase;
        /**
         * Gets a value that specifies whether the role assignments are uniquely defined for this securable object or inherited from a parent securable object.
         */
        HasUniqueRoleAssignments(): IBase<string>;
        /**
         * Gets the parent list that contains the list item.
         */
        ParentList(): IList;
        /**
         * Property Bag
         */
        Properties(): IBase<IPropertyValues>;
        /**
         * Gets the role assignments for the securable object.
         */
        RoleAssignments(): IRoleAssignments;
        /**
         * Gets the role assignment(s) for the securable object.
         * @param id - The role assignment id.
         */
        RoleAssignments(id: string): IRoleAssignment;
    }
    /**
     * List Item Query Result
     */
    export interface IListItemQueryResult extends IListItemMethods, IListItemProps {
        /**
         * Get the attachment collection.
         */
        AttachmentFiles: IAttachmentFilesMethods & IResults<IAttachment>;
        /**
         * Gets a value that specifies the content type of the list item.
         */
        ContentType: IContentTypeResult;
        /**
         * Gets the values for the list item as HTML.
         */
        FieldValuesAsHtml: Array<string>;
        /**
         * Gets the list item's field values as a collection of string values.
         */
        FieldValuesAsText: Array<string>;
        /**
         * Gets the formatted values to be displayed in an edit form.
         */
        FieldValuesForEdit: Array<string>;
        /**
         * Gets the file that is represented by the item from a document library.
         */
        File: IFileResult;
        /**
         * Gets the object where role assignments for this object are defined. If role assignments are defined directly on the current object, the current object is returned.
         */
        FirstUniqueAncestorSecurableObject: IListResult;
        /**
         * Gets a folder object that is associated with a folder item.
         */
        Folder: IFolderResult;
        GetDlpPolicyTip(): IBase;
        /**
         * Gets a value that specifies whether the role assignments are uniquely defined for this securable object or inherited from a parent securable object.
         */
        HasUniqueRoleAssignments: boolean;
        /**
         * Gets the parent list that contains the list item.
         */
        ParentList: IListResult;
        /**
         * Property Bag
         */
        Properties: Array<string>;
        /**
         * Gets the role assignments for the securable object.
         */
        RoleAssignments: IRoleAssignmentResults;
    }
    /**
     * List Item Result
     */
    export interface IListItemResult extends IListItemMethods, IListItemProps, IListItemQueryProps, IBase<IListItem, IListItemResult, IListItemQueryResult> {
    }
    /**
     * List Item
     */
    export interface IListItem extends IListItemMethods, IListItemQueryProps, IBase<IListItem, IListItemResult, IListItemQueryResult> {
    }
}
declare module "definitions/list/items" {
    import { IBase, IBaseCollection, IListItem, IListItemQueryResult, IListItemResult } from "definitions/index";
    /**
     * Methods
     */
    export interface IListItemsMethods {
        /**
         * Adds an item to the list item collection.
         * @param data - The item properties.
         */
        add(data: any): IBase<IListItem, IListItemResult>;
        /**
         * Gets an item by the specified id.
         * @param id - The item id.
         */
        getById(id: any): IListItem & IBase<IListItem, IListItemResult, IListItemQueryResult>;
        /**
         * Method to get the next set of results.
         */
        next(): IBase<IListItems, IListItemResults>;
    }
    /**
     * List Items
     */
    export interface IListItems extends IListItemsMethods, IBaseCollection<IListItem, IListItemResult, IListItemQueryResult> {
    }
    /**
     * List Item Results
     */
    export interface IListItemResults extends IListItemsMethods, IBaseCollection<IListItemResult, IListItemResult, IListItemQueryResult> {
    }
}
declare module "definitions/list/list" {
    import { IBase, IBasePermissions, IContentType, IContentTypeResults, IContentTypes, IEventReceiver, IEventReceiverResults, IEventReceivers, IField, IFieldResults, IFields, IFile, IFolder, IFolderResult, IForm, IInformationRightsManagementSettings, IListDataSource, IListItem, IListItemQueryResult, IListItemResult, IListItemResults, IListItems, IResourcePath, IResults, IRoleAssignment, IRoleAssignmentResults, IRoleAssignments, IStringValue, ISubscription, ITargetInfo, IUserCustomAction, IUserCustomActionResults, IUserCustomActions, IView, IViewQueryResult, IViewResult, IViewResults, IViews, IWeb, IWebResult, SPTypes } from "definitions/index";
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
         * A static method to get the list by the entity name.
         * @param entityTypeName - The entity type name of the list.
         * @param callback - The method to be executed after the request completes.
         */
        getByEntityName(entityTypeName: string, callback: (IList) => void, targetInfo?: any): IBase<IList, IListResult, IListQueryResult>;
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
        getListItemChangesSinceToken(query: any): IBase<IListItems, IListItemResults>;
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
        renderListFormData(itemId: any, formId: any, mode: SPTypes.ControlMode): IBase;
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
        /** Gets a value that specifies whether the list supports content types. */
        AllowContentTypes: boolean;
        AllowDeletion: boolean;
        /** Gets the list definition type on which the list is based. Represents a ListTemplateType value. See ListTemplateType in the .NET client object model reference for template type values. */
        BaseTemplate: SPTypes.ListTemplateType | number;
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
        CurrentChangeToken: IStringValue;
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
        /**
         * Gets the URL of the default view for the list.
         */
        DefaultViewUrl(): IBase<string>;
        DescriptionResouce(): IBase<IResourcePath>;
        /**
         * Gets a value that specifies the effective permissions on the list that are assigned to the current user.
         */
        EffectiveBasePermissions(): IBase<IBasePermissions>;
        /**
         * Gets a value that specifies the effective permissions on the list that are for the user export interface.
        */
        EffectiveBasePermissionsForUI(): IBase<IBasePermissions>;
        /**
         * Gets the event receivers associated with the list.
        */
        EventReceivers(): IEventReceivers;
        /**
         * Gets the event receiver associated with the list.
         * @param id - The id of the event receiver.
        */
        EventReceivers(id: string): IEventReceiver;
        /**
         * Gets the fields in the list.
         */
        Fields(): IFields;
        /**
         * Gets the field in the list.
         * @param internalNameOrTitle - The internal name or title of the field.
         */
        Fields(internalNameOrTitle: string): IField;
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
        ParentWeb(): IWeb;
        /**
         * Gets the role assignments for the securable object.
         */
        RoleAssignments(): IRoleAssignments;
        /**
         * Gets the role assignments for the securable object.
         * @param id - The role assignment id.
         */
        RoleAssignments(id: string): IRoleAssignment;
        /**
         * Gets the root folder of the list.
         */
        RootFolder(): IFolder;
        /**
         * Gets the file in the root folder of the list.
         * @param url - The url of the file within the root folder.
         */
        RootFolder(url: string): IFile;
        /**
         * Gets a value that specifies the list schema of the list.
         */
        SchemaXml(): IBase<string>;
        Subscriptions(): IBase<IBase>;
        TitleResource(): IBase<IResourcePath>;
        /**
         * Gets the user custom actions for the list.
         */
        UserCustomActions(): IUserCustomActions;
        /**
         * Gets the user custom action(s) for the list.
         * @param id - The id of the user custom action.
         */
        UserCustomActions(id: string): IUserCustomAction;
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
        DescriptionResouce: IResourcePath;
        /**
         * Gets a value that specifies the effective permissions on the list that are assigned to the current user.
         */
        EffectiveBasePermissions: IBasePermissions;
        /**
         * Gets a value that specifies the effective permissions on the list that are for the user export interface.
        */
        EffectiveBasePermissionsForUI: IBasePermissions;
        /**
         * Gets the event receivers associated with the list.
        */
        EventReceivers: IEventReceiverResults;
        /**
         * Gets the fields in the list.
         */
        Fields: IFieldResults;
        /**
         * Gets the object where role assignments for this object are defined. If role assignments are defined directly on the current object, the current object is returned.
         */
        FirstUniqueAncestorSecurableObject: IWebResult;
        /**
         * Gets the list forms in the list.
         */
        Forms: IResults<IForm>;
        /**
         * Gets a value that specifies whether the role assignments are uniquely defined for this securable object or inherited from a parent securable object.
         */
        HasUniqueRoleAssignments: boolean;
        /**
         * Gets a value that specifies the information rights management settings.
        */
        InformationRightsManagementSettings: IInformationRightsManagementSettings;
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
        ParentWeb: IWebResult;
        /**
         * Gets the role assignments for the securable object.
         */
        RoleAssignments: IRoleAssignmentResults;
        /**
         * Gets the root folder of the list.
         */
        RootFolder: IFolderResult;
        /**
         * Gets a value that specifies the list schema of the list.
         */
        SchemaXml: string;
        Subscriptions: IResults<ISubscription>;
        TitleResource: IResourcePath;
        /**
         * Gets the user custom actions for the list.
         */
        UserCustomActions: IUserCustomActionResults;
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
        WorkflowAssociations: IResults<string>;
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
        /**
         * Constructor
         * @param listName - The name of the list.
         * @param targetInfo - (Optional) The target information.
         */
        new (listName: string, targetInfo?: ITargetInfo): IList;
    }
}
declare module "definitions/list/lists" {
    import { IBase, IBaseCollection, IList, IListCreationInformation, IListQueryResult, IListResult } from "definitions/index";
    /**
     * Methods
     */
    export interface IListsMethods {
        /**
         * Adds a list to the list collection.
         * @param parameters - The list creation information.
         */
        add(parameters: IListCreationInformation): IBase<IList, IListResult>;
        /**
         * Gets a list that is the default asset location for images or other files, which the users upload to their wiki pages.
         */
        ensureSiteAssetsLibrary(): IBase<IList, IListResult, IListQueryResult>;
        /**
         * Gets a list that is the default location for wiki pages.
         */
        ensureSitePagesLibrary(): IBase<IList, IListResult, IListQueryResult>;
        /**
         * Returns the list with the specified list identifier.
         * @param id - The list id.
         */
        getById(id: any): IList & IBase<IList, IListResult, IListQueryResult>;
        /**
         * Returns the list with the specified title from the collection.
         * @param title - The list title.
         */
        getByTitle(title: any): IList & IBase<IList, IListResult, IListQueryResult>;
        /**
         * Method to get the next set of results.
         */
        next(): IBase<ILists, IListResults>;
    }
    /**
     * Lists
     */
    export interface ILists extends IListsMethods, IBaseCollection<IList, IListResult, IListQueryResult> {
    }
    /**
     * List Results
     */
    export interface IListResults extends IListsMethods, IBaseCollection<IList, IListResult, IListQueryResult> {
    }
}
declare module "definitions/list/versions" {
    import { IBase, IBaseCollection, IVersion } from "definitions/index";
    /**
     * Versions
     */
    export interface IVersions extends IBaseCollection<IVersion, IVersion, IVersion> {
        /**
         * Deletes all versions in the collection.
         */
        deleteAll(): IBase;
        /**
         * Deletes a version, by the specified id.
         * @param id - The version id to delete.
         */
        deleteById(id: any): IBase;
        /**
         * Deletes a version, by the specified label.
         * @param label - The version label to delete.
         */
        deleteByLabel(label: any): IBase;
        /**
         * Gets the version with the specified ID.
         * @param id - The version id to get.
         */
        getById(id: any): IBase<IVersion>;
        /**
         * Method to get the next set of results.
         */
        next(): IBase<IVersions>;
        /**
         * Restores a version, by the specified label.
         * @param label - The version label to restore.
         */
        restoreByLabel(label: any): IBase<IVersion>;
    }
}
declare module "definitions/list/view" {
    import { IBase, IResults, IStringValue, IViewFields, IVisualization } from "definitions/index";
    /**
     * View Methods
     */
    export interface IViewMethods {
        /**
         * Deletes the view.
         */
        delete(): IBase;
        /**
         * Returns the list view as HTML.
         */
        renderAsHtml(): IBase;
        /**
         * Updates it's properties.
         * @param data - The list properties to update.
         */
        update(data: any): IBase;
    }
    /**
     * View Properties
     */
    export interface IViewProps {
        /** Gets or sets a value that specifies fields and functions that define totals shown in a list view. If not null, the XML must conform to FieldRefDefinitionAggregation, as specified in [MS-WSSCAML]. */
        Aggregations: string;
        /** Gets or sets a value that specifies whether totals are shown in the list view. */
        AggregationsStatus: string;
        /** Gets a value that specifies the base view identifier of the list view. */
        BaseViewId: string;
        /** Gets or sets the identifier of the content type with which the view is associated so that the view is available only on folders of this content type. */
        ContentTypeId: IStringValue;
        /** Gets or sets a value that specifies whether the list view is the default list view. */
        DefaultView: boolean;
        /** Gets or sets a value that specifies whether the list view is the default list view for the content type specified by contentTypeId. */
        DefaultViewForContentType: boolean;
        /** Gets or sets a value that specifies whether the list view was modified in an editor. */
        EditorModified: boolean;
        /** Gets or sets a value that specifies the column and row formatting for the list view. If not null, the XML must conform to ViewFormatDefinitions, as specified in [MS-WSSCAML]. */
        Formats: string;
        /** Gets or sets a value that specifies whether the list view is hidden. */
        Hidden: boolean;
        /** Gets a value that specifies the XML document that represents the list view. */
        HtmlSchemaXml: string;
        /** Gets a value that specifies the view identifier of the list view. */
        Id: string;
        /** Gets a value that specifies the URI (Uniform Resource Identifier) of the image for the list view. */
        ImageUrl: string;
        /** Gets or sets a value that specifies whether the current folder is displayed in the list view. */
        IncludeRootFolder: boolean;
        /** Gets or sets the name of the JavaScript file used for the view. */
        JSLink: string;
        /** Gets or sets a string that represents the view XML. */
        ListViewXml: string;
        /** Gets or sets a value that specifies the view method for the list view. If not null, the XML must conform to Method, as specified in [MS-WSSCAP]. */
        Method: string;
        /** Gets or sets a value that specifies whether the list view is the default mobile list view. */
        MobileDefaultView: boolean;
        /** Gets or sets a value that specifies whether the list view is a mobile list view. */
        MobileView: boolean;
        /** Gets a value that specifies the content approval type for the list view. */
        ModerationType: string;
        /** Gets a value that specifies whether list items can be reordered in the list view. */
        OrderedView: boolean;
        /** Gets or sets a value that specifies whether the list view is a paged view. */
        Paged: boolean;
        /** Gets a value that specifies whether the list view is a personal view. */
        PersonalView: boolean;
        /** Gets a value that specifies whether the list view is read-only. */
        ReadOnlyView: boolean;
        /** Gets a value that specifies whether the list view requires client integration rights. */
        RequiresClientIntegration: boolean;
        /** Gets or sets a value that specifies the maximum number of list items to display in a visual page of the list view. */
        RowLimit: number;
        /** Gets or sets a value that specifies the scope for the list view. Represents a ViewScope value. DefaultValue = 0, Recursive = 1, RecursiveAll = 2, FilesOnly = 3. */
        Scope: number;
        /** Gets a value that specifies the server-relative URL of the list view page. */
        ServerRelativeUrl: string;
        /** Gets a value that specifies the identifier of the view style for the list view. */
        StyleId: string;
        TabularView: boolean;
        /** Gets a value that specifies whether the list view is a threaded view. */
        Threaded: boolean;
        /** Gets or sets a value that specifies the display name of the list view. */
        Title: string;
        /** Gets or sets a value that specifies the toolbar for the list view. */
        Toolbar: string;
        /** Gets a value that specifies the name of the template for the toolbar that is used in the list view. */
        ToolbarTemplateName: string;
        /** Gets or sets a value that specifies the view data for the list view. If not null, the XML must conform to FieldRefDefinitionViewData, as specified in [MS-WSSCAML]. */
        ViewData: string;
        VisualizationInfo: IVisualization;
        /** Gets or sets a value that specifies the joins that are used in the list view. If not null, the XML must conform to ListJoinsDefinition, as specified in [MS-WSSCAML]. */
        ViewJoins: string;
        /** Gets or sets a value that specifies the projected fields that will be used by the list view. If not null, the XML must conform to ProjectedFieldsDefinitionType, as specified in [MS-WSSCAML]. */
        ViewProjectedFields: string;
        /** Gets or sets a value that specifies the query that is used by the list view. If not null, the XML must conform to CamlQueryRoot, as specified in [MS-WSSCAML]. */
        ViewQuery: string;
        /** Gets a value that specifies the type of the list view. Can be HTML, GRID, CALENDAR, RECURRENCE, CHART, or GANTT. */
        ViewType: string;
    }
    /**
     * View Query Properties
     */
    export interface IViewQueryProps {
        /** Gets a value that specifies the collection of fields in the list view. */
        ViewFields(): IViewFields;
    }
    /**
     * View Query Result
     */
    export interface IViewQueryResult extends IViewMethods, IViewProps {
        /** A value that specifies the collection of fields in the list view. */
        ViewFields: IResults<string>;
    }
    /**
     * View Result
     */
    export interface IViewResult extends IViewMethods, IViewProps, IViewQueryProps, IBase<IView, IViewResult, IViewQueryResult> {
    }
    /**
     * View
     */
    export interface IView extends IViewMethods, IViewQueryProps, IBase<IView, IViewResult, IViewQueryResult> {
    }
}
declare module "definitions/list/viewFieldCollection" {
    import { IBase } from "definitions/index";
    /**
     * View Fields
     */
    export interface IViewFields extends IBase<IViewFields, IViewFields, IViewFields> {
        /**
         * Properties
         */
        /** Gets a value that specifies the XML schema that represents the collection. */
        SchemaXml: string;
        /** Specifies the XML schema of the collection of fields. The Items property is returned with the resource, but it doesn't have a URI-addressable endpoint. */
        Items: string;
        /** The view field collection. */
        results: Array<any>;
        /**
         * Methods
         */
        /**
         * Adds the field with the specified field internal name or display name to the collection.
         * @param fieldName - The case-sensitive internal name or display name of the field to add.
         */
        addViewField(fieldName: any): IBase;
        /**
         * Moves the field with the specified field internal name to the specified position in the collection.
         * @param field - The case-sensitive internal name of the field to move. Send this parameter and the index parameter in the request body, as shown in the example.
         * @param index - The zero-based index of the new position for the field. Send this parameter and the field parameter in the request body, as shown in the example.
         */
        moveViewFieldTo(field: any, index: any): IBase;
        /**
         * Method to get the next set of results.
         */
        next(): IBase<IViewFields>;
        /**
         * Removes all the fields from the collection.
         */
        removeAllViewFields(): IBase;
        /**
         * Removes the field with the specified field internal name from the collection.
         * @param fieldName - The case-sensitive internal name or display name of the field to add.
         */
        removeViewField(fieldName: any): IBase;
    }
}
declare module "definitions/list/views" {
    import { IBase, IBaseCollection, IView, IViewCreationInformation, IViewQueryResult, IViewResult } from "definitions/index";
    /**
     * Methods
     */
    export interface IViewsMethods {
        /**
         * Adds a list view to the view collection.
         */
        add(parameters: IViewCreationInformation): IBase<IView, IViewResult>;
        /**
         * Gets the list view with the specified ID.
         * @param id - The ID of the view.
         */
        getById(id: any): IView & IBase<IView, IViewResult, IViewQueryResult>;
        /**
         * Gets the list view with the specified title.
         * @param title - The case-sensitive title of the view.
         */
        getByTitle(title: any): IView & IBase<IView, IViewResult, IViewQueryResult>;
        /**
         * Method to get the next set of results.
         */
        next(): IBase<IViews>;
    }
    /**
     * Views
     */
    export interface IViews extends IViewsMethods, IBaseCollection<IView, IViewResult, IViewQueryResult> {
    }
    /**
     * View Results
     */
    export interface IViewResults extends IViewsMethods, IBaseCollection<IViewResult, IViewResult, IViewQueryResult> {
    }
}
declare module "definitions/list/index" {
    export * from "definitions/list/attachments";
    export * from "definitions/list/item";
    export * from "definitions/list/items";
    export * from "definitions/list/list";
    export * from "definitions/list/lists";
    export * from "definitions/list/versions";
    export * from "definitions/list/view";
    export * from "definitions/list/viewFieldCollection";
    export * from "definitions/list/views";
}
declare module "definitions/propertyValues" {
    import { ComplexTypes, IBase, ODataQuery } from "definitions/index";
    /**
     * Property Values
     */
    export interface IPropertyValues extends IBase, ComplexTypes.KeyValue {
        /**
         * Queries the collection.
         * @param oData - The OData information.
         */
        query(query: ODataQuery): IPropertyValues;
    }
}
declare module "definitions/security/roleAssignment" {
    import { IBase, IGroup, IResults, IRoleDefinition, IRoleDefinitions, IUser } from "definitions/index";
    /**
     * Role Assignment Methods
     */
    export interface IRoleAssignmentMethods {
        /**
         * Deletes the role assignment.
         */
        delete(): IBase;
    }
    /**
     * Role Assignment Properties
     */
    export interface IRoleAssignmentProps {
        /** The unique identifier of the role assignment. */
        PrincipalId: string;
    }
    /**
     * Role Assignment Query Properties
     */
    export interface IRoleAssignmentQueryProps {
        /**
         * Gets the user or group that corresponds to the Role Assignment.
         */
        Member(): IBase<IGroup | IUser>;
        /**
         * Gets the collection of role definition bindings for the role assignment.
         */
        RoleDefinitionBindings(): IRoleDefinitions;
    }
    /**
     * Role Assignment Query Result
     */
    export interface IRoleAssignmentQueryResult extends IRoleAssignmentMethods, IRoleAssignmentProps {
        /**
         * Gets the user or group that corresponds to the Role Assignment.
         */
        Member: IUser;
        /**
         * Gets the collection of role definition bindings for the role assignment.
         */
        RoleDefinitionBindings: IResults<IRoleDefinition>;
    }
    /**
     * Role Assignment Result
     */
    export interface IRoleAssignmentResult extends IRoleAssignmentMethods, IRoleAssignmentProps, IRoleAssignmentQueryProps, IBase<IRoleAssignment, IRoleAssignmentResult, IRoleAssignmentQueryResult> {
    }
    /**
     * Role Assignment
     */
    export interface IRoleAssignment extends IRoleAssignmentMethods, IRoleAssignmentQueryProps, IBase<IRoleAssignment, IRoleAssignmentResult, IRoleAssignmentQueryResult> {
    }
}
declare module "definitions/security/roleAssignments" {
    import { IBase, IBaseCollection, IRoleAssignment, IRoleAssignmentQueryResult, IRoleAssignmentResult } from "definitions/index";
    /**
     * Methods
     */
    export interface IRoleAssignmentsMethods {
        /**
         * Adds a new role assignment with the specified principal and role definitions to the collection.
         * @param principalId - The ID of the user or group to assign permissions to.
         * @param roleDefId - The ID of the role definition that defines the permissions to assign.
         */
        addRoleAssignment(principalId: any, roleDefId: any): IBase<IRoleAssignment, IRoleAssignmentResult>;
        /**
         * Gets the role assignment associated with the specified principal ID from the collection.
         * @param principalId - The ID of the user or group to assign permissions to.
         */
        getByPrincipalId(principalId: any): IRoleAssignment & IBase<IRoleAssignment, IRoleAssignmentResult, IRoleAssignmentQueryResult>;
        /**
         * Gets the role definition with the specified role type.
         * @param principalId - The ID of the user or group to assign permissions to.
         * @param roleDefId - The ID of the role definition that defines the permissions to assign.
         */
        removeRoleAssignment(principalId: any, roleDefId: any): IBase;
        /**
         * Method to get the next set of results.
         */
        next(): IBase<IRoleAssignments, IRoleAssignmentResults>;
    }
    /**
     * Role Assignments
     */
    export interface IRoleAssignments extends IRoleAssignmentsMethods, IBaseCollection<IRoleAssignment, IRoleAssignmentResult, IRoleAssignmentQueryResult> {
    }
    /**
     * Role Assignment Results
     */
    export interface IRoleAssignmentResults extends IRoleAssignmentsMethods, IBaseCollection<IRoleAssignmentResult, IRoleAssignmentResult, IRoleAssignmentQueryResult> {
    }
}
declare module "definitions/security/roleDefinition" {
    import { IBase, IBasePermissions, SPTypes } from "definitions/index";
    /**
     * Role Definition Methods
     */
    export interface IRoleDefinitionMethods {
        /**
         * Deletes the role definition.
         */
        delete(): IBase;
    }
    /**
     * Role Definition Properties
     */
    export interface IRoleDefinitionProps {
        /** Gets or sets a value that specifies the base permissions for the role definition. */
        BasePermissions: IBasePermissions;
        /** Gets or sets a value that specifies the description of the role definition. */
        Description: string;
        /** Gets a value that specifies whether the role definition is displayed. */
        Hidden: boolean;
        /** Gets a value that specifies the Id of the role definition. */
        Id: number;
        /** Gets or sets a value that specifies the role definition name. */
        Name: string;
        /** Gets or sets a value that specifies the order position of the object in the site collection Permission Levels page. */
        Order: number;
        /** Gets a value that specifies the type of the role definition. Represents an SP.RoleType value. See RoleType in the .NET client object model reference for a list of role type values. */
        RoleTypeKind: SPTypes.RoleType | number;
    }
    /**
     * Role Definition Query Properties
     */
    export interface IRoleDefinitionQueryProps {
    }
    /**
     * Role Definition Query Result
     */
    export interface IRoleDefinitionQueryResult extends IRoleDefinitionMethods, IRoleDefinitionProps {
    }
    /**
     * Role Definition Result
     */
    export interface IRoleDefinitionResult extends IRoleDefinitionMethods, IRoleDefinitionProps, IRoleDefinitionQueryProps, IBase<IRoleDefinition, IRoleDefinitionResult, IRoleDefinitionQueryResult> {
    }
    /**
     * Role Definition
     */
    export interface IRoleDefinition extends IRoleDefinitionMethods, IRoleDefinitionQueryProps, IBase<IRoleDefinition, IRoleDefinitionResult, IRoleDefinitionQueryResult> {
    }
}
declare module "definitions/security/roleDefinitions" {
    import { IBase, IBaseCollection, IRoleDefinition, IRoleDefinitionQueryResult, IRoleDefinitionResult, SPTypes } from "definitions/index";
    /**
     * Methods
     */
    export interface IRoleDefinitionsMethods {
        /**
         * Gets the role definition with the specified ID from the collection.
         * @param roleDefId - The ID of the role definition that defines the permissions to assign.
         */
        getById(roleDefId: any): IRoleDefinition & IBase<IRoleDefinition, IRoleDefinitionResult, IRoleDefinitionQueryResult>;
        /**
         * Gets the role definition with the specified name.
         * @param name -
         */
        getByName(name: any): IRoleDefinition & IBase<IRoleDefinition, IRoleDefinitionResult, IRoleDefinitionQueryResult>;
        /**
         * Gets the role definition with the specified role type.
         * @param roleType - The RoleTypeKind of the role definition.
         */
        getByType(roleType: SPTypes.RoleType): IRoleDefinition & IBase<IRoleDefinition, IRoleDefinitionResult, IRoleDefinitionQueryResult>;
        /**
         * Method to get the next set of results.
         */
        next(): IBase<IRoleDefinitions, IRoleDefinitionResults>;
    }
    /**
     * Role Definitions
     */
    export interface IRoleDefinitions extends IRoleDefinitionsMethods, IBaseCollection<IRoleDefinition, IRoleDefinitionResult, IRoleDefinitionQueryResult> {
    }
    /**
     * Role Definition Results
     */
    export interface IRoleDefinitionResults extends IRoleDefinitionsMethods, IBaseCollection<IRoleDefinitionResult, IRoleDefinitionResult, IRoleDefinitionQueryResult> {
    }
}
declare module "definitions/security/index" {
    export * from "definitions/security/roleAssignment";
    export * from "definitions/security/roleAssignments";
    export * from "definitions/security/roleDefinition";
    export * from "definitions/security/roleDefinitions";
}
declare module "definitions/site/site" {
    import { IAudit, IBase, IEventReceiver, IEventReceiverResult, IEventReceivers, IFeature, IRecycleBinItem, IResourcePath, IResults, ISiteMethods, ITargetInfo, IUpgradeInfo, IUsageInfo, IUser, IUserResult, IUserCustomAction, IUserCustomActionResults, IUserCustomActions, IWeb, IWebQueryResult, IWebResult } from "definitions/index";
    /**
     * Site Methods
     */
    export interface ISiteMethods {
        /**
         * Creates a temporary evaluation SPSite for this SPSite, for the purposes of determining whether an upgrade is likely to be successful.
         * @param upgrade - If true, the evaluation site collection MUST be upgraded when it is created. If false, the evaluation site collection MUST NOT be upgraded when it is created.
         * @param sendEmail - If true, a notification email MUST be sent to the requestor and the site collection administrators at the completion of the creation of the evaluation site collection. If false, such notification MUST NOT be sent.
         */
        createPreviewSPSite(upgrade: any, sendEmail: any): IBase;
        /**
         * Extend the upgrade reminder date for this SPSite by the days specified at WebApplication.UpgradeReminderDelay.
         */
        extendUpgradeReminderDate(): IBase;
        /**
         * Specifies the list template gallery, site template gallery, Web Part gallery, master page gallery, or other galleries from the site collection, including custom galleries that are defined by users.
         * @param typeCatalog - Specifies the list template type for the gallery.
         */
        getCatalog(typeCatalog: any): IBase;
        /**
         * Specifies the collection of the site collection changes from the change log that have occurred within the scope of the site collection, based on the specified query.
         * @param query - The change query.
         */
        getChanges(query: any): IBase;
        /**
         * Specifies the collection of custom list templates for a given site.
         * @param web - Specifies the site that contains the custom list templates to be returned.
         */
        getCustomListTemplates(web: any): IBase;
        /**
         * Returns the collection of site definitions that are available for creating Web sites within the site collection.
         * @param LCID - A 32-bit unsigned integer that specifies the language of the site definitions that are returned from the site collection.
         * @param overrideCompatLevel - Specifies the compatibility level of the site to return from the site collection. If this value is 0, the compatibility level of the site is used.
         */
        getWebTemplates(LCID: any, overrideCompatLevel: any): IBase;
        /**
         * Invalidates cached upgrade information about the site collection so that this information will be recomputed the next time it is needed.
         */
        invalidate(): IBase;
        /**
         * Returns true if the object needs to be upgraded; otherwise, false.
         * @param versionUpgrade - If true, version-to-version site collection upgrade is requested; otherwise false for build-to-build site collection upgrade.
         * @param recursive - If true, child upgradable objects will be inspected; otherwise false.
         */
        needsUpgradeByType(versionUpgrade: any, recursive: any): IBase;
        /**
         * Returns the site at the specified URL.
         * @param strUrl - The server-relative URL or site-relative URL of the site to return. If strUrl is empty, the top-level site is returned.
         */
        openWeb(strUrl: any): IBase<IWeb, IWebResult, IWebQueryResult>;
        /**
         * Returns the site with the specified GUID.
         * @param gWebId - A GUID that specifies which site to return.
         */
        openWebById(gWebId: any): IBase<IWeb, IWebResult, IWebQueryResult>;
        /**
         * Runs a health check as follows. (The health rules referenced below perform an implementation-dependent check on the health of a site collection)
         * @param ruleId - Specifies the rule or rules to be run. If the value is an empty GUID, all rules are run, otherwise only the specified rule is run.
         * @param bRepair - Specifies whether repairable rules are to be run in repair mode.
         * @param bRunAlays - Specifies whether the rules will be run as a result of this call or cached results from a previous run can be returned.
         */
        runHealthCheck(ruleId: any, bRepair: any, bRunAlways: any): IBase;
        /**
         * Either runs a site collection upgrade, or schedules it to be run in the future, depending on available system resources and the value of the queueOnly parameter. The user executing this method MUST be a farm administrator or a site collection administrator.
         * @param versionUpgrade - If true, specifies that a version-to-version upgrade will be performed. If false, specifies that a build-to-build upgrade will be performed.
         * @param queueOnly - If true, specifies that the upgrade will not be run immediately; it will be queued for a later run.
         * @param sendEmail - If true, a notification email will be sent to the requestor and the site collection administrators at the completion of the site collection upgrade. If false, such notification will not be sent.
         */
        runUpgradeSiteSession(versionUpgrade: any, queueOnly: any, sendEmail: any): IBase;
        /**
         * Updates it's properties.
         * @param data - The list properties to update.
         */
        update(data: any): IBase;
        /**
         * Sets whether the client-side object model (CSOM) requests that are made in the context of any site inside the site collection require UseRemoteAPIs permission.
         * @param requireUseRemoteAPIs - Specifies whether the client-side object model (CSOM) requests that are made in the context of any site inside the site collection require UseRemoteAPIs permission.
         */
        updateClientObjectModelUseRemoteAPIsPermissionSetting(requireUseRemoteAPIs: any): IBase;
    }
    /**
     * Site Properties
     */
    export interface ISiteProps {
        /** A value that specifies whether creation of declarative workflows can be used on this site collection. */
        AllowCreationDeclarativeWorkflow: boolean;
        /** Gets or sets a value that specifies whether a designer can be used on this site collection. */
        AllowDesigner: boolean;
        /** Gets or sets a value that specifies whether master page editing is allowed on this site collection. */
        AllowMasterPageEditing: boolean;
        /** Gets or sets a value that specifies whether this site collection can be reverted to its base template. */
        AllowRevertFromTemplate: boolean;
        AllowSaveDeclarativeWorkflowAsTemplate: boolean;
        AllowSavePublishDeclarativeWorkflow: boolean;
        /** Whether version to version upgrade is allowed on this site. */
        AllowSelfServiceUpgrade: boolean;
        /** Whether upgrade evaluation site collection is allowed. */
        AllowSelfServiceUpgradeEvaluation: boolean;
        AuditLogTrimmingRetention: number;
        /** Property indicating whether or not this object can be upgraded. */
        CanUpgrade: boolean;
        Classification: string;
        /** Gets the major version of this site collection for purposes of major version-level compatibility checks. */
        CompatibilityLevel: string;
        CurrentChangeToken: string;
        DisableAppViews: boolean;
        DisableCompanyWideSharingLinks: boolean;
        DisableFlows: boolean;
        ExternalSharingTipsEnabled: boolean;
        GroupId: string;
        /** Gets the GUID that identifies the site collection. */
        Id: string;
        /** Gets or sets the comment that is used in locking a site collection. */
        LockIssue: string;
        /** Gets a value that specifies the maximum number of list items allowed per operation before throttling will occur. */
        MaxItemsPerThrottledOperation: number;
        NeedsB2BUpgrade: boolean;
        /** Specifies the primary URI of this site collection, including the host name, port number, and path. */
        PrimaryUri: string;
        /** Gets or sets a Boolean value that specifies whether the site collection is read-only, locked, and unavailable for write access. */
        ReadOnly: boolean;
        RequiredDesignerVersion: string;
        SandboxedCodeActivationCapability: number;
        ServerRelativePath: IResourcePath;
        /** Gets the server-relative URL of the root Web site in the site collection. */
        ServerRelativeUrl: string;
        ShareByEmailEnabled: boolean;
        ShowPeoplePickerSuggestionsForGuestUsers: boolean;
        /** Property that indicates whether users will be able to share links to documents that can be accessed without logging in. */
        ShareByLinkEnabled: boolean;
        /** Gets or sets a value that specifies whether the URL structure of this site collection is viewable. */
        ShowUrlStructure: boolean;
        StatusBarLink: string;
        StatusBarText: string;
        TrimAuditLog: boolean;
        /** Gets or sets a value that specifies whether the Visual Upgrade UI of this site collection is displayed. */
        UIVersionConfigurationEnabled: boolean;
        /** Specifies the upgrade information of this site collection. */
        UpgradeInfo: IUpgradeInfo;
        /** Specifies a date, after which site collection administrators will be reminded to upgrade the site collection. */
        UpgradeReminderDate: string;
        UpgradeScheduled: boolean;
        UpgradeScheduledDate: string;
        /** Specifies whether the site is currently upgrading. */
        Upgrading: boolean;
        /** Gets the full URL to the root Web site of the site collection, including host name, port number, and path. */
        Url: string;
        /** Gets a value that specifies usage information about the site, including bandwidth, storage, and the number of visits to the site collection. */
        Usage: IUsageInfo;
    }
    /**
     * Site Query Properties
     */
    export interface ISiteQueryProps {
        Audit(): IBase<IAudit>;
        /**
         * Gets the event receivers associated with the site.
        */
        EventReceivers(): IEventReceivers;
        /**
         * Gets the event receiver associated with the site.
         * @param id - The id of the event receiver.
        */
        EventReceivers(id: string): IEventReceiver;
        /**
         * Gets a value that specifies the collection of the site collection features for the site collection that contains the site.
         */
        Features(): IBase;
        /**
         * Gets or sets the owner of the site collection. (Read-only in sandboxed solutions.)
         */
        Owner(): IUser;
        /** Gets a value that specifies the collection of recycle bin items for the site collection. */
        RecycleBin(): IBase<IResults<IRecycleBinItem>>;
        /**
         * Gets a value that returns the top-level site of the site collection.
         */
        RootWeb(): IWeb;
        SecondaryContact(): IBase;
        /**
         * Gets the user custom action for the list.
         */
        UserCustomActions(): IUserCustomActions;
        /**
         * Gets the user custom action(s) for the list.
         * @param id - The id of the user custom action.
         */
        UserCustomActions(id: string): IUserCustomAction;
    }
    /**
     * Site Query Result
     */
    export interface ISiteQueryResult extends ISiteMethods, ISiteProps {
        Audit: IAudit;
        /**
         * Gets the event receivers associated with the site.
        */
        EventReceivers: IResults<IEventReceiverResult>;
        /**
         * Gets a value that specifies the collection of the site collection features for the site collection that contains the site.
         */
        Features: IResults<IFeature>;
        /**
         * Gets or sets the owner of the site collection. (Read-only in sandboxed solutions.)
         */
        Owner: IUserResult;
        /** Gets a value that specifies the collection of recycle bin items for the site collection. */
        RecycleBin: IResults<IRecycleBinItem>;
        /**
         * Gets a value that returns the top-level site of the site collection.
         */
        RootWeb: IWebResult;
        SecondaryContact: IUserResult;
        /**
         * Gets the user custom action for the list.
         */
        UserCustomActions: IUserCustomActionResults;
    }
    /**
     * Site Result
     */
    export interface ISiteResult extends ISiteMethods, ISiteProps, ISiteQueryProps, IBase<ISite, ISiteResult, ISiteQueryResult> {
    }
    /**
     * Site
     */
    export interface ISite extends ISiteMethods, ISiteQueryProps, IBase<ISite, ISiteResult, ISiteQueryResult> {
        /**
         * Constructor
         * @param url - (Optional) The site url.
         * @param targetInfo - (Optional) The target information.
         */
        new (url?: string, targetInfo?: ITargetInfo): ISite;
    }
}
declare module "definitions/site/web" {
    import { IAppTiles, IBase, IBasePermissions, IContainsConfidentialInfo, IContentType, IContentTypeResult, IContentTypeResults, IContentTypes, IEventReceiver, IEventReceiverResults, IEventReceivers, IFeature, IField, IFieldResult, IFieldResults, IFields, IFile, IFileQueryResult, IFileResult, IFolder, IFolderQueryResult, IFolderResult, IFolderResults, IFolders, IGroup, IGroupResult, ISiteGroupResults, ISiteGroups, IList, IListQueryResult, IListResult, IListResults, ILists, IListTemplate, INavigation, IPropertyValues, IRecycleBinItem, IRegionalSettings, IResourcePath, IResults, IRoleDefinition, IRoleDefinitionResults, IRoleDefinitions, ITargetInfo, IThemeInfo, IUser, IUserQueryResult, IUserResult, IUserResults, IUsers, IUserCustomAction, IUserCustomActionResults, IUserCustomActions, IWebInfo, IWebResult, IWebResults, IWebs, IWorkflowTemplate } from "definitions/index";
    /**
     * Web Methods
     */
    export interface IWebMethods {
        /**
         * Applies the theme specified by the contents of each of the files specified in the arguments to the site.
         * @param colorpaletteurl - The server-relative URL of the color palette file.
         * @param fontschemeurl - The server-relative URL of the font scheme.
         * @param backgroundimageurl - The server-relative URL of the background image.
         * @param sharegenerated - True to store the generated theme files in the root site, or false to store them in this site.
         */
        applyTheme(colorpaletteurl: any, fontschemeurl: any, backgroundimageurl: any, sharegenerated: any): IBase;
        /**
         * Applies the specified site definition or site template to the Web site that has no template applied to it.
         * @param name - The site definition or web template name to apply.
         */
        applyWebTemplate(name: any): IBase;
        /**
         * Creates unique role assignments for the securable object.
         * @param copyRoleAssignments - True to copy the role assignments from the parent securable object; false to remove the inherited role assignments except one that contains the current user.
         * @param clearSubScopes - True to make all child securable objects inherit role assignments from the current object; false (default) to leave role assignments unchanged for child securable objects that do not inherit role assignments from their parent object.
         */
        breakRoleInheritance(copyRoleAssignments: any, clearSubScopes: any): IBase;
        /**
         * Deletes the web.
         */
        delete(): IBase;
        /**
         * Checks whether the push notification subscriber exist for the current user with the given device application instance ID.
         * @param id - The ID of the device app instance.
         */
        doesPushNotificationSubscriberExist(id: any): IBase;
        /**
         * Returns whether the current user has the given set of permissions.
         * @param high - The highest permission range value.
         * @param low - The lowest permission range value.
         */
        doesUserHavePermissions(high: any, low: any): IBase;
        /**
         * Checks whether the specified login name belongs to a valid user in the site. If the user doesn't exist, it will add the user to the site.
         */
        ensureUser(loginName: string): IBase<IUser, IUserResult, IUserQueryResult>;
        /**
         * Sends data to an OData service.
         * @param inputStream - The OData input object. Used for create or update operations only.
         */
        executeRemoteLOB(inputStream: any): IBase;
        /**
         * The app BDC catalog.
         */
        getAppBdcCatalog(): IBase;
        /**
         * The app BDC catalog for the specified app instance.
         * @param id - The ID of the app instance.
         */
        getAppBdcCatalogForAppInstance(id: any): IBase;
        /**
         * Retrieves an AppInstance installed on this Site.
         * @param id - The ID of the app instance.
         */
        getAppInstanceById(id: any): IBase;
        /**
         * Retrieves all AppInstances installed on this site that are instances of the specified App.
         * @param id - The product ID of the app.
         */
        getAppInstancesByProductId(id: any): IBase;
        /**
         * Returns a collection of site templates available for the site.
         * @param lcid - The LCID of the site templates to get.
         * @param doIncludeCrossLanguage - True to include language-neutral site templates; otherwise false.
         */
        getAvailableWebTemplates(lcid: any, doIncludeCrossLanguage: any): IBase;
        /**
         * Returns the list gallery on the site.
         * @param galleryType - The gallery type. Represents a ListTemplateType value such as WebTemplateCatalog = 111, WebPartCatalog = 113 ListTemplateCatalog = 114, MasterPageCatalog = 116, SolutionCatalog = 121, ThemeCatalog = 123, DesignCatalog = 124, AppDataCatalog = 125.
         */
        getCatalog(galleryType: any): IBase;
        /**
         * Returns the collection of all changes from the change log that have occurred within the scope of the site, based on the specified query.
         * @param query - The change query.
         */
        getChanges(query: any): IBase;
        /**
         * The context information for the site. Static method.
         */
        getContextWebInformation(): IBase;
        /**
         * The custom list templates for the site.
         */
        getCustomListTemplates(): IBase;
        /**
         * The document libraries on a site. Static method. (SharePoint Online only)
         * @param url - The full URL of the site.
         */
        getDocumentLibraries(url: any): IBase;
        /**
         * The specified external content type in a line-of-business (LOB) system application.
         * @param namespace - The namespace of the external content type.
         * @param name - The name of the external content type.
         */
        getEntity(namespace: any, name: any): IBase;
        /**
         * Returns the file object located at the specified server-relative URL.
         * @param url - The server relative url of the file.
         */
        getFileByServerRelativeUrl(url: any): IFile & IBase<IFile, IFileResult, IFileQueryResult>;
        /**
         * Returns the folder object located at the specified server-relative URL.
         * @param url - The server relative url of the folder.
         */
        getFolderByServerRelativeUrl(url: any): IFolder & IBase<IFolder, IFolderResult, IFolderQueryResult>;
        /**
         * The list at the specified site-relative URL. (SharePoint Online only)
         * @param url - The server relative url of the list.
         */
        getList(url: any): IList & IBase<IList, IListResult, IListQueryResult>;
        /**
         * The push notification subscriber over the site for the specified device application instance ID.
         * @param id - The ID of the device app instance.
         */
        getPushNotificationSubscriber(id: any): IBase;
        /**
         * Queries for the push notification subscribers over the site for the specified value of custom arguments. Null or empty custom arguments will return subscribers without any filtering.
         * @param args - Arguments to filter the results. Passed arguments are compared to the subscribers' custom arguments in the store. Pass null or empty arguments to return unfiltered results.
         */
        getPushNotificationSubscribersByArgs(args: any): IBase;
        /**
         * Queries for the push notification subscribers over the site for the specified user.
         * @param loginName - The login name of the user.
         */
        getPushNotificationSubscribersByUser(loginName: any): IBase;
        /**
         * Returns the collection of child sites of the current site based on the specified query. (SharePoint Online only)
         * @param nWebTemplateFilter - The ID of the template used in the site definition of the sites.
         * @param nConfigurationFilter - The ID of the site template used to provision the sites.
         */
        getSubwebsFilteredForCurrentUser(nWebTemplateFilter: any, nConfigurationFilter: any): IBase<IResults<IWebInfo>>;
        /**
         * Returns the user corresponding to the specified member identifier for the current site.
         * @param id - The user id.
         */
        getUserById(id: any): IUser & IBase<IUser, IUserResult, IUserQueryResult>;
        /**
         * The effective permissions that the specified user has within the current application scope.
         * @param loginName - The user login name.
         */
        getUserEffectivePermissions(loginName: any): IBase;
        /**
         * The site URL from a page URL. Static method.
         * @param url - The full URL of the SharePoint page, with URL encoded characters as needed.
         */
        getWebUrlFromPageUrl(url: any): any;
        /**
         * Uploads and installs an app package to this site.
         * @param appPackageStream - The app package stream.
         */
        loadAndInstallApp(appPackageStream: any): IBase;
        /**
         * Uploads and installs an App package on the site in a specified locale.
         * @param appPackageStream - The app package stream.
         * @param installationLocaleLCID - The LCID of the locale to use to create the app instance.
         */
        loadAndInstallAppInSpecifiedLocale(appPackageStream: any, installationLocaleLCID: any): IBase;
        /**
         * Uploads an App package and creates an instance from it.
         * @param appPackageStream - The app package stream.
         * @param installationLocaleLCID - The LCID of the locale to use to create the app instance.
         */
        loadApp(appPackageStream: any, installationLocaleLCID: any): IBase;
        /**
         * Returns the name of the image file for the icon that is used to represent the specified file.
         * @param filename - The file name. If this parameter is empty, the server returns an empty string.
         * @param progid - The ProgID of the application that was used to create the file, in the form OLEServerName.ObjectName (for example, Excel.Sheet or PowerPoint.Slide). This is the ID used by the Windows registry to uniquely identify an object.
         * @param size - The size of the icon: 16x16 pixels = 0, 32x32 pixels = 1.
         */
        mapToIcon(filename: any, progid: any, size: any): IBase;
        /**
         * Processes a notification from an external system.
         * @param stream - The notification message from the external system.
         */
        processExternalNotification(stream: any): IBase;
        /**
         * Registers the subscriber for push notifications over the site. If the registration already exists, the service token is updated with the new value.
         * @param deviceAppInstanceId - The ID of the device app instance.
         * @param serviceToken - The token provided by the notification service to the device to receive notifications.
         */
        registerPushNotificationSubscriber(deviceAppInstanceId: any, serviceToken: any): IBase;
        /**
         * Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.
         */
        resetRoleInheritance(): IBase;
        /**
         * Unregisters the subscriber for push notifications from the site.
         * @param id - The ID of the device app instance.
         */
        unregisterPushNotificationSubscriber(id: any): IBase;
        /**
         * Updates it's properties.
         * @param data - The list properties to update.
         */
        update(data: any): IBase;
    }
    /**
     * Web Properties
     */
    export interface IWebProps {
        /** Gets a value that specifies whether the site allows RSS feeds. */
        AllowRssFeeds: boolean;
        /** The instance Id of the App Instance that this web represents. */
        AppInstanceId: string;
        /** Gets either the identifier (ID) of the site definition configuration that was used to create the site, or the ID of the site definition configuration from which the site template used to create the site was derived. */
        Configuration: number;
        /** Gets a value that specifies when the site was created. */
        Created: string;
        /** Gets or sets the URL for a custom master page file to apply to the website. */
        CustomMasterUrl: string;
        /** Gets or sets the description for the site. */
        Description: string;
        /** Determines if the Document Library Callout's WAC previewers are enabled or not. */
        DocumentLibraryCalloutOfficeWebAppPreviewersDisabled: boolean;
        /** Gets or sets a Boolean value that specifies whether the Web site should use Minimal Download Strategy. */
        EnableMinimalDownload: boolean;
        ExcludeFromOfflineClient: boolean;
        /** Gets a value that specifies the site identifier for the site. */
        Id: string;
        /** Gets a value that specifies the LCID for the language that is used on the site. */
        Language: boolean;
        /** Gets a value that specifies when an item was last modified in the site. */
        LastItemModifiedDate: string;
        /** Gets or sets the URL of the master page that is used for the website. */
        MasterUrl: string;
        MembersCanShare: boolean;
        NoCrawl: boolean;
        NotificationsInOneDriveForBusinessEnabled: boolean;
        NotificationsInSharePointEnabled: boolean;
        OverwriteTranslationsOnChange: boolean;
        PreviewFeaturesEnabled: boolean;
        /** Gets or sets a value that specifies whether the Quick Launch area is enabled on the site. */
        QuickLaunchEnabled: boolean;
        /** Gets or sets a value that determines whether the recycle bin is enabled for the website. */
        RecycleBinEnabled: boolean;
        RequestAccessEmail: string;
        /**
         * Gets or sets a Boolean value that specifies whether the Web site can be saved as a site template.
         */
        SaveSiteAsTemplateEnabled: boolean;
        ServerRelativePath: IResourcePath;
        /** Gets or sets the server-relative URL for the Web site. */
        ServerRelativeUrl: string;
        SiteLogoDescription: string;
        SiteLogoUrl: string;
        /** Gets or sets a value that specifies whether the RSS feeds are enabled on the site. */
        SyndicationEnabled: boolean;
        TenantTagPolicyEnabled: boolean;
        ThemeData: string;
        ThemedCssFolderUrl: string;
        ThirdPartyMdmEnabled: boolean;
        /** Gets or sets the title for the Web site. */
        Title: string;
        /** Gets or sets value that specifies whether the tree view is enabled on the site. */
        TreeViewEnabled: boolean;
        /** Gets or sets the user export interface (UI) version of the Web site. */
        UIVersion: number;
        /** Gets or sets a value that specifies whether the settings UI for visual upgrade is shown or hidden. */
        UIVersionConfigurationEnabled: boolean;
        /** Gets the absolute URL for the website. */
        Url: string;
        /** Gets the name of the site definition or site template that was used to create the site. */
        WebTemplate: string;
    }
    /**
     * Web Query Properties
     */
    export interface IWebQueryProps {
        /**
         * Specifies whether the current user can create declarative workflows. If not disabled on the Web application, the value is the same as the AllowCreateDeclarativeWorkflow property of the site collection. Default value: true.
         */
        AllowCreateDeclarativeWorkflowForCurrentUser(): IBase<boolean>;
        /**
         * Gets a value that specifies whether the current user is allowed to use a designer application to customize this site.
         */
        AllowDesignerForCurrentUser(): IBase<boolean>;
        /**
         * Gets a value that specifies whether the current user is allowed to edit the master page.
         */
        AllowMasterPageEditingForCurrentUser(): IBase<boolean>;
        /**
         * Property Bag
         */
        AllProperties(): IBase<IPropertyValues>;
        /**
         * Gets a value that specifies whether the current user is allowed to revert the site to a default site template.
         */
        AllowRevertFromTemplateForCurrentUser(): IBase<boolean>;
        /**
         * Specifies whether the current user can save declarative workflows as a template. If not disabled on the Web application, the value is the same as the AllowSaveDeclarativeWorkflowAsTemplate property of the site collection. Default value: true.
         */
        AllowSaveDeclarativeWorkflowAsTemplateForCurrentUser(): IBase<boolean>;
        /**
         * Specifies whether the current user can save or publish declarative workflows. If not disabled on the Web application, the value is the same as the AllowSavePublishDeclarativeWorkflowAsTemplate property of the site collection. When enabled, can only be set by a site collection administrator. Default value: true.
         */
        AllowSavePublishDeclarativeWorkflowForCurrentUser(): IBase<boolean>;
        /**
         * Gets a collection of metadata for the Web site.
         */
        AllProperties(): IBase;
        AppTiles(): IAppTiles;
        /**
         * Gets or sets the group of users who have been given contribute permissions to the Web site.
         */
        AssociatedMemberGroup(): IGroup;
        /**
         * Gets or sets the associated owner group of the Web site.
         */
        AssociatedOwnerGroup(): IGroup;
        /**
         * Gets or sets the associated visitor group of the Web site.
         */
        AssociatedVisitorGroup(): IGroup;
        Author(): IUser;
        /**
         * Gets the collection of all content types that apply to the current scope, including those of the current Web site, as well as any parent Web sites.
         */
        AvailableContentTypes(): IBase<IContentTypes>;
        /**
         * Gets a value that specifies the collection of all fields available for the current scope, including those of the current site, as well as any parent sites.
         */
        AvailableFields(): IBase<IFields>;
        ClientWebParts(): IBase;
        /**
         * Gets the content types that are associated with the web.
         */
        ContentTypes(): IContentTypes;
        /**
         * Gets the content type that are associated with the web.
         * @param id - The id of the content type.
         */
        ContentTypes(id: string): IContentType;
        /**
         * Gets the current user of the site.
         */
        CurrentUser(): IUser;
        DataLeakagePreventionStatusInfo(): IBase;
        DescriptionResource(): IBase<IResourcePath>;
        /**
         * Gets the URL where the current user can download SharePoint Designer.
         */
        DesignerDownloadUrlForCurrentUser(): IBase;
        /**
         * Represents the intersection of permissions of the app principal and the user principal. In the app-only case, this property returns only the permissions of the app principal. To check only user permissions (ignoring app permissions), use the GetUserEffectivePermissions method.
         */
        EffectiveBasePermissions(): IBase<string>;
        /**
         * Gets the event receivers associated with the web.
        */
        EventReceivers(): IEventReceivers;
        /**
         * Gets the event receiver associated with the web.
         * @param id - The id of the event receiver.
        */
        EventReceivers(id: string): IEventReceiver;
        /**
         * Gets a value that specifies the collection of features that are currently activated in the site.
         */
        Features(): IBase;
        /**
         * Gets the fields in the web.
         */
        Fields(): IFields;
        /**
         * Gets the field in the web.
         * @param internalNameOrTitle - The internal name or title of the field.
         */
        Fields(internalNameOrTitle: string): IField;
        /**
         * Gets the folders contained in the root folder.
         */
        Folders(): IFolders;
        /**
         * Gets the folder contained in the root folder.
         * @param url - The url of the sub-folder within the current folder.
         */
        Folders(url: string): IFolder;
        /**
         * Gets the lists in the Web.
         */
        Lists(): ILists;
        /**
         * Gets the list in the Web.
         * @param name - The list name.
         */
        Lists(name: string): IList;
        /**
         * Gets the list definitions and list templates available for creating lists on the site.
         */
        ListTemplates(): IBase;
        /**
         * Gets the list definition or list template available for creating lists on the site.
         * @param name - The list template form name.
         */
        ListTemplates(name: string): IBase;
        /**
         * Gets a value that specifies the navigation structure on the site, including the Quick Launch area and the top navigation bar.
         */
        Navigation(): IBase<INavigation>;
        /**
         * Gets the parent website of the specified website.
         */
        ParentWeb(): IWeb;
        /**
         * Gets the collection of push notification subscribers over the site.
         */
        PushNotificationSubscribers(): IBase;
        /**
         * Specifies the collection of recycle bin items of the recycle bin of the site.
         */
        RecycleBin(): IBase;
        /**
         * Gets the regional settings that are currently implemented on the website.
         */
        RegionalSettings(): IBase;
        /**
         * Gets the role definitions for the web.
         */
        RoleDefinitions(): IRoleDefinitions;
        /**
         * Gets the role definitions for the web.
         * @param name - The role definition name.
         */
        RoleDefinitions(name: string): IRoleDefinition;
        /**
         * Gets the root folder in the web.
         */
        RootFolder(): IFolder;
        /**
         * Gets the file in the web's root folder.
         * @param url - (Optional) The url of the file within the root folder.
         */
        RootFolder(url: string): IFile;
        /**
         * Gets a value that specifies whether the current user is able to view the file system structure of this site.
         */
        ShowUrlStructureForCurrentUser(): IBase;
        /**
         * Gets the site groups for the web.
         */
        SiteGroups(): ISiteGroups;
        /**
         * Gets the site groups for the web.
         * @param name - The group name.
         */
        SiteGroups(name: string): IGroup;
        /**
         * Gets the UserInfo list of the site collection that contains the Web site.
         */
        SiteUserInfoList(): IBase;
        /**
         * Gets the collection of all users that belong to the site collection.
         */
        SiteUsers(): IUsers;
        /**
         * Gets the collection of all users that belong to the site collection.
         * @param id - The user id.
         */
        SiteUsers(id: any): IUser;
        /**
         * Specifies the language code identifiers (LCIDs) of the languages that are enabled for the site.
         */
        SupportedUILanguageIds(): IBase<Number>;
        /**
         * The theming information for this site. This includes information like colors, fonts, border radii sizes etc.
         */
        ThemeInfo(): IBase;
        TitleResource(): IBase<IResourcePath>;
        /**
         * Gets the user custom actions for the web.
         */
        UserCustomActions(): IUserCustomActions;
        /**
         * Gets the user custom action for the web.
         * @param id - The id of the user custom action.
         */
        UserCustomActions(id: string): IUserCustomAction;
        /**
         * Represents key properties of the subsites of a site.
         */
        WebInfos(): IBase;
        /**
         * Gets a Web site collection object that represents all Web sites immediately beneath the Web site, excluding children of those Web sites.
         */
        Webs(): IWebs;
        /**
         * Gets a value that specifies the collection of all workflow associations for the site.
         */
        WorkflowAssociations(): IBase;
        /**
         * Gets a value that specifies the collection of workflow templates associated with the site.
         */
        WorkflowTemplates(): IBase;
    }
    /**
     * Web Query Result
     */
    export interface IWebQueryResult extends IWebMethods, IWebProps {
        /**
         * Specifies whether the current user can create declarative workflows. If not disabled on the Web application, the value is the same as the AllowCreateDeclarativeWorkflow property of the site collection. Default value: true.
         */
        AllowCreateDeclarativeWorkflowForCurrentUser?: boolean;
        AllowDesignerForCurrentUser?: boolean;
        /**
         * Specifies whether the current user is allowed to edit the master page.
         */
        AllowMasterPageEditingForCurrentUser?: boolean;
        /**
         * A value that specifies whether the current user is allowed to revert the site to a default site template.
         */
        AllowRevertFromTemplateForCurrentUser?: boolean;
        /**
         * Specifies whether the current user can save declarative workflows as a template. If not disabled on the Web application, the value is the same as the AllowSaveDeclarativeWorkflowAsTemplate property of the site collection. Default value: true.
         */
        AllowSaveDeclarativeWorkflowAsTemplateForCurrentUser?: boolean;
        /**
         * Specifies whether the current user can save or publish declarative workflows. If not disabled on the Web application, the value is the same as the AllowSavePublishDeclarativeWorkflowAsTemplate property of the site collection. When enabled, can only be set by a site collection administrator. Default value: true.
         */
        AllowSavePublishDeclarativeWorkflowForCurrentUser?: boolean;
        /**
         * A collection of metadata for the Web site.
         */
        AllProperties?: Array<string>;
        AppTiles?: IAppTiles;
        /**
         * The group of users who have been given contribute permissions to the Web site.
         */
        AssociatedMemberGroup: IGroupResult;
        /**
         * The associated owner group of the Web site.
         */
        AssociatedOwnerGroup: IGroupResult;
        /**
         * The associated visitor group of the Web site.
         */
        AssociatedVisitorGroup: IGroupResult;
        /** */
        Author: IUserResult;
        /**
         * The collection of all content types that apply to the current scope, including those of the current Web site, as well as any parent Web sites.
         */
        AvailableContentTypes: IResults<IContentTypeResult>;
        /**
         * A value that specifies the collection of all fields available for the current scope, including those of the current site, as well as any parent sites.
         */
        AvailableFields: IResults<IFieldResult>;
        ClientWebParts: IBase;
        /**
         * Gets the content types that are associated with the web.
         */
        ContentTypes: IContentTypeResults;
        /**
         * Gets the current user of the site.
         */
        CurrentUser: IUserResult;
        DataLeakagePreventionStatusInfo: IContainsConfidentialInfo;
        DescriptionResource: IResourcePath;
        /**
         * Gets the URL where the current user can download SharePoint Designer.
         */
        DesignerDownloadUrlForCurrentUser: string;
        /**
         * Represents the intersection of permissions of the app principal and the user principal. In the app-only case, this property returns only the permissions of the app principal. To check only user permissions (ignoring app permissions), use the GetUserEffectivePermissions method.
         */
        EffectiveBasePermissions: IBasePermissions;
        /**
         * Gets the event receivers associated with the web.
        */
        EventReceivers: IEventReceiverResults;
        /**
         * Gets a value that specifies the collection of features that are currently activated in the site.
         */
        Features: IResults<IFeature>;
        /**
         * The fields in the web.
         */
        Fields: IFieldResults;
        /**
         * The folders contained in the root folder.
         */
        Folders: IFolderResults;
        /**
         * Gets the lists in the Web.
         */
        Lists: IListResults;
        /**
         * The list definitions and list templates available for creating lists on the site.
         */
        ListTemplates: IResults<IListTemplate>;
        /**
         * Gets a value that specifies the navigation structure on the site, including the Quick Launch area and the top navigation bar.
         */
        Navigation: INavigation;
        /**
         * Gets the parent website of the specified website.
         */
        ParentWeb: IWebResult;
        /**
         * Gets the collection of push notification subscribers over the site.
         */
        PushNotificationSubscribers(): IBase;
        /**
         * Specifies the collection of recycle bin items of the recycle bin of the site.
         */
        RecycleBin: IResults<IRecycleBinItem>;
        /**
         * Gets the regional settings that are currently implemented on the website.
         */
        RegionalSettings: IRegionalSettings;
        /**
         * Gets the role definitions for the web.
         */
        RoleDefinitions: IRoleDefinitionResults;
        /**
         * Gets the root folder in the web.
         */
        RootFolder: IFolderResult;
        /**
         * Gets a value that specifies whether the current user is able to view the file system structure of this site.
         */
        ShowUrlStructureForCurrentUser: boolean;
        /**
         * Gets the site groups for the web.
         */
        SiteGroups: ISiteGroupResults;
        /**
         * Gets the UserInfo list of the site collection that contains the Web site.
         */
        SiteUserInfoList: IListResult;
        /**
         * The collection of all users that belong to the site collection.
         */
        SiteUsers: IUserResults;
        /**
         * Specifies the language code identifiers (LCIDs) of the languages that are enabled for the site.
         */
        SupportedUILanguageIds: IResults<number>;
        /**
         * The theming information for this site. This includes information like colors, fonts, border radii sizes etc.
         */
        ThemeInfo: IThemeInfo;
        TitleResource: IResourcePath;
        /**
         * Gets the user custom actions for the web.
         */
        UserCustomActions: IUserCustomActionResults;
        /**
         * Represents key properties of the subsites of a site.
         */
        WebInfos: IResults<IWebInfo>;
        /**
         * A Web site collection object that represents all Web sites immediately beneath the Web site, excluding children of those Web sites.
         */
        Webs: IWebResults;
        /** The name of the site definition or site template that was used to create the site. */
        WebTemplate: string;
        /**
         * A value that specifies the collection of all workflow associations for the site.
         */
        WorkflowAssociations: IResults<any>;
        /**
         * A value that specifies the collection of workflow templates associated with the site.
         */
        WorkflowTemplates: IResults<IWorkflowTemplate>;
    }
    /**
     * Web Result
     */
    export interface IWebResult extends IWebMethods, IWebProps, IWebQueryProps, IWebQueryProps, IBase<IWeb, IWebResult, IWebQueryResult> {
    }
    /**
     * Web
     */
    export interface IWeb extends IWebMethods, IWebQueryProps, IBase<IWeb, IWebResult, IWebQueryResult> {
        /**
         * Constructor
         * @param url - (Optional) The web url.
         * @param targetInfo - (Optional) The target information.
         */
        new (url?: string, targetInfo?: ITargetInfo): IWeb;
    }
}
declare module "definitions/site/webs" {
    import { IBase, IBaseCollection, IWeb, IWebCreationInformation, IWebQueryResult, IWebResult } from "definitions/index";
    /**
     * Methods
     */
    export interface IWebsMethods {
        /**
         * Adds a site to the site collection.
         * @param parameters - The web creation information.
         */
        add(parameters: IWebCreationInformation): IBase<IWeb, IWebResult>;
        /**
         * Method to get the next set of results.
         */
        next(): IWebs & IBase<IWebs, IWebResults>;
    }
    /**
     * Webs
     */
    export interface IWebs extends IWebsMethods, IBaseCollection<IWeb, IWebResult, IWebQueryResult> {
    }
    /**
     * Web Results
     */
    export interface IWebResults extends IWebsMethods, IBaseCollection<IWebResult, IWebResult, IWebQueryResult> {
    }
}
declare module "definitions/site/index" {
    export * from "definitions/site/site";
    export * from "definitions/site/web";
    export * from "definitions/site/webs";
}
declare module "definitions/social/peopleManager" {
    import { IBase, IPersonProperties, ITargetInfo } from "definitions/index";
    /**
     * People Manager
     */
    export interface IPeopleManager extends IBase<IPeopleManager> {
        /**
         * Constructor
         * @param targetInfo - (Optional) The target information.
         */
        new (targetInfo?: ITargetInfo): IPeopleManager;
        /**
         * Properties
         */
        /**
         * The URL of the edit profile page for the current user.
         */
        EditProfileLink: string;
        /**
         * A Boolean value that indicates whether the current user's People I'm Following list is public.
         */
        IsMyPeopleListPublic: boolean;
        /**
         * Methods
         */
        /** Checks whether the specified user is following the current user.
         * @param accountName - The account name of the user, encoded and passed as an alias in the query string.
        */
        amIFollowedBy(accountName: string): IBase;
        /**
         * Checks whether the current user is following the specified user.
         * @param accountName - The account name of the user, encoded and passed as an alias in the query string.
         */
        amIFollowing(accountName: string): IBase;
        /**
         * Adds the specified user to the current user's list of followed users.
         * @param accountName - The account name of the user, encoded and passed as an alias in the query string.
         */
        follow(accountName: string): IBase;
        /**
         * Adds the specified tag to the current user's list of followed tags.
         * @param id - The ID of the tag to start following.
         */
        followTag(id: string): IBase;
        /**
         * Gets tags that the user is following.
         * @param maxCount - The maximum number of tags to get.
         */
        getFollowedTags(maxCount: number): IBase;
        /**
         * Gets the people who are following the specified user.
         * @param accountName - The account name of the user, encoded and passed as an alias in the query string.
         */
        getFollowersFor(accountName: string): IBase<IPersonProperties>;
        /**
         * Gets the people who are following the current user.
         */
        getMyFollowers(): IBase<IPersonProperties>;
        /**
         * Gets user properties for the current user.
         */
        getMyProperties(): IBase<IPersonProperties>;
        /**
         * Gets suggestions for who the current user might want to follow.
         */
        getMySuggestions(): IBase<IPersonProperties>;
        /**
         * Gets the people who the specified user is following.
         * @param accountName - The account name of the user, encoded and passed as an alias in the query string.
         */
        getPeopleFollowedBy(accountName: string): IBase<IPersonProperties>;
        /**
         * Gets the people who the current user is following.
         */
        getPeopleFollowedByMe(): IBase<IPersonProperties>;
        /**
         * Gets user properties for the specified user.
         * @param accountName - The account name of the user, encoded and passed as an alias in the query string.
         */
        getPropertiesFor(accountName: string): IBase<IPersonProperties>;
        /**
         * Gets the most popular tags.
         */
        getTrendingTags(): IBase;
        /**
         * Gets the specified user profile property for the specified user.
         * @param accountName - The account name of the user, encoded and passed as an alias in the query string.
         * @param propertyName - The case-sensitive name of the property to get.
         */
        getUserProfilePropertyFor(accountName: string, propertyName: string): IBase<IPersonProperties>;
        /**
         * Removes the specified user from the user's list of suggested people to follow.
         * @param accountName - The account name of the user, encoded and passed as an alias in the query string.
         */
        hideSuggestion(accountName: string): IBase;
        /**
         * Checks whether the first user is following the second user.
         * @param possibleFollowerAccountName - The account name of the user who might be following possiblefolloweeaccountname, encoded and passed as an alias in the query string.
         * @param possibleFolloweeAccountName - The account name of the user who might be followed, encoded and passed as an alias in the query string.
         */
        isFollowing(possibleFollowerAccountName: string, possibleFolloweeAccountName: string): IBase;
        /**
         * Uploads and sets the user profile picture. Users can upload a picture to their own profile only.
         * @param stream - The picture in BMP, JPEG, or PNG format of up to 4.76MB.
         */
        setMyProfilePicture(stream: any): IBase;
        /**
         * Remove the specified user from the current user's list of followed users.
         * @param accountName - The account name of the user, encoded and passed as an alias in the query string.
         */
        stopFollowing(accountName: string): IBase;
        /**
         * Remove the specified tag from the current user's list of followed tags.
         * @param id - The ID of the tag to stop following.
         */
        stopFollowingTag(id: string): IBase;
    }
}
declare module "definitions/social/personProperties" {
    import { ComplexTypes, IBase } from "definitions/index";
    /**
     * Person Properties
     */
    export interface IPersonProperties extends IBase<IPersonProperties> {
        /**
         * The user's account name.
         */
        AccountName: string;
        /**
         * The account names of the user's direct reports.
         */
        DirectReports: string;
        /**
         * The user's display name.
         */
        DisplayName: string;
        /**
         * The user's email address.
         */
        Email: string;
        /**
         * The account names of the user's manager hierarchy.
         */
        ExtendedManagers: string;
        /**
         * The account names of the user's extended reports.
         */
        ExtendedReports: string;
        /**
         * A Boolean value that indicates whether the user is being followed by the current user.
         */
        IsFollowed: boolean;
        /**
         * The user's latest microblog post.
         */
        LatestPost: string;
        /**
         * The account names of the user's peers.
         */
        Peers: string;
        /**
         * The absolute URL of the user's personal site.
         */
        PersonalUrl: string;
        /**
         * The URL of the user's profile picture.
         */
        PictureUrl: string;
        /**
         * The user's title.
         */
        Title: string;
        /**
         * The user profile properties for the user.
         */
        UserProfileProperties: ComplexTypes.KeyValue;
        /**
         * The URL of the user's profile page.
         */
        UserUrl: string;
    }
}
declare module "definitions/social/profileLoader" {
    import { IBase, ITargetInfo, IUserProfile } from "definitions/index";
    /**
     * Profile Loader
     */
    export interface IProfileLoader extends IBase<IProfileLoader> {
        /**
         * Constructor
         * @param targetInfo - (Optional) The target information.
         */
        new (targetInfo?: ITargetInfo): IProfileLoader;
        /**
         * Methods
         */
        /**
         * Provisions one or more users' personal sites. (My Site administrator on SharePoint Online only)
         * @param emailIDs - The email addresses of the users to provision sites for. Maximum 200 characters.
         */
        createPersonalSiteEnqueueBulk(emailIDs: Array<string>): IBase;
        /**
         * Gets the user profile of the site owner.
         */
        getOwnerUserProfile(): IBase<IUserProfile>;
        /**
         * Gets the user profile that corresponds to the current user.
         */
        getUserProfile(): IBase<IUserProfile>;
    }
}
declare module "definitions/social/socialFeed" {
    import { ComplexTypes, IBase } from "definitions/index";
    /**
     * Social Feed
     */
    export interface ISocialFeed {
        /**
         * Methods
         */
        /**
         * Gets information about the specified user and the current user.
         * @param accountName - The login name of the user.
         */
        actor(accountName: string): IBase<ISocialRestActor>;
        /**
         * Gets the feed of activity by the specified user (Personal feed type) or gets the specified site feed.
         * @param accountName - The login name of the user.
         */
        actorFeed(accountName: string): IBase<ISocialRestThread>;
        /**
         * Gets the feed of microblog posts that mention the current user, represented by MentionReference thread types, and sets the user's unread mention count to 0.
         */
        clearMyUnreadMentionCount(): IBase;
        /**
         * Gets information about the current user.
         */
        my(): IBase<ISocialRestActor>;
        /**
         * Gets the feed of activity by the current user (Personal feed type).
         */
        myFeed(): IBase<ISocialRestFeed>;
        /**
         * Gets the feed of microblog posts that the current user likes, represented by LikeReference thread types. See Reference threads and digest threads in SharePoint Server 2013 social feeds.
         */
        myLikes(): IBase<ISocialRestFeed>;
        /**
         * Gets the feed of microblog posts that mention the current user, represented by MentionReference thread types.
         */
        myMentionFeed(): IBase<ISocialRestFeed>;
        /**
         * Gets the feed of activity by the current user and by people and content the user is following, sorted by last modified date (News feed type).
         */
        myNews(): IBase<ISocialRestFeed>;
        /**
         * Gets the feed of activity by the current user and by people and content the user is following, sorted by created date (Timeline feed type).
         */
        myTimelineFeed(): IBase<ISocialRestFeed>;
        /**
         * Gets the count of unread mentions for the current user.
         */
        myUnreadMentionCount(): IBase<ISocialRestFeed>;
        /**
         * Creates a root post in the specified site feed.
         * @param accountName - The login name of the user.
         */
        postToFeed(accountName: string, postInfo: ComplexTypes.SocialPostCreationData): IBase<ISocialRestThread>;
        /**
         * Creates a root post in the current user's feed.
         * @param creationData - The post creation data.
         */
        postToMyFeed(creationData: ComplexTypes.SocialPostCreationData): IBase<ISocialRestThread>;
    }
    /**
     * Social Rest Actor
     */
    export interface ISocialRestActor extends IBase<ISocialRestActor> {
        /**
         * Properties
         */
        FollowableItem?: string;
        FollwableItemActor: ComplexTypes.SocialActor;
        Me: ComplexTypes.SocialActor;
        /**
         * Methods
         */
        clearUnreadMentionCount(): IBase<ISocialRestFeed>;
    }
    /**
     * Social Rest Feed
     */
    export interface ISocialRestFeed extends IBase<ISocialRestFeed> {
        /**
         * Properties
         */
        SocialFeed: ComplexTypes.SocialFeed;
        /**
         * Methods
         */
        /**
         * Creates a root post in the user's feed.
         */
        post(postInfo: ComplexTypes.SocialRestPostCreationData): ISocialRestThread;
    }
    /**
     * Social Rest Thread
     */
    export interface ISocialRestThread extends IBase<ISocialRestThread> {
        /**
         * Properties
         */
        ID?: string;
        SocialThread: ComplexTypes.SocialThread;
        /**
         * Methods
         */
        delete(): IBase<ISocialRestThread>;
        reply(restCreationData: ComplexTypes.SocialPostCreationData): IBase<ISocialRestThread>;
    }
}
declare module "definitions/social/userProfile" {
    import { IBase, IWeb, ITargetInfo, SPTypes } from "definitions/index";
    /**
     * User Profile
     */
    export interface IUserProfile extends IBase<IUserProfile> {
        /**
         * Constructor
         * @param targetInfo - (Optional) The target information.
         */
        new (targetInfo?: ITargetInfo): IUserProfile;
        /**
         * Properties
         */
        /**
         * An object containing the user's FollowedDocumentsUrl and FollowedSitesUrl.
         */
        FollowedContent(): IBase<any>;
        /**
         * The account name of the user. (SharePoint Online only)
         */
        AccountName: string;
        /**
         * The display name of the user. (SharePoint Online only)
         */
        DisplayName: string;
        FollowPersonalSiteUrl: string;
        IsPeopleListPublic: boolean;
        IsPrivacySettingOn: boolean;
        IsSelf: boolean;
        JobTitle: string;
        MySiteFirstRunExperience: number;
        MySiteHostUrl: string;
        /**
         * The FirstRun flag of the user. (SharePoint Online only)
         */
        O15FirstRunExperience: number;
        /**
         * The personal site of the user.
         */
        PersonalSite(): IBase<IWeb>;
        /**
         * The capabilities of the user's personal site.
         */
        PersonalSiteCapabilities: SPTypes.PersonalSiteCapabilities | number;
        /**
         * The error thrown when the user's personal site was first created, if any. (SharePoint Online only)
         */
        PersonalSiteFirstCreationError: string;
        /**
         * The date and time when the user's personal site was first created. (SharePoint Online only)
         */
        PersonalSiteFirstCreationTime: string;
        /**
         * The status for the state of the personal site instantiation.
         * See PersonalSiteInstantiationState in the .NET client object model reference for a list of instantiation state values.
         */
        PersonalSiteInstantiationState: number;
        /**
         * The date and time when the user's personal site was last created. (SharePoint Online only)
         */
        PersonalSiteLastCreationTime: string;
        /**
         * The number of attempts made to create the user's personal site. (SharePoint Online only)
         */
        PersonalSiteNumberOfRetries: number;
        /**
         * A Boolean value that indicates whether the user's picture is imported from Exchange.
         */
        PictureImportEnabled: boolean;
        PictureUrl: string;
        /**
         * The public URL of the personal site of the current user. (SharePoint Online only)
         */
        PublicUrl: string;
        /**
         * The URL used to create the user's personal site.
         */
        UrlToCreatePersonalSite: string;
        /**
         * Methods
         */
        /**
         * Enqueues creating a personal site for this user, which can be used to share documents, web pages, and other files.
         * For SharePoint Online development, My Site Host administrators can also use the CreatePersonalSiteEnqueueBulk method to create personal sites for one or more users.
         * @param interactiveFl - True if this is an interactively (web) initiated request, or false if this is a non-interactively (client) initiated request.
         */
        createPersonalSiteEnque(interactiveFl: boolean): IBase;
        /**
         * Sets the privacy settings for this profile.
         * @param publicFl - true to make all social data public; false to make all social data private.
         */
        shareAllSocialData(publicFl: boolean): IBase;
    }
}
declare module "definitions/social/index" {
    export * from "definitions/social/peopleManager";
    export * from "definitions/social/personProperties";
    export * from "definitions/social/profileLoader";
    export * from "definitions/social/socialFeed";
    export * from "definitions/social/userProfile";
}
declare module "definitions/user/group" {
    import { IBase, IUser, IUserResult, IUserResults, IUsers } from "definitions/index";
    /**
     * Group Methods
     */
    export interface IGroupMethods {
    }
    /**
     * Group Properties
     */
    export interface IGroupProps {
        /** Gets or sets a value that indicates whether the group members can edit membership in the group. */
        AllowMembersEditMembership: boolean;
        /** Gets or sets a value that indicates whether to allow users to request membership in the group and request to leave the group. */
        AllowRequestToJoinLeave: boolean;
        /** Gets or sets the description of the group. */
        Description: string;
        /** Gets a value that specifies the member identifier for the user or group. */
        Id: string;
        /** Gets a value that indicates whether this member should be hidden in the UI. */
        IsHiddenInUI: string;
        /** Gets the name of the group. */
        LoginName: string;
        /** Gets or sets a value that indicates whether only group members are allowed to view the membership of the group. */
        OnlyAllowMembersViewMembership: boolean;
        /** Gets the name for the owner of this group. */
        OwnerTitle: string;
        /** Gets or sets the email address to which the requests of the membership are sent. */
        RequestToJoinLeaveEmailSetting: string;
        /** Gets a value containing the type of the principal. Represents a bitwise SP.PrincipalType value: None = 0; User = 1; DistributionList = 2; SecurityGroup = 4; SharePointGroup = 8; All = 15. */
        PrincipalType: string;
        /** Gets or sets a value that specifies the name of the principal. */
        Title: string;
    }
    /**
     * Group Query Properties
     */
    export interface IGroupQueryProps {
        /**
         * Gets or sets a value that indicates whether the request to join or leave the group can be accepted automatically.
         */
        AutoAcceptRequestToJoinLeave(): IBase<boolean>;
        /**
         * Gets a value that indicates whether the current user can edit the membership of the group.
         */
        CanCurrentUserEditMembership(): IBase<boolean>;
        /**
         * Gets a value that indicates whether the current user can manage the group.
         */
        CanCurrentUserManageGroup(): IBase<boolean>;
        /**
         * Gets a value that indicates whether the current user can view the membership of the group.
         */
        CanCurrentUserViewMembership(): IBase<boolean>;
        /**
         * Gets or sets the owner of the group which can be a user or another group assigned permissions to control security.
         */
        Owner(): IUser;
        /**
         * Gets a collection of user objects that represents all of the users in the group.
         */
        Users(): IUsers;
        /**
         * Gets a collection of user objects that represents all of the users in the group.
         * @param id - The user id.
         */
        Users(id: any): IUser;
    }
    /**
     * Group Query Result
     */
    export interface IGroupQueryResult extends IGroupMethods, IGroupProps {
        /**
         * Gets or sets a value that indicates whether the request to join or leave the group can be accepted automatically.
         */
        AutoAcceptRequestToJoinLeave: boolean;
        /**
         * Gets a value that indicates whether the current user can edit the membership of the group.
         */
        CanCurrentUserEditMembership: boolean;
        /**
         * Gets a value that indicates whether the current user can manage the group.
         */
        CanCurrentUserManageGroup: boolean;
        /**
         * Gets a value that indicates whether the current user can view the membership of the group.
         */
        CanCurrentUserViewMembership: boolean;
        /**
         * Gets or sets the owner of the group which can be a user or another group assigned permissions to control security.
         */
        Owner: IUserResult;
        /**
         * Gets a collection of user objects that represents all of the users in the group.
         */
        Users: IUserResults;
    }
    /**
     * Group Result
     */
    export interface IGroupResult extends IGroupMethods, IGroupProps, IGroupQueryProps, IBase<IGroup, IGroupResult, IGroupQueryResult> {
    }
    /**
     * Group
     */
    export interface IGroup extends IGroupMethods, IGroupQueryProps, IBase<IGroup, IGroupResult, IGroupQueryResult> {
    }
}
declare module "definitions/user/groups" {
    import { IBase, IBaseCollection, IGroup, IGroupCreationInformation, IGroupQueryResult, IGroupResult } from "definitions/index";
    /**
     * Methods
     */
    export interface ISiteGroupsMethods {
        /**
         * Adds a site to the site collection.
         * @param groupInfo - The group creation information.
         */
        add(groupInfo: IGroupCreationInformation): IBase<IGroup, IGroupResult>;
        /**
         * Returns a group from the collection based on the member ID of the group.
         * @param id - The site group id.
         */
        getById(id: any): IGroup & IBase<IGroup, IGroupResult, IGroupQueryResult>;
        /**
         * Returns a cross-site group from the collection based on the name of the group.
         * @param name - The name of the group. The group name is specified in its LoginName property.
         */
        getByName(name: any): IGroup & IBase<IGroup, IGroupResult, IGroupQueryResult>;
        /**
         * Method to get the next set of results.
         */
        next(): IBase<ISiteGroups, ISiteGroupResults>;
        /**
         * Removes the group with the specified member ID from the collection.
         * @param id - The ID of the group to remove.
         */
        removeById(id: any): IBase;
        /**
         * Removes the cross-site group with the specified name from the collection.
         * @param name - The name of the group to remove. The group name is specified in its LoginName property.
         */
        removeByLoginName(name: any): IBase;
    }
    /**
     * Site Groups
     */
    export interface ISiteGroups extends ISiteGroupsMethods, IBaseCollection<IGroup, IGroupResult, IGroupQueryResult> {
    }
    /**
     * Site Group Results
     */
    export interface ISiteGroupResults extends ISiteGroupsMethods, IBaseCollection<IGroupResult, IGroupResult, IGroupQueryResult> {
    }
}
declare module "definitions/user/peoplePicker" {
    import { IBase, IPeoplePickerQuery, IPeoplePickerResolveUser, IPeoplePickerSearchUser, ITargetInfo } from "definitions/index";
    /**
     * People Picker
     */
    export interface IPeoplePicker extends IBase {
        /**
         * Constructor
         * @param settings - The search settings.
         */
        new (settings?: ITargetInfo): IPeoplePicker;
        /**
         * Methods
         */
        /** Method to resolve users.
         * @param query - The people picker query.
        */
        clientPeoplePickerResolveUser(query: IPeoplePickerQuery): IBase<IPeoplePickerResolveUser>;
        /** Method to search for users.
         * @param query - The people picker query.
        */
        clientPeoplePickerSearchUser(query: IPeoplePickerQuery): IBase<IPeoplePickerSearchUser>;
    }
}
declare module "definitions/user/user" {
    import { IBase, IGroup, ISiteGroupResults, ISiteGroups, IUser } from "definitions/index";
    /**
     * User Methods
     */
    export interface IUserMethods {
        /**
         * Deletes the user custom action.
         */
        delete(): IBase;
    }
    /**
     * User Properties
     */
    export interface IUserProps {
        /** Gets or sets the email address of the user. */
        Email: string;
        /** Gets a value that specifies the member identifier for the user or group. */
        Id: string;
        /** Gets a value that indicates whether this member should be hidden in the UI. */
        IsHiddenInUI: boolean;
        IsSharedByEmailGuestUser: boolean;
        /** Gets or sets a Boolean value that specifies whether the user is a site collection administrator. */
        IsSiteAdmin: boolean;
        /** Gets the login name of the user. */
        LoginName: string;
        /** Gets a value containing the type of the principal. Represents a bitwise SP.PrincipalType value: None = 0; User = 1; DistributionList = 2; SecurityGroup = 4; SharePointGroup = 8; All = 15. */
        PrincipalType: string;
        /** Gets or sets a value that specifies the name of the principal. */
        Title: string;
        /** Gets the information of the user that contains the user's name identifier and the issuer of the user's name identifier. */
        UserId: string;
    }
    /**
     * User Query Properties
     */
    export interface IUserQueryProps {
        /**
         * Gets the groups of which the user is a member.
         */
        Groups(): ISiteGroups;
        /**
         * Gets the group of which the user is a member.
         * @param id - The group id.
         */
        Groups(id: number): IBase<IGroup>;
    }
    /**
     * User Query Result
     */
    export interface IUserQueryResult extends IUserMethods, IUserProps {
        /**
         * Gets the groups of which the user is a member.
         */
        Groups: ISiteGroupResults;
    }
    /**
     * User Result
     */
    export interface IUserResult extends IUserMethods, IUserProps, IUserQueryProps, IBase<IUser, IUserResult, IUserQueryResult> {
    }
    /**
     * User
     */
    export interface IUser extends IUserMethods, IUserQueryProps, IBase<IUser, IUserResult, IUserQueryResult> {
    }
}
declare module "definitions/user/users" {
    import { IBase, IBaseCollection, IUser, IUserCreationInformation, IUserQueryResult, IUserResult } from "definitions/index";
    /**
     * Methods
     */
    export interface IUsersMethods {
        /**
         * Adds a site to the site collection.
         * @param userInfo - The user creation information.
         */
        add(userInfo: IUserCreationInformation): IBase<IUser, IUserResult>;
        /**
         * Gets the user with the specified email address.
         * @param email - The email of the user to get.
         */
        getByEmail(email: any): IUser & IBase<IUser, IUserResult, IUserQueryResult>;
        /**
         * Gets the user with the specified member identifier (ID).
         * @param id - The ID of the user to get.
         */
        getById(id: any): IUser & IBase<IUser, IUserResult, IUserQueryResult>;
        /**
         * Gets the user with the specified login name.
         * @param loginName - The login name of the user to get, passed as an alias in the query string.
         */
        getByLoginName(loginName: any): IUser & IBase<IUser, IUserResult, IUserQueryResult>;
        /**
         * Method to get the next set of results.
         */
        next(): IBase<IUsers, IUserResults>;
        /**
         * Removes the user with the specified ID.
         * @param id - The ID of the user to remove.
         */
        removeById(id: any): IBase;
        /**
         * Removes the user with the specified login name.
         * @param loginName - The login name of the user to remove.
         */
        removeByLoginName(loginName: any): IBase;
    }
    /**
     * Users
     */
    export interface IUsers extends IUsersMethods, IBaseCollection<IUser, IUserResult, IUserQueryResult> {
    }
    /**
     * User Results
     */
    export interface IUserResults extends IUsersMethods, IBaseCollection<IUserResult, IUserResult, IUserQueryResult> {
    }
}
declare module "definitions/user/index" {
    export * from "definitions/user/group";
    export * from "definitions/user/groups";
    export * from "definitions/user/peoplePicker";
    export * from "definitions/user/user";
    export * from "definitions/user/users";
}
declare module "definitions/webpart/limitedWebPartManager" {
    import { IBase } from "definitions/index";
    /**
     * Limited Web Part Manager
     */
    export interface ILimitedWebPartManager extends IBase<ILimitedWebPartManager, ILimitedWebPartManager> {
        /**
         * Properties
         */
        HasPersonalizedParts: boolean;
        Scope: number;
        /**
         * Methods
         */
        /**
         * Gets a webpart by its id.
         * @param id - The web part id.
         */
        WebParts(id: any): IBase;
    }
}
declare module "definitions/webpart/index" {
    export * from "definitions/webpart/limitedWebPartManager";
}
declare module "definitions/index" {
    import * as ComplexTypes from "definitions/complexTypes";
    export * from "definitions/contentType/index";
    export * from "definitions/customAction/index";
    export * from "definitions/eventReceiver/index";
    export * from "definitions/field/index";
    export * from "definitions/file/index";
    export * from "definitions/lib/index";
    export * from "definitions/list/index";
    export * from "definitions/propertyValues";
    export * from "definitions/security/index";
    export * from "definitions/site/index";
    export * from "definitions/social/index";
    export * from "definitions/user/index";
    export * from "definitions/webpart/index";
    export { ComplexTypes };
}
declare module "types/requestType" {
    export const RequestType: {
        Custom: number;
        Delete: number;
        Merge: number;
        OData: number;
        Get: number;
        GetBuffer: number;
        GetWithArgs: number;
        GetWithArgsInBody: number;
        GetWithArgsInQS: number;
        GetWithArgsValueOnly: number;
        GetReplace: number;
        Post: number;
        PostWithArgs: number;
        PostWithArgsInBody: number;
        PostWithArgsInQS: number;
        PostWithArgsValueOnly: number;
        PostReplace: number;
    };
}
declare module "types/spConfigTypes" {
    /**
     * SharePoint Configuration Types
     * The value determines the order to install the object type.
     */
    export const SPConfigTypes: {
        Fields: number;
        ContentTypes: number;
        Lists: number;
        SiteUserCustomActions: number;
        WebParts: number;
        WebUserCustomActions: number;
    };
}
declare module "types/sptypes" {
    /**
     * Calendar Types
     */
    export const CalendarTypes: {
        Gregorian: number;
        JapaneseEmperorEra: number;
        TaiwanCalendar: number;
        KoreanTangunEra: number;
        Hijri: number;
        Thai: number;
        HebrewLunar: number;
        GregorianMiddleEastFrench: number;
        GregorianArabic: number;
        GregorianTransliteratedEnglish: number;
        GregorianTransliteratedFrench: number;
        KoreanandJapaneseLunar: number;
        ChineseLunar: number;
        SakaEra: number;
    };
    /**
     * Check Out Types
     */
    export const CheckOutType: {
        Online: number;
        Offline: number;
        None: number;
    };
    /**
     * Choice Format Types
     */
    export const ChoiceFormatType: {
        Dropdown: number;
        RadioButtons: number;
    };
    /**
     * Client Template Utility
     */
    export const ClientTemplatesUtility: {
        UserLookupDelimitString: string;
        UserMultiValueDelimitString: string;
    };
    /**
     * Control Modes
     */
    export const ControlMode: {
        Invalid: number;
        Display: number;
        Edit: number;
        New: number;
        View: number;
    };
    /**
     * Date Format
     */
    export const DateFormat: {
        DateOnly: number;
        DateTime: number;
    };
    /**
     * Draft Visibility Types
     */
    export const DraftVisibilityType: {
        Reader: number;
        Author: number;
        Approver: number;
    };
    /**
     * Event Receiver Types
     */
    export const EventReceiverType: {
        ItemAdding: number;
        ItemUpdating: number;
        ItemDeleting: number;
        ItemCheckingIn: number;
        ItemCheckingOut: number;
        ItemUncheckingOut: number;
        ItemAttachmentAdding: number;
        ItemAttachmentDeleting: number;
        ItemFileMoving: number;
        ItemVersionDeleting: number;
        FieldAdding: number;
        FieldUpdating: number;
        FieldDeleting: number;
        ListAdding: number;
        ListDeleting: number;
        SiteDeleting: number;
        WebDeleting: number;
        WebMoving: number;
        WebAdding: number;
        GroupAdding: number;
        GroupUpdating: number;
        GroupDeleting: number;
        GroupUserAdding: number;
        GroupUserDeleting: number;
        RoleDefinitionAdding: number;
        RoleDefinitionUpdating: number;
        RoleDefinitionDeleting: number;
        RoleAssignmentAdding: number;
        RoleAssignmentDeleting: number;
        InheritanceBreaking: number;
        InheritanceResetting: number;
        WorkflowStarting: number;
        ItemAdded: number;
        ItemUpdated: number;
        ItemDeleted: number;
        ItemCheckedIn: number;
        ItemCheckedOut: number;
        ItemUncheckedOut: number;
        ItemAttachmentAdded: number;
        ItemAttachmentDeleted: number;
        ItemFileMoved: number;
        ItemFileConverted: number;
        ItemVersionDeleted: number;
        FieldAdded: number;
        FieldUpdated: number;
        FieldDeleted: number;
        ListAdded: number;
        ListDeleted: number;
        SiteDeleted: number;
        WebDeleted: number;
        WebMoved: number;
        WebProvisioned: number;
        GroupAdded: number;
        GroupUpdated: number;
        GroupDeleted: number;
        GroupUserAdded: number;
        GroupUserDeleted: number;
        RoleDefinitionAdded: number;
        RoleDefinitionUpdated: number;
        RoleDefinitionDeleted: number;
        RoleAssignmentAdded: number;
        RoleAssignmentDeleted: number;
        InheritanceBroken: number;
        InheritanceReset: number;
        WorkflowStarted: number;
        WorkflowPostponed: number;
        WorkflowCompleted: number;
        EntityInstanceAdded: number;
        EntityInstanceUpdated: number;
        EntityInstanceDeleted: number;
        AppInstalled: number;
        AppUpgraded: number;
        AppUninstalling: number;
        EmailReceived: number;
        ContextEvent: number;
    };
    /**
     * Event Receiver Synchronization Types
     */
    export const EventReceiverSynchronizationType: {
        Synchronization: number;
        Asynchronous: number;
    };
    /**
     * Field User Selection Types
     */
    export const FieldUserSelectionType: {
        PeopleOnly: number;
        PeopleAndGroups: number;
    };
    /**
     * Field Types
     */
    export const FieldType: {
        AllDayEvent: number;
        Attachments: number;
        Boolean: number;
        Calculated: number;
        Choice: number;
        Computed: number;
        ContentTypeId: number;
        Counter: number;
        CrossProjectLink: number;
        Currency: number;
        DateTime: number;
        Error: number;
        File: number;
        Geolocation: number;
        GridChoice: number;
        Guid: number;
        Integer: number;
        Invalid: number;
        Lookup: number;
        MaxItems: number;
        ModStat: number;
        MultiChoice: number;
        Note: number;
        Number: number;
        PageSeparator: number;
        Recurrence: number;
        Text: number;
        ThreadIndex: number;
        Threading: number;
        URL: number;
        User: number;
        WorkflowEventType: number;
        WorkflowStatus: number;
    };
    /**
     * File Template Types
    */
    export const FileTemplateType: {
        StandardPage: number;
        WikiPage: number;
        FormPage: number;
    };
    /**
     * Friendly Date Format
     */
    export const FriendlyDateFormat: {
        Unspecified: number;
        Disabled: number;
        Relative: number;
    };
    /**
     * List Template Types
    */
    export const ListTemplateType: {
        AccessRequest: number;
        AdminTasks: number;
        Agenda: number;
        AppDataCatalog: number;
        Announcements: number;
        CallTrack: number;
        Categories: number;
        Circulation: number;
        Comments: number;
        Contacts: number;
        CustomGrid: number;
        DataConnectionLibrary: number;
        DataSources: number;
        Decision: number;
        DesignCatalog: number;
        DeveloperSiteDraftApps: number;
        DiscussionBoard: number;
        DocumentLibrary: number;
        Events: number;
        ExternalList: number;
        Facility: number;
        GanttTasks: number;
        GenericList: number;
        HealthReports: number;
        HealthRules: number;
        HelpLibrary: number;
        Holidays: number;
        HomePageLibrary: number;
        IMEDic: number;
        IssueTracking: number;
        Links: number;
        ListTemplateCatalog: number;
        MasterPageCatalog: number;
        MaintenanceLogs: number;
        MeetingObjective: number;
        Meetings: number;
        MeetingUser: number;
        MySiteDocumentLibrary: number;
        Posts: number;
        NoCodePublic: number;
        NoCodeWorkflows: number;
        PictureLibrary: number;
        SolutionCatalog: number;
        Survey: number;
        Tasks: number;
        TasksWithTimelineAndHierarchy: number;
        TextBox: number;
        ThemeCatalog: number;
        ThingsToBring: number;
        Timecard: number;
        UserInformation: number;
        WebPageLibrary: number;
        WebPartCatalog: number;
        WebTemplateCatalog: number;
        Whereabouts: number;
        WorkflowHistory: number;
        WorkflowProcess: number;
        XMLForm: number;
    };
    /**
     * Locale LCID Types
     */
    export const LocaleLCIDType: {
        Afrikaans: number;
        Albanian: number;
        ArabicAlgeria: number;
        ArabicBahrain: number;
        ArabicEgypt: number;
        ArabicIraq: number;
        ArabicJordan: number;
        ArabicLebanon: number;
        ArabicLibya: number;
        ArabicMorocco: number;
        ArabicOman: number;
        ArabicQatar: number;
        ArabicSaudiArabia: number;
        ArabicSyria: number;
        ArabicTunisia: number;
        ArabicUAE: number;
        ArabicYemen: number;
        Armenian: number;
        AzeriCyrillic: number;
        AzeriLatin: number;
        Basque: number;
        Belarusian: number;
        Bulgarian: number;
        Catalan: number;
        ChineseHongKongSAR: number;
        ChineseMacaoSAR: number;
        ChinesePRC: number;
        ChineseSingapore: number;
        ChineseTaiwan: number;
        CroatianCroatia: number;
        Czech: number;
        Danish: number;
        Divehi: number;
        DutchBelgium: number;
        DutchNetherlands: number;
        EnglishAustralia: number;
        EnglishBelize: number;
        EnglishCanada: number;
        EnglishCaribbean: number;
        EnglishIreland: number;
        EnglishJamaica: number;
        EnglishNewZealand: number;
        EnglishPhilippines: number;
        EnglishSouthAfrica: number;
        EnglishTrinidad: number;
        EnglishUnitedKingdom: number;
        EnglishUnitedStates: number;
        EnglishZimbabwe: number;
        Estonian: number;
        Faeroese: number;
        Finnish: number;
        FrenchBelgium: number;
        FrenchCanada: number;
        FrenchFrance: number;
        FrenchLuxembourg: number;
        FrenchMonaco: number;
        FrenchSwitzerland: number;
        Galician: number;
        Georgian: number;
        GermanAustria: number;
        GermanGermany: number;
        GermanLiechtenstein: number;
        GermanLuxembourg: number;
        GermanSwitzerland: number;
        Greek: number;
        Gujarati: number;
        HebrewIsrael: number;
        HindiIndia: number;
        Hungarian: number;
        Icelandic: number;
        Indonesian: number;
        ItalianItaly: number;
        ItalianSwitzerland: number;
        Japanese: number;
        Kannada: number;
        Kazakh: number;
        Konkani: number;
        Korean: number;
        KyrgyzCyrillic: number;
        Latvian: number;
        Lithuanian: number;
        MacedonianFYROM: number;
        Malay: number;
        MalayBruneiDarussalam: number;
        Marathi: number;
        MongolianCyrillic: number;
        NorwegianBokmal: number;
        NorwegianNynorsk: number;
        PersianIran: number;
        Polish: number;
        PortugueseBrazil: number;
        PortuguesePortugal: number;
        Punjabi: number;
        Romanian: number;
        Russian: number;
        Sanskrit: number;
        SerbianCyrillic: number;
        SerbianLatin: number;
        Slovak: number;
        Slovenian: number;
        SpanishArgentina: number;
        SpanishBolivia: number;
        SpanishChile: number;
        SpanishColombia: number;
        SpanishCostaRica: number;
        SpanishDominicanRepublic: number;
        SpanishEcuador: number;
        SpanishElSalvador: number;
        SpanishGuatemala: number;
        SpanishHonduras: number;
        SpanishMexico: number;
        SpanishNicaragua: number;
        SpanishPanama: number;
        SpanishParaguay: number;
        SpanishPeru: number;
        SpanishPuertoRico: number;
        SpanishSpain: number;
        SpanishUruguay: number;
        SpanishVenezuela: number;
        Swahili: number;
        Swedish: number;
        SwedishFinland: number;
        Syriac: number;
        Tamil: number;
        Tatar: number;
        Telugu: number;
        ThaiThailand: number;
        Turkish: number;
        Ukrainian: number;
        UrduPakistan: number;
        UzbekCyrillic: number;
        UzbekLatin: number;
        Vietnamese: number;
    };
    /**
     * Page Types
     */
    export const PageType: {
        DefaultView: number;
        DialogView: number;
        DisplayForm: number;
        DisplayFormDialog: number;
        EditForm: number;
        EditFormDialog: number;
        Invalid: number;
        NewForm: number;
        NewFormDialog: number;
        NormalView: number;
        Page_MAXITEMS: number;
        SolutionForm: number;
        View: number;
    };
    /**
     * Personal Site Capabilities
     */
    export const PersonalSiteCapabilities: {
        Education: number;
        Guest: number;
        MyTasksDashboard: number;
        None: number;
        Profile: number;
        Social: number;
        Storage: number;
    };
    /**
     * Principal Sources
     */
    export const PrincipalSources: {
        All: number;
        MembershipProvider: number;
        None: number;
        RoleProvider: number;
        UserInfoList: number;
        Windows: number;
    };
    /**
     * Principal Types
     */
    export const PrincipalTypes: {
        All: number;
        DistributionList: number;
        None: number;
        SecurityGroup: number;
        SharePointGroup: number;
        User: number;
    };
    /**
     * Relationship Delete Behavior Types
     */
    export const RelationshipDeleteBehaviorType: {
        None: number;
        Cascade: number;
        Restrict: number;
    };
    /**
     * Reordering Rule Match Types
     */
    export const ReorderingRuleMatchType: {
        ContentTypeIs: number;
        FileExtensionMatches: number;
        ManualCondition: number;
        ResultContainsKeyword: number;
        ResultHasTag: number;
        TitleContainsKeyword: number;
        TitleMatchesKeyword: number;
        UrlExactlyMatches: number;
        UrlStartsWith: number;
    };
    /**
     * Role Types
     */
    export const RoleType: {
        Administrator: number;
        Contributor: number;
        Editor: number;
        Guest: number;
        None: number;
        Reader: number;
        WebDesigner: number;
    };
    /**
     * URL Format Types
     */
    export const UrlFormatType: {
        Hyperlink: number;
        Image: number;
    };
    /**
     * URL Zones
     */
    export const URLZones: {
        Default: number;
        Intranet: number;
        Internet: number;
        Custom: number;
        Extranet: number;
    };
    /**
     * User Custom Action Registration Types
     */
    export const UserCustomActionRegistrationType: {
        None: number;
        List: number;
        ContentType: number;
        ProgId: number;
        FileType: number;
    };
    /**
     * View Types
     */
    export const ViewType: {
        Calendar: number;
        Chart: number;
        Gantt: number;
        Grid: number;
        Html: number;
        Recurrence: number;
    };
}
declare module "types/index" {
    import { RequestType } from "types/requestType";
    import { SPConfigTypes } from "types/spConfigTypes";
    import * as SPTypes from "types/sptypes";
    export { RequestType, SPConfigTypes, SPTypes };
}
declare module "mapper/attachment/attachment" {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    export const attachment: {};
}
declare module "mapper/attachmentFiles/attachmentFiles" {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    export const attachmentfiles: {
        add: {
            argNames: string[];
            requestType: number;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
    };
}
declare module "mapper/audit/audit" {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    export const audit: {
        query: {
            argNames: string[];
            requestType: number;
        };
    };
}
declare module "mapper/contentType/contentType" {
    export const contenttype: {
        properties: string[];
        delete: {
            requestType: number;
        };
        update: {
            metadataType: string;
            name: string;
            requestMethod: string;
            requestType: number;
        };
    };
}
declare module "mapper/contentType/contentTypes" {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    export const contenttypes: {
        add: {
            metadataType: string;
            name: string;
            requestType: number;
        };
        addAvailableContentType: {
            argNames: string[];
            requestType: number;
        };
        getById: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
    };
}
declare module "mapper/eventReceiver/eventReceiver" {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    export const eventreceiver: {
        delete: {
            requestType: number;
        };
        update: {
            metadataType: string;
            name: string;
            requestMethod: string;
            requestType: number;
        };
    };
}
declare module "mapper/eventReceiver/eventReceivers" {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    export const eventreceivers: {
        add: {
            metadataType: string;
            name: string;
            requestType: number;
        };
        getById: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
    };
}
declare module "mapper/field/field" {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    export const field: {
        delete: {
            requestType: number;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
        setShowInDisplayForm: {
            argNames: string[];
            requestType: number;
        };
        setShowInEditForm: {
            argNames: string[];
            requestType: number;
        };
        setShowInNewForm: {
            argNames: string[];
            requestType: number;
        };
        update: {
            inheritMetadataType: boolean;
            name: string;
            requestMethod: string;
            requestType: number;
        };
    };
}
declare module "mapper/field/fields" {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    export const fields: {
        add: {
            metadataType: string;
            name: string;
            requestType: number;
        };
        addField: {
            argNames: string[];
            metadataType: string;
            name: string;
            requestType: number;
        };
        addDependentLookupField: {
            argNames: string[];
            requestType: number;
        };
        createFieldAsXml: {
            argNames: string[];
            requestType: number;
            data: {
                parameters: {
                    __metadata: {
                        type: string;
                    };
                    Options: number;
                    SchemaXml: string;
                };
            };
        };
        getById: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        getByInternalNameOrTitle: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        getByTitle: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
    };
}
declare module "mapper/fieldLink/fieldLinks" {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    export const fieldlinks: {
        add: {
            argNames: string[];
            metadataType: string;
            name: string;
            requestType: number;
        };
        getById: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
    };
}
declare module "mapper/file/file" {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    export const file: {
        properties: string[];
        approve: {
            argNames: string[];
            requestType: number;
        };
        cancelupload: {
            argNames: string[];
            name: string;
            requestType: number;
        };
        checkin: {
            argNames: string[];
            requestType: number;
        };
        checkout: {
            requestType: number;
        };
        content: {
            name: string;
            requestType: number;
        };
        continueUpload: {
            argNames: string[];
            name: string;
            requestType: number;
        };
        copyTo: {
            argNames: string[];
            requestType: number;
        };
        delete: {
            requestType: number;
        };
        deny: {
            argNames: string[];
            requestType: number;
        };
        finishUpload: {
            argNames: string[];
            name: string;
            requestType: number;
        };
        getlimitedwebpartmanager: {
            argNames: string[];
            name: string;
            requestType: number;
        };
        moveTo: {
            argNames: string[];
            name: string;
            requestType: number;
        };
        openBinaryStream: {
            requestType: number;
        };
        publish: {
            argNames: string[];
            requestType: number;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
        recycle: {
            requestType: number;
        };
        saveBinaryStream: {
            requestType: number;
        };
        startUpload: {
            argNames: string[];
            name: string;
            requestType: number;
        };
        undoCheckOut: {
            requestType: number;
        };
        unpublish: {
            argNames: string[];
            requestType: number;
        };
        update: {
            metadataType: string;
            name: string;
            requestMethod: string;
            requestType: number;
        };
    };
}
declare module "mapper/file/files" {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    export const files: {
        add: {
            argNames: string[];
            requestType: number;
        };
        addTemplateFile: {
            argNames: string[];
            requestType: number;
        };
        getByUrl: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
    };
}
declare module "mapper/fileVersion/fileVersion" {
    export const fileversion: {
        properties: any[];
        delete: {
            requestType: number;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
    };
}
declare module "mapper/fileVersion/fileVersions" {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    export const fileversions: {
        delete: {
            requestType: number;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
    };
}
declare module "mapper/folder/folder" {
    export const folder: {
        properties: string[];
        delete: {
            requestType: number;
        };
        getByUrl: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
        recycle: {
            requestType: number;
        };
        update: {
            metadataType: string;
            name: string;
            requestMethod: string;
            requestType: number;
        };
    };
}
declare module "mapper/folder/folders" {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    export const folders: {
        properties: string[];
        add: {
            argNames: string[];
            requestType: number;
        };
        getbyurl: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
    };
}
declare module "mapper/group/group" {
    export const group: {
        properties: string[];
        query: {
            argNames: string[];
            requestType: number;
        };
    };
}
declare module "mapper/group/siteGroups" {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    export const sitegroups: {
        add: {
            metadataType: string;
            name: string;
            requestType: number;
        };
        getById: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        getByName: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
        removeById: {
            argNames: string[];
            requestType: number;
        };
        removeByLoginName: {
            argNames: string[];
            requestType: number;
        };
    };
}
declare module "mapper/item/items" {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    export const items: {
        add: {
            metadataType: (obj: any) => any;
            name: string;
            requestType: number;
        };
        getById: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
    };
}
declare module "mapper/limitedWebPartManager/limitedWebPartManager" {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    export const limitedwebpartmanager: {
        get_WebParts: {
            argNames: string[];
            name: string;
            requestType: number;
        };
    };
}
declare module "mapper/list/list" {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    export const list: {
        properties: string[];
        breakRoleInheritance: {
            argNames: string[];
            requestType: number;
        };
        delete: {
            requestType: number;
        };
        getChanges: {
            argNames: string[];
            metadataType: string;
            requestType: number;
        };
        getItemById: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        getItems: {
            argNames: string[];
            requestType: number;
            data: {
                query: {
                    __metadata: {
                        type: string;
                    };
                    ViewXml: string;
                };
            };
        };
        getItemsByQuery: {
            argNames: string[];
            name: string;
            requestType: number;
            data: {
                query: {
                    __metadata: {
                        type: string;
                    };
                    ViewXml: string;
                };
            };
        };
        getListItemChangesSinceToken: {
            argNames: string[];
            metadataType: string;
            requestType: number;
        };
        getRelatedFields: {
            requestType: number;
        };
        getUserEffectivePermissions: {
            argNames: string[];
            name: string;
            requestType: number;
        };
        getViewById: {
            argNames: string[];
            name: string;
            requestType: number;
            returnType: string;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
        recycle: {
            requestType: number;
        };
        renderListData: {
            argNames: string[];
            name: string;
            requestType: number;
        };
        renderListFormData: {
            argNames: string[];
            requestType: number;
        };
        reserveListItemId: {
            requestType: number;
        };
        resetRoleInheritance: {
            requestType: number;
        };
        update: {
            metadataType: string;
            name: string;
            requestMethod: string;
            requestType: number;
        };
    };
}
declare module "mapper/item/listItem" {
    export const listitem: {
        properties: string[];
        breakRoleInheritance: {
            argNames: string[];
            requestType: number;
        };
        delete: {
            requestType: number;
        };
        getUserEffectivePermissions: {
            argNames: string[];
            name: string;
            requestType: number;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
        recycle: {
            requestType: number;
        };
        resetRoleInheritance: {
            requestType: number;
        };
        update: {
            inheritMetadataType: boolean;
            name: string;
            requestMethod: string;
            requestType: number;
        };
        validateUpdateListItem: {
            argNames: string[];
            requestType: number;
        };
    };
}
declare module "mapper/list/lists" {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    export const lists: {
        add: {
            metadataType: string;
            name: string;
            requestType: number;
        };
        ensureSiteAssetsLibrary: {
            requestType: number;
        };
        ensureSitePagesLibrary: {
            requestType: number;
        };
        getById: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        getByTitle: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
    };
}
declare module "mapper/peopleManager/peopleManager" {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    export const peoplemanager: {
        amIFollowedBy: {
            argNames: string[];
            requestType: number;
        };
        amIFollowing: {
            argNames: string[];
            requestType: number;
        };
        follow: {
            argNames: string[];
            requestType: number;
        };
        followTag: {
            argNames: string[];
            requestType: number;
        };
        getFollowedTags: {
            argNames: string[];
            requestType: number;
        };
        getFollowersFor: {
            argNames: string[];
            requestType: number;
        };
        getMyFollowers: {
            requestType: number;
        };
        getMyProperties: {
            requestType: number;
        };
        getMySuggestions: {
            requestType: number;
        };
        getPeopleFollowedBy: {
            argNames: string[];
            requestType: number;
        };
        getPeopleFollowedByMe: {
            requestType: number;
        };
        getPropertiesFor: {
            argNames: string[];
            requestType: number;
        };
        getTrendingTags: {
            name: string;
            replaceEndpointFl: boolean;
            requestType: number;
        };
        getUserProfilePropertyFor: {
            argNames: string[];
            requestType: number;
        };
        hideSuggestion: {
            argNames: string[];
            requestType: number;
        };
        isFollowing: {
            argNames: string[];
            name: string;
            replaceEndpointFl: boolean;
            requestType: number;
        };
        setMyProfilePicture: {
            requestType: number;
        };
        stopFollowing: {
            argNames: string[];
            requestType: number;
        };
        stopFollowingTag: {
            argNames: string[];
            requestType: number;
        };
    };
}
declare module "mapper/peoplePicker/peoplePicker" {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    export const peoplepicker: {
        clientPeoplePickerResolveUser: {
            argNames: string[];
            metadataType: string;
            name: string;
            replaceEndpointFl: boolean;
            requestType: number;
        };
        clientPeoplePickerSearchUser: {
            argNames: string[];
            metadataType: string;
            name: string;
            replaceEndpointFl: boolean;
            requestType: number;
        };
    };
}
declare module "mapper/profileLoader/profileLoader" {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    export const profileloader: {
        createPersonalSiteEnqueueBulk: {
            argNames: string[];
            requestType: number;
        };
        getOwnerUserProfile: {
            name: string;
            replaceEndpointFl: boolean;
            requestType: number;
            returnType: string;
        };
        getUserProfile: {
            requestType: number;
            returnType: string;
        };
    };
}
declare module "mapper/propertyValues/propertyValues" {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    export const propertyvalues: {
        query: {
            argNames: string[];
            requestType: number;
        };
    };
}
declare module "mapper/roleAssignment/roleAssignment" {
    export const roleassignment: {
        properties: string[];
        delete: {
            requestType: number;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
    };
}
declare module "mapper/roleAssignment/roleAssignments" {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    export const roleassignments: {
        addRoleAssignment: {
            argNames: string[];
            requestType: number;
        };
        getByPrincipalId: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
        removeRoleAssignment: {
            argNames: string[];
            requestType: number;
        };
    };
}
declare module "mapper/roleDefinition/roleDefinition" {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    export const roledefinition: {
        delete: {
            requestType: number;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
    };
}
declare module "mapper/roleDefinition/roleDefinitions" {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    export const roledefinitions: {
        getById: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        getByName: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        getByType: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
    };
}
declare module "mapper/search/search" {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    export const search: {
        postquery: {
            argNames: string[];
            metadataType: string;
            requestType: number;
        };
    };
}
declare module "mapper/site/site" {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    export const site: {
        properties: string[];
        createPreviewSPSite: {
            argNames: string[];
            requestType: number;
        };
        extendUpgradeReminderDate: {
            requestType: number;
        };
        getCatalog: {
            argNames: string[];
            requestType: number;
        };
        getChanges: {
            argNames: string[];
            metadataType: string;
            requestType: number;
        };
        getCustomListTemplates: {
            argNames: string[];
            requestType: number;
        };
        getWebTemplates: {
            argNames: string[];
            requestType: number;
        };
        invalidate: {
            requestType: number;
        };
        needsUpgradeByType: {
            argNames: string[];
            requestType: number;
        };
        openWeb: {
            argNames: string[];
            requestType: number;
        };
        openWebById: {
            argNames: string[];
            requestType: number;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
        runHealthCheck: {
            argNames: string[];
            requestType: number;
        };
        runUpgradeSiteSession: {
            argNames: string[];
            requestType: number;
        };
        update: {
            metadataType: string;
            name: string;
            requestMethod: string;
            requestType: number;
        };
        updateClientObjectModelUseRemoteAPIsPermissionSetting: {
            argNames: string[];
            requestType: number;
        };
    };
}
declare module "mapper/socialFeed/socialFeed" {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    export const socialfeed: {
        actor: {
            argNames: string[];
            name: string;
            requestType: number;
        };
        actorFeed: {
            argNames: string[];
            name: string;
            requestType: number;
        };
        clearMyUnreadMentionCount: {
            name: string;
            requestType: number;
        };
        my: {
            name: string;
            requestType: number;
        };
        myFeed: {
            name: string;
            requestType: number;
        };
        myLikes: {
            name: string;
            requestType: number;
        };
        myMentionFeed: {
            name: string;
            requestType: number;
        };
        myNews: {
            name: string;
            requestType: number;
        };
        myTimelineFeed: {
            name: string;
            requestType: number;
        };
        myUnreadMentionCount: {
            name: string;
            requestType: number;
        };
    };
}
declare module "mapper/user/user" {
    export const user: {
        properties: string[];
        delete: {
            requestType: number;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
    };
}
declare module "mapper/user/users" {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    export const users: {
        add: {
            metadataType: string;
            name: string;
            requestType: number;
        };
        getByEmail: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        getById: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        getByLoginName: {
            argNames: string[];
            name: string;
            requestType: number;
            returnType: string;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
        removeById: {
            argNames: string[];
            requestType: number;
        };
        removeByLoginName: {
            argNames: string[];
            name: string;
            requestType: number;
        };
    };
}
declare module "mapper/userCustomAction/userCustomAction" {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    export const usercustomaction: {
        delete: {
            requestType: number;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
    };
}
declare module "mapper/userCustomAction/userCustomActions" {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    export const usercustomactions: {
        add: {
            metadataType: string;
            name: string;
            requestType: number;
        };
        clear: {
            requestType: number;
        };
        getById: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
    };
}
declare module "mapper/userProfile/userProfile" {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    export const userprofile: {
        properties: string[];
        createPersonalSiteEnque: {
            requestType: number;
        };
        shareAllSocialData: {
            requestType: number;
        };
    };
}
declare module "mapper/version/version" {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    export const version: {
        getById: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        deleteAll: {
            requestType: number;
        };
        deleteById: {
            argNames: string[];
            requestType: number;
        };
        deleteByLabel: {
            argNames: string[];
            requestType: number;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
        restoreByLabel: {
            argNames: string[];
            requestType: number;
        };
    };
}
declare module "mapper/view/view" {
    export const view: {
        properties: string[];
        delete: {
            requestType: number;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
        renderAsHtml: {
            requestType: number;
        };
        update: {
            metadataType: string;
            name: string;
            requestMethod: string;
            requestType: number;
        };
    };
}
declare module "mapper/view/views" {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    export const views: {
        add: {
            metadataType: string;
            name: string;
            requestType: number;
        };
        getById: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        getByTitle: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
    };
}
declare module "mapper/viewFieldCollection/viewFieldCollection" {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    export const viewfieldcollection: {
        addViewField: {
            argNames: string[];
            requestType: number;
        };
        moveViewFieldTo: {
            argNames: string[];
            requestType: number;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
        removeAllViewFields: {
            requestType: number;
        };
        removeViewField: {
            argNames: string[];
            requestType: number;
        };
    };
}
declare module "mapper/web/web" {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    export const web: {
        properties: string[];
        applyTheme: {
            argNames: string[];
            requestType: number;
        };
        applyWebTemplate: {
            argName: string[];
            requestType: number;
        };
        breakRoleInheritance: {
            argNames: string[];
            requestType: number;
        };
        delete: {
            requestType: number;
        };
        doesPushNotificationSubscriberExist: {
            argNames: string[];
            requestType: number;
        };
        doesUserHavePermissions: {
            argNames: string[];
            requestType: number;
        };
        ensureUser: {
            argNames: string[];
            requestType: number;
        };
        executeRemoteLOB: {
            requestType: number;
        };
        getAppBdcCatalog: {
            requestType: number;
        };
        getAppBdcCatalogForAppInstance: {
            argNames: string[];
            requestType: number;
        };
        getAppInstanceById: {
            argNames: string[];
            requestType: number;
        };
        getAppInstancesByProductId: {
            argNames: string[];
            requestType: number;
        };
        getAvailableWebTemplates: {
            argNames: string[];
            requestType: number;
        };
        getCatalog: {
            argNames: string[];
            requestType: number;
        };
        getChanges: {
            argNames: string[];
            metadataType: string;
            requestType: number;
        };
        getContextWebInformation: {
            name: string;
            replaceEndpointFl: boolean;
            requestType: number;
        };
        getCustomListTemplates: {
            requestType: number;
        };
        getDocumentLibraries: {
            argNames: string[];
            name: string;
            requestType: number;
        };
        getEntity: {
            argNames: string[];
            requestType: number;
        };
        getFileByServerRelativeUrl: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        getFolderByServerRelativeUrl: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        getList: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        getPushNotificationSubscriber: {
            argNames: string[];
            requestType: number;
        };
        getPushNotificationSubscribersByArgs: {
            argNames: string[];
            requestType: number;
        };
        getPushNotificationSubscribersByUser: {
            argNames: string[];
            requestType: number;
        };
        getSubwebsFilteredForCurrentUser: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        getUserById: {
            argNames: string[];
            requestType: number;
            returnType: string;
        };
        getUserEffectivePermissions: {
            argNames: string[];
            name: string;
            requestType: number;
        };
        getWebUrlFromPageUrl: {
            name: string;
            requestType: number;
        };
        loadAndInstallApp: {
            requestType: number;
        };
        loadAndInstallAppInSpecifiedLocale: {
            argNames: string[];
            requestType: number;
        };
        loadApp: {
            argNames: string[];
            requestType: number;
        };
        mapToIcon: {
            argNames: string[];
            requestType: number;
        };
        processExternalNotification: {
            requestType: number;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
        registerPushNotificationSubscriber: {
            argNames: string[];
            requestType: number;
        };
        resetRoleInheritance: {
            requestType: number;
        };
        unregisterPushNotificationSubscriber: {
            requestType: number;
        };
        update: {
            metadataType: string;
            name: string;
            requestMethod: string;
            requestType: number;
        };
    };
}
declare module "mapper/web/webinfos" {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    export const webinfos: {
        query: {
            argNames: string[];
            requestType: number;
        };
    };
}
declare module "mapper/web/webs" {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    export const webs: {
        add: {
            argNames: string[];
            metadataType: string;
            requestType: number;
        };
        query: {
            argNames: string[];
            requestType: number;
        };
    };
}
declare module "mapper/index" {
    /**
     * Mapper
     */
    export const Mapper: {
        attachment: {};
        attachmentfiles: {
            add: {
                argNames: string[];
                requestType: number;
            };
            query: {
                argNames: string[];
                requestType: number;
            };
        };
        audit: {
            query: {
                argNames: string[];
                requestType: number;
            };
        };
        contenttype: {
            properties: string[];
            delete: {
                requestType: number;
            };
            update: {
                metadataType: string;
                name: string;
                requestMethod: string;
                requestType: number;
            };
        };
        contenttypes: {
            add: {
                metadataType: string;
                name: string;
                requestType: number;
            };
            addAvailableContentType: {
                argNames: string[];
                requestType: number;
            };
            getById: {
                argNames: string[];
                requestType: number;
                returnType: string;
            };
            query: {
                argNames: string[];
                requestType: number;
            };
        };
        eventreceiver: {
            delete: {
                requestType: number;
            };
            update: {
                metadataType: string;
                name: string;
                requestMethod: string;
                requestType: number;
            };
        };
        eventreceivers: {
            add: {
                metadataType: string;
                name: string;
                requestType: number;
            };
            getById: {
                argNames: string[];
                requestType: number;
                returnType: string;
            };
            query: {
                argNames: string[];
                requestType: number;
            };
        };
        field: {
            delete: {
                requestType: number;
            };
            query: {
                argNames: string[];
                requestType: number;
            };
            setShowInDisplayForm: {
                argNames: string[];
                requestType: number;
            };
            setShowInEditForm: {
                argNames: string[];
                requestType: number;
            };
            setShowInNewForm: {
                argNames: string[];
                requestType: number;
            };
            update: {
                inheritMetadataType: boolean;
                name: string;
                requestMethod: string;
                requestType: number;
            };
        };
        fields: {
            add: {
                metadataType: string;
                name: string;
                requestType: number;
            };
            addField: {
                argNames: string[];
                metadataType: string;
                name: string;
                requestType: number;
            };
            addDependentLookupField: {
                argNames: string[];
                requestType: number;
            };
            createFieldAsXml: {
                argNames: string[];
                requestType: number;
                data: {
                    parameters: {
                        __metadata: {
                            type: string;
                        };
                        Options: number;
                        SchemaXml: string;
                    };
                };
            };
            getById: {
                argNames: string[];
                requestType: number;
                returnType: string;
            };
            getByInternalNameOrTitle: {
                argNames: string[];
                requestType: number;
                returnType: string;
            };
            getByTitle: {
                argNames: string[];
                requestType: number;
                returnType: string;
            };
            query: {
                argNames: string[];
                requestType: number;
            };
        };
        fieldlinks: {
            add: {
                argNames: string[];
                metadataType: string;
                name: string;
                requestType: number;
            };
            getById: {
                argNames: string[];
                requestType: number;
                returnType: string;
            };
            query: {
                argNames: string[];
                requestType: number;
            };
        };
        file: {
            properties: string[];
            approve: {
                argNames: string[];
                requestType: number;
            };
            cancelupload: {
                argNames: string[];
                name: string;
                requestType: number;
            };
            checkin: {
                argNames: string[];
                requestType: number;
            };
            checkout: {
                requestType: number;
            };
            content: {
                name: string;
                requestType: number;
            };
            continueUpload: {
                argNames: string[];
                name: string;
                requestType: number;
            };
            copyTo: {
                argNames: string[];
                requestType: number;
            };
            delete: {
                requestType: number;
            };
            deny: {
                argNames: string[];
                requestType: number;
            };
            finishUpload: {
                argNames: string[];
                name: string;
                requestType: number;
            };
            getlimitedwebpartmanager: {
                argNames: string[];
                name: string;
                requestType: number;
            };
            moveTo: {
                argNames: string[];
                name: string;
                requestType: number;
            };
            openBinaryStream: {
                requestType: number;
            };
            publish: {
                argNames: string[];
                requestType: number;
            };
            query: {
                argNames: string[];
                requestType: number;
            };
            recycle: {
                requestType: number;
            };
            saveBinaryStream: {
                requestType: number;
            };
            startUpload: {
                argNames: string[];
                name: string;
                requestType: number;
            };
            undoCheckOut: {
                requestType: number;
            };
            unpublish: {
                argNames: string[];
                requestType: number;
            };
            update: {
                metadataType: string;
                name: string;
                requestMethod: string;
                requestType: number;
            };
        };
        files: {
            add: {
                argNames: string[];
                requestType: number;
            };
            addTemplateFile: {
                argNames: string[];
                requestType: number;
            };
            getByUrl: {
                argNames: string[];
                requestType: number;
                returnType: string;
            };
            query: {
                argNames: string[];
                requestType: number;
            };
        };
        fileversion: {
            properties: any[];
            delete: {
                requestType: number;
            };
            query: {
                argNames: string[];
                requestType: number;
            };
        };
        fileversions: {
            delete: {
                requestType: number;
            };
            query: {
                argNames: string[];
                requestType: number;
            };
        };
        folder: {
            properties: string[];
            delete: {
                requestType: number;
            };
            getByUrl: {
                argNames: string[];
                requestType: number;
                returnType: string;
            };
            query: {
                argNames: string[];
                requestType: number;
            };
            recycle: {
                requestType: number;
            };
            update: {
                metadataType: string;
                name: string;
                requestMethod: string;
                requestType: number;
            };
        };
        folders: {
            properties: string[];
            add: {
                argNames: string[];
                requestType: number;
            };
            getbyurl: {
                argNames: string[];
                requestType: number;
                returnType: string;
            };
            query: {
                argNames: string[];
                requestType: number;
            };
        };
        group: {
            properties: string[];
            query: {
                argNames: string[];
                requestType: number;
            };
        };
        sitegroups: {
            add: {
                metadataType: string;
                name: string;
                requestType: number;
            };
            getById: {
                argNames: string[];
                requestType: number;
                returnType: string;
            };
            getByName: {
                argNames: string[];
                requestType: number;
                returnType: string;
            };
            query: {
                argNames: string[];
                requestType: number;
            };
            removeById: {
                argNames: string[];
                requestType: number;
            };
            removeByLoginName: {
                argNames: string[];
                requestType: number;
            };
        };
        limitedwebpartmanager: {
            get_WebParts: {
                argNames: string[];
                name: string;
                requestType: number;
            };
        };
        list: {
            properties: string[];
            breakRoleInheritance: {
                argNames: string[];
                requestType: number;
            };
            delete: {
                requestType: number;
            };
            getChanges: {
                argNames: string[];
                metadataType: string;
                requestType: number;
            };
            getItemById: {
                argNames: string[];
                requestType: number;
                returnType: string;
            };
            getItems: {
                argNames: string[];
                requestType: number;
                data: {
                    query: {
                        __metadata: {
                            type: string;
                        };
                        ViewXml: string;
                    };
                };
            };
            getItemsByQuery: {
                argNames: string[];
                name: string;
                requestType: number;
                data: {
                    query: {
                        __metadata: {
                            type: string;
                        };
                        ViewXml: string;
                    };
                };
            };
            getListItemChangesSinceToken: {
                argNames: string[];
                metadataType: string;
                requestType: number;
            };
            getRelatedFields: {
                requestType: number;
            };
            getUserEffectivePermissions: {
                argNames: string[];
                name: string;
                requestType: number;
            };
            getViewById: {
                argNames: string[];
                name: string;
                requestType: number;
                returnType: string;
            };
            query: {
                argNames: string[];
                requestType: number;
            };
            recycle: {
                requestType: number;
            };
            renderListData: {
                argNames: string[];
                name: string;
                requestType: number;
            };
            renderListFormData: {
                argNames: string[];
                requestType: number;
            };
            reserveListItemId: {
                requestType: number;
            };
            resetRoleInheritance: {
                requestType: number;
            };
            update: {
                metadataType: string;
                name: string;
                requestMethod: string;
                requestType: number;
            };
        };
        lists: {
            add: {
                metadataType: string;
                name: string;
                requestType: number;
            };
            ensureSiteAssetsLibrary: {
                requestType: number;
            };
            ensureSitePagesLibrary: {
                requestType: number;
            };
            getById: {
                argNames: string[];
                requestType: number;
                returnType: string;
            };
            getByTitle: {
                argNames: string[];
                requestType: number;
                returnType: string;
            };
            query: {
                argNames: string[];
                requestType: number;
            };
        };
        listitem: {
            properties: string[];
            breakRoleInheritance: {
                argNames: string[];
                requestType: number;
            };
            delete: {
                requestType: number;
            };
            getUserEffectivePermissions: {
                argNames: string[];
                name: string;
                requestType: number;
            };
            query: {
                argNames: string[];
                requestType: number;
            };
            recycle: {
                requestType: number;
            };
            resetRoleInheritance: {
                requestType: number;
            };
            update: {
                inheritMetadataType: boolean;
                name: string;
                requestMethod: string;
                requestType: number;
            };
            validateUpdateListItem: {
                argNames: string[];
                requestType: number;
            };
        };
        items: {
            add: {
                metadataType: (obj: any) => any;
                name: string;
                requestType: number;
            };
            getById: {
                argNames: string[];
                requestType: number;
                returnType: string;
            };
            query: {
                argNames: string[];
                requestType: number;
            };
        };
        peoplemanager: {
            amIFollowedBy: {
                argNames: string[];
                requestType: number;
            };
            amIFollowing: {
                argNames: string[];
                requestType: number;
            };
            follow: {
                argNames: string[];
                requestType: number;
            };
            followTag: {
                argNames: string[];
                requestType: number;
            };
            getFollowedTags: {
                argNames: string[];
                requestType: number;
            };
            getFollowersFor: {
                argNames: string[];
                requestType: number;
            };
            getMyFollowers: {
                requestType: number;
            };
            getMyProperties: {
                requestType: number;
            };
            getMySuggestions: {
                requestType: number;
            };
            getPeopleFollowedBy: {
                argNames: string[];
                requestType: number;
            };
            getPeopleFollowedByMe: {
                requestType: number;
            };
            getPropertiesFor: {
                argNames: string[];
                requestType: number;
            };
            getTrendingTags: {
                name: string;
                replaceEndpointFl: boolean;
                requestType: number;
            };
            getUserProfilePropertyFor: {
                argNames: string[];
                requestType: number;
            };
            hideSuggestion: {
                argNames: string[];
                requestType: number;
            };
            isFollowing: {
                argNames: string[];
                name: string;
                replaceEndpointFl: boolean;
                requestType: number;
            };
            setMyProfilePicture: {
                requestType: number;
            };
            stopFollowing: {
                argNames: string[];
                requestType: number;
            };
            stopFollowingTag: {
                argNames: string[];
                requestType: number;
            };
        };
        peoplepicker: {
            clientPeoplePickerResolveUser: {
                argNames: string[];
                metadataType: string;
                name: string;
                replaceEndpointFl: boolean;
                requestType: number;
            };
            clientPeoplePickerSearchUser: {
                argNames: string[];
                metadataType: string;
                name: string;
                replaceEndpointFl: boolean;
                requestType: number;
            };
        };
        profileloader: {
            createPersonalSiteEnqueueBulk: {
                argNames: string[];
                requestType: number;
            };
            getOwnerUserProfile: {
                name: string;
                replaceEndpointFl: boolean;
                requestType: number;
                returnType: string;
            };
            getUserProfile: {
                requestType: number;
                returnType: string;
            };
        };
        propertyvalues: {
            query: {
                argNames: string[];
                requestType: number;
            };
        };
        roleassignment: {
            properties: string[];
            delete: {
                requestType: number;
            };
            query: {
                argNames: string[];
                requestType: number;
            };
        };
        roleassignments: {
            addRoleAssignment: {
                argNames: string[];
                requestType: number;
            };
            getByPrincipalId: {
                argNames: string[];
                requestType: number;
                returnType: string;
            };
            query: {
                argNames: string[];
                requestType: number;
            };
            removeRoleAssignment: {
                argNames: string[];
                requestType: number;
            };
        };
        roledefinition: {
            delete: {
                requestType: number;
            };
            query: {
                argNames: string[];
                requestType: number;
            };
        };
        roledefinitions: {
            getById: {
                argNames: string[];
                requestType: number;
                returnType: string;
            };
            getByName: {
                argNames: string[];
                requestType: number;
                returnType: string;
            };
            getByType: {
                argNames: string[];
                requestType: number;
                returnType: string;
            };
            query: {
                argNames: string[];
                requestType: number;
            };
        };
        search: {
            postquery: {
                argNames: string[];
                metadataType: string;
                requestType: number;
            };
        };
        site: {
            properties: string[];
            createPreviewSPSite: {
                argNames: string[];
                requestType: number;
            };
            extendUpgradeReminderDate: {
                requestType: number;
            };
            getCatalog: {
                argNames: string[];
                requestType: number;
            };
            getChanges: {
                argNames: string[];
                metadataType: string;
                requestType: number;
            };
            getCustomListTemplates: {
                argNames: string[];
                requestType: number;
            };
            getWebTemplates: {
                argNames: string[];
                requestType: number;
            };
            invalidate: {
                requestType: number;
            };
            needsUpgradeByType: {
                argNames: string[];
                requestType: number;
            };
            openWeb: {
                argNames: string[];
                requestType: number;
            };
            openWebById: {
                argNames: string[];
                requestType: number;
            };
            query: {
                argNames: string[];
                requestType: number;
            };
            runHealthCheck: {
                argNames: string[];
                requestType: number;
            };
            runUpgradeSiteSession: {
                argNames: string[];
                requestType: number;
            };
            update: {
                metadataType: string;
                name: string;
                requestMethod: string;
                requestType: number;
            };
            updateClientObjectModelUseRemoteAPIsPermissionSetting: {
                argNames: string[];
                requestType: number;
            };
        };
        socialfeed: {
            actor: {
                argNames: string[];
                name: string;
                requestType: number;
            };
            actorFeed: {
                argNames: string[];
                name: string;
                requestType: number;
            };
            clearMyUnreadMentionCount: {
                name: string;
                requestType: number;
            };
            my: {
                name: string;
                requestType: number;
            };
            myFeed: {
                name: string;
                requestType: number;
            };
            myLikes: {
                name: string;
                requestType: number;
            };
            myMentionFeed: {
                name: string;
                requestType: number;
            };
            myNews: {
                name: string;
                requestType: number;
            };
            myTimelineFeed: {
                name: string;
                requestType: number;
            };
            myUnreadMentionCount: {
                name: string;
                requestType: number;
            };
        };
        user: {
            properties: string[];
            delete: {
                requestType: number;
            };
            query: {
                argNames: string[];
                requestType: number;
            };
        };
        users: {
            add: {
                metadataType: string;
                name: string;
                requestType: number;
            };
            getByEmail: {
                argNames: string[];
                requestType: number;
                returnType: string;
            };
            getById: {
                argNames: string[];
                requestType: number;
                returnType: string;
            };
            getByLoginName: {
                argNames: string[];
                name: string;
                requestType: number;
                returnType: string;
            };
            query: {
                argNames: string[];
                requestType: number;
            };
            removeById: {
                argNames: string[];
                requestType: number;
            };
            removeByLoginName: {
                argNames: string[];
                name: string;
                requestType: number;
            };
        };
        usercustomaction: {
            delete: {
                requestType: number;
            };
            query: {
                argNames: string[];
                requestType: number;
            };
        };
        usercustomactions: {
            add: {
                metadataType: string;
                name: string;
                requestType: number;
            };
            clear: {
                requestType: number;
            };
            getById: {
                argNames: string[];
                requestType: number;
                returnType: string;
            };
            query: {
                argNames: string[];
                requestType: number;
            };
        };
        userprofile: {
            properties: string[];
            createPersonalSiteEnque: {
                requestType: number;
            };
            shareAllSocialData: {
                requestType: number;
            };
        };
        version: {
            getById: {
                argNames: string[];
                requestType: number;
                returnType: string;
            };
            deleteAll: {
                requestType: number;
            };
            deleteById: {
                argNames: string[];
                requestType: number;
            };
            deleteByLabel: {
                argNames: string[];
                requestType: number;
            };
            query: {
                argNames: string[];
                requestType: number;
            };
            restoreByLabel: {
                argNames: string[];
                requestType: number;
            };
        };
        view: {
            properties: string[];
            delete: {
                requestType: number;
            };
            query: {
                argNames: string[];
                requestType: number;
            };
            renderAsHtml: {
                requestType: number;
            };
            update: {
                metadataType: string;
                name: string;
                requestMethod: string;
                requestType: number;
            };
        };
        views: {
            add: {
                metadataType: string;
                name: string;
                requestType: number;
            };
            getById: {
                argNames: string[];
                requestType: number;
                returnType: string;
            };
            getByTitle: {
                argNames: string[];
                requestType: number;
                returnType: string;
            };
            query: {
                argNames: string[];
                requestType: number;
            };
        };
        viewfieldcollection: {
            addViewField: {
                argNames: string[];
                requestType: number;
            };
            moveViewFieldTo: {
                argNames: string[];
                requestType: number;
            };
            query: {
                argNames: string[];
                requestType: number;
            };
            removeAllViewFields: {
                requestType: number;
            };
            removeViewField: {
                argNames: string[];
                requestType: number;
            };
        };
        web: {
            properties: string[];
            applyTheme: {
                argNames: string[];
                requestType: number;
            };
            applyWebTemplate: {
                argName: string[];
                requestType: number;
            };
            breakRoleInheritance: {
                argNames: string[];
                requestType: number;
            };
            delete: {
                requestType: number;
            };
            doesPushNotificationSubscriberExist: {
                argNames: string[];
                requestType: number;
            };
            doesUserHavePermissions: {
                argNames: string[];
                requestType: number;
            };
            ensureUser: {
                argNames: string[];
                requestType: number;
            };
            executeRemoteLOB: {
                requestType: number;
            };
            getAppBdcCatalog: {
                requestType: number;
            };
            getAppBdcCatalogForAppInstance: {
                argNames: string[];
                requestType: number;
            };
            getAppInstanceById: {
                argNames: string[];
                requestType: number;
            };
            getAppInstancesByProductId: {
                argNames: string[];
                requestType: number;
            };
            getAvailableWebTemplates: {
                argNames: string[];
                requestType: number;
            };
            getCatalog: {
                argNames: string[];
                requestType: number;
            };
            getChanges: {
                argNames: string[];
                metadataType: string;
                requestType: number;
            };
            getContextWebInformation: {
                name: string;
                replaceEndpointFl: boolean;
                requestType: number;
            };
            getCustomListTemplates: {
                requestType: number;
            };
            getDocumentLibraries: {
                argNames: string[];
                name: string;
                requestType: number;
            };
            getEntity: {
                argNames: string[];
                requestType: number;
            };
            getFileByServerRelativeUrl: {
                argNames: string[];
                requestType: number;
                returnType: string;
            };
            getFolderByServerRelativeUrl: {
                argNames: string[];
                requestType: number;
                returnType: string;
            };
            getList: {
                argNames: string[];
                requestType: number;
                returnType: string;
            };
            getPushNotificationSubscriber: {
                argNames: string[];
                requestType: number;
            };
            getPushNotificationSubscribersByArgs: {
                argNames: string[];
                requestType: number;
            };
            getPushNotificationSubscribersByUser: {
                argNames: string[];
                requestType: number;
            };
            getSubwebsFilteredForCurrentUser: {
                argNames: string[];
                requestType: number;
                returnType: string;
            };
            getUserById: {
                argNames: string[];
                requestType: number;
                returnType: string;
            };
            getUserEffectivePermissions: {
                argNames: string[];
                name: string;
                requestType: number;
            };
            getWebUrlFromPageUrl: {
                name: string;
                requestType: number;
            };
            loadAndInstallApp: {
                requestType: number;
            };
            loadAndInstallAppInSpecifiedLocale: {
                argNames: string[];
                requestType: number;
            };
            loadApp: {
                argNames: string[];
                requestType: number;
            };
            mapToIcon: {
                argNames: string[];
                requestType: number;
            };
            processExternalNotification: {
                requestType: number;
            };
            query: {
                argNames: string[];
                requestType: number;
            };
            registerPushNotificationSubscriber: {
                argNames: string[];
                requestType: number;
            };
            resetRoleInheritance: {
                requestType: number;
            };
            unregisterPushNotificationSubscriber: {
                requestType: number;
            };
            update: {
                metadataType: string;
                name: string;
                requestMethod: string;
                requestType: number;
            };
        };
        webinfos: {
            query: {
                argNames: string[];
                requestType: number;
            };
        };
        webs: {
            add: {
                argNames: string[];
                metadataType: string;
                requestType: number;
            };
            query: {
                argNames: string[];
                requestType: number;
            };
        };
    };
}
declare module "utils/base" {
    import { IBase, IMethodInfo, IRequestInfo, ITargetInfo } from "definitions/index";
    import { XHRRequest } from "utils/index";
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    export class Base<Type = any, Result = Type, QueryResult = Result> {
        /*********************************************************************************************************************************/
        /*********************************************************************************************************************************/
        constructor(targetInfo: ITargetInfo);
        /*********************************************************************************************************************************/
        /*********************************************************************************************************************************/
        existsFl: any;
        parent: Base;
        requestType: any;
        readonly response: any;
        /*********************************************************************************************************************************/
        /*********************************************************************************************************************************/
        batch(arg?: any): this;
        done(callback: (...args) => any): void;
        execute(...args: any[]): this;
        executeAndWait(): this;
        getInfo(): IRequestInfo;
        then(resolve: any, reject: any): PromiseLike<IBase>;
        /*********************************************************************************************************************************/
        /*********************************************************************************************************************************/
        private base;
        private batchRequests;
        protected defaultToWebFl: boolean;
        protected getAllItemsFl: boolean;
        private promise;
        protected request: XHRRequest;
        protected responses: Array<Base>;
        private responseIndex;
        protected targetInfo: ITargetInfo;
        private waitFlags;
        /*********************************************************************************************************************************/
        /*********************************************************************************************************************************/
        protected addMethods(obj: any, data: any): void;
        private addProperties(obj, data);
        protected executeMethod(methodName: string, methodConfig: IMethodInfo, args?: any): Base<any, any, any>;
        protected executeRequest(asyncFl: boolean, callback?: (...args) => void): this;
        private getCollection(method, args?);
        protected getProperty(propertyName: string, requestType?: string): Base<any, any, any>;
        protected getNextSetOfResults(): Base<any, any, any>;
        private updateDataCollection(obj, results);
        protected updateDataObject(isBatchRequest: boolean): any;
        private updateMetadata(obj, data);
        private updateMetadataUri(metadata, targetInfo);
        private validateDataCollectionResults(request, promise?);
        private waitForRequestsToComplete(callback, requestIdx?);
    }
}
declare module "utils/batch" {
    import { TargetInfo } from "utils/index";
    /**
     * Batch Requests
     */
    export class Batch {
        /**
         * Methods
         */
        static getTargetInfo(requests: Array<Array<{
            callback?: any;
            targetInfo: TargetInfo;
        }>>): TargetInfo;
        private static guid();
        private static createBatch(batchId, requests);
    }
}
declare module "utils/dependencies" {
    import { Promise } from "utils/index";
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    export class Dependencies {
        /*********************************************************************************************************************************/
        /*********************************************************************************************************************************/
        readonly MAX_WAIT: number;
        readonly SCRIPTS: Array<string>;
        /*********************************************************************************************************************************/
        /*********************************************************************************************************************************/
        constructor(callback: (...args) => void);
        /*********************************************************************************************************************************/
        /*********************************************************************************************************************************/
        promise: Promise;
        readonly pageContextExistsFl: boolean;
        /*********************************************************************************************************************************/
        /*********************************************************************************************************************************/
        private loadDependencies();
        private waitForPageContext();
    }
}
declare module "utils/methodInfo" {
    import { IMethodInfo } from "definitions/index";
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    export class MethodInfo {
        /*********************************************************************************************************************************/
        /*********************************************************************************************************************************/
        constructor(methodName: string, methodInfo: IMethodInfo, args: any);
        /*********************************************************************************************************************************/
        /*********************************************************************************************************************************/
        readonly body: string;
        readonly getAllItemsFl: boolean;
        readonly replaceEndpointFl: boolean;
        readonly requestMethod: string;
        readonly url: string;
        /*********************************************************************************************************************************/
        /*********************************************************************************************************************************/
        private readonly passDataInBody;
        private readonly passDataInQS;
        private readonly isTemplate;
        private readonly replace;
        private methodData;
        private methodInfo;
        private methodParams;
        private methodUrl;
        /*********************************************************************************************************************************/
        /*********************************************************************************************************************************/
        private generateParams();
        private generateUrl();
    }
}
declare module "utils/oData" {
    import { ODataQuery } from "definitions/index";
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    export class OData {
        /*********************************************************************************************************************************/
        /*********************************************************************************************************************************/
        private _custom?;
        private _expand?;
        private _filter?;
        private _getAllItems?;
        private _orderBy?;
        private _select?;
        private _skip?;
        private _top?;
        /*********************************************************************************************************************************/
        /*********************************************************************************************************************************/
        constructor(oData: ODataQuery);
        /*********************************************************************************************************************************/
        /*********************************************************************************************************************************/
        Custom: string;
        Expand: Array<string>;
        Filter: string;
        GetAllItems: boolean;
        OrderBy: Array<string>;
        readonly QueryString: string;
        Select: Array<string>;
        Skip: number;
        Top: number;
        /*********************************************************************************************************************************/
        /*********************************************************************************************************************************/
        private getQSValue(qsKey, keys?);
    }
}
declare module "utils/promise" {
    import { IBase } from "definitions/index";
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    export class Promise implements PromiseLike<any> {
        /*********************************************************************************************************************************/
        /*********************************************************************************************************************************/
        constructor(callback?: (...args) => void);
        /******************************************************************************************************************************** */
        /******************************************************************************************************************************** */
        done(callback?: (...args) => void): void;
        resolve(...args: any[]): void;
        then<TResult1 = IBase, TResult2 = never>(onfulfilled?: ((value: IBase) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): any;
        /*********************************************************************************************************************************/
        /*********************************************************************************************************************************/
        private args;
        private callback;
        private resolvedFl;
        /*********************************************************************************************************************************/
        /*********************************************************************************************************************************/
        private executeMethod();
    }
}
declare module "utils/targetInfo" {
    import { IRequestInfo, ITargetInfo } from "definitions/index";
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    export class TargetInfo {
        /*********************************************************************************************************************************/
        /*********************************************************************************************************************************/
        constructor(targetInfo: ITargetInfo);
        /*********************************************************************************************************************************/
        /*********************************************************************************************************************************/
        readonly bufferFl: boolean;
        readonly callback: (...args) => void;
        readonly isBatchRequest: boolean;
        requestData: any;
        readonly requestDigest: string;
        readonly requestInfo: IRequestInfo;
        requestHeaders: object;
        requestMethod: string;
        requestUrl: string;
        /*********************************************************************************************************************************/
        /*********************************************************************************************************************************/
        private targetInfo;
        /*********************************************************************************************************************************/
        /*********************************************************************************************************************************/
        private getDomainUrl();
        private static getQueryStringValue(key);
        private setRequestUrl();
    }
}
declare module "utils/xhrRequest" {
    import { TargetInfo } from "utils/index";
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    export class XHRRequest {
        /*********************************************************************************************************************************/
        /*********************************************************************************************************************************/
        constructor(asyncFl: boolean, targetInfo: TargetInfo, callback?: (...args) => void);
        /*********************************************************************************************************************************/
        /*********************************************************************************************************************************/
        readonly completedFl: boolean;
        readonly response: any;
        readonly request: any;
        readonly requestData: any;
        readonly requestUrl: string;
        /*********************************************************************************************************************************/
        /*********************************************************************************************************************************/
        private asyncFl;
        private targetInfo;
        private promise;
        private xhr;
        /*********************************************************************************************************************************/
        /*********************************************************************************************************************************/
        private createXHR();
        private defaultHeaders();
        private execute();
    }
}
declare module "utils/index" {
    export * from "utils/base";
    export * from "utils/batch";
    export * from "utils/dependencies";
    export * from "utils/methodInfo";
    export * from "utils/oData";
    export * from "utils/promise";
    export * from "utils/targetInfo";
    export * from "utils/xhrRequest";
}
declare module "lib/contextInfo" {
    import { IContextInformation } from "definitions/index";
    export const ContextInfo: IContextInformation;
}
declare module "lib/email" {
    import { IEmail } from "definitions/index";
    export const Email: IEmail;
}
declare module "lib/helper/app" {
    import { Promise } from "utils/index";
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    export const AppHelper: {
        copyFileToHostWeb: (fileUrl: any, dstFolder: any, overwriteFl: any, rootWebFl: any) => Promise;
        copyFilesToHostWeb: (fileUrls: any, folderUrls: any, overwriteFl: any, rootWebFl: any, idx: any, promise: any, files: any, folders: any) => any;
        createSubFolders: (folder: any, subFolderUrl: any, promise: any) => any;
        getFolder: (web: any, folderUrl: any, createFl: any) => Promise;
        removeEmptyFolders: (web: any, folderUrls: any) => Promise;
        removeFile: (web: any, fileUrl: any) => Promise;
        removeFiles: (web: any, fileUrls: any, idx: any, promise: any) => any;
    };
}
declare module "lib/helper/jslink" {
    /**
     * JSLink Helper Methods
     */
    export const JSLinkHelper: {
        hideEventFl: boolean;
        _fieldToMethodMapper: {
            'Attachments': {
                4: any;
                1: any;
                2: any;
                3: any;
            };
            'Boolean': {
                4: any;
                1: any;
                2: any;
                3: any;
            };
            'Currency': {
                4: any;
                1: any;
                2: any;
                3: any;
            };
            'Calculated': {
                4: any;
                1: any;
                2: any;
                3: any;
            };
            'Choice': {
                4: any;
                1: any;
                2: any;
                3: any;
            };
            'Computed': {
                4: any;
                1: any;
                2: any;
                3: any;
            };
            'DateTime': {
                4: any;
                1: any;
                2: any;
                3: any;
            };
            'File': {
                4: any;
                1: any;
                2: any;
                3: any;
            };
            'Integer': {
                4: any;
                1: any;
                2: any;
                3: any;
            };
            'Lookup': {
                4: any;
                1: any;
                2: any;
                3: any;
            };
            'LookupMulti': {
                4: any;
                1: any;
                2: any;
                3: any;
            };
            'MultiChoice': {
                4: any;
                1: any;
                2: any;
                3: any;
            };
            'Note': {
                4: any;
                1: any;
                2: any;
                3: any;
            };
            'Number': {
                4: any;
                1: any;
                2: any;
                3: any;
            };
            'Text': {
                4: any;
                1: any;
                2: any;
                3: any;
            };
            'URL': {
                4: any;
                1: any;
                2: any;
                3: any;
            };
            'User': {
                4: any;
                1: any;
                2: any;
                3: any;
            };
            'UserMulti': {
                4: any;
                1: any;
                2: any;
                3: any;
            };
        };
        disableEdit: (ctx: any, field: any, requireValueFl?: boolean) => string;
        disableQuickEdit: (ctx: any, field: any) => any;
        getListView: (ctx: any) => Element;
        getListViewItems: (ctx: any) => any;
        getListViewSelectedItems: () => any;
        getWebPart: (ctx: any) => Element;
        hideField: (ctx: any, field: any) => void;
        removeField: (ctx: any, field: any) => string;
        renderField: (ctx: any, field: any, formType?: number) => any;
    };
}
declare module "lib/helper/loader" {
    /**
     * Loader
     */
    export const Loader: {
        loaded: boolean;
        waitForSPLibs: (callback: any, timeout?: number, loadLibraries?: boolean) => void;
    };
}
declare module "lib/helper/spCfg" {
    import { ISPConfigProps } from "definitions/index";
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    export class SPConfig {
        /**
         * Global Properties
         */
        private _cfgType;
        private _configuration;
        private _targetName;
        private _webUrl;
        /**
         * Constructor
         */
        constructor(cfg: ISPConfigProps, webUrl?: string);
        /**
         * Public Methods
         */
        install(callback?: any, cfgType?: number, targetName?: string): void;
        installByType: (cfgType: number, callback?: any, targetName?: string) => void;
        installList(listName: string, callback?: any): void;
        installSiteCustomAction(caName: string, callback?: any): void;
        installWebCustomAction(caName: string, callback?: any): void;
        uninstall(callback?: any, cfgType?: number, targetName?: string): void;
        uninstallByType: (cfgType: number, callback?: any, targetName?: string) => void;
        uninstallList(listName: string, callback?: any): void;
        uninstallSiteCustomAction(caName: string, callback?: any): void;
        uninstallWebCustomAction(caName: string, callback?: any): void;
        /**
         * Methods
         */
        private createContentTypes;
        private createFields;
        private createLists;
        private createUserCustomActions;
        private createViews;
        private createWebParts;
        private installSite;
        private installWeb;
        private isInCollection;
        private removeContentTypes;
        private removeFields;
        private removeLists;
        private removeUserCustomActions;
        private removeWebParts;
        private updateFieldSchemaXml;
        private updateLists;
        private updateViews;
        private uninstallSite;
        private uninstallWeb;
    }
}
declare module "lib/helper/index" {
    import { IHelper } from "definitions/index";
    /**
     * Helper Methods
     */
    export const Helper: IHelper;
}
declare module "lib/jslink" {
    import { IJSLink, ITemplates } from "definitions/index";
    /**
     * JS Link
     */
    export class JSLink {
        /**
         * Template Properties
         */
        private _baseViewID;
        BaseViewID: number | string;
        private _listTemplateType;
        ListTemplateType: number;
        private _onPostRender;
        OnPostRender: any;
        private _onPreRender;
        OnPreRender: any;
        private _templates;
        Templates: ITemplates;
        /**
         * Methods
         */
        /**
         * Returns the CSR template.
         */
        getTemplate(): IJSLink;
        /**
         * Method to register the CSR override.
         */
        register(): void;
    }
}
declare module "lib/web" {
    import { IWeb } from "definitions/index";
    export const Web: IWeb;
}
declare module "lib/list" {
    import { IList } from "definitions/index";
    export const List: IList;
}
declare module "lib/peopleManager" {
    import { IPeopleManager } from "definitions/index";
    export const PeopleManager: IPeopleManager;
}
declare module "lib/peoplePicker" {
    import { IPeoplePicker } from "definitions/index";
    export const PeoplePicker: IPeoplePicker;
}
declare module "lib/profileLoader" {
    import { IProfileLoader } from "definitions/index";
    export const ProfileLoader: IProfileLoader;
}
declare module "lib/search" {
    import { ISearch } from "definitions/index";
    export const Search: ISearch;
}
declare module "lib/site" {
    import { ISite } from "definitions/index";
    export const Site: ISite;
}
declare module "lib/socialFeed" {
    import { ISocialFeed } from "definitions/index";
    export const SocialFeed: ISocialFeed;
}
declare module "lib/userProfile" {
    import { IUserProfile } from "definitions/index";
    export const UserProfile: IUserProfile;
}
declare module "lib/index" {
    export * from "lib/contextInfo";
    export * from "lib/email";
    export * from "lib/helper/index";
    export * from "lib/jslink";
    export * from "lib/list";
    export * from "lib/peopleManager";
    export * from "lib/peoplePicker";
    export * from "lib/profileLoader";
    export * from "lib/search";
    export * from "lib/site";
    export * from "lib/socialFeed";
    export * from "lib/userProfile";
    export * from "lib/web";
}
declare module "gd-sprest" {
    /***************************************************************************************************
    MIT License
    
    Copyright (c) 2016 Dattabase, LLC.
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
    ***************************************************************************************************/
    import * as Types from "definitions/index";
    import { RequestType, SPTypes } from "types/index";
    import { ContextInfo, Email, Helper, JSLink, List, PeopleManager, PeoplePicker, ProfileLoader, Search, Site, SocialFeed, UserProfile, Web } from "lib/index";
    export { ContextInfo, Email, Helper, JSLink, List, PeopleManager, PeoplePicker, ProfileLoader, RequestType, Search, Site, SocialFeed, SPTypes, Types, UserProfile, Web };
    export const $REST: Types.IREST;
}
