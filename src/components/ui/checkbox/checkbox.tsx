import {ComponentPropsWithoutRef} from "react";
import s from './checkbox.module.scss'
import * as Checkbox from "@radix-ui/react-checkbox";
import {CheckboxIcon} from "@/icons/CheckboxIcon";
import {Typography} from "@/components/ui/typography";


export type InputProps = {
    disabled?: boolean,
    text?: string
} & ComponentPropsWithoutRef<'input'>

export const CheckboxComponent = (props: InputProps) => {
    const {disabled = false , text} = props
    return (
        <form className={s.checkboxContainer}>
            <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                <Checkbox.Root className={s.CheckboxRoot} id="c1" disabled={disabled}>
                    <Checkbox.Indicator className={disabled? s.disabledIndicator: s.CheckboxIndicator}>
                        <CheckboxIcon iconFill={disabled? `var(--color-light-700)`: `var(--color-dark-900`}
                                      bcgFill={disabled? `var(--color-dark-100)`:'white'}/>
                    </Checkbox.Indicator>
                </Checkbox.Root>
                <label className={disabled? s.labelDisabled : s.Label} htmlFor="c1">
                    <Typography variant={'body2'}>{text && text}</Typography>
                </label>
            </div>
        </form>
    )
}
