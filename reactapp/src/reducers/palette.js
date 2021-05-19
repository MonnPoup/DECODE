export default function(palette = [], action) 
{   console.log('reducer', action.palette)
    if(action.type === 'addPalette'){
        var addPaletteCopy = [...palette]
        addPaletteCopy.push(action.palette)
        return addPaletteCopy
    } 
     else {
        return palette
    }
}