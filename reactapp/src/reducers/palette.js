export default function(palette = null, action){
    if(action.type === 'addPalette'){
        console.log('reducer',action.palette)
        var addPaletteCopy = action.palette
        return addPaletteCopy
    } 
     else {
        return palette
    }
}