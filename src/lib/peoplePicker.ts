import { Types } from "..";
import { Base } from "../utils";

/*********************************************************************************************************************************/
// People Picker
/*********************************************************************************************************************************/
class _PeoplePicker extends Base {
    /*********************************************************************************************************************************/
    // Constructor
    /*********************************************************************************************************************************/
    constructor(targetInfo?) {
        // Call the base constructor
        super(targetInfo);

        // Default the properties
        this.defaultToWebFl = true;
        this.targetInfo.endpoint = "SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface";
        this.targetInfo.overrideDefaultRequestToHostFl = true;
        
        // Add the methods
        this.addMethods(this, { __metadata: { type: "peoplepicker" } });
    }
}
export const PeoplePicker: Types.IPeoplePicker = <any>_PeoplePicker;