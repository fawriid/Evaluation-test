import { LinkType } from "../_enums";

export interface Link {
    url: string;
    replace?: boolean;
    children: React.ReactNode;
    type?: LinkType;
}
