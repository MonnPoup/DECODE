export default function(palette = '', action){
    if(action.type === 'addPalette'){
        var addPaletteCopy = action.palette
        return addPaletteCopy
    } 
     else {
        return palette
    }
}