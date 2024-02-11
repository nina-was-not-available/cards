import s from './typography.module.scss'
import {ComponentPropsWithoutRef, ElementType} from "react";

export type TypographyProps<T extends  ElementType> = {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body1' | 'subtitle1' | 'body2' | 'subtitle2' | 'caption' | 'overline' | 'link1' | 'link2'
    as?: T
    className?: string
} & ComponentPropsWithoutRef<'p'>

export const Typography = <T extends ElementType>(props: TypographyProps<T>) => {
    const {variant = 'body1', as: Component = 'p', className, ...rest} = props
    return (
        <Component className={`${s[variant]} ${className}`} {...rest}/>
    )
}