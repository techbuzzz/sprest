import {
    IBase, IBaseCollection,
    IResults,
    IUserCustomAction, IUserCustomActionCreationInformation, IUserCustomActionQueryResult, IUserCustomActionResult
} from "..";

/**
 * Methods
 */
export interface IUserCustomActionsMethods {
    /**
     * Adds a custom actino to the user custom action collection. 
     * @param parameters - The user custom action information.
     */
    add(parameters: IUserCustomActionCreationInformation): IBase<IUserCustomActionResult>;

    /**
     * Deletes all custom actions in the collection.
     */
    clear(): IBase;

    /**
     * Returns the custom action with the specified identifier.
     * @param id - The ID of the user custom action to get.
     */
    getById(id): IBase<IUserCustomActionResult>;

    /**
     * Method to get the next set of results.
     */
    next(): IBase<IUserCustomActions>;
}

/**
 * User Custom Actions
 */
export interface IUserCustomActions extends IUserCustomActionsMethods, IBaseCollection<IUserCustomAction, IUserCustomActionResult, IUserCustomActionQueryResult> {
}

/**
 * User Custom Action Results
 */
export interface IUserCustomActionResults extends IUserCustomActionsMethods, IBaseCollection<IUserCustomActionResult, IUserCustomActionResult, IUserCustomActionQueryResult> { }