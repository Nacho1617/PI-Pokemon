export default function validate(value, repeat) {
    let errors = {}
    if(value.name){
        if(!/^[a-zA-Z]+(([a-zA-Z ])?[a-zA-Z]*)*$/.test(value.name)){
            errors.name = 'Name cannot contain numbers or special characters.'
        }
        else errors.name = ""
    }
    else errors.name = 'Name is required.'

    if(parseInt(value.health)){
        if(parseInt(value.health) <= 0){
            errors.health= 'Health cannot be negative or zero.'
        }
        else errors.health = ""
    }
    else errors.health = 'Health is required.'

    if(parseInt(value.attack)){
        if(parseInt(value.attack) <= 0){
            errors.attack= 'Attack cannot be negative or zero.'
        }
        else errors.attack = ''
    }
    else errors.attack = 'Attack is required.'

    if(parseInt(value.defense)){
        if(parseInt(value.defense) <= 0){
            errors.defense= 'Defense cannot be negative or zero.'
        }
        else errors.defense = ''
    }
    else errors.defense = 'Defense is required.'

    if(parseInt(value.speed)){
        if(parseInt(value.speed) <= 0){
            errors.speed= 'Speed cannot be negative or zero.'
        }
        else errors.speed = ""
    }
    else errors.speed = 'Speed is required.'

    if(parseInt(value.weight)){
        if(parseInt(value.weight) <= 0){
            errors.weight= 'Weight cannot be negative or zero.'
        }
        else errors.weight = ""
    }
    else errors.weight = 'Weight is required.'

    if(parseInt(value.height)){
        if(parseInt(value.height) <= 0){
            errors.height= 'Height cannot be negative or zero.'
        }
        else errors.height = ""
    }
    else errors.height = 'Height is required.'

    if(/^(ftp|http|https):\/\/[^ "]+$/.test(value.image)){
        errors.image = '';
    }
    else errors.image = 'Must have a valid link image.'

    if (value.types.length > 0) {
        if (value.types.length > 3) {
            errors.types = "You only can choose three types"
        }
        else errors.types = ""
    }
    else errors.types = "You have to choose at least one type"


    return errors;
}

