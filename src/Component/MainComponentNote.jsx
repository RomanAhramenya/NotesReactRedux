import React from 'react'
import { addInputActionCreater, addNoteActionCreater, DeleteNoteActionCreater } from '../redux/noteStore-reducer'
import s from './MainComponentNote.module.css'
export default function MainComponentNote(props) {
   
    let NotesRender = props.state.Notes.NoteChilde.map((el,index)=>{
        let DeleteClickButton = (e)=>{
            props.dispatch(DeleteNoteActionCreater(index))
        } 
        if (index % 2 === 0){
            return <div key={index} className={s.Note}>
                <span className={s.id}>{index+1}.</span>
                <span>{el.text}</span>
                <button className={s.delete} onClick={DeleteClickButton}>X</button>
                </div>
        } else if (index % 2 !== 0){
            return <div key={index} className={s.Note2}>
                <span className={s.id}>{index+1}.</span>
                <span>{el.text}</span> 
                <button className={s.delete}  onClick={DeleteClickButton}>X</button>
                </div>
        }
        
    })
    let textareaRef=React.createRef()
    let ChangeTexarea = (event)=>{
        event.preventDefault();
        props.dispatch(addInputActionCreater(textareaRef.current.value))
    }
    let ButtonClick = ()=>{
        props.dispatch(addNoteActionCreater())
    }
    return (
        <div className={s.container}>
            <header>Напишите заметку</header>
            <textarea ref={textareaRef} onInput={ChangeTexarea} value={props.state.Notes.ValueTexaria} placeholder='Введите заметку'></textarea>
            <div className={s.Notes}>{NotesRender}</div>
            <div className={s.divAddNote}><button className={s.addNote} onClick={ButtonClick}>Добавить заметку</button></div>
        </div>
    )
}
