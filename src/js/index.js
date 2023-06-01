function search() {
    let { value } = document.getElementById("searchInput")
    // console.log(value)

    const baseUrl = "https://google.com/search?q="
    if (!value) value = "Minangkara Cinandi Rengga"
    location.replace(baseUrl+value)
}