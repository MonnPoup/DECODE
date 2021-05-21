export default function(palette = "", action){
    if(action.type === 'addPalette'){
        console.log('reducer',action.palette)
        var addPaletteCopy = action.palette
        return addPaletteCopy
    } 
     else {
        return palette
    }
}