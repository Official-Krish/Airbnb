import { IconType } from "react-icons"

interface CategoryBoxprops{
    icon : IconType;
    label : string;
    selected : boolean;
    description : string
}

export const CategoryBox : React.FC<CategoryBoxprops> = ({
    icon : Icon,
    label,
    selected,
    description
}) => {
    return (
        <div className={`flex flex-col justify-center items-center gap-2 p-3 border-b-2 hover:text-neutral-800 transistion cursor-pointer
        ${selected ? "border-b-neutral-800" : "border-transparent"}
        ${selected ? "border-b-neutral-800" : "text-neutral-500"}
        `}>
            <Icon size ={26}/>
            <div className="font-medium text-sm">
                {label}
            </div>
        </div>
    )
}