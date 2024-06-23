import require from "node:stream";

export const formatter = new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP"
});



export default function getImageUrl(image) {

    return require(`../assets/images/${image}`)

}
