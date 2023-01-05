function add_user() {
    user_name = document.getElementById("user_name").value
    localStorage.setItem("Name", user_name)

    window.location = "Kwitter_room.html"

}