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
        // else if(parseInt(value.minWeight) > 150 || parseInt(value.maxWeight) > 150){
        //     errors.height= 'weight cannot be greater than 150'
        // }
        else errors.health = ""
    }
    else errors.health = 'Health is required.'

    if(parseInt(value.attack)){
        if(parseInt(value.attack) <= 0){
            errors.attack= 'Attack cannot be negative or zero.'
        }
        // else if(parseInt(value.minWeight) > 150 || parseInt(value.maxWeight) > 150){
        //     errors.height= 'weight cannot be greater than 150'
        // }
        else errors.attack = ''
    }
    else errors.attack = 'Attack is required.'

    if(parseInt(value.defense)){
        if(parseInt(value.defense) <= 0){
            errors.defense= 'Defense cannot be negative or zero.'
        }
        // else if(parseInt(value.minWeight) > 150 || parseInt(value.maxWeight) > 150){
        //     errors.height= 'weight cannot be greater than 150'
        // }
        else errors.defense = ''
    }
    else errors.defense = 'Defense is required.'

    if(parseInt(value.speed)){
        if(parseInt(value.speed) <= 0){
            errors.speed= 'Speed cannot be negative or zero.'
        }
        // else if(parseInt(value.minWeight) > 150 || parseInt(value.maxWeight) > 150){
        //     errors.height= 'weight cannot be greater than 150'
        // }
        else errors.speed = ""
    }
    else errors.speed = 'Speed is required.'

    if(parseInt(value.weight)){
        if(parseInt(value.weight) <= 0){
            errors.weight= 'Weight cannot be negative or zero.'
        }
        // else if(parseInt(value.minWeight) > 150 || parseInt(value.maxWeight) > 150){
        //     errors.height= 'weight cannot be greater than 150'
        // }
        else errors.weight = ""
    }
    else errors.weight = 'Weight is required.'

    if(parseInt(value.height)){
        if(parseInt(value.height) <= 0){
            errors.height= 'Height cannot be negative or zero.'
        }
        // else if(parseInt(value.minWeight) > 150 || parseInt(value.maxWeight) > 150){
        //     errors.height= 'weight cannot be greater than 150'
        // }
        else errors.height = ""
    }
    else errors.height = 'Height is required.'

    // if(/^(ftp|http|https):\/\/[^ "]+$/.test(value.img)){
    //     errors.img = '';
    // }else errors.img = 'Must have a valid link image.'

    return errors;
}

