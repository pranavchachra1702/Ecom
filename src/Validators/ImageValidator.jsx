export default function ImageValidator(e) {
    let pics = e.target.files
    if (!pics)
        return "Pic Field is Mandatory"

    if (pics.length === 1) {
        let pic = pics[0]
        if (!(pic.type === "image/jpeg" || pic.type === "image/jpg" || pic.type === "image/png" || pic.type === "image/svg" || pic.type === "image/gif"))
            return "Invalid Pic Format, Please Upload an Image of .jpeg, .jpg, .png, .gif, .svg format only"

        else if (pic.size > 1048576)
            return "Invalid Pic Size, Please Upload an Image of upto 1 MB"

        else
            return ""
    }
    else {
        return ""
    }
}