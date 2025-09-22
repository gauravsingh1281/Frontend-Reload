
const item = document.getElementById("menu");

item.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        console.log(`clicked ${e.target.textContent}`)
    }
})






























// document.addEventListener("click", (e) => {
//     console.log("Document capturing");
// }, { capture: true });

// grandParent.addEventListener("click", (e) => {
//     console.log("GrandParent capturing");
// }, { capture: true });

// parent.addEventListener("click", (e) => {
//     console.log("Parent capturing");
// }, { capture: true });

// child.addEventListener("click", (e) => {
//     console.log("Child capturing");
// }, { capture: true });
// document.addEventListener("click", (e) => {
//     console.log("Document bubbling");
// }, { capture: false });

// grandParent.addEventListener("click", (e) => {
//     console.log("GrandParent bubbling");
// }, { capture: false });

// parent.addEventListener("click", (e) => {
//     console.log("Parent bubbling");
// }, { capture: false });

// child.addEventListener("click", (e) => {
//     console.log("Child bubbling");
// }, { capture: false });
