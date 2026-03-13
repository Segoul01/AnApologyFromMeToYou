var h1Headings = [
    "use your tablet",
    "um",
    "hey...",
    "I'd appreciate it if you could read this till the end",
    "I know you're already getting sick of all my msgs",
    "and my sorry's don't mean much to you at this point",
    "but I just wanted to say that",
    "I'm genuinely sorry for everything",
    "for being a jerk to you",
    "for hurting you this badly",
    "for breaking your trust",
    "and so...",
    "as an apology",
    "and in hopes of getting closer again",
    "I won't message you for a week",
    "I know I don't deserve you",
    "but I can't seem to accept seeing us getting further apart.",
    "In the meanwhile",
    "I'll learn sign language, so we can talk in the library ಥ_ಥ",
    "That's all",
    "Love ya"
]


var index = -1;


document.body.onclick = onNextPressed;


// Source - https://stackoverflow.com/a/45036752
// Posted by user, modified by community. See post 'Timeline' for change history
// Retrieved 2026-02-09, License - CC BY-SA 4.0

function reset_animation() {
    var el = document.querySelectorAll('#animated');
    for (var i = 0; i < el.length; i++) {
      el[i].style.animation = 'none';
      el[i].offsetHeight; /* trigger reflow */
      el[i].style.animation = null;
    }
}


function onNextPressed() {
    index++;
    if (index >= h1Headings.length) {
        return;
    }
    var heading = document.querySelector("h1");
    heading.textContent = h1Headings[index];
    reset_animation();
}