const buildCount = (i) =>{
    let count = i;
    const displayCount = () =>{
        console.log(count++);
    };
    return displayCount;
}
const countOne = buildCount(1);
countOne();
countOne();
countOne();

const countTwo = buildCount(10);
countTwo();
countTwo();
countTwo();