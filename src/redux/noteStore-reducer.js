
let initiallState = {
 NoteChilde:[
 ],
 ValueTexaria:''
}
export let addInputActionCreater = (text)=>{
    return ({type:'ON-INPUT',text:text});
}
export let addNoteActionCreater = ()=>{
    return ({type:'ADD-NOTE'})
}
export let DeleteNoteActionCreater = (id)=>{
    return ({type:'DELETE-NOTE',action:id})
}
export const noteStorereducer = (state=initiallState,action)=>{
    switch (action.type) {
        case 'ON-INPUT':
            initiallState.ValueTexaria = action.text;
            break;
        case 'ADD-NOTE':
            let arrNote={
                text:initiallState.ValueTexaria
            }
            initiallState.NoteChilde.push(arrNote);
            initiallState.ValueTexaria=''
            break;
        case 'DELETE-NOTE':
            initiallState.NoteChilde.splice(action.action,1);
            break;    
            default:
                return state
    }

    return state;
}