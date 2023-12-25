import "./searchBar.scss"
import Icon, {AppIcons} from "../icon/Icon.tsx";

const SearchBar = () => {
    return (
        <div className={"search-bar-container"}>
            <Icon icon={AppIcons.search} size={25}/>
            <input placeholder={"Поиск решений. Например: Переговорные"}/>
        </div>
    )
}

export default SearchBar