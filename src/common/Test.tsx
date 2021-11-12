import React, {ChangeEvent, useState} from 'react';
import SuperInputText from "./superInputText/SuperInputText";
import SuperButton from "./superButton/SuperButton";
import SuperCheckbox from "./superCheckbox/SuperCheckbox";
import SuperEditableSpan from "./superEditableSpan/SuperEditableSpan";
import SuperSelect from "./superSelect/SuperSelect";
import SuperRadio from "./superRadio/SuperRadio";
import SuperRange from "./superRange/SuperRange";
import style from "./Test.module.css"
import {restoreState, saveState} from "./localStorage/localStorage";

const arr = ['book', 'audio', 'video']

function Test() {

    const [text, setText] = useState<string>('')
    const error = text ? '' : 'error'
    const showInputText = () => {
        if (error) {
            alert('введите текст...')
        } else {
            alert(text)
        }
    }

    const [checked, setChecked] = useState<boolean>(false)
    const OnChangeCheckboxTest = (e: ChangeEvent<HTMLInputElement>) =>
        setChecked(e.currentTarget.checked)
    console.log(checked)


    const [value, setValue] = useState<string>('')
    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        let inputValue = restoreState<string>('editable-span-value', '')
        setValue(inputValue)
    }

    const [option, onChangeOption] = useState(arr[1])

    return (
        <div className={style.test}>
            <div className={style.testContainer}>
                <SuperInputText value={text}
                                onChangeText={setText}
                                onEnter={showInputText}
                                error={error}/>
                <SuperInputText  className={style.inputPropsStyle}/>

                <SuperButton>button</SuperButton>
                <SuperButton disabled>disabled</SuperButton>

                <SuperCheckbox checked={checked}  onChange={OnChangeCheckboxTest}/>



                <SuperEditableSpan value={value}
                                   onChangeText={setValue}
                                   spanProps={{children: value ? undefined : 'enter text...'}}/>
                <SuperSelect options={arr}
                             value={option}
                             onChangeOption={onChangeOption}/>
                <div className={style.radioBlock}><SuperRadio name={'radio'}
                            options={arr}
                            value={option}
                            onChangeOption={onChangeOption}/></div>
                <SuperRange/>
            </div>
        </div>
    );
}

export default Test;