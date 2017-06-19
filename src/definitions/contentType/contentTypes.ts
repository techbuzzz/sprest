import { IContentTypeQueryResults } from "./contentTypeResults";
import {
    IBase,
    IContentType, IContentTypeCreationInformation,
    IResults
} from "..";

/**
 * Content Types
 */
export interface IContentTypes extends IResults<IContentType>, IBase<IResults<IContentType>, IResults<IContentTypeQueryResults>> {
    /**
     * Methods
     */

    /**
     * Adds a content type to the collection.
     * @param parameters - The content type creation information.
     */
    add(parameters: IContentTypeCreationInformation): IContentType;

    /**
     * Adds an existing content type to this collection.
     * @param contentTypeId - The content type id to add.
     */
    addAvailableContentType(contentTypeId): IContentType;

    /**
     * Gets a content type by id.
     * @param id - The content type id.
     */
    getById(id): IContentType;

    /**
     * Method to get the next set of results.
     */
    next(): IContentTypes;
}