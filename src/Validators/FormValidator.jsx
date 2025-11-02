export default function FormValidator(e) {
    let {name,value} = e.target
    switch(name){
        case "name":
            if(!value || value.length === 0)
                return name + "Field is Mandatory"
            else if(value.length<3 || value.length > 30)
                return name + "Field must be 3-30 characters"
            else
                return ""
            
        case "icon":
        case "shortDescription":
            if(!value || value.length === 0)
                return "Field is Mandatory"
            else 
                return ""
        default:
            return ""
    }
}
