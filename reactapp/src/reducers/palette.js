export default function(palette = [], action){
    if(action.type == 'addPalette'){
        var addPaletteCopy = [...palette]
        addPaletteCopy.push(action.palette)
        return addPaletteCopy
    } 
     else {
        return palette
    }
}