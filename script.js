async function getMenu() {
    try {
        const response = await fetch("http://94.46.140.3:8080/teknikumMenu/api/menu")
        const data = await response.json();

        const menus = data.meals;
        let alt_dish = (menus.map(menu => menu.dish));
        let dish = (menus.map(menu => menu.alt_dish));
        for (let i = 0; i <= 4; i++) {
            document.getElementById("dish" + i).innerHTML = dish[i];
            document.getElementById("alt_dish" + i).innerHTML = alt_dish[i];
        }
    } catch (error) {
        console.log("In catch ", error);
    }

    return "menu downloaded successfully!";
}

getMenu().then(status => { console.log(status)});

console.log("Efter anrop till getMenu");