let count = 0;
if (documeny.cookie === "")
    document.cookie = "count=0";
else
    count = +document.cookie.split("=")[1];

const r = router({
    "/": () => div(
        h1("Welcome to my website!"),
        div(a("About me").att$("href", "#/about")),
        div(a("My projects").att$("href", "#/projects")),
        br(),
        div("Counter: " + count),
        button("Click me to increase the counter").onclick$(function () {
            count += 1;
            document.cookie = "count=" + count;
            r.refresh();
        })
    ),
    "/about": () => div(
        h1("About me"),
        p("I am a programmer living in the United States, you can contact me on discord (jankoy) or email me at jankoypublic@gmail.com"),
        div(a("Home").att$("href", "#"))
    ),
    "/projects": () => div(
        h1("My projects"),
        p("I have a ", a("github").att$("href", "https://www.github.com/jankoy/"), " where I keep all of my projects. I also plan on hosting some here on this website in the future."),
        div(a("Home").att$("href", "#"))
    )
});

content.appendChild(r);
