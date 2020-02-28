import Work from "./Work";

class Volunteer extends Work {
    icon = "fa-handshake-o";
    title = "Volunteering";
    prefix = "Vol";

    itemMethod(item, key){
        item.company = item.organization
        return(
            super.itemMethod(item, key)
        )
    }
}

export default Volunteer;