export default function(palette = [], action){
    if(action.type == 'addPalette'){
        var addPaletteCopy = [...palette]
        return addPaletteCopy
    } 
     else {
        return palette
    }
}