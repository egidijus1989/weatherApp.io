const form = ()=>{
    return `
            <input class="form-control city" list="places" placeholder="Choose location...">
            <datalist id="places">

            </datalist>
            <button type="button" class="btn btn-dark load-button">Show forecast</button>
    `
}
export default form