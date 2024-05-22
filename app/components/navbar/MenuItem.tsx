"use client"
interface MenuItemprops {
    onClick : () => void;
    label : string
}
export const MenuItem :  React.FC <MenuItemprops> = ({
    onClick,
    label
}) => {
    return <div onClick={onClick} className="xp-4 py-3 hover:bg-neutral-100 transistion font-semibold">
        {label}
    </div>
}