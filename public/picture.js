

let source = document.getElementsByTagName("img");

let select = document.getElementsByClassName('selected');



document.addEventListener('click', function(e) {
    e = e || window.event;
    let target = e.target || e.srcElement,
        text = target.textContent || target.innerText;
        // let sourceString = this.source.getAttribute("src");

        console.log(select, source);

      // source.classList.toggle(".selected");

        // console.log(this.classList.contains('selected');
        // if (this.classList.contains('selected')) {
        //     select.classList.remove('selected');
        //   } else {
        //     this.classList.add(select);
        //   }
        // select.classList.remove("selected")
        // this.classList.add(select)
        console.log(target);
        return target;
}, false);
