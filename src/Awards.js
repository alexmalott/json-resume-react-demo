import Publications from "./Publications";

class Awards extends Publications {
    icon = "fa-trophy";
    title = "Awards";
    prefix = "Awd";

    itemMethod(item, key){
        item.publisher = item.awarder;
        item.name = item.title;
        item.releaseDate = item.date;
        return(
            super.itemMethod(item, key)
        )
    }
}

export default Awards;