import * as Types from "./index.def";
/**
 * Target Information
 */
export declare class TargetInfo {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    constructor(targetInfo: Types.ITargetInfo);
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    request: Types.ITargetInfo;
    readonly isBatchRequest: boolean;
    requestData: any;
    readonly requestInfo: Types.IRequestInfo;
    requestHeaders: object;
    requestMethod: string;
    requestUrl: string;
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    private getDomainUrl();
    private static getQueryStringValue(key);
    private setRequestUrl();
}
