import {ComponentPropsWithoutRef} from "react";
import s from "@/components/ui/input/input.module.scss"
import {EyeOutline} from "@/icons/eye-outline";
import {SearchOutline} from "@/icons/search-outline";

export type InputProps = {
    variant?: 'simple' | 'password' | 'search',
    error?: null | string,
    disabled?: boolean,
    placeholder?: string,
    headers?: string,
}  & ComponentPropsWithoutRef<'input'>

export const Input = (props: InputProps) => {
    const {className,
        variant = 'simple',
        error = null,
        disabled = false,
        headers = 'Input',
        ...rest} = props
    return <div className={`${s.inputHeaders} ${disabled? s.disabled : ''}`}> {headers}
        <input className={`${s.input} ${s[variant]} ${error ? s.error : ''} ${disabled ? s.disabled : ''} ${className}`}{...rest}/>
        {error && <div className={s.errorMessage}>{error}</div>}
        {variant === 'password' && <span className={s.passwordIcon}> <EyeOutline fill={'white'}/></span>}
        {variant === 'search' && <span className={s.searchIcon}> <SearchOutline fill={'white'}/></span>}
    </div>
}