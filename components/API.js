

export async function listAction({ category }) {
    const url = "http://127.0.0.1:8000/budget/actions/?category=" + category

    try {
        const response = await fetch(url, { method: "GET" })
        return await response.json()
    } catch (err) {
        return console.log(err)
    }

}


export async function listJournal({ category }) {
    const url = "http://127.0.0.1:8000/budget/journals/?category=" + category
    try {
        const response = await fetch(url, { method: "GET" })
        return await response.json()
    } catch (err) {
        return console.log(err)
    }
}


export function createAction(data) {
    const url = "http://127.0.0.1:8000/budget/actions/"
    try {
        fetch(url, {
            method: "POST",
            body: data

        })
            .then((response) => {
                if (response.ok)
                    alert("Activité créée !")
                else
                    alert("Erreur")
            })
    } catch (err) {
        return console.log(err)
    }
}


export function createJournal(data) {
    const url = "http://127.0.0.1:8000/budget/journals/"
    try {
        fetch(url, {
            method: "POST",
            body: data

        })
            .then((response) => {
                if (response.ok)
                    alert("Journal ajouté !")
                else
                    alert("Erreur")
            })
    } catch (err) {
        return console.log(err)
    }
}


export function updateJournal(data, target) {
    const url = "http://127.0.0.1:8000/budget/journals/" + target + "/"
    try {
        fetch(url, {
            method: "PUT",
            body: data

        })
            .then((response) => {
                if (response.ok)
                    alert("Journal modifié !")
                else
                    alert("Erreur")
            })
    } catch (err) {
        return console.log(err)
    }

}
// Mila andramana via JournalUpdate
export function updateAction(data, target) {
    const url = "http://127.0.0.1:8000/budget/actions/" + target + "/"
    try {
        fetch(url, {
            method: "PUT",
            body: data

        })
            .then((response) => {
                if (response.ok)
                    alert("Activité modifiée !")
                else
                    alert("Erreur")
            })
    } catch (err) {
        return console.log(err)
    }

}



export function deleteJournal(target) {
    const url = "http://127.0.0.1:8000/budget/journals/" + target + "/"
    try {
        fetch(url, {
            method: "DELETE",

        })
            .then((response) => {
                if (response.ok)
                    alert("Journal supprimé ! ")
                else
                    alert("Erreur")
            })
    } catch (err) {
        return console.log(err)
    }
}

export function deleteAction(target) {
    const url = "http://127.0.0.1:8000/budget/actions/" + target + "/"
    try {
        fetch(url, {
            method: "DELETE",

        })
            .then((response) => {
                if (response.ok)
                    alert("Activité supprimée !")
                else
                    alert("Erreur ")
            })
    } catch (err) {
        return console.log(err)
    }
}

export async function searchAction(action){
    // Systeme de navigation rapide
    // window.location.href = "http://127.0.0.1:8000/budget/actions/?name=&category=&journals__date=&journals__cost=&action_name="+`${action}`+"&max_cost=&min_cost=&max_date=&min_date="
    const url = `http://127.0.0.1:8000/budget/actions/?name=${action.name}&category=${action.category}&max_cost=${action.maxCost}&min_cost=${action.minCost}&max_date=${action.maxDate}&min_date=${action.minDate}`


    try {
        const response = await fetch(url, { method: "GET" })
        return await response.json()
    } catch (err) {
        return console.log(err)
    }
}
