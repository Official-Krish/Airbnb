import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons"
import qs from "query-string"
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
}) => {
    const router = useRouter();
    const params = useSearchParams();
    const handleClick = useCallback(() => {
        let currentQuery = {};

        if(params){
            currentQuery = qs.parse(params.toString());
        }

        const updatedQuery : any = {
            ...currentQuery,
            category : label
        }

        if (params?.get("category")=== label){
            delete updatedQuery.category;
        }

        const url = qs.stringifyUrl({
            url : "/",
            query : updatedQuery
        }, {skipNull : true})

        router.push(url);
    },[label,router, params])


    return (
        <div onClick={handleClick} className={`flex flex-col justify-center items-center gap-2 p-3 border-b-2 hover:text-neutral-800 transistion cursor-pointer
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