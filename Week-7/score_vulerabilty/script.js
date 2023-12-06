
function updateScore() {
    const property = {};

    document.querySelectorAll('input[type="radio"]').forEach(input => {
        property[input.name] = input.checked ? 1 : (property[input.name] !== 1 ? 0 : undefined);
    });

    document.getElementById("warning").classList = "none";
    const arrOfValues = [...document.querySelectorAll('input[type="radio"]:checked')];

    let score = 0;

    let score_exploitability = 1.1;
    let score_base = 3.326258289;
    let score_status = 0;

    const base_conf = [
        [0.00, 0.22, 0.56],
        [0.00, 0.65, 0.75],
        [0.00, 0.85, 0.95]
    ];

    for (const [i, row] of base_conf.entries()) {
        for (const value of row.slice(1)) {
            console.log(value);
        }
    }

    score_exploitability *= (arrOfValues[0].id === "AV_N" ? 0.85 : arrOfValues[0].id === "AV_A" ? 0.62 : arrOfValues[0].id === "AV_L" ? 0.55 : 0.20);
    score_exploitability *= (arrOfValues[1].id === "AC_L" ? 0.77 : arrOfValues[1].id === "AC_H" ? 0.44 : 1);
    score_exploitability *= (arrOfValues[2].id === "PR_N" ? 0.85 : arrOfValues[2].id === "PR_L" ? 0.62 : arrOfValues[2].id === "PR_H" ? 0.27 : 1);

    score_exploitability *= (arrOfValues[3].id === "UI_N" ? 0.85 : arrOfValues[3].id === "UI_R" ? 0.62 : 1);
    score_status = (arrOfValues[4].id === "scope_U" ? 1.0 : arrOfValues[4].id === "scope_C" ? 1.08 : 0);


    score = (score_status) * ((score_base) + (score_exploitability));

    score = Math.max(0, Math.min(10, score));
    document.getElementById("score").innerHTML = score.toFixed(1);
    console.log(property);
}

document.querySelectorAll('input[type="radio"]').forEach(input => {
    input.addEventListener('click', updateScore);
});

