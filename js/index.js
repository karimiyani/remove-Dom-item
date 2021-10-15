const pTags = document.querySelectorAll("p");
pTags.forEach((item) => {
    if (item.textContent.includes("js")){
        item.remove();
    }
});

/* <p>Is JavaScript the same as Js?</p>
<p>React Native</p>
<p>git-gitLab</p>
<p>How do you program Javascript (Js)?</p> */

// question??
// why the first and last doesnt remove??
pTags.forEach((item) => {
    if (item.textContent.toLocaleLowerCase().includes("js")){
        item.remove();
    }
});
{/* <p>React Native</p>
<p>git-gitLab</p> */}