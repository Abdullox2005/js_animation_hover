function Random(event){
    let a = Math.floor(Math.random() * 50);
    let b = Math.floor(Math.random() * 50);
    let c = Math.floor(Math.random() * 80);
    let d = Math.floor(Math.random() * 80);

    event.target.style=`margin:${a}% ${b}% ${c}% ${d}%`;
}
