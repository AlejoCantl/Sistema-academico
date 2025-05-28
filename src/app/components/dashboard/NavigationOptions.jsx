import Link from "next/link";

export default function NavigationOptions({options, classNameList, classNameItem}) {
    return (
        <div className={classNameList}>

            {options.map((option, index) => (
                    <Link
                    key={index}
                    href={option.href}
                    className={classNameItem}
                >
                    {option.icon && <option.icon className="h-5 w-5" />}
                    <span>{option.label}</span>
                </Link>
            ))}
        </div>
    );
}