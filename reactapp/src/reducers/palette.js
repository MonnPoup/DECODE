export default function(palette = "", action){
    if(action.type === 'addPalette'){
        console.log('palette ajoutée')
        var addPaletteCopy = action.palette
        return addPaletteCopy
    } 
     else {
        return palette
    }
}