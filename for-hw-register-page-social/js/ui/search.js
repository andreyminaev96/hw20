class SearchUI {

    constructor() {
        this._searchWraper = document.querySelector(".search-result");
    }

    addSerch(info) {
        const template = SearchUI._searchTemplate(info);
        this._searchWraper.insertAdjacentHTML("afterbegin", template);
    }
    clearContainer() {
        this._searchWraper.innerHTML = "";
    }
    static _searchTemplate({avatar, city, full_name}){
        return `
        <div class="owner-info d-flex align-items-center">
            <div class="owner-avatar">
                <img src="${avatar}" alt="">
            </div>
            <!-- /.owner-avatar -->
            <div class="d-flex flex-column">
                <span class="font-weight-bold">${full_name}</span>
                <span>${city}</span>
            </div>
        </div>
        `;
    };
}