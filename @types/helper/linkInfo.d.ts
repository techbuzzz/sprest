/**
 * Ribbon Link
 */
export const RibbonLink: (props: ILinkInfo) => PromiseLike<HTMLAnchorElement>;

/**
 * Suitebar Link
 */
export const SuiteBarLink: (props: ILinkInfo) => PromiseLike<HTMLAnchorElement>;

/**
* Link Information
*/
export interface ILinkInfo {
    /** True to append the link at the end of the list. */
    appendFl?: boolean;

    /** The link class name */
    className?: string;

    /** The link url */
    href?: string;

    /** The link id */
    id: string;

    /** The link click event */
    onClick?: (ev?: MouseEvent) => void;

    /** The link title */
    title: string;
}

/**
 * Ribbon Link
 */
export interface IRibbonLink {
    /** Creates the ribbon link */
    new(props: ILinkInfo): PromiseLike<HTMLAnchorElement>;
}

/**
 * Suitebar Link
 */
export interface ISuiteBarLink {
    /** Creates the suitebar link */
    new(props: ILinkInfo): PromiseLike<HTMLAnchorElement>;
}