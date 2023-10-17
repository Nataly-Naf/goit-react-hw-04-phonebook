import { FilterInput } from "./FilterForm.styled"


export const FilterForm = ({ onChange, filter, onChangeFilter }) => {
    return (
        <div>
            <p>Find contact by name</p>
            <FilterInput onChange={evt=>{onChangeFilter(evt.target.value)}} type="text" placeholder="Find by name" value={ filter} />
        </div>
    )
}