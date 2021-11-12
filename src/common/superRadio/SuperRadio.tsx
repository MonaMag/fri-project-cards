import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // onChange, onChangeOption
        onChange && onChange(e)

        onChangeOption && onChangeOption(e.currentTarget.value)
    }


    const mappedOptions: any[] = options ?
        options.map((op, i) => (
        <label key={name + '-' + i}  className={s.default}>
            <input
                type={'radio'}
                name={name}
                checked={value === op}
                value={op}
                onChange={onChangeCallback }/>
            {op}
        </label>))
        : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
