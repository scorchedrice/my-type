const studyMembers = ['김종현', '김희영', '신혜민', '조민우', '최인애', '한지웅'];
const topics = ['a', 'b', 'c', 'd', 'e', 'f'];

// a, b, c, d, e, f

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

const shuffledMembers = shuffle(studyMembers);
console.log('-----------')
for (let i = 0; i < 6; i++) {
    console.log(`${topics[i]}: ${shuffledMembers[i]}`);
}
console.log('-----------')