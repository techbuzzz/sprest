"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Suite Bar Link
 */
exports.SuiteBarLink = function (props) {
    var link = null;
    // Default the append flag
    var appendFl = typeof (props.appendFl) === "boolean" ? props.appendFl : true;
    // Get the suite bar top links
    var topLinks = document.querySelector("#suiteLinksBox > ul");
    if (topLinks) {
        // Query for the link, and ensure it exists
        link = topLinks.querySelector("#" + props.id);
        if (link == null) {
            // Create a list link
            link = document.createElement("a");
            link.className = "ms-core-suiteLink-a " + (props.className || "");
            link.href = props.href ? props.href : "javascript:void()";
            link.id = props.id;
            link.innerHTML = props.title;
            link.onclick = props.onClick;
            // Create the suite bar link
            var sbLink = document.createElement("li");
            sbLink.className = "ms-core-suiteLink";
            sbLink.appendChild(link);
            // Append the item to the list
            appendFl ? topLinks.appendChild(sbLink) : topLinks.insertBefore(sbLink, topLinks.firstChild);
        }
    }
    // Return the link
    return link;
};
