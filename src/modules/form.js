const form = ()=>{
    return `
    <div class = "form-group">
        <input class="form-control city" list="places" placeholder="Choose location...">
    </div>
    <div class = "form-group">
        <datalist id="places">
        </datalist>
    </div>
    <div class = "form-group">
        <button type="button" class="btn btn-dark load-button">Show forecast</button>
    </div>
    `
}
export default form