import { getColors, setColor } from "./database.js"

const colors = getColors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "color") {
            setColor(parseInt(event.target.value))
        }
    }
)

export const Colors = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    const listItems = colors.map(
        (color) => {
        return `<li>
            <input type="radio" name="color" value="${color.id}" /> ${color.color}
            </li>`
        }
    )
    
    html += listItems.join("")
    html += "</ul>"
    return html
}