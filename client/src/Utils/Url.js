


export const ImageUrl = 'https://lattspis.online/SizingImage'




export let TheSlice = (name ,max = 10) =>{

    if(name.length > Number(max)){

        return name.slice(0,max) + '...'
    }else{
        return name
    }
 }