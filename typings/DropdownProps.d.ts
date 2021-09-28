/**
 * This file was generated from Dropdown.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { DynamicValue, EditableValue, ListValue, ListAttributeValue, ListExpressionValue } from "mendix";

export interface DropdownContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    objectValue: EditableValue<string>;
    options: ListValue;
    optionsKey: ListAttributeValue<string>;
    optionsName: ListExpressionValue<string>;
    showLabel: boolean;
    label: DynamicValue<string>;
}

export interface DropdownPreviewProps {
    class: string;
    style: string;
    objectValue: string;
    options: {} | { type: string } | null;
    optionsKey: string;
    optionsName: string;
    showLabel: boolean;
    label: string;
}
