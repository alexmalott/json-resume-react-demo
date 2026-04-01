import Work from "./Work";

class Volunteer extends Work {
    icon = "fa-solid fa-handshake";
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
